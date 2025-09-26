'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  if (isSubscribed) {
    return (
      <div className="newsletter-signup success">
        <div className="newsletter-content">
          <CheckCircle size={24} className="newsletter-icon success" />
          <h3 className="newsletter-title">Thanks for subscribing!</h3>
          <p className="newsletter-description">
            You&apos;ll receive updates about new posts and tech insights.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-content">
        <Mail size={24} className="newsletter-icon" />
        <h3 className="newsletter-title">Stay Updated</h3>
        <p className="newsletter-description">
          Get notified about new posts, tech insights, and exclusive content. No spam, unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="newsletter-input"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className="newsletter-button"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}