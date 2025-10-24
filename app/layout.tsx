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
  title: 'DevMind - AI, ML & Developer Insights',
  description: 'Exploring Artificial Intelligence, Machine Learning, and modern development practices through practical tutorials and expert insights',
  authors: [{ name: 'Goutham' }],
  keywords: ['AI', 'ML', 'artificial intelligence', 'machine learning', 'blog', 'tech', 'programming', 'coding', 'tutorials', 'developer', 'DevMind'],
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