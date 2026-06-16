"use client"

import Link from 'next/link'
import Image from 'next/image'
import { PageBanner } from '@/components/layout/PageBanner'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { Briefcase, ArrowRight } from 'phosphor-react'

const caseStudies = [
  {
    slug: 'karachaganak',
    title: 'Karachaganak Integrated Field Management',
    client: 'Karachaganak Petroleum Operating',
    summary:
      'A real-time IAM/Digital Oilfield platform unifying well, network and field decisions — live VLP/IPR solves, deviation surveillance, and daily production forecasting across two processing units.',
    image: '/images/case-studies/karachaganak-field-overview.png',
    tags: ['IAM / Digital Oilfield', 'Real-time surveillance', 'Production forecasting'],
  },
]

export default function CaseStudiesPage() {
  return (
    <main>
      <PageBanner
        title="Case Studies"
        subtitle="Real-world results from our projects across the energy sector"
        icon={<Briefcase weight="duotone" />}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {caseStudies.map((cs) => (
              <AnimatedSection key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block rounded-sm border border-border bg-card overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto bg-[#070c16]">
                      <Image src={cs.image} alt={cs.title} fill className="object-cover object-left-top" />
                    </div>
                    <div className="p-8 flex flex-col">
                      <div className="text-sm text-muted-foreground mb-2">{cs.client}</div>
                      <h2 className="text-2xl font-bold text-primary mb-3 group-hover:underline">{cs.title}</h2>
                      <p className="text-foreground/80 leading-relaxed mb-5">{cs.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cs.tags.map((t) => (
                          <span key={t} className="text-xs rounded-sm bg-accent text-primary px-2.5 py-1">{t}</span>
                        ))}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-2 text-primary font-medium">
                        Read case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
