export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readTime: string
  image?: string
  tags: string[]
  content: string
}

export interface PostMetadata {
  title: string
  description: string
  date: string
  author: string
  image?: string
  tags: string[]
}