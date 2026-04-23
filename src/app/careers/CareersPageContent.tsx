"use client"

import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Lightbulb,
  Users,
  RocketLaunch,
  Heart,
  GraduationCap,
  Globe,
  ChartLineUp,
  EnvelopeSimple,
  LinkedinLogo,
} from 'phosphor-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { PageBanner } from '@/components/layout/PageBanner'
import { companyData } from '@/lib/data/company'
import type { ApiVacancy } from '@/lib/api/services/careers'
import Link from 'next/link'
import { useState } from 'react'

const benefits = [
  {
    icon: RocketLaunch,
    title: 'Impactful Work',
    description: 'Your code and models run on real assets — you will see your work drive field decisions.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Conference budgets, training courses, and mentorship from senior domain experts.',
  },
  {
    icon: Globe,
    title: 'International Exposure',
    description: 'Work with clients and partners in Central Asia, Europe, and beyond.',
  },
  {
    icon: Users,
    title: 'Small Team, Big Ownership',
    description: 'No bureaucracy — you own your projects from concept to production.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote-friendly policies, and respect for your time.',
  },
  {
    icon: ChartLineUp,
    title: 'Competitive Compensation',
    description: 'Market-rate salaries, performance bonuses, and growth-linked rewards.',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Engineering Excellence',
    description: 'We combine petroleum engineering depth with software craftsmanship.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Domain experts and developers work as one team — no silos, no handoffs.',
  },
  {
    icon: RocketLaunch,
    title: 'Real Impact',
    description: 'Every project is measured by the operational outcomes it delivers for clients.',
  },
]

interface CareersPageContentProps {
  vacancies: ApiVacancy[]
}

export function CareersPageContent({ vacancies }: CareersPageContentProps) {
  const [filter, setFilter] = useState<string>('All')
  const departments = ['All', ...Array.from(new Set(vacancies.map((j) => j.department)))]
  const filtered = filter === 'All' ? vacancies : vacancies.filter((j) => j.department === filter)

  return (
    <div className="min-h-screen pt-8">
      <PageBanner
        title="Careers"
        subtitle="Build the future of energy technology with us"
        icon={<Briefcase weight="duotone" />}
      />

      {/* Why Join Us — Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why ByteAll Energy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are a team of engineers, developers, and domain experts united by one goal — making upstream operations smarter through technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent dark:bg-accent rounded-sm flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                What We Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We invest in people who invest in meaningful work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <Card className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-accent dark:bg-accent rounded-sm flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find a role that matches your expertise
              </p>
            </div>
          </AnimatedSection>

          {/* Department Filter */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                    filter === dept
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {filtered.map((job, index) => (
              <AnimatedSection key={job.id} delay={index * 0.08}>
                <Link href={`/careers/${job.slug}`} className="block">
                  <Card className="group hover:border-primary/40 transition-colors duration-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.isNew && (
                              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-sm">
                                New
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5" weight="duotone" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" weight="duotone" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" weight="duotone" />
                              {job.type}
                            </span>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        <div className="shrink-0 flex items-center">
                          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Role
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No open positions in this department right now.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Don't See a Fit? */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Don&apos;t See Your Role?
              </h2>
              <p className="text-lg text-muted-foreground">
                We are always interested in hearing from talented engineers and professionals.
                Send us your CV and tell us how you would contribute — we review every application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={`mailto:${companyData.email}?subject=General Application — Careers`}>
                    <EnvelopeSimple className="w-4 h-4 mr-2" weight="duotone" />
                    Send Your CV
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={companyData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinLogo className="w-4 h-4 mr-2" weight="duotone" />
                    Follow on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Offices
              </h2>
              <p className="text-xl text-muted-foreground">
                Where we work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent dark:bg-accent rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">Headquarters</h3>
                      <p className="text-sm text-muted-foreground">
                        {companyData.headquarters.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {companyData.headquarters.city}, {companyData.headquarters.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent dark:bg-accent rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">International Office</h3>
                      <p className="text-sm text-muted-foreground">
                        {companyData.internationalOffices[0].address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {companyData.internationalOffices[0].city}, {companyData.internationalOffices[0].country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent dark:bg-accent">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join a team where your expertise directly shapes the future of energy operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={`mailto:${companyData.email}?subject=Career Inquiry`}>
                    Get in Touch
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">
                    Learn About Us
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
