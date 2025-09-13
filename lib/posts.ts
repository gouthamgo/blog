import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostMetadata } from './types'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readTime = readingTime(content)

  return {
    slug: realSlug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || '',
    image: data.image || '',
    tags: data.tags || [],
    readTime: readTime.text,
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, '')))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getPostMetadata(slug: string): PostMetadata | null {
  const post = getPostBySlug(slug)
  if (!post) return null

  return {
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    image: post.image,
    tags: post.tags,
  }
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const allPosts = getAllPosts()
  const currentTags = currentPost.tags || []

  if (currentTags.length === 0) {
    return allPosts
      .filter(post => post.slug !== currentPost.slug)
      .slice(0, limit)
  }

  // Score posts based on shared tags
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      const postTags = post.tags || []
      const sharedTags = postTags.filter(tag => currentTags.includes(tag))
      return {
        ...post,
        score: sharedTags.length
      }
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  // If we don't have enough related posts, fill with recent posts
  if (scoredPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post =>
        post.slug !== currentPost.slug &&
        !scoredPosts.find(scored => scored.slug === post.slug)
      )
      .slice(0, limit - scoredPosts.length)

    return [...scoredPosts, ...recentPosts]
  }

  return scoredPosts
}

export function getPostNavigation(currentSlug: string): {
  previousPost: Post | null,
  nextPost: Post | null
} {
  const allPosts = getAllPosts() // Already sorted by date (newest first)
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug)

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null }
  }

  return {
    previousPost: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    nextPost: currentIndex > 0 ? allPosts[currentIndex - 1] : null
  }
}