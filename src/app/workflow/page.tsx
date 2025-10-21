"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Search, Lightbulb, Cog, BarChart3, Target, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'


export default function WorkflowPage() {
  

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      titleRu: "Исследование и анализ",
      description: "We begin by understanding your current operations, challenges, and objectives through comprehensive analysis.",
      descriptionRu: "Мы начинаем с понимания ваших текущих операций, проблем и целей через комплексный анализ.",
      icon: Search,
      details: [
        "Stakeholder interviews and requirements gathering",
        "Current system assessment and gap analysis",
        "Operational process mapping and documentation",
        "Risk assessment and opportunity identification"
      ],
      duration: "2-4 weeks",
      deliverables: ["Requirements Document", "Gap Analysis Report", "Process Maps"]
    },
    {
      step: "02",
      title: "Solution Design",
      titleRu: "Проектирование решения",
      description: "Our experts design a customized solution architecture tailored to your specific needs and constraints.",
      descriptionRu: "Наши эксперты проектируют индивидуальную архитектуру решения, адаптированную под ваши конкретные потребности и ограничения.",
      icon: Lightbulb,
      details: [
        "Solution architecture design and validation",
        "Technology stack selection and justification",
        "Integration strategy and data flow design",
        "Security and compliance framework design"
      ],
      duration: "3-6 weeks",
      deliverables: ["Solution Architecture", "Technical Specifications", "Integration Plan"]
    },
    {
      step: "03",
      title: "Development & Testing",
      titleRu: "Разработка и тестирование",
      description: "We develop and rigorously test the solution using agile methodologies and industry best practices.",
      descriptionRu: "Мы разрабатываем и тщательно тестируем решение, используя agile методологии и отраслевые лучшие практики.",
      icon: Cog,
      details: [
        "Agile development with regular client feedback",
        "Comprehensive testing including unit, integration, and UAT",
        "Performance optimization and scalability testing",
        "Security testing and vulnerability assessment"
      ],
      duration: "8-16 weeks",
      deliverables: ["Working Solution", "Test Results", "Documentation"]
    },
    {
      step: "04",
      title: "Deployment & Integration",
      titleRu: "Развертывание и интеграция",
      description: "We deploy the solution with minimal disruption to your operations and ensure seamless integration.",
      descriptionRu: "Мы развертываем решение с минимальными нарушениями ваших операций и обеспечиваем бесшовную интеграцию.",
      icon: Zap,
      details: [
        "Phased deployment with rollback capabilities",
        "Data migration and system integration",
        "User training and knowledge transfer",
        "Go-live support and monitoring"
      ],
      duration: "2-4 weeks",
      deliverables: ["Deployed Solution", "Training Materials", "Support Documentation"]
    },
    {
      step: "05",
      title: "Optimization & Support",
      titleRu: "Оптимизация и поддержка",
      description: "We provide ongoing support and optimization to ensure maximum value and continuous improvement.",
      descriptionRu: "Мы предоставляем постоянную поддержку и оптимизацию для обеспечения максимальной ценности и непрерывного улучшения.",
      icon: Target,
      details: [
        "Performance monitoring and optimization",
        "Regular system health checks and maintenance",
        "Feature enhancements based on user feedback",
        "24/7 technical support and incident response"
      ],
      duration: "Ongoing",
      deliverables: ["Support Services", "Performance Reports", "Enhancement Roadmap"]
    }
  ]

  const methodologies = [
    {
      title: "Agile Development",
      titleRu: "Agile разработка",
      description: "We use agile methodologies to ensure rapid delivery and continuous client feedback throughout the project.",
      descriptionRu: "Мы используем agile методологии для обеспечения быстрой поставки и постоянной обратной связи клиента на протяжении проекта.",
      icon: Users,
      benefits: ["Faster delivery", "Better quality", "Client involvement", "Flexibility"]
    },
    {
      title: "DevOps Practices",
      titleRu: "DevOps практики",
      description: "Our DevOps approach ensures reliable, scalable, and maintainable solutions with automated deployment.",
      descriptionRu: "Наш DevOps подход обеспечивает надежные, масштабируемые и поддерживаемые решения с автоматизированным развертыванием.",
      icon: Cog,
      benefits: ["Automated deployment", "Continuous integration", "Better reliability", "Faster recovery"]
    },
    {
      title: "Quality Assurance",
      titleRu: "Обеспечение качества",
      description: "Comprehensive testing and quality assurance processes ensure robust, reliable solutions.",
      descriptionRu: "Комплексные процессы тестирования и обеспечения качества гарантируют надежные, стабильные решения.",
      icon: Award,
      benefits: ["Thorough testing", "Bug prevention", "Performance optimization", "User satisfaction"]
    }
  ]

  const tools = [
    { name: "Project Management", tools: ["Jira", "Confluence", "Microsoft Project"] },
    { name: "Development", tools: ["Git", "Docker", "Kubernetes", "CI/CD"] },
    { name: "Testing", tools: ["Selenium", "Jest", "Postman", "LoadRunner"] },
    { name: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "New Relic"] },
    { name: "Communication", tools: ["Slack", "Teams", "Zoom", "Miro"] },
    { name: "Documentation", tools: ["Notion", "GitBook", "Swagger", "Docusaurus"] }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Our Workflow
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A proven process that delivers exceptional results
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our 5-Step Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From initial discovery to ongoing optimization, we follow a structured approach that ensures success
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-energy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-energy-600 font-medium">{step.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
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
                            <step.icon className="w-12 h-12 text-energy-600" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <div className="flex items-center justify-center space-x-2 text-sm text-energy-600">
                            <Clock className="w-4 h-4" />
                            <span>{step.duration}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
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
                Industry best practices that ensure project success
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

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Tools & Technologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern tools and technologies we use to deliver exceptional results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((toolCategory, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{toolCategory.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {toolCategory.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {tool}
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

      {/* Success Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Our Success Metrics
              </h2>
              <p className="text-xl text-muted-foreground">
                Measurable results that demonstrate our process effectiveness
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "On-Time Delivery", value: "95%", description: "Projects delivered on schedule" },
              { icon: Award, title: "Client Satisfaction", value: "98%", description: "Client satisfaction rating" },
              { icon: BarChart3, title: "Quality Score", value: "4.8/5", description: "Average quality rating" },
              { icon: Zap, title: "Efficiency Gain", value: "30%", description: "Average efficiency improvement" }
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our proven workflow can deliver exceptional results for your energy operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Process Guide
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
