import { notFound } from 'next/navigation'
import { getPaginatedPostsByTag } from '@/lib/posts'
import { PostCard } from '@/components/ui/post-card'
import { Header } from '@/components/ui/header'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { BackToTop } from '@/components/ui/back-to-top'
import { Pagination } from '@/components/ui/pagination'
import { Breadcrumb } from '@/components/ui/breadcrumb'
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
  'deep-learning': 'Deep Learning',
  'neural-networks': 'Neural Networks',
  'computer-vision': 'Computer Vision',
  'nlp': 'NLP',
  'feature-engineering': 'Feature Engineering',
  'ensemble-methods': 'Ensemble Methods',
  'model-evaluation': 'Model Evaluation',
  'hyperparameter-tuning': 'Hyperparameter Tuning',
  'imbalanced-data': 'Imbalanced Data',
  'ai-ethics': 'AI Ethics',
  'responsible-ai': 'Responsible AI',
  'tensorflow': 'TensorFlow',
  'xgboost': 'XGBoost',
  'opencv': 'OpenCV',
  'typescript': 'TypeScript',
  'docker': 'Docker',
  'devops': 'DevOps',
  'deployment': 'Deployment',
  'api': 'API',
  'backend': 'Backend',
  'nodejs': 'Node.js',
  'css': 'CSS',
  'design': 'Design',
  'graphql': 'GraphQL',
  'performance': 'Performance'
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
    title: `${topicName} - DevMind`,
    description: `Explore all articles and tutorials about ${topicName}. Stay up to date with the latest trends and best practices.`,
    openGraph: {
      title: `${topicName} - DevMind`,
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

  const { posts, currentPage, totalPages, totalPosts, hasNextPage, hasPrevPage } = getPaginatedPostsByTag(params.topic, 1, 5)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: topicName }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <BackToTop />

      <div className="py-12 bg-white dark:bg-gray-950">
        <div className="max-width-container bg-white dark:bg-gray-950">
          <LayoutWithSidebar>
            <div className="topic-page">
              <Breadcrumb items={breadcrumbItems} />

              <div className="topic-header">
                <h1 className="topic-title">{topicName}</h1>
                <p className="topic-description">
                  {totalPosts} article{totalPosts !== 1 ? 's' : ''} about {topicName.toLowerCase()}
                </p>
                <Link href="/" className="back-to-posts">← Back to all posts</Link>
              </div>

              {posts.length > 0 ? (
                <div className="posts-grid">
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalPosts={totalPosts}
                    postsPerPage={5}
                    basePath={`/topics/${params.topic}`}
                    topicName={topicName}
                  />
                </div>
              ) : (
                <div className="no-posts">
                  <h2>No posts found</h2>
                  <p>We haven&apos;t published any articles about {topicName.toLowerCase()} yet. Check back soon!</p>
                  <Link href="/" className="back-to-posts-btn">Browse all posts</Link>
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