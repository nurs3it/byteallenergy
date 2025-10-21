"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Search, Palette, Code, TestTube, Rocket, Users, GitBranch, Shield, Zap, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'


export default function ProductFlowPage() {
  

  const developmentStages = [
    {
      stage: "01",
      title: "Discovery & Research",
      titleRu: "Исследование и анализ",
      description: "We begin by understanding your business needs, user requirements, and technical constraints through comprehensive research.",
      descriptionRu: "Мы начинаем с понимания ваших бизнес-потребностей, требований пользователей и технических ограничений через комплексное исследование.",
      icon: Search,
      duration: "2-3 weeks",
      activities: [
        "Stakeholder interviews and user research",
        "Market analysis and competitive research",
        "Technical feasibility assessment",
        "Requirements gathering and documentation",
        "User persona development",
        "Feature prioritization and roadmap planning"
      ],
      deliverables: ["Research Report", "User Personas", "Feature Roadmap", "Technical Assessment"]
    },
    {
      stage: "02",
      title: "Design & Prototyping",
      titleRu: "Дизайн и прототипирование",
      description: "Our design team creates intuitive user interfaces and experiences that align with your brand and user needs.",
      descriptionRu: "Наша команда дизайнеров создает интуитивные пользовательские интерфейсы и опыт, соответствующие вашему бренду и потребностям пользователей.",
      icon: Palette,
      duration: "3-4 weeks",
      activities: [
        "User experience (UX) design and wireframing",
        "User interface (UI) design and visual design",
        "Interactive prototyping and user testing",
        "Design system creation and component library",
        "Accessibility and responsive design",
        "Design review and iteration cycles"
      ],
      deliverables: ["Wireframes", "UI Designs", "Interactive Prototypes", "Design System"]
    },
    {
      stage: "03",
      title: "Development & Implementation",
      titleRu: "Разработка и реализация",
      description: "Our development team builds robust, scalable solutions using modern technologies and best practices.",
      descriptionRu: "Наша команда разработчиков создает надежные, масштабируемые решения, используя современные технологии и лучшие практики.",
      icon: Code,
      duration: "8-12 weeks",
      activities: [
        "Frontend and backend development",
        "Database design and implementation",
        "API development and integration",
        "Third-party service integration",
        "Code review and quality assurance",
        "Version control and collaboration"
      ],
      deliverables: ["Working Application", "API Documentation", "Code Repository", "Technical Documentation"]
    },
    {
      stage: "04",
      title: "Testing & Quality Assurance",
      titleRu: "Тестирование и обеспечение качества",
      description: "Comprehensive testing ensures your product is reliable, secure, and performs optimally across all scenarios.",
      descriptionRu: "Комплексное тестирование обеспечивает надежность, безопасность и оптимальную производительность вашего продукта во всех сценариях.",
      icon: TestTube,
      duration: "2-3 weeks",
      activities: [
        "Unit testing and integration testing",
        "User acceptance testing (UAT)",
        "Performance testing and optimization",
        "Security testing and vulnerability assessment",
        "Cross-browser and device testing",
        "Load testing and scalability testing"
      ],
      deliverables: ["Test Results", "Performance Report", "Security Assessment", "Bug Reports"]
    },
    {
      stage: "05",
      title: "Deployment & Launch",
      titleRu: "Развертывание и запуск",
      description: "We deploy your product with minimal downtime and provide comprehensive launch support.",
      descriptionRu: "Мы развертываем ваш продукт с минимальным временем простоя и предоставляем комплексную поддержку запуска.",
      icon: Rocket,
      duration: "1-2 weeks",
      activities: [
        "Production environment setup",
        "Database migration and data backup",
        "Application deployment and configuration",
        "Domain setup and SSL certificate installation",
        "Monitoring and logging setup",
        "Launch support and go-live assistance"
      ],
      deliverables: ["Deployed Application", "Deployment Guide", "Monitoring Setup", "Launch Support"]
    },
    {
      stage: "06",
      title: "Maintenance & Support",
      titleRu: "Обслуживание и поддержка",
      description: "Ongoing support and maintenance ensure your product continues to perform optimally and evolves with your needs.",
      descriptionRu: "Постоянная поддержка и обслуживание обеспечивают оптимальную производительность вашего продукта и его развитие в соответствии с вашими потребностями.",
      icon: Shield,
      duration: "Ongoing",
      activities: [
        "24/7 monitoring and incident response",
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Feature enhancements and updates",
        "User support and training",
        "Backup and disaster recovery"
      ],
      deliverables: ["Support Services", "Maintenance Reports", "Feature Updates", "Performance Analytics"]
    }
  ]

  const methodologies = [
    {
      title: "Agile Development",
      titleRu: "Agile разработка",
      description: "We use agile methodologies to ensure rapid delivery, continuous feedback, and iterative improvement.",
      descriptionRu: "Мы используем agile методологии для обеспечения быстрой поставки, постоянной обратной связи и итеративного улучшения.",
      icon: GitBranch,
      benefits: ["Sprint-based development", "Regular client feedback", "Flexible scope", "Faster delivery"]
    },
    {
      title: "DevOps Practices",
      titleRu: "DevOps практики",
      description: "Our DevOps approach ensures reliable, scalable, and maintainable solutions with automated deployment.",
      descriptionRu: "Наш DevOps подход обеспечивает надежные, масштабируемые и поддерживаемые решения с автоматизированным развертыванием.",
      icon: Zap,
      benefits: ["CI/CD pipelines", "Automated testing", "Infrastructure as code", "Continuous monitoring"]
    },
    {
      title: "User-Centered Design",
      titleRu: "Пользователь-ориентированный дизайн",
      description: "We prioritize user needs and experience throughout the entire development process.",
      descriptionRu: "Мы приоритизируем потребности и опыт пользователей на протяжении всего процесса разработки.",
      icon: Users,
      benefits: ["User research", "Usability testing", "Accessibility", "Responsive design"]
    }
  ]

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
    cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    tools: ["Git", "Jira", "Figma", "Postman", "Jest"]
  }

  const qualityMetrics = [
    { icon: Target, title: "Code Coverage", value: "95%", description: "Test coverage across all modules" },
    { icon: Shield, title: "Security Score", value: "A+", description: "Security assessment rating" },
    { icon: Zap, title: "Performance", value: "98%", description: "Uptime and performance metrics" },
    { icon: Users, title: "User Satisfaction", value: "4.9/5", description: "Average user rating" }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Product Development Flow
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                How we build exceptional software products for the energy industry
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Stages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our 6-Stage Development Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From initial concept to ongoing maintenance, we follow a proven methodology that ensures success
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            {developmentStages.map((stage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-energy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {stage.stage}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{stage.title}</h3>
                          <p className="text-energy-600 font-medium">{stage.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Activities:</h4>
                        <ul className="space-y-2">
                          {stage.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.deliverables.map((deliverable, deliverableIndex) => (
                            <span key={deliverableIndex} className="px-3 py-1 bg-energy-50 dark:bg-energy-950 text-energy-700 dark:text-energy-300 text-sm rounded-full">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Card className="card-hover">
                        <CardContent className="p-8 text-center">
                          <div className="w-24 h-24 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <stage.icon className="w-12 h-12 text-energy-600" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                          <p className="text-muted-foreground mb-4">{stage.description}</p>
                          <div className="flex items-center justify-center space-x-2 text-sm text-energy-600">
                            <span>{stage.duration}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < developmentStages.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-energy-600 to-transparent"></div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Methodologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Proven approaches that ensure project success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto">
                      <methodology.icon className="w-8 h-8 text-energy-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{methodology.title}</h3>
                    <p className="text-muted-foreground">{methodology.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Benefits:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {methodology.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-2 py-1 bg-energy-50 dark:bg-energy-950 text-energy-700 dark:text-energy-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern technologies and tools we use to build exceptional products
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <AnimatedSection key={category} delay={index * 0.1}>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg capitalize">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Quality Metrics
              </h2>
              <p className="text-xl text-muted-foreground">
                Measurable standards that ensure exceptional product quality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Build Your Product?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our proven development process can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
