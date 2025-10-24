import type { Metadata } from 'next'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | DevMind',
  description: 'Terms of Service for DevMind. Learn about the terms and conditions for using our website.',
  keywords: ['terms of service', 'terms and conditions', 'legal terms', 'user agreement', 'DevMind'],
  openGraph: {
    title: 'Terms of Service | DevMind',
    description: 'Terms of Service for DevMind. Learn about the terms and conditions for using our website.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | DevMind',
    description: 'Terms of Service for DevMind. Learn about the terms and conditions for using our website.',
  },
}

export default function TermsOfServicePage() {
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
                <span className="breadcrumb-current">Terms of Service</span>
              </nav>

              <header className="legal-header">
                <h1 className="legal-title">Terms of Service</h1>
                <p className="legal-updated">Last updated: December 15, 2024</p>
              </header>

              <div className="legal-content">
                <section className="legal-section">
                  <h2>Agreement to Terms</h2>
                  <p>
                    By accessing and using My Tech Blog, you accept and agree to be bound by the terms and provisions
                    of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on My Tech Blog for
                    personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul>
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                    <li>attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be
                    terminated by us at any time. Upon terminating your viewing of these materials or upon the
                    termination of this license, you must destroy any downloaded materials in your possession whether
                    in electronic or printed format.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Content and Intellectual Property</h2>

                  <h3>Our Content</h3>
                  <p>
                    The content, organization, graphics, design, compilation, magnetic translation, digital conversion
                    and other matters related to My Tech Blog are protected under applicable copyrights, trademarks
                    and other proprietary rights.
                  </p>

                  <h3>User Content</h3>
                  <p>
                    By submitting content to our website (through comments, contact forms, or other means), you grant
                    us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display
                    such content for the purposes of operating and promoting our website.
                  </p>

                  <h3>Prohibited Uses</h3>
                  <p>You may not use our website:</p>
                  <ul>
                    <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </section>

                <section className="legal-section">
                  <h2>Accuracy of Information</h2>
                  <p>
                    While we strive to provide accurate and up-to-date information, we make no representations or
                    warranties of any kind, express or implied, about the completeness, accuracy, reliability,
                    suitability or availability of the information, products, services, or related graphics contained
                    on the website for any purpose.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>External Links</h2>
                  <p>
                    Our website may contain links to external sites that are not provided or maintained by or in any
                    way affiliated with us. We do not guarantee the accuracy, relevance, timeliness, or completeness
                    of any information on these external websites.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Disclaimers</h2>

                  <h3>No Warranties</h3>
                  <p>
                    The information on this website is provided on an &apos;as is&apos; basis. To the fullest extent permitted
                    by law, this Company excludes all representations, warranties, conditions and terms relating to
                    our website and the use of this website.
                  </p>

                  <h3>Professional Advice</h3>
                  <p>
                    The content on our website is for informational purposes only and should not be considered
                    professional advice. Always seek the advice of qualified professionals for specific situations.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Limitation of Liability</h2>
                  <p>
                    In no event shall My Tech Blog or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of
                    the use or inability to use the materials on our website, even if we or our authorized
                    representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Privacy Policy</h2>
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect
                    your information when you use our service. By using our service, you agree to the collection
                    and use of information in accordance with our{' '}
                    <Link href="/privacy-policy" className="legal-link">Privacy Policy</Link>.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Modifications</h2>
                  <p>
                    We may revise these terms of service at any time without notice. By using this website, you are
                    agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws and you
                    irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Termination</h2>
                  <p>
                    We may terminate or suspend your access immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </section>

                <section className="legal-section">
                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul>
                    <li>Email: hello@mytechblog.com</li>
                    <li>Contact Form: <Link href="/contact" className="legal-link">Contact Us</Link></li>
                  </ul>
                </section>

                <div className="legal-disclaimer">
                  <p>
                    <strong>Disclaimer:</strong> These terms of service are provided as a template and may need to be
                    customized to fit your specific business practices and comply with applicable laws in your jurisdiction.
                    Consider consulting with a legal professional for specific advice.
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