'use client'

import { useState } from 'react'
import { Share2, Twitter, Linkedin, Copy, CheckCircle } from 'lucide-react'

interface SocialShareProps {
  title: string
  url: string
  description: string
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${description}`)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="social-share">
      <div className="share-header">
        <Share2 size={18} />
        <span>Share this post</span>
      </div>
      <div className="share-buttons">
        <a
          href={shareData.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button twitter"
          aria-label="Share on Twitter"
        >
          <Twitter size={16} />
          <span>Twitter</span>
        </a>
        <a
          href={shareData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button linkedin"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
        <a
          href={shareData.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button reddit"
          aria-label="Share on Reddit"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.85 12.97c0 .98-.8 1.78-1.78 1.78-.47 0-.9-.19-1.21-.5-1.19.78-2.83 1.28-4.64 1.33l.88-4.05 2.86.61c0 .68.56 1.24 1.24 1.24.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25c-.51 0-.95.3-1.14.74l-3.2-.69c-.1-.02-.2 0-.28.06-.08.06-.13.15-.15.24l-.97 4.46c-1.87-.05-3.58-.55-4.81-1.36-.31.31-.74.5-1.21.5-.98 0-1.78-.8-1.78-1.78 0-.75.46-1.39 1.11-1.66-.03-.17-.05-.35-.05-.53 0-2.7 3.14-4.89 7.01-4.89s7.01 2.19 7.01 4.89c0 .18-.02.36-.05.53.65.27 1.11.91 1.11 1.66z"/>
          </svg>
          <span>Reddit</span>
        </a>
        <button
          onClick={copyToClipboard}
          className="share-button copy"
          aria-label="Copy link"
        >
          {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
}