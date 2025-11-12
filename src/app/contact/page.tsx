"use client"

import { MapPin, Envelope as Mail, LinkedinLogo as Linkedin, Globe, Clock, Buildings as Building2, Users } from 'phosphor-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { companyData } from '@/lib/data/company'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: companyData.email,
      href: `mailto:${companyData.email}`,
      description: "Send us an email anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@byteallenergy",
      href: companyData.linkedin,
      description: "Connect with us on LinkedIn",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Globe,
      title: "Website",
      value: "byteallenergy.com",
      href: companyData.website,
      description: "Visit our official website",
      gradient: "from-sky-500 to-blue-600"
    }
  ]

  const offices = [
    {
      type: "Headquarters",
      city: companyData.headquarters.city,
      country: companyData.headquarters.country,
      address: companyData.headquarters.address,
      flag: "🇩🇰",
      timezone: "UTC+1",
      icon: Building2,
      description: "Main office and operations hub"
    },
    {
      type: "International Office",
      city: companyData.internationalOffices[0].city,
      country: companyData.internationalOffices[0].country,
      address: companyData.internationalOffices[0].address,
      flag: "🇰🇿",
      timezone: "UTC+5",
      icon: Globe,
      description: "Central Asian operations and client support"
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-950 via-energy-900 to-oil-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-energy-600/20 rounded-full mb-6"
              >
                <MapPin className="w-10 h-10 text-energy-400" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
                Let&apos;s discuss how we can help transform your energy operations
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ways to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose your preferred method of communication
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                <motion.a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="card-hover h-full text-center group">
                    <CardContent className="p-8">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <method.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                      <p className="text-energy-600 font-medium group-hover:text-energy-700 transition-colors">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Locations
              </h2>
              <p className="text-xl text-muted-foreground">
                Visit us or connect remotely
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-energy-500 to-energy-700 rounded-xl flex items-center justify-center">
                        <office.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{office.flag}</span>
                          <h3 className="text-xl font-semibold">{office.type}</h3>
                        </div>
                        <p className="text-muted-foreground">{office.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{office.city}, {office.country}</p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-energy-600 shrink-0" />
                        <p className="text-sm text-muted-foreground">{office.timezone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Company Information
              </h2>
              <p className="text-xl text-muted-foreground">
                Registered and operating globally
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-energy-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Legal Name</p>
                  <p className="font-semibold">{companyData.legalName}</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-energy-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Company Type</p>
                  <p className="font-semibold">{companyData.type}</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-energy-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Established</p>
                  <p className="font-semibold">2017</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-energy-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-semibold text-sm">Oil & Gas Digitalization</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

