import { notFound } from 'next/navigation'

import { ServicePageContent } from './ServicePageContent'
import { services } from '@/lib/data/services'
import { testimonials } from '@/lib/data/testimonials'

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

  const serviceTestimonials = testimonials.filter(testimonial =>
    testimonial.project.toLowerCase().includes(service.title.toLowerCase())
  )

  return (
    <ServicePageContent
      service={service}
      relatedServices={relatedServices}
      testimonials={serviceTestimonials}
    />
  )
}
