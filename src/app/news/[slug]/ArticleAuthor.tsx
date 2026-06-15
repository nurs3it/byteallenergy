'use client'

import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

interface ArticleAuthorProps {
  author: { id: string; email: string } | null
  authorName: string | null
  publishedAt: string | null
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function ArticleAuthor({ author, authorName, publishedAt }: ArticleAuthorProps) {
  const displayName = authorName ?? author?.email ?? null
  return (
    <>
      {displayName && (
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary text-lg font-bold flex-shrink-0">
              {displayName[0].toUpperCase()}
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Автор</p>
              <p className="font-semibold text-foreground">{displayName}</p>
              {publishedAt && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(publishedAt)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 mb-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors text-sm group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Все новости
        </Link>
      </div>
    </>
  )
}
