import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="medium-post-card">
      <div className="post-card-content">
        <Link href={`/${post.slug}`} className="medium-post-title">
          {post.title}
        </Link>

        <p className="medium-post-subtitle">
          {post.description}
        </p>

        <div className="medium-post-meta">
          <span className="post-author">{post.author}</span>
          <span>·</span>
          <time dateTime={post.date} className="post-date">{formatDate(post.date)}</time>
          <span>·</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags-container">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="premium-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}