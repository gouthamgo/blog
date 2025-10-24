import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/posts'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [] })
  }

  const allPosts = getAllPosts()
  const searchTerm = query.toLowerCase().trim()

  // Search in title, description, tags, and content
  const results = allPosts
    .map((post) => {
      let score = 0

      // Title match (highest priority)
      if (post.title.toLowerCase().includes(searchTerm)) {
        score += 10
      }

      // Description match
      if (post.description.toLowerCase().includes(searchTerm)) {
        score += 5
      }

      // Tags match
      if (post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) {
        score += 3
      }

      // Content match
      if (post.content.toLowerCase().includes(searchTerm)) {
        score += 1
      }

      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        tags: post.tags || [],
        score,
      }
    })
    .filter((post) => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Limit to top 10 results
    .map(({ slug, title, description, tags }) => ({
      slug,
      title,
      description,
      tags,
    }))

  return NextResponse.json({ results })
}
