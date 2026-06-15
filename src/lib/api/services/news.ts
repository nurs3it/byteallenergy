export interface ApiPost {
  id: string
  title: string
  slug: string
  content: string
  coverUrl: string | null
  authorName: string | null
  status: 'draft' | 'published'
  publishedAt: string | null
  createdAt: string
  author: { id: string; email: string } | null
  category: { id: string; name: string; slug: string } | null
  tags: { id: string; name: string; slug: string }[]
}

export interface PostsResponse {
  data: ApiPost[]
  total: number
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api'

export async function fetchPosts(page = 1, pageSize = 10): Promise<PostsResponse> {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const res = await fetch(
    `${API_BASE}/posts?_start=${start}&_end=${end}`,
    { next: { revalidate: 60 } },
  )

  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`)

  const total = parseInt(res.headers.get('x-total-count') ?? '0', 10)
  const raw = await res.json()
  // unwrap NestJS wrapper { data: [...] } if present
  const data: ApiPost[] = Array.isArray(raw) ? raw : (raw?.data ?? [])

  return { data, total }
}

export async function fetchPostBySlug(slug: string): Promise<ApiPost> {
  const res = await fetch(
    `${API_BASE}/posts/${slug}`,
    { next: { revalidate: 60 } },
  )

  if (!res.ok) throw new Error(`Post not found: ${res.status}`)

  const raw = await res.json()
  return raw?.data ?? raw
}
