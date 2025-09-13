import { getAllPosts } from '@/lib/posts'
import { Header } from '@/components/ui/header'
import { PostCard } from '@/components/ui/post-card'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <Header />

      <div className="py-12">
        <LayoutWithSidebar>
          <div className="mb-16 text-center">
            <h1 className="medium-large-title mb-6">
              Welcome to My Tech Blog
            </h1>
            <p className="text-xl text-medium-gray-600 dark:text-medium-gray-400 max-w-2xl mx-auto leading-relaxed">
              Exploring the latest in web development, programming, and technology.
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
          </div>
        </LayoutWithSidebar>
      </div>
    </div>
  )
}