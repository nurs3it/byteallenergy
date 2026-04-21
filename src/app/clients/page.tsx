"use client"

import { MapPin, Medal as Award, Users, TrendUp as TrendingUp, Shield } from 'phosphor-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { StatCounter } from '@/components/animations/StatCounter'

import { clients, clientStats } from '@/lib/data/clients'
import { PageBanner } from '@/components/layout/PageBanner'

export default function ClientsPage() {
  

  const stats = [
    { label: "Total Clients", value: clientStats.totalClients, suffix: "" },
    { label: "Countries Served", value: clientStats.countries, suffix: "" },
    { label: "Projects Completed", value: clientStats.projectsCompleted, suffix: "" },
  ]

  return (
    <div className="min-h-screen pt-8">
      <PageBanner
        title="Our Clients"
        subtitle="Trusted by leading energy companies across the globe"
      />

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                Outcomes that demonstrate the scale and depth of our partnerships
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
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

      {/* Client Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Client Portfolio
              </h2>
              <p className="text-xl text-muted-foreground">
                Leading energy companies that trust our solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <AnimatedSection key={client.id} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-lg">
                        {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{client.industry}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{client.country}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{client.description}</p>
                    <div className="pt-2 border-t">
                      <div className="text-xs font-medium text-primary">{client.projectType}</div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Success Metrics
              </h2>
              <p className="text-xl text-muted-foreground">
                Measurable results that demonstrate our value
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Efficiency Improvement",
                value: "25%",
                description: "Average increase in operational efficiency"
              },
              {
                icon: Shield,
                title: "Uptime",
                value: "99.9%",
                description: "System reliability and availability"
              },
              {
                icon: Award,
                title: "Client Satisfaction",
                value: "98%",
                description: "Client satisfaction rating"
              },
              {
                icon: Users,
                title: "Team Growth",
                value: "300%",
                description: "Team expansion since 2017"
              }
            ].map((metric, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-accent dark:bg-accent rounded-sm flex items-center justify-center mx-auto">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{metric.title}</h3>
                    <div className="text-3xl font-bold text-primary">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent dark:bg-accent">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Join Our Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Become part of our growing client portfolio and experience the benefits of our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors">
                  Start Your Project
                </button>
                <button className="px-8 py-3 border border-primary text-primary rounded-sm hover:bg-accent dark:hover:bg-accent transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
