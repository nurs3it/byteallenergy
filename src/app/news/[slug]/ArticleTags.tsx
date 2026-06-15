'use client'

import { Tag } from 'phosphor-react'

interface ArticleTagsProps {
  tags: { id: string; name: string; slug: string }[]
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  if (tags.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-muted text-muted-foreground border border-border px-2.5 py-1 rounded-sm"
        >
          <Tag size={11} />
          {tag.name}
        </span>
      ))}
    </div>
  )
}
