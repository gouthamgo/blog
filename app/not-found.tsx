import Link from 'next/link'
import { Header } from '@/components/ui/header'
import { BackToTop } from '@/components/ui/back-to-top'
import { Search, Home, BookOpen, User } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />

      <div className="py-12">
        <div className="max-width-container">
          <div className="not-found-content">
            <div className="not-found-header">
              <div className="not-found-icon">404</div>
              <h1 className="not-found-title">Page Not Found</h1>
              <p className="not-found-description">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved,
                deleted, or you may have entered the wrong URL.
              </p>
            </div>

            <div className="not-found-actions">
              <Link href="/" className="not-found-button primary">
                <Home size={20} />
                <span>Go Home</span>
              </Link>
              <Link href="/blog" className="not-found-button secondary">
                <BookOpen size={20} />
                <span>Browse Blog</span>
              </Link>
            </div>

            <div className="not-found-suggestions">
              <h2>What you can do:</h2>
              <div className="suggestions-grid">
                <div className="suggestion-card">
                  <div className="suggestion-icon">
                    <Search size={24} />
                  </div>
                  <h3>Search the Site</h3>
                  <p>Use the search functionality to find specific topics or posts.</p>
                </div>

                <div className="suggestion-card">
                  <div className="suggestion-icon">
                    <BookOpen size={24} />
                  </div>
                  <h3>Browse All Posts</h3>
                  <p>Check out all our blog posts and find something interesting to read.</p>
                </div>

                <div className="suggestion-card">
                  <div className="suggestion-icon">
                    <User size={24} />
                  </div>
                  <h3>Contact Us</h3>
                  <p>If you believe this is an error, feel free to reach out and let us know.</p>
                </div>
              </div>
            </div>

            <div className="not-found-popular">
              <h2>Popular Topics</h2>
              <div className="popular-topics">
                <Link href="/topics/programming" className="topic-link">Programming</Link>
                <Link href="/topics/ai" className="topic-link">Artificial Intelligence</Link>
                <Link href="/topics/web-development" className="topic-link">Web Development</Link>
                <Link href="/topics/data-science" className="topic-link">Data Science</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}