import { notFound } from 'next/navigation'

import { ServicePageContent } from './ServicePageContent'
import { services } from '@/lib/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug) ?? notFound()

  const relatedServices = services
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3)

  return (
    <ServicePageContent
      service={service}
      relatedServices={relatedServices}
    />
  )
}
