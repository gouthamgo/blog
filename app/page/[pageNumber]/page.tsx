import { notFound } from 'next/navigation'
import { getPaginatedPosts, getAllPosts } from '@/lib/posts'
import { Header } from '@/components/ui/header'
import { PostCard } from '@/components/ui/post-card'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { Pagination } from '@/components/ui/pagination'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Metadata } from 'next'

interface PageProps {
  params: {
    pageNumber: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageNumber = parseInt(params.pageNumber)

  if (isNaN(pageNumber) || pageNumber < 1) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  return {
    title: `DevMind - Page ${pageNumber}`,
    description: `Browse our latest AI, ML, and development articles - Page ${pageNumber}. Stay updated with artificial intelligence, machine learning, and modern development practices.`,
    openGraph: {
      title: `DevMind - Page ${pageNumber}`,
      description: `Browse our latest AI, ML, and development articles - Page ${pageNumber}. Stay updated with artificial intelligence, machine learning, and modern development practices.`,
      type: 'website'
    }
  }
}

export default function PaginatedPage({ params }: PageProps) {
  const pageNumber = parseInt(params.pageNumber)

  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound()
  }

  const { posts, currentPage, totalPages, totalPosts, hasNextPage, hasPrevPage } = getPaginatedPosts(pageNumber, 5)

  if (posts.length === 0 && pageNumber > 1) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: `Page ${currentPage}` }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="py-12 bg-white dark:bg-gray-950">
        <LayoutWithSidebar>
          <Breadcrumb items={breadcrumbItems} />

          <div className="mb-16 text-center">
            <h1 className="medium-large-title mb-6">
              DevMind {currentPage > 1 && `- Page ${currentPage}`}
            </h1>
            <p className="text-xl text-medium-gray-600 dark:text-medium-gray-400 max-w-2xl mx-auto leading-relaxed">
              Where developer insights meet artificial intelligence. Exploring AI, ML, and modern development practices.
            </p>
          </div>

          <div>
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-medium-gray-500 dark:text-medium-gray-500 medium-body">
                  No posts found. Check back soon for new content!
                </p>
              </div>
            ) : (
              <div>
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalPosts={totalPosts}
              postsPerPage={5}
            />
          </div>
        </LayoutWithSidebar>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  const totalPages = Math.ceil(allPosts.length / 5)

  // Generate params for pages 2 and above (page 1 is handled by root page)
  const pages = []
  for (let i = 2; i <= totalPages; i++) {
    pages.push({ pageNumber: i.toString() })
  }

  return pages
}