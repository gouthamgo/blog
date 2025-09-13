import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/types'

interface RelatedPostsProps {
  posts: Post[]
  currentPostSlug: string
}

export function RelatedPosts({ posts, currentPostSlug }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="related-posts">
      <h2 className="related-posts-title">Related Posts</h2>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <article key={post.slug} className="related-post-card">
            {post.image && (
              <Link href={`/${post.slug}`} className="related-post-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={160}
                  className="related-post-img"
                />
              </Link>
            )}
            <div className="related-post-content">
              <Link href={`/${post.slug}`} className="related-post-title">
                {post.title}
              </Link>
              <p className="related-post-description">
                {post.description}
              </p>
              <div className="related-post-meta">
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}