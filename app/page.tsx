import { getPaginatedPosts } from '@/lib/posts'
import { Header } from '@/components/ui/header'
import { PostCard } from '@/components/ui/post-card'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { Pagination } from '@/components/ui/pagination'

export default function HomePage() {
  const { posts, currentPage, totalPages, totalPosts, hasNextPage, hasPrevPage } = getPaginatedPosts(1, 5)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="py-12 bg-white dark:bg-gray-950">
        <LayoutWithSidebar>
          <div className="mb-16 text-center">
            <h1 className="medium-large-title mb-6">
              Welcome to Goutham.ai
            </h1>
            <p className="text-xl text-medium-gray-600 dark:text-medium-gray-400 max-w-2xl mx-auto leading-relaxed">
              Exploring Artificial Intelligence, Machine Learning, and Coding through practical tutorials and insights.
              Join me on this journey of continuous learning and innovation.
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