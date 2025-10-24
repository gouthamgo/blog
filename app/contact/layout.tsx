import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | DevMind',
  description: 'Get in touch with DevMind. Send a message, ask questions, or connect for collaboration opportunities.',
  keywords: ['contact', 'get in touch', 'tech blogger', 'collaboration', 'questions', 'AI', 'ML', 'DevMind'],
  openGraph: {
    title: 'Contact | DevMind',
    description: 'Get in touch with DevMind. Send a message, ask questions, or connect for collaboration opportunities.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | DevMind',
    description: 'Get in touch with DevMind.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}