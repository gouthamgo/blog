import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/ui/post-card'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'
import { Metadata } from 'next'
import Link from 'next/link'

interface TopicPageProps {
  params: {
    topic: string
  }
}

const topicMap: Record<string, string> = {
  'programming': 'Programming',
  'ai': 'Artificial Intelligence',
  'web-development': 'Web Development',
  'data-science': 'Data Science',
  'javascript': 'JavaScript',
  'react': 'React',
  'nextjs': 'Next.js',
  'python': 'Python',
  'machine-learning': 'Machine Learning',
  'typescript': 'TypeScript'
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const topicName = topicMap[params.topic]

  if (!topicName) {
    return {
      title: 'Topic Not Found',
      description: 'The requested topic could not be found.'
    }
  }

  return {
    title: `${topicName} - My Tech Blog`,
    description: `Explore all articles and tutorials about ${topicName}. Stay up to date with the latest trends and best practices.`,
    openGraph: {
      title: `${topicName} - My Tech Blog`,
      description: `Explore all articles and tutorials about ${topicName}. Stay up to date with the latest trends and best practices.`,
      type: 'website'
    }
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const topicName = topicMap[params.topic]

  if (!topicName) {
    notFound()
  }

  const allPosts = getAllPosts()
  const filteredPosts = allPosts.filter(post =>
    post.tags?.some(tag =>
      tag.toLowerCase().replace(/\s+/g, '-') === params.topic ||
      tag.toLowerCase() === topicName.toLowerCase()
    )
  )

  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />

      <div className="py-12">
        <div className="max-width-container">
          <LayoutWithSidebar>
            <div className="topic-page">
              <nav className="topic-breadcrumb">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">›</span>
                <Link href="/blog" className="breadcrumb-link">Blog</Link>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">{topicName}</span>
              </nav>

              <div className="topic-header">
                <h1 className="topic-title">{topicName}</h1>
                <p className="topic-description">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} about {topicName.toLowerCase()}
                </p>
                <Link href="/blog" className="back-to-posts">← Back to all posts</Link>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="posts-grid">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="no-posts">
                  <h2>No posts found</h2>
                  <p>We haven't published any articles about {topicName.toLowerCase()} yet. Check back soon!</p>
                  <Link href="/blog" className="back-to-posts-btn">Browse all posts</Link>
                </div>
              )}
            </div>
          </LayoutWithSidebar>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(topicMap).map((topic) => ({
    topic,
  }))
}