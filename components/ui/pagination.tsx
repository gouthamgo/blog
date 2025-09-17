'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  basePath?: string
  topicName?: string
}

export function Pagination({
  currentPage,
  totalPages,
  totalPosts,
  postsPerPage,
  basePath = '',
  topicName
}: PaginationProps) {
  if (totalPages <= 1) return null

  const generatePageNumbers = () => {
    const pages: (number | string)[] = []
    const showPages = 5 // Show 5 page numbers max

    if (totalPages <= showPages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show first page
      pages.push(1)

      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Adjust range to show more context
      if (currentPage <= 3) {
        endPage = 4
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3
      }

      // Add ellipsis if there's a gap
      if (startPage > 2) {
        pages.push('...')
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      // Add ellipsis if there's a gap
      if (endPage < totalPages - 1) {
        pages.push('...')
      }

      // Show last page
      pages.push(totalPages)
    }

    return pages
  }

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath || '/'
    }
    return `${basePath}/page/${page}`
  }

  const startPost = (currentPage - 1) * postsPerPage + 1
  const endPost = Math.min(currentPage * postsPerPage, totalPosts)

  const pageNumbers = generatePageNumbers()

  return (
    <div className="pagination-container">
      {/* Post count */}
      <div className="pagination-info">
        <p className="pagination-count">
          Showing {startPost}-{endPost} of {totalPosts} {topicName ? `${topicName.toLowerCase()} ` : ''}posts
        </p>
      </div>

      {/* Pagination controls */}
      <nav className="pagination-nav" aria-label="Pagination">
        <div className="pagination-controls">
          {/* Previous button */}
          {currentPage > 1 ? (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="pagination-button pagination-prev"
            >
              <ChevronLeft size={16} />
              <span className="pagination-button-text">Previous</span>
            </Link>
          ) : (
            <span className="pagination-button pagination-prev pagination-disabled">
              <ChevronLeft size={16} />
              <span className="pagination-button-text">Previous</span>
            </span>
          )}

          {/* Page numbers */}
          <div className="pagination-numbers">
            {pageNumbers.map((page, index) => (
              <div key={index}>
                {page === '...' ? (
                  <span className="pagination-ellipsis">...</span>
                ) : (
                  <Link
                    href={getPageUrl(page as number)}
                    className={`pagination-number ${
                      currentPage === page ? 'pagination-current' : ''
                    }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Next button */}
          {currentPage < totalPages ? (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="pagination-button pagination-next"
            >
              <span className="pagination-button-text">Next</span>
              <ChevronRight size={16} />
            </Link>
          ) : (
            <span className="pagination-button pagination-next pagination-disabled">
              <span className="pagination-button-text">Next</span>
              <ChevronRight size={16} />
            </span>
          )}
        </div>
      </nav>
    </div>
  )
}