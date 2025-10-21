"use client"

import { Mail, Linkedin, Award, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

import { teamMembers } from '@/lib/data/team'

export default function TeamPage() {
  

  const leadership = teamMembers.filter(member => member.isLeadership)
  const team = teamMembers.filter(member => !member.isLeadership)

  const teamStats = [
    { label: "Team Members", value: 25, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Countries", value: 5, suffix: "" },
    { label: "Languages", value: 8, suffix: "" },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in digital oilfield technology."
    },
    {
      icon: Shield,
      title: "Reliability", 
      description: "Our solutions are built to withstand the demanding conditions of oil & gas operations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges and goals."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Expert professionals dedicated to transforming energy operations
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Team at a Glance
              </h2>
              <p className="text-xl text-muted-foreground">
                Diverse expertise united by a common vision
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.value}{stat.suffix}
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

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Visionary leaders driving innovation in energy technology
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-energy-500 to-energy-700 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-oil-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-energy-600 font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-energy-50 dark:bg-energy-950 text-energy-700 dark:text-energy-300 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-energy-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-energy-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Talented professionals bringing diverse skills and perspectives
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card className="card-hover h-full group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-energy-500 to-energy-700 rounded-full mx-auto flex items-center justify-center text-white text-lg font-bold group-hover:scale-105 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-energy-600 font-medium text-sm">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-xs">Expertise</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-energy-50 dark:bg-energy-950 text-energy-700 dark:text-energy-300 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-energy-600 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-energy-600 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Team Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our team and shape our culture
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
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence in energy technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline">
                  Send Your Resume
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
