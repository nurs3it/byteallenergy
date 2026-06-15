"use client"

import { PageBanner } from '@/components/layout/PageBanner'
import { Briefcase } from 'phosphor-react'

export default function CaseStudiesPage() {
  return (
    <main>
      <PageBanner
        title="Case Studies"
        subtitle="Real-world results from our projects across the energy sector"
        icon={<Briefcase weight="duotone" />}
        badge="Coming Soon"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are preparing detailed case studies showcasing how our solutions have helped clients
            optimise production, reduce costs, and accelerate digital transformation.
            Check back soon for updates.
          </p>
        </div>
      </section>
    </main>
  )
}
