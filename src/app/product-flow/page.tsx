"use client"

import { ArrowRight, CheckCircle, Search, Palette, Code, TestTube, Rocket, Users, GitBranch, Shield, Zap, Target, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'


export default function ProductFlowPage() {
  

  const developmentStages = [
    {
      stage: "01",
      title: "Data & Workflow Discovery",
      titleRu: "Data & Workflow Discovery",
      description: "We benchmark your existing production workflows, data sources, and decision cycles to shape the ProdCast backlog and value story.",
      descriptionRu: "We benchmark your existing production workflows, data sources, and decision cycles to shape the ProdCast backlog and value story.",
      icon: Search,
      duration: "2-3 weeks",
      activities: [
        "Stakeholder workshops and use case mapping",
        "Data inventory, quality checks, and governance review",
        "Forecasting and reporting pain-point analysis",
        "Requirements gathering and prioritised backlog",
        "Value hypothesis, KPIs, and adoption plan",
        "Roadmap alignment with existing initiatives"
      ],
      deliverables: ["Discovery Report", "Data Catalogue", "ProdCast Roadmap", "Success Metrics"]
    },
    {
      stage: "02",
      title: "Experience & Forecast Design",
      titleRu: "Experience & Forecast Design",
      description: "We prototype forecasting dashboards, simulation flows, and collaboration experiences tailored to your teams.",
      descriptionRu: "We prototype forecasting dashboards, simulation flows, and collaboration experiences tailored to your teams.",
      icon: Palette,
      duration: "3-4 weeks",
      activities: [
        "User journey mapping and UX wireframes",
        "Dashboard and scenario design systems",
        "Interactive prototypes for planner and operator views",
        "Forecast visualisation and alerting concepts",
        "Feedback loops with engineers and leadership",
        "Design playbook for future enhancements"
      ],
      deliverables: ["UX/UI Designs", "Interactive Prototype", "Design System", "Comms Pack"]
    },
    {
      stage: "03",
      title: "Build & Integration",
      titleRu: "Build & Integration",
      description: "We deliver data pipelines, forecasting engines, and collaboration features while configuring models with your engineers.",
      descriptionRu: "We deliver data pipelines, forecasting engines, and collaboration features while configuring models with your engineers.",
      icon: Code,
      duration: "8-12 weeks",
      activities: [
        "Data ingestion, cleansing, and historian integration",
        "Forecast engine development and calibration",
        "Scenario simulation and comparison tooling",
        "Collaboration, comments, and alerting features",
        "Automated testing, CI/CD, and quality gates",
        "Knowledge transfer with engineering counterparts"
      ],
      deliverables: ["Configured ProdCast", "API & Data Contracts", "Operations Playbook", "Technical Documentation"]
    },
    {
      stage: "04",
      title: "Validation & Hardening",
      titleRu: "Validation & Hardening",
      description: "We validate forecasts, run shadow exercises, and harden the platform for operational reliability and security.",
      descriptionRu: "We validate forecasts, run shadow exercises, and harden the platform for operational reliability and security.",
      icon: TestTube,
      duration: "2-3 weeks",
      activities: [
        "Unit, integration, and user acceptance testing",
        "Parallel run and validation against legacy forecasts",
        "Performance, load, and reliability testing",
        "Security assessments and compliance reviews",
        "Access and permissions hardening",
        "Feedback incorporation and final tuning"
      ],
      deliverables: ["Validation Report", "Performance Benchmarks", "Security Assessment", "Release Checklist"]
    },
    {
      stage: "05",
      title: "Go-Live & Enablement",
      titleRu: "Go-Live & Enablement",
      description: "We launch ProdCast, onboard planners and engineers, and provide hypercare until the new cadence is established.",
      descriptionRu: "We launch ProdCast, onboard planners and engineers, and provide hypercare until the new cadence is established.",
      icon: Rocket,
      duration: "1-2 weeks",
      activities: [
        "Production environment readiness",
        "Cutover planning and execution",
        "Training labs, playbooks, and communications",
        "Hypercare support and KPI tracking",
        "User feedback loops and enhancement backlog",
        "Executive reporting and adoption dashboard"
      ],
      deliverables: ["Go-Live Checklist", "Training Materials", "Hypercare Dashboard", "Adoption Report"]
    },
    {
      stage: "06",
      title: "Managed Services & Evolution",
      titleRu: "Managed Services & Evolution",
      description: "ByteAll Energy manages ProdCast, delivers enhancements, and keeps analytics aligned with evolving asset priorities.",
      descriptionRu: "ByteAll Energy manages ProdCast, delivers enhancements, and keeps analytics aligned with evolving asset priorities.",
      icon: Shield,
      duration: "Ongoing",
      activities: [
        "24/7 monitoring, incident response, and SLA reporting",
        "Model recalibration and analytics enhancements",
        "User support, refresher training, and new feature rollouts",
        "Security updates, compliance, and audit support",
        "Performance reviews and value storytelling",
        "Roadmap alignment with business priorities"
      ],
      deliverables: ["Managed Service Reports", "Enhancement Releases", "Training Cadence", "Value Scorecards"]
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
      <section className="py-20 bg-linear-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                ProdCast Delivery Flow
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                How ByteAll Energy designs, builds, and sustains the ProdCast production forecasting platform
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ProdCast Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  ProdCast – Your Edge in Production Optimisation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ProdCast combines integrated production modelling, IAM data streams, and AI-enabled analytics to deliver fast, reliable production forecasts for multidisciplinary teams.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automates data collection, cleansing, and analytics so planners focus on decisions rather than preparation",
                    "Integrates real-time field data with machine learning workflows to generate precise, context-aware forecasts",
                    "Enables parallel simulations and scenario comparisons to evaluate the optimal production strategy",
                    "Delivers intuitive dashboards, alerting, and collaboration tools that align engineering, operations, and leadership"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <AnimatedSection direction="right">
                <Card className="card-hover h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-20 h-20 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-10 h-10 text-energy-600" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Within weeks, ProdCast provides trusted forecasts, streamlined collaboration, and tangible uplift in production optimisation initiatives, all backed by ByteAll Energy&apos;s managed services.
                    </p>
                    <Button variant="outline" size="lg" className="touch-target">
                      See ProdCast in Action
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
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
                              <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" />
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
                      <div className="w-0.5 h-16 bg-linear-to-b from-energy-600 to-transparent"></div>
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
