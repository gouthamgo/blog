import { RecommendedTopics } from './recommended-topics'

interface LayoutWithSidebarProps {
  children: React.ReactNode
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  return (
    <div className="layout-with-sidebar">
      <main className="main-content">
        {children}
      </main>
      <aside className="sidebar">
        <RecommendedTopics />
      </aside>
    </div>
  )
}