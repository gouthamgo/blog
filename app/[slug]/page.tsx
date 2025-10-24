import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, getPostMetadata, getRelatedPosts, getPostNavigation } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Header } from '@/components/ui/header'
import { ReadingProgress } from '@/components/ui/reading-progress'
import { LayoutWithSidebar } from '@/components/ui/layout-with-sidebar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SocialShare } from '@/components/ui/social-share'
import { RelatedPosts } from '@/components/ui/related-posts'
import { PostNavigation } from '@/components/ui/post-navigation'
import { AuthorBio } from '@/components/ui/author-bio'
import { NewsletterSignup } from '@/components/ui/newsletter-signup'
import { BackToTop } from '@/components/ui/back-to-top'
import { MDXComponents } from '@/components/mdx-components'
import type { Metadata } from 'next'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostMetadata(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${params.slug}`

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: 'DevMind',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{
        url: post.image,
        width: 800,
        height: 400,
        alt: post.title,
      }] : [],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@techblogger',
      site: '@techblogger',
      images: post.image ? [{
        url: post.image,
        alt: post.title,
      }] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)
  const { previousPost, nextPost } = getPostNavigation(params.slug)
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${params.slug}`

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? [{
      '@type': 'ImageObject',
      url: post.image,
      width: 800,
      height: 400
    }] : [],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'DevMind',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    articleSection: post.tags,
    keywords: post.tags?.join(', '),
    wordCount: post.content.split(/\s+/).length,
    url: currentUrl
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ReadingProgress />
      <Header />
      <BackToTop />

      <div className="py-12 bg-white dark:bg-gray-950">
        <LayoutWithSidebar>
          <Breadcrumb items={breadcrumbItems} />

          <article className="medium-article">
            <header className="post-header">
              <h1 className="post-title">
                {post.title}
              </h1>

              <div className="post-metadata">
                <span className="post-author">{post.author}</span>
                <span className="post-separator">·</span>
                <time dateTime={post.date} className="post-date">{formatDate(post.date)}</time>
                <span className="post-separator">·</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="premium-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="post-description">
                {post.description}
              </p>
            </header>

            {post.image && (
              <div className="post-hero-container">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="post-hero-image-full"
                  priority
                />
              </div>
            )}

            <SocialShare
              title={post.title}
              url={currentUrl}
              description={post.description}
            />

            <div className="post-content">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>

            {/* Author bio section - TODO: customize later */}
            {/*
            <AuthorBio
              name={post.author}
              bio="Passionate tech blogger sharing insights on web development, programming, and the latest in technology. Always learning, always building."
              social={{
                twitter: "techblogger",
                github: "techblogger",
                linkedin: "techblogger",
                website: "https://example.com"
              }}
            />
            */}

            <RelatedPosts posts={relatedPosts} currentPostSlug={post.slug} />

            <PostNavigation previousPost={previousPost} nextPost={nextPost} />

            {/* Email signup - TODO: integrate with actual service */}
            {/* <NewsletterSignup /> */}
          </article>
        </LayoutWithSidebar>
      </div>
    </div>
  )
}