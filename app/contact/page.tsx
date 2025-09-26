'use client'

import { useState } from 'react'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />

      <div className="py-12">
        <LayoutWithSidebar>
          <article className="medium-article">
            <header className="contact-header">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-subtitle">
                Have a question, suggestion, or just want to connect? I&apos;d love to hear from you.
              </p>
            </header>

            <div className="contact-content">
              <section className="contact-intro">
                <p>
                  Whether you&apos;re looking to discuss a technical challenge, share feedback about a post,
                  explore collaboration opportunities, or simply connect with a fellow developer, I&apos;m always
                  excited to engage with the community.
                </p>
                <p>
                  Feel free to reach out using the form below, or connect with me directly through social media.
                  I typically respond within 24-48 hours, and I read every message personally.
                </p>
              </section>

              <div className="contact-grid">
                <div className="contact-form-section">
                  <h2>Send a Message</h2>

                  {isSubmitted && (
                    <div className="contact-success">
                      <p>Thanks for your message! I&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Question</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="form-input form-textarea"
                        required
                        disabled={isSubmitting}
                        placeholder="Tell me more about what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="contact-info-section">
                  <h2>Other Ways to Connect</h2>

                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3>Email</h3>
                        <p>hello@mytechblog.com</p>
                        <p className="contact-method-note">Best for detailed discussions</p>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <Twitter size={20} />
                      </div>
                      <div>
                        <h3>Twitter</h3>
                        <p>@techblogger</p>
                        <p className="contact-method-note">Quick questions and updates</p>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <Github size={20} />
                      </div>
                      <div>
                        <h3>GitHub</h3>
                        <p>github.com/techblogger</p>
                        <p className="contact-method-note">Code discussions and issues</p>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <Linkedin size={20} />
                      </div>
                      <div>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/techblogger</p>
                        <p className="contact-method-note">Professional connections</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-response-time">
                    <h3>Response Time</h3>
                    <p>I typically respond to messages within 24-48 hours. For urgent matters, Twitter DMs usually get the fastest response.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </LayoutWithSidebar>
      </div>
    </div>
  )
}