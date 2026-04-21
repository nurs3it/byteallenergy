import { Suspense } from 'react'
import { Metadata } from 'next'
import { NewsList } from './NewsList'
import { PageBanner } from '@/components/layout/PageBanner'

export const metadata: Metadata = {
  title: 'News | ByteAll Energy',
  description: 'Latest news, insights and case studies from ByteAll Energy — digital solutions for the oil & gas industry.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-8">
      <PageBanner
        title="News & Insights"
        subtitle="Stay informed with the latest industry news, case studies, and digital innovation insights from ByteAll Energy."
        badge="Latest Updates"
      />

      {/* News List */}
      <Suspense fallback={<NewsListSkeleton />}>
        <NewsList />
      </Suspense>
    </div>
  )
}

function NewsListSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
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
      </div>
    </section>
  )
}
