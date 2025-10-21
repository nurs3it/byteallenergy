"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Network, Cpu, Activity, Droplets, Code, BarChart3, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

import { services } from '@/lib/data/services'
import { content } from '@/lib/data/company'
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

export default function ServicesPage() {
  

  const featuredService = services.find(service => service.id === 'integrated-production-modelling')
  const otherServices = services.filter(service => service.id !== 'integrated-production-modelling')

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                {content.services.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {content.services.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Service - Integrated Production Modelling */}
      {featuredService && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  {featuredService.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {featuredService.description}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center">
                    <Network className="w-8 h-8 text-energy-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Key Features</h3>
                  <ul className="space-y-4">
                    {featuredService.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button size="lg" className="energy-gradient text-white touch-target">
                    Learn More About This Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-energy-500/20 to-oil-500/20 rounded-2xl border border-energy-200/50 dark:border-energy-800/50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-energy-600 rounded-full flex items-center justify-center mx-auto">
                        <Network className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Integrated Production Modelling</h3>
                      <p className="text-muted-foreground">Advanced asset modeling solutions</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                All Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your energy operations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Network
              
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Card className="card-hover h-full group">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-energy-600" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-energy-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {service.shortDescription}
                      </p>
                      <div className="pt-4">
                        <Link href={`/services/${service.slug}`}>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How we deliver exceptional results for your energy operations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your current operations and identify optimization opportunities."
              },
              {
                step: "02", 
                title: "Solution Design",
                description: "Custom digital solutions designed specifically for your needs."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Expert implementation with minimal disruption to your operations."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and optimization for maximum efficiency."
              }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our services can transform your energy operations and drive better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90 touch-target">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="touch-target">
                  Download Our Brochure
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
