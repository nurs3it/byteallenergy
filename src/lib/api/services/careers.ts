export interface ApiVacancy {
  id: string
  title: string
  slug: string
  department: string
  location: string
  type: string
  description: string
  about: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  status: 'draft' | 'published' | 'closed'
  isNew: boolean
  sortOrder: number
  publishedAt: string | null
  createdAt: string
}

export interface ApplicationSubmission {
  vacancyId?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  coverLetter?: string
  resume?: File
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function fetchVacancies(): Promise<ApiVacancy[]> {
  const res = await fetch(`${API_BASE}/vacancies`, { next: { revalidate: 60 } })

  if (!res.ok) throw new Error(`Failed to fetch vacancies: ${res.status}`)

  const raw = await res.json()
  const data: ApiVacancy[] = Array.isArray(raw) ? raw : (raw?.data ?? [])
  return data
}

export async function fetchVacancyBySlug(slug: string): Promise<ApiVacancy> {
  const res = await fetch(`${API_BASE}/vacancies/${slug}`, { next: { revalidate: 60 } })

  if (!res.ok) throw new Error(`Vacancy not found: ${res.status}`)

  const raw = await res.json()
  return raw?.data ?? raw
}

export async function fetchDepartments(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/vacancies/departments`, { next: { revalidate: 60 } })

  if (!res.ok) throw new Error(`Failed to fetch departments: ${res.status}`)

  const raw = await res.json()
  return Array.isArray(raw) ? raw : (raw?.data ?? [])
}

export async function submitApplication(data: ApplicationSubmission): Promise<void> {
  const formData = new FormData()
  formData.append('firstName', data.firstName)
  formData.append('lastName', data.lastName)
  formData.append('email', data.email)
  if (data.phone) formData.append('phone', data.phone)
  if (data.vacancyId) formData.append('vacancyId', data.vacancyId)
  if (data.coverLetter) formData.append('coverLetter', data.coverLetter)
  if (data.resume) formData.append('resume', data.resume)

  const res = await fetch(`${API_BASE}/applications`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.message || `Failed to submit application: ${res.status}`)
  }
}
