import Link from 'next/link'
import { Search, Code2 } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <header className="professional-header">
      <nav className="professional-nav">
        <div className="nav-brand">
          <Link href="/" className="brand-logo">
            <Code2 className="logo-icon" size={24} />
            <span className="logo-text">
              <span className="logo-name">DevMind</span>
            </span>
          </Link>
        </div>

        <div className="nav-items desktop-only">
          <Link href="/" className="nav-item">
            HOME
          </Link>
          <span className="nav-separator">•</span>
          <Link href="/" className="nav-item">
            BLOG
          </Link>
          <span className="nav-separator">•</span>
          <Link href="/about" className="nav-item">
            ABOUT
          </Link>
          <span className="nav-separator">•</span>
          <button className="nav-search">
            <Search size={16} />
            <span className="search-text">SEARCH</span>
            <kbd className="search-shortcut">⌘K</kbd>
          </button>
        </div>

        <div className="nav-actions">
          <div className="desktop-only">
            <ThemeToggle />
          </div>
          <div className="mobile-only">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}