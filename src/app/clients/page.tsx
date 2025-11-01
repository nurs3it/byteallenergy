"use client"

import { Building2, MapPin, Award, Users, Globe, TrendingUp, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { StatCounter } from '@/components/animations/StatCounter'

import { clients, clientStats } from '@/lib/data/clients'

export default function ClientsPage() {
  

  const stats = [
    { label: "Total Clients", value: clientStats.totalClients, suffix: "+" },
    { label: "Countries Served", value: clientStats.countries, suffix: "" },
    { label: "Projects Completed", value: clientStats.projectsCompleted, suffix: "+" },
    { label: "Years of Experience", value: clientStats.yearsOfExperience, suffix: "" },
  ]

  const industries = [
    { name: "National Oil Companies", count: 15, icon: Building2 },
    { name: "International Operators", count: 20, icon: Globe },
    { name: "Service Companies", count: 10, icon: Users },
    { name: "Technology Partners", count: 5, icon: Award },
  ]

  const regions = [
    { name: "Kazakhstan", count: 25, flag: "🇰🇿" },
    { name: "Denmark", count: 8, flag: "🇩🇰" },
    { name: "Norway", count: 6, flag: "🇳🇴" },
    { name: "Netherlands", count: 4, flag: "🇳🇱" },
    { name: "United Kingdom", count: 3, flag: "🇬🇧" },
    { name: "France", count: 2, flag: "🇫🇷" },
    { name: "Others", count: 2, flag: "🌍" },
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Our Clients
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
                Trusted by national, international, and independent operators across Central Asia and Europe
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                Outcomes that demonstrate the scale and depth of our partnerships
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

      {/* Client Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
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
                <Card className="card-hover h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-linear-to-br from-energy-500 to-energy-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
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
                      <div className="text-xs font-medium text-energy-600">{client.projectType}</div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Diverse expertise across the energy sector
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto">
                      <industry.icon className="w-8 h-8 text-energy-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.name}</h3>
                    <div className="text-3xl font-bold gradient-text">{industry.count}+</div>
                    <p className="text-sm text-muted-foreground">Clients</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Global Reach
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving clients across multiple countries and regions
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{region.flag}</span>
                          <div>
                            <h3 className="font-semibold">{region.name}</h3>
                            <p className="text-sm text-muted-foreground">{region.count} clients</p>
                          </div>
                        </div>
                        <div className="text-2xl font-bold gradient-text">{region.count}</div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
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
                <Card className="card-hover text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto">
                      <metric.icon className="w-8 h-8 text-energy-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{metric.title}</h3>
                    <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Join Our Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Become part of our growing client portfolio and experience the benefits of our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-energy-600 text-white rounded-lg hover:bg-energy-700 transition-colors">
                  Start Your Project
                </button>
                <button className="px-8 py-3 border border-energy-600 text-energy-600 rounded-lg hover:bg-energy-50 dark:hover:bg-energy-950 transition-colors">
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
