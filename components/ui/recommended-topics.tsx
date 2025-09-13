import Link from 'next/link'

interface Topic {
  name: string
  slug: string
  color: string
}

const topics: Topic[] = [
  { name: 'Programming', slug: 'programming', color: '#1a73e8' },
  { name: 'Artificial Intelligence', slug: 'ai', color: '#34a853' },
  { name: 'Data Science', slug: 'data-science', color: '#ea4335' },
  { name: 'Web Development', slug: 'web-development', color: '#fbbc04' },
  { name: 'JavaScript', slug: 'javascript', color: '#9c27b0' },
  { name: 'React', slug: 'react', color: '#ff6d01' },
  { name: 'TypeScript', slug: 'typescript', color: '#0d7377' },
]

export function RecommendedTopics() {
  return (
    <section className="recommended-topics-section">
      <div className="recommended-topics-container">
        <h2 className="recommended-topics-title">Recommended topics</h2>
        <div className="topics-grid">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="topic-pill"
              style={{ '--topic-color': topic.color } as React.CSSProperties}
            >
              {topic.name}
            </Link>
          ))}
        </div>
        <Link href="/blog" className="see-more-topics">
          See all topics
        </Link>
      </div>
    </section>
  )
}