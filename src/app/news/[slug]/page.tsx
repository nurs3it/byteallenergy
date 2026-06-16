import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchPostBySlug, fetchPosts, ApiPost } from '@/lib/api/services/news'
import { EditorJsContent } from './EditorJsContent'
import { ArticleHero } from './ArticleHero'
import { ArticleTags } from './ArticleTags'
import { ArticleAuthor } from './ArticleAuthor'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await fetchPostBySlug(slug)
    return {
      title: `${post.title} | ByteAll Energy`,
      description: post.content?.slice(0, 160).replace(/<[^>]*>/g, '') ?? '',
      openGraph: {
        title: post.title,
        images: post.coverUrl ? [post.coverUrl] : [],
      },
    }
  } catch {
    return { title: 'Article | ByteAll Energy' }
  }
}

export async function generateStaticParams() {
  try {
    const { data } = await fetchPosts(1, 50)
    if (data.length > 0) return data.map((p) => ({ slug: p.slug }))
  } catch {
    // API unreachable at build time — fall through to placeholder.
  }
  // `output: export` rejects an empty param set ("missing generateStaticParams").
  // Emit one throwaway slug so the static build always succeeds; the page calls
  // notFound() for it, so it renders as a 404. Real slugs are served via SSR/ISR.
  return [{ slug: '__placeholder__' }]
}

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '').replace(/[{}[\]"]/g, ' ')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params

  let post: ApiPost
  try {
    post = await fetchPostBySlug(slug)
  } catch {
    notFound()
  }

  const readTime = estimateReadTime(post.content ?? '')

  return (
    <article className="min-h-screen bg-background">
      <ArticleHero
        title={post.title}
        coverUrl={post.coverUrl}
        category={post.category}
        author={post.author}
        authorName={post.authorName}
        publishedAt={post.publishedAt}
        readTime={readTime}
      />

      <div className="container mx-auto px-4 max-w-4xl py-10">
        <ArticleTags tags={post.tags} />

        <div className="max-w-none">
          <EditorJsContent content={post.content} />
        </div>

        <ArticleAuthor author={post.author} authorName={post.authorName} publishedAt={post.publishedAt} />
      </div>
    </article>
  )
}
