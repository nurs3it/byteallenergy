'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarBlank, User, Tag, ArrowRight, Newspaper } from 'phosphor-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { fetchPosts, ApiPost } from '@/lib/api/services/news'

const PAGE_SIZE = 10

function formatDate(dateStr: string | null) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function PostCard({ post, index }: { post: ApiPost; index: number }) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <Link href={`/news/${post.slug}`} className="group block h-full">
        <motion.article
          className="h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {/* Cover image */}
          <div className="relative h-52 bg-primary overflow-hidden flex-shrink-0">
            {post.coverUrl ? (
              <Image
                src={post.coverUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Newspaper size={48} className="text-primary-foreground/30" />
              </div>
            )}
            {/* Category badge */}
            {post.category && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {post.category.name}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              {post.publishedAt && (
                <span className="flex items-center gap-1">
                  <CalendarBlank size={12} />
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {(post.authorName || post.author) && (
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {post.authorName ?? post.author?.email}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
              {post.title}
            </h2>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag.id} className="inline-flex items-center gap-1 text-xs bg-accent dark:bg-accent text-accent-foreground border border-border px-2 py-0.5 rounded-full">
                    <Tag size={10} />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Read more */}
            <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary dark:text-primary group-hover:gap-2 transition-all">
              Read more
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.article>
      </Link>
    </AnimatedSection>
  )
}

function Pagination({
  current, total, pageSize, onChange,
}: {
  current: number; total: number; pageSize: number; onChange: (p: number) => void
}) {
  const totalPages = Math.ceil(total / pageSize)
  if (totalPages <= 1) return null

  const pages: (number | '...')[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 3) pages.push('...')
    for (let i = Math.max(2, current - 1); i <= Math.min(totalPages - 1, current + 1); i++) pages.push(i)
    if (current < totalPages - 2) pages.push('...')
    pages.push(totalPages)
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="px-4 py-2 rounded-sm border border-border text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent dark:hover:bg-accent hover:border-primary transition-colors"
      >
        ← Previous
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-muted-foreground">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`w-10 h-10 rounded-sm text-sm font-medium transition-colors ${
              p === current
                ? 'bg-primary text-primary-foreground border border-primary'
                : 'border border-border hover:bg-accent dark:hover:bg-accent hover:border-primary'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === totalPages}
        className="px-4 py-2 rounded-sm border border-border text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent dark:hover:bg-accent hover:border-primary transition-colors"
      >
        Next →
      </button>
    </div>
  )
}

export function NewsList() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)

  const [posts, setPosts] = useState<ApiPost[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (p: number) => {
    setLoading(true)
    setError(null)
    try {
      const { data, total } = await fetchPosts(p, PAGE_SIZE)
      setPosts(data)
      setTotal(total)
    } catch (e) {
      setError('Failed to load news. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page, load])

  const handlePageChange = (p: number) => {
    router.push(`/news?page=${p}`)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Stats bar */}
        {!loading && !error && total > 0 && (
          <AnimatedSection>
            <div className="flex items-center justify-between mb-10">
              <p className="text-muted-foreground text-sm">
                Showing{' '}
                <span className="font-semibold text-foreground">
                  {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)}
                </span>{' '}
                of{' '}
                <span className="font-semibold text-foreground">{total}</span> articles
              </p>
              <div className="h-px flex-1 bg-border mx-4" />
              <span className="text-xs text-muted-foreground">Page {page} of {Math.ceil(total / PAGE_SIZE)}</span>
            </div>
          </AnimatedSection>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <p className="text-destructive text-lg mb-4">{error}</p>
            <button
              onClick={() => load(page)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border animate-pulse">
                <div className="h-52 bg-muted" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <Newspaper size={64} className="mx-auto text-muted-foreground/30" />
            <h3 className="text-xl font-semibold text-muted-foreground">No articles yet</h3>
            <p className="text-muted-foreground">Check back soon for the latest news and insights.</p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && (
          <Pagination
            current={page}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={handlePageChange}
          />
        )}
      </div>
    </section>
  )
}
