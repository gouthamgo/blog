import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'

export const metadata: Metadata = {
  title: 'About | My Tech Blog',
  description: 'Learn about My Tech Blog and the passionate developer behind it. Discover the mission, values, and journey of continuous learning in technology.',
  keywords: ['about', 'developer', 'tech blogger', 'programming', 'web development'],
  openGraph: {
    title: 'About | My Tech Blog',
    description: 'Learn about My Tech Blog and the passionate developer behind it.',
    type: 'website',
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 800,
        height: 400,
        alt: 'About My Tech Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | My Tech Blog',
    description: 'Learn about My Tech Blog and the passionate developer behind it.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />

      <div className="py-12">
        <LayoutWithSidebar>
          <article className="medium-article">
            <header className="about-header">
              <h1 className="about-title">About My Tech Blog</h1>
              <p className="about-subtitle">
                Exploring the frontier of technology, one post at a time.
              </p>
            </header>

            <div className="about-content">
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <span>Professional Headshot</span>
                </div>
              </div>

              <section className="about-section">
                <h2>About the Blog</h2>
                <p>
                  Welcome to My Tech Blog, a digital space dedicated to exploring the ever-evolving world of technology.
                  Here, we dive deep into web development, programming paradigms, artificial intelligence, and the latest
                  innovations shaping our digital future.
                </p>
                <p>
                  This blog serves as both a learning journal and a knowledge-sharing platform, where complex technical
                  concepts are broken down into digestible insights. Whether you're a seasoned developer, a curious beginner,
                  or someone passionate about technology, you'll find content that challenges, educates, and inspires.
                </p>
              </section>

              <section className="about-section">
                <h2>About the Author</h2>
                <p>
                  I'm a passionate software developer with over a decade of experience building scalable web applications
                  and exploring cutting-edge technologies. My journey spans from startups to enterprise companies,
                  where I've tackled challenges ranging from system architecture to user experience design.
                </p>
                <p>
                  With expertise in modern JavaScript frameworks, cloud technologies, and emerging AI tools, I bring
                  a practical perspective to technical writing. My background includes leading engineering teams,
                  contributing to open-source projects, and continuously learning new technologies to stay at the
                  forefront of innovation.
                </p>
              </section>

              <section className="about-section">
                <h2>Why I Write</h2>
                <p>
                  Technology moves fast, and staying current requires constant learning and adaptation. Writing helps me
                  process new concepts, document my learning journey, and share insights that might benefit others facing
                  similar challenges.
                </p>
                <p>
                  I believe in the power of community-driven knowledge sharing. Every post here aims to bridge the gap
                  between complex technical documentation and practical implementation, making advanced concepts accessible
                  to developers at all levels.
                </p>
                <p>
                  Beyond personal growth, I'm motivated by the opportunity to contribute to the developer community that
                  has given me so much throughout my career. If these posts help even one developer solve a problem or
                  learn something new, then this effort is worthwhile.
                </p>
              </section>

              <section className="about-section">
                <h2>Get in Touch</h2>
                <p>
                  I love connecting with fellow developers, tech enthusiasts, and curious minds. Whether you have questions
                  about a post, want to discuss a technical challenge, or simply want to share your own experiences,
                  I'd love to hear from you.
                </p>
                <p>
                  Feel free to reach out through the <a href="/contact" className="about-link">contact page</a>,
                  connect with me on social media, or engage with the content by sharing your thoughts and experiences.
                  The best learning happens when we learn together.
                </p>
              </section>
            </div>
          </article>
        </LayoutWithSidebar>
      </div>
    </div>
  )
}