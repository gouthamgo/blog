import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Post } from '@/lib/types'

interface PostNavigationProps {
  previousPost?: Post | null
  nextPost?: Post | null
}

export function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  if (!previousPost && !nextPost) {
    return null
  }

  return (
    <nav className="post-navigation" aria-label="Post navigation">
      <div className="post-nav-container">
        {previousPost ? (
          <Link href={`/${previousPost.slug}`} className="post-nav-link prev">
            <div className="post-nav-icon">
              <ChevronLeft size={20} />
            </div>
            <div className="post-nav-content">
              <span className="post-nav-label">Previous Post</span>
              <h3 className="post-nav-title">{previousPost.title}</h3>
            </div>
          </Link>
        ) : (
          <div className="post-nav-placeholder"></div>
        )}

        {nextPost ? (
          <Link href={`/${nextPost.slug}`} className="post-nav-link next">
            <div className="post-nav-content">
              <span className="post-nav-label">Next Post</span>
              <h3 className="post-nav-title">{nextPost.title}</h3>
            </div>
            <div className="post-nav-icon">
              <ChevronRight size={20} />
            </div>
          </Link>
        ) : (
          <div className="post-nav-placeholder"></div>
        )}
      </div>
    </nav>
  )
}