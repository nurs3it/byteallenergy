"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Star, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { StatCounter } from '@/components/animations/StatCounter'
import { content, companyData } from '@/lib/data/company'
import { services } from '@/lib/data/services'
import { testimonials } from '@/lib/data/testimonials'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const featuredServices = services.filter(service => service.featured)
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Use intersection observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !videoLoaded) {
              setVideoLoaded(true)
              // Load video only when visible
              video.load()
            }
          })
        },
        { threshold: 0.1 }
      )
      
      observer.observe(video)
      
      // Check if video URL is accessible
      const checkVideoUrl = async () => {
        try {
          await fetch('https://ik.imagekit.io/nurseiit/MORE17%20(2).mp4?updatedAt=1761024101874', {
            method: 'HEAD',
            mode: 'no-cors'
          })
          console.log('Video URL is accessible')
        } catch (error) {
          console.log('Video URL is not accessible:', error)
        }
      }
      
      if (videoLoaded) {
        checkVideoUrl()
        
        // Force play the video
        const playVideo = async () => {
          try {
            await video.play()
            console.log('Video playing successfully')
          } catch (error) {
            console.log('Video autoplay failed:', error)
            // Try to play on user interaction
            document.addEventListener('click', () => {
              video.play().catch(console.log)
            }, { once: true })
          }
        }
        
        playVideo()
      }
      
      return () => observer.disconnect()
    }
  }, [videoLoaded])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload={isMobile ? "none" : "metadata"}
                crossOrigin="anonymous"
                poster={isMobile ? "/video-poster.jpg" : undefined}
                onError={(e) => {
                  console.log('Video failed to load:', e);
                  // Hide video and show fallback
                  e.currentTarget.style.display = 'none';
                }}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
                onLoadedData={() => console.log('Video data loaded')}
                onLoadedMetadata={() => console.log('Video metadata loaded')}
              >
                {isMobile ? (
                  <source src="https://ik.imagekit.io/nurseiit/MORE17%20(2).mp4?updatedAt=1761024101874&tr=w-480,h-270,q-70" type="video/mp4" />
                ) : (
                  <>
                    <source src="https://ik.imagekit.io/nurseiit/MORE17%20(2).mp4?updatedAt=1761024101874" type="video/mp4" />
                    <source src="https://ik.imagekit.io/nurseiit/MORE17%20(2).mp4" type="video/mp4" />
                  </>
                )}
                Your browser does not support the video tag.
              </video>
              
              {/* Gradient background for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
            </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    {content.hero.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-energy-100/90 font-medium">
                    {content.hero.subtitle}
                  </p>
                  <p className="text-lg text-energy-100/80 leading-relaxed">
                    {content.hero.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="energy-gradient text-white hover:opacity-90 transition-opacity touch-target">
                    {content.hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group touch-target border-white text-white hover:bg-white/10"
                  >
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    {content.hero.learnMore}
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
                >
                  {[
                    { label: content.about.founded, value: 2017, suffix: '' },
                    { label: content.about.teamSize, value: 25, suffix: '+' },
                    { label: content.about.offices, value: 2, suffix: '' },
                    { label: content.about.countries, value: 3, suffix: '' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        <StatCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-white/70 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                {content.services.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {content.services.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-energy-100 dark:bg-energy-900 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-energy-600 rounded" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.shortDescription}</p>
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="ghost" className="p-0 h-auto text-energy-600 hover:text-energy-700">
                          Learn More <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  {content.about.title}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {content.about.subtitle}
                </p>
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
                          <span className="text-xs font-semibold uppercase tracking-wide text-energy-600">
                            {label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {text}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                <div className="w-full h-96 bg-linear-to-br from-energy-500/20 to-oil-500/20 rounded-2xl border border-energy-200/50 dark:border-energy-800/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-energy-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Since 2017</h3>
                    <p className="text-muted-foreground">Transforming Energy Operations</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by leading energy companies worldwide
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="pt-4 border-t">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our digital solutions can optimize your energy operations and drive better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90 touch-target">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="touch-target">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
