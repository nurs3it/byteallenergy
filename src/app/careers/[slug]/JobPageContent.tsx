"use client"

import { useState } from 'react'
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Star,
  EnvelopeSimple,
  ShareNetwork,
  PaperclipHorizontal,
  SpinnerGap,
  Check,
  LinkedinLogo,
  TwitterLogo,
  Copy,
} from 'phosphor-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { PageBanner } from '@/components/layout/PageBanner'
import { companyData } from '@/lib/data/company'
import { submitApplication, type ApiVacancy } from '@/lib/api/services/careers'
import Link from 'next/link'
import { toast } from 'sonner'

interface JobPageContentProps {
  vacancy: ApiVacancy
  relatedJobs: ApiVacancy[]
}

function ApplicationForm({ vacancy }: { vacancy: ApiVacancy }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      await submitApplication({
        ...form,
        vacancyId: vacancy.id,
        resume: resume ?? undefined,
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-accent rounded-sm flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-primary" weight="bold" />
        </div>
        <h3 className="text-lg font-semibold">Application Submitted</h3>
        <p className="text-sm text-muted-foreground">
          Thank you! We will review your application and get back to you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium mb-1 block">First Name *</label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Last Name *</label>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="+7 777 123 4567"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Resume (PDF, DOC)</label>
        <label className="flex items-center gap-2 px-3 py-2 text-sm border border-border rounded-sm bg-background cursor-pointer hover:border-primary/40 transition-colors">
          <PaperclipHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground truncate">
            {resume ? resume.name : 'Choose file...'}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Cover Letter</label>
        <textarea
          value={form.coverLetter}
          onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {status === 'submitting' ? (
          <>
            <SpinnerGap className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <EnvelopeSimple className="w-4 h-4 mr-2" weight="duotone" />
            Submit Application
          </>
        )}
      </Button>
    </form>
  )
}

export function JobPageContent({ vacancy, relatedJobs }: JobPageContentProps) {
  return (
    <div className="min-h-screen pt-8">
      <PageBanner
        title={vacancy.title}
        subtitle={vacancy.department}
        icon={<Briefcase weight="duotone" />}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Positions
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Meta badges */}
            <AnimatedSection>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-sm text-sm text-foreground">
                  <Briefcase className="w-4 h-4 text-primary" weight="duotone" />
                  {vacancy.department}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-sm text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-primary" weight="duotone" />
                  {vacancy.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent rounded-sm text-sm text-foreground">
                  <Clock className="w-4 h-4 text-primary" weight="duotone" />
                  {vacancy.type}
                </span>
                {vacancy.isNew && (
                  <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-sm">
                    New
                  </span>
                )}
              </div>
            </AnimatedSection>

            {/* About the Role */}
            {vacancy.about && (
              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">About the Role</h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {vacancy.about}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Responsibilities */}
            {vacancy.responsibilities.length > 0 && (
              <AnimatedSection delay={0.15}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">What You Will Do</h2>
                  <ul className="space-y-3">
                    {vacancy.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="fill" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}

            {/* Requirements */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Requirements</h2>
                <ul className="space-y-3">
                  {vacancy.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Nice to Have */}
            {vacancy.niceToHave.length > 0 && (
              <AnimatedSection delay={0.25}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Nice to Have</h2>
                  <ul className="space-y-3">
                    {vacancy.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" weight="duotone" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <AnimatedSection delay={0.1}>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-lg font-semibold">Apply for This Role</h3>

                  <ApplicationForm vacancy={vacancy} />

                  <div className="pt-3 border-t border-border space-y-2">
                    <p className="text-sm font-medium">Share This Role</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href)
                          toast.success('Link copied to clipboard')
                        }}
                      >
                        <Copy className="w-4 h-4 mr-1.5" weight="duotone" />
                        Copy Link
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={`mailto:?subject=${encodeURIComponent(vacancy.title + ' — ByteAll Energy')}&body=${encodeURIComponent('Check out this role: ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                        >
                          <EnvelopeSimple className="w-4 h-4 mr-1.5" weight="duotone" />
                          Email
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinLogo className="w-4 h-4 mr-1.5" weight="duotone" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(vacancy.title + ' at ByteAll Energy')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TwitterLogo className="w-4 h-4 mr-1.5" weight="duotone" />
                          Twitter
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-primary" weight="duotone" />
                      <span className="text-muted-foreground">{vacancy.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" weight="duotone" />
                      <span className="text-muted-foreground">{vacancy.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" weight="duotone" />
                      <span className="text-muted-foreground">{vacancy.type}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Related Positions */}
      {relatedJobs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-primary mb-8">
                Other {vacancy.department} Roles
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {relatedJobs.map((related, index) => (
                <AnimatedSection key={related.id} delay={index * 0.1}>
                  <Link href={`/careers/${related.slug}`} className="block">
                    <Card className="h-full group hover:border-primary/40 transition-colors">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          {related.isNew && (
                            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-sm">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" weight="duotone" />
                            {related.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" weight="duotone" />
                            {related.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description}
                        </p>
                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Role <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-accent dark:bg-accent">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Not the right fit? Explore all openings.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/careers">
                    View All Positions
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${companyData.email}?subject=General Application — Careers`}>
                    Send General CV
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
