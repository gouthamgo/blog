'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="mobile-menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)} />}

      <nav className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-brand-logo" onClick={handleLinkClick}>
            My Tech Blog
          </Link>
          <button
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-menu-items">
            <Link href="/" className="mobile-menu-item" onClick={handleLinkClick}>
              HOME
            </Link>
            <Link href="/blog" className="mobile-menu-item" onClick={handleLinkClick}>
              BLOG
            </Link>
            <Link href="/about" className="mobile-menu-item" onClick={handleLinkClick}>
              ABOUT
            </Link>
            <button className="mobile-menu-search">
              <Search size={18} />
              <span>SEARCH</span>
              <kbd className="mobile-search-shortcut">⌘K</kbd>
            </button>
          </div>

          <div className="mobile-menu-footer">
            <div className="mobile-theme-toggle">
              <span>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}