'use client'

import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Service } from '@/lib/data/services'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Medal as Award,
  ChartBar as BarChart3,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  Drop as Droplets,
  ShareNetwork as Network,
  Star,
  Users,
  UsersFour as Users2,
} from 'phosphor-react'
import Link from 'next/link'

const serviceIcons = {
  Network,
  Cpu,
  Activity,
  Droplets,
  Code,
  BarChart3,
  Users,
}

interface ServicePageContentProps {
  service: Service
  relatedServices: Service[]
}

export function ServicePageContent({ service, relatedServices }: ServicePageContentProps) {
  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
                {service.shortDescription}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Features & Benefits</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" weight="fill" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Award className="w-5 h-5 text-energy-600" weight="duotone" />
                      </motion.div>
                      <span>Why Partner With ByteAll?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                        <Star className="w-5 h-5 text-yellow-500" weight="fill" />
                      </motion.div>
                      <span className="text-sm">Hybrid teams of petroleum engineers and software specialists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Clock className="w-5 h-5 text-energy-600" weight="duotone" />
                      </motion.div>
                      <span className="text-sm">Accelerated delivery with measurable field impact</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Users2 className="w-5 h-5 text-energy-600" weight="duotone" />
                      </motion.div>
                      <span className="text-sm">Embedded enablement, training, and change management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                        <Award className="w-5 h-5 text-energy-600" weight="duotone" />
                      </motion.div>
                      <span className="text-sm">Solutions tuned to your workflows, systems, and stakeholders</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Get Started Today</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Ready to transform your operations with our {service.title.toLowerCase()}?
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full energy-gradient text-white">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Brochure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Implementation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our structured approach ensures successful delivery and maximum value
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Diagnostics',
                description: 'Jointly assess business drivers, data landscape, and user workflows',
              },
              {
                step: '02',
                title: 'Blueprint & Architecture',
                description: 'Design technical architecture, delivery roadmap, and change plan',
              },
              {
                step: '03',
                title: 'Build & Deploy',
                description: 'Configure, integrate, and rollout models, platforms, or training',
              },
              {
                step: '04',
                title: 'Optimise & Support',
                description: 'Provide hypercare, coaching, and continuous optimisation',
              },
            ].map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-energy-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Related Services
                </h2>
                <p className="text-xl text-muted-foreground">
                  Explore other solutions that complement this service
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => {
                const RelatedIconComponent = serviceIcons[relatedService.icon as keyof typeof serviceIcons] || Network

                return (
                  <AnimatedSection key={relatedService.id} delay={index * 0.1}>
                    <Card className="card-hover h-full group">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <RelatedIconComponent className="w-6 h-6 text-energy-600" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-energy-600 transition-colors">
                          {relatedService.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {relatedService.shortDescription}
                        </p>
                        <div className="pt-4">
                          <Link href={`/services/${relatedService.slug}`}>
                            <Button variant="ghost" className="p-0 h-auto text-energy-600 hover:text-energy-700 group">
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our {service.title.toLowerCase()} can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/services" className="flex items-center">
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Back to All Services
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

