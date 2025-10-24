import type { Metadata } from 'next'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | DevMind',
  description: 'Privacy Policy for DevMind. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'privacy', 'personal information'],
  openGraph: {
    title: 'Privacy Policy | DevMind',
    description: 'Privacy Policy for DevMind. Learn how we collect, use, and protect your personal information.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | DevMind',
    description: 'Privacy Policy for DevMind. Learn how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />

      <div className="py-12">
        <div className="max-width-container">
          <LayoutWithSidebar>
            <article className="medium-article">
              <nav className="topic-breadcrumb">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">Privacy Policy</span>
              </nav>

              <header className="legal-header">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-updated">Last updated: December 15, 2024</p>
              </header>

              <div className="legal-content">
                <section className="legal-section">
                  <h2>Introduction</h2>
                  <p>
                    Welcome to My Tech Blog. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Information We Collect</h2>

                  <h3>Information You Provide</h3>
                  <p>We may collect information that you voluntarily provide to us, including:</p>
                  <ul>
                    <li>Name and email address when you contact us through our contact form</li>
                    <li>Comments and feedback you submit</li>
                    <li>Newsletter subscription information</li>
                  </ul>

                  <h3>Automatically Collected Information</h3>
                  <p>We automatically collect certain information when you visit our website:</p>
                  <ul>
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms used</li>
                  </ul>
                </section>

                <section className="legal-section">
                  <h2>How We Use Your Information</h2>
                  <p>We use the collected information for the following purposes:</p>
                  <ul>
                    <li>To provide and maintain our website</li>
                    <li>To respond to your inquiries and contact requests</li>
                    <li>To send newsletters and updates (with your consent)</li>
                    <li>To analyze website usage and improve our content</li>
                    <li>To detect and prevent technical issues</li>
                  </ul>
                </section>

                <section className="legal-section">
                  <h2>Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website.
                    Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site.
                  </p>

                  <h3>Types of Cookies We Use:</h3>
                  <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences (like dark mode)</li>
                  </ul>

                  <p>You can control and delete cookies through your browser settings.</p>
                </section>

                <section className="legal-section">
                  <h2>Third-Party Services</h2>
                  <p>We may use third-party services that collect, monitor, and analyze user behavior:</p>

                  <h3>Google Analytics</h3>
                  <p>
                    We use Google Analytics to understand how visitors use our website. Google Analytics collects
                    information anonymously and reports website trends without identifying individual visitors.
                  </p>

                  <h3>Social Media Integration</h3>
                  <p>
                    Our website may include social media features that are hosted by third-party companies.
                    These features may collect your IP address and track your activity according to their own privacy policies.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                    over the internet is 100% secure.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Data Retention</h2>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to the processing of your personal information</li>
                    <li>Withdraw consent at any time (where applicable)</li>
                  </ul>
                </section>

                <section className="legal-section">
                  <h2>Children&apos;s Privacy</h2>
                  <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If you believe we have collected information from
                    a child under 13, please contact us immediately.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Changes to This Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by
                    posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <ul>
                    <li>Email: hello@mytechblog.com</li>
                    <li>Contact Form: <Link href="/contact" className="legal-link">Contact Us</Link></li>
                  </ul>
                </section>

                <div className="legal-disclaimer">
                  <p>
                    <strong>Disclaimer:</strong> This privacy policy is provided as a template and may need to be
                    customized to fit your specific business practices and comply with applicable laws in your jurisdiction.
                  </p>
                </div>
              </div>
            </article>
          </LayoutWithSidebar>
        </div>
      </div>
    </div>
  )
}