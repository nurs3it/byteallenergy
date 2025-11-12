"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ShareNetwork as Network, Cpu, Activity, Drop as Droplets, Code, ChartBar as BarChart3, Users } from 'phosphor-react'
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
      <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {content.services.title}
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
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
                        <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button size="lg" className="energy-gradient text-white touch-target">
                    Talk to Our Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative">
                <div className="w-full h-96 bg-linear-to-br from-energy-500/20 to-oil-500/20 rounded-2xl border border-energy-200/50 dark:border-energy-800/50 flex items-center justify-center">
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
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Integrated modelling, IAM & DOF services, training, and software engineering tailored to upstream operations
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
                title: "Discovery & Diagnostics",
                description: "We benchmark your current workflows, technology landscape, and asset challenges to define clear outcomes."
              },
              {
                step: "02", 
                title: "Solution Blueprint",
                description: "Our experts design an integrated roadmap across modelling, IAM, software, and training to deliver impact fast."
              },
              {
                step: "03",
                title: "Implementation & Enablement",
                description: "We deploy digital twins, automation, and training programmes while ensuring your teams are enabled at every step."
              },
              {
                step: "04",
                title: "Optimisation & Support",
                description: "Continuous optimisation, managed services, and technical support keep your assets delivering sustained value."
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
      <section className="py-20 bg-linear-to-br from-energy-900 via-oil-900 to-black text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-energy-100/90 max-w-2xl mx-auto">
                Let&apos;s discuss how our services can transform your energy operations and drive better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90 touch-target">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="touch-target border-energy-100 text-energy-100 hover:bg-energy-100/10"
                >
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
