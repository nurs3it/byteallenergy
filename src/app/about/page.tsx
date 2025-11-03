"use client"

import { CheckCircle, Award, Users, Globe, Target, Lightbulb, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { StatCounter } from '@/components/animations/StatCounter'
import { ParallaxImage } from '@/components/animations/ParallaxImage'
import { content, companyData } from '@/lib/data/company'

export default function AboutPage() {

  const stats = [
    { label: content.about.founded, value: 2017, suffix: '' },
    { label: content.about.teamSize, value: 10, suffix: '+' },
    { label: content.about.offices, value: 2, suffix: '' },
  ]

  const values = [
    {
      icon: Users,
      title: "Client Partnerships",
      description: "Client-first partnerships that are measured by the impact they unlock for your assets."
    },
    {
      icon: Target,
      title: "Engineering Innovation",
      description: "Innovation rooted in petroleum engineering expertise and tuned to real operational needs."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Transparent collaboration, continuous improvement, and ownership of every deliverable."
    },
    {
      icon: Lightbulb,
      title: "Integrated Teams",
      description: "Domain experts and software engineers working as one team from concept to deployment."
    }
  ]

  const timeline = [
    {
      year: "2017",
      title: "Company Founded",
      titleRu: "Основание компании",
      description: "ByteAll Energy was established with a vision to transform oil & gas operations through digital solutions.",
      descriptionRu: "ByteAll Energy была основана с видением трансформации нефтегазовых операций через цифровые решения."
    },
    {
      year: "2018",
      title: "First Major Project",
      titleRu: "Первый крупный проект",
      description: "Successfully delivered our first integrated production modeling solution for a major Kazakh oil operator.",
      descriptionRu: "Успешно реализовали наше первое решение интегрированного моделирования производства для крупного казахстанского нефтяного оператора."
    },
    {
      year: "2020",
      title: "International Expansion",
      titleRu: "Международная экспансия",
      description: "Opened our representative office in Denmark to serve European energy markets.",
      descriptionRu: "Открыли представительство в Дании для обслуживания европейских энергетических рынков."
    },
    {
      year: "2022",
      title: "AI Integration",
      titleRu: "Интеграция ИИ",
      description: "Launched AI-powered analytics and machine learning solutions for predictive maintenance.",
      descriptionRu: "Запустили решения аналитики на основе ИИ и машинного обучения для предиктивного обслуживания."
    },
    {
      year: "2024",
      title: "Digital Transformation Leader",
      titleRu: "Лидер цифровой трансформации",
      description: "Recognized as a leading provider of digital oilfield solutions in Central Asia.",
      descriptionRu: "Признаны ведущим поставщиком решений цифровых нефтяных месторождений в Центральной Азии."
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {content.about.title}
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
                {content.about.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.about.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Mission", text: content.about.mission },
                    { label: "Vision", text: content.about.vision }
                  ].map(({ label, text }) => (
                    <Card key={label} className="h-full">
                      <CardContent className="p-5 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-energy-600" />
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-energy-600">
                            {label}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {text}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our founding in 2017, we have been at the forefront of digital transformation in the oil & gas industry. 
                  Our journey began with a simple yet powerful vision: to bridge the gap between traditional engineering practices 
                  and modern digital solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  {companyData.services.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 light:bg-energy-50 dark:bg-black px-3 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-energy-600" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <ParallaxImage speed={0.3}>
                <div className="w-full h-96 bg-linear-to-br from-energy-500/20 to-oil-500/20 rounded-2xl border border-energy-200/50 dark:border-energy-800/50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-energy-600 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Since 2017</h3>
                      <p className="text-muted-foreground">Transforming Energy Operations</p>
                    </div>
                  </div>
                </ParallaxImage>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                By the Numbers
              </h2>
              <p className="text-xl text-muted-foreground">
                Our impact in the energy industry
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-energy-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our company&apos;s growth
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-energy-200 dark:bg-energy-800"></div>
              
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
                    {/* Timeline dot */}
                    <div className="shrink-0 w-16 h-16 bg-energy-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 mx-auto sm:mx-0">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Locations
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving clients across multiple regions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Headquarters */}
            <AnimatedSection delay={0.1}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-energy-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Headquarters</h3>
                      <p className="text-muted-foreground">
                        {companyData.headquarters.address}<br />
                        {companyData.headquarters.city}, {companyData.headquarters.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* International Office */}
            <AnimatedSection delay={0.2}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-energy-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">International Office</h3>
                      <p className="text-muted-foreground">
                        {companyData.internationalOffices[0].city}, {companyData.internationalOffices[0].country}<br />
                        {companyData.internationalOffices[0].address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the growing number of energy companies that trust ByteAll Energy for their digital transformation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-energy-600 text-white rounded-lg hover:bg-energy-700 transition-colors touch-target">
                  Get in Touch
                </button>
                <button className="px-8 py-3 border border-energy-600 text-energy-600 rounded-lg hover:bg-energy-50 dark:hover:bg-energy-950 transition-colors touch-target">
                  View Our Services
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
