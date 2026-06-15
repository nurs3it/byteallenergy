'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarBlank, ArrowLeft, Clock } from 'phosphor-react'

interface ArticleHeroProps {
  title: string
  coverUrl: string | null
  category: { id: string; name: string; slug: string } | null
  author: { id: string; email: string } | null
  authorName: string | null
  publishedAt: string | null
  readTime: number
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function ArticleHero({ title, coverUrl, category, author, authorName, publishedAt, readTime }: ArticleHeroProps) {
  const displayName = authorName ?? author?.email

  return (
    <section className="bg-background border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl pt-10 pb-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors mb-6 text-sm font-medium group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Все новости
        </Link>

        {category && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {category.name}
            </span>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 font-serif">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          {displayName && (
            <span className="font-medium text-foreground">
              {displayName}
            </span>
          )}
          {publishedAt && (
            <span className="flex items-center gap-1.5">
              <CalendarBlank size={14} />
              {formatDate(publishedAt)}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {readTime} мин чтения
          </span>
        </div>

        {coverUrl && (
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden border border-border">
            <Image
              src={coverUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
