import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | My Tech Blog',
  description: 'Get in touch with My Tech Blog. Send a message, ask questions, or connect for collaboration opportunities.',
  keywords: ['contact', 'get in touch', 'tech blogger', 'collaboration', 'questions'],
  openGraph: {
    title: 'Contact | My Tech Blog',
    description: 'Get in touch with My Tech Blog. Send a message, ask questions, or connect for collaboration opportunities.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | My Tech Blog',
    description: 'Get in touch with My Tech Blog.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}