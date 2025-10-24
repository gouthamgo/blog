import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DevMind</h3>
            <p className="footer-description">
              Where developer insights meet artificial intelligence. Exploring AI, ML, and modern development practices.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@devmindai.com" className="footer-social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Navigation</h4>
            <nav className="footer-nav">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/" className="footer-link">Blog</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Topics</h4>
            <nav className="footer-nav">
              <Link href="/topics/programming" className="footer-link">Programming</Link>
              <Link href="/topics/ai" className="footer-link">AI & ML</Link>
              <Link href="/topics/web-development" className="footer-link">Web Development</Link>
              <Link href="/topics/data-science" className="footer-link">Data Science</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Legal</h4>
            <nav className="footer-nav">
              <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms-of-service" className="footer-link">Terms of Service</Link>
              <Link href="/feed.xml" className="footer-link">RSS Feed</Link>
              <Link href="/sitemap.xml" className="footer-link">Sitemap</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} DevMind. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="footer-tech-link">Next.js</Link> and ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}