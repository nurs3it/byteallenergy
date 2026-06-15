import { fetchVacancies, type ApiVacancy } from '@/lib/api/services/careers'
import { jobOpenings } from '@/lib/data/careers'
import { CareersPageContent } from './CareersPageContent'

export default async function CareersPage() {
  let vacancies: ApiVacancy[]

  try {
    vacancies = await fetchVacancies()
  } catch {
    // Fallback to static data if API is unavailable
    vacancies = jobOpenings.map((j) => ({
      id: j.id,
      title: j.title,
      slug: j.id,
      department: j.department,
      location: j.location,
      type: j.type,
      description: j.description,
      about: j.about,
      responsibilities: j.responsibilities,
      requirements: j.requirements,
      niceToHave: j.niceToHave ?? [],
      status: 'published' as const,
      isNew: j.isNew ?? false,
      sortOrder: 0,
      publishedAt: null,
      createdAt: new Date().toISOString(),
    }))
  }

  return <CareersPageContent vacancies={vacancies} />
}
