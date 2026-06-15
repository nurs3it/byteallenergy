import { notFound } from 'next/navigation'
import { fetchVacancies, fetchVacancyBySlug, type ApiVacancy } from '@/lib/api/services/careers'
import { jobOpenings } from '@/lib/data/careers'
import { JobPageContent } from './JobPageContent'

interface JobPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const vacancies = await fetchVacancies()
    return vacancies.map((v) => ({ slug: v.slug }))
  } catch {
    return jobOpenings.map((job) => ({ slug: job.id }))
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params

  let vacancy: ApiVacancy
  let allVacancies: ApiVacancy[]

  try {
    vacancy = await fetchVacancyBySlug(slug)
    allVacancies = await fetchVacancies()
  } catch {
    // Fallback to static data
    const staticJob = jobOpenings.find((j) => j.id === slug)
    if (!staticJob) return notFound()

    vacancy = {
      id: staticJob.id,
      title: staticJob.title,
      slug: staticJob.id,
      department: staticJob.department,
      location: staticJob.location,
      type: staticJob.type,
      description: staticJob.description,
      about: staticJob.about,
      responsibilities: staticJob.responsibilities,
      requirements: staticJob.requirements,
      niceToHave: staticJob.niceToHave ?? [],
      status: 'published',
      isNew: staticJob.isNew ?? false,
      sortOrder: 0,
      publishedAt: null,
      createdAt: new Date().toISOString(),
    }
    allVacancies = jobOpenings.map((j) => ({
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

  const relatedJobs = allVacancies
    .filter((j) => j.id !== vacancy.id && j.department === vacancy.department)
    .slice(0, 2)

  return <JobPageContent vacancy={vacancy} relatedJobs={relatedJobs} />
}
