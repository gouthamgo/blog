import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Footer } from '@/components/ui/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devmindai.netlify.app'),
  title: 'DevMind - AI, ML & Developer Insights',
  description: 'Exploring Artificial Intelligence, Machine Learning, and modern development practices through practical tutorials and expert insights',
  authors: [{ name: 'Goutham' }],
  keywords: ['AI', 'ML', 'artificial intelligence', 'machine learning', 'blog', 'tech', 'programming', 'coding', 'tutorials', 'developer', 'DevMind'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'DevMind',
    title: 'DevMind - AI, ML & Developer Insights',
    description: 'Exploring Artificial Intelligence, Machine Learning, and modern development practices through practical tutorials and expert insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevMind - AI, ML & Developer Insights',
    description: 'Exploring Artificial Intelligence, Machine Learning, and modern development practices through practical tutorials and expert insights',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}