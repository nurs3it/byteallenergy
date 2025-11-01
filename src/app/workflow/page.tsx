"use client"

import { ArrowRight, CheckCircle, Users, Search, Lightbulb, Cog, BarChart3, Target, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/animations/AnimatedSection'


export default function WorkflowPage() {
  

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Diagnostics",
      titleRu: "Discovery & Diagnostics",
      description: "We collaborate with asset, production, and IT teams to benchmark your current workflows, technology, and data readiness and to define measurable outcomes.",
      descriptionRu: "We collaborate with asset, production, and IT teams to benchmark your current workflows, technology, and data readiness and to define measurable outcomes.",
      icon: Search,
      details: [
        "Stakeholder interviews and operational diagnostics",
        "System, data, and workflow gap analysis",
        "Value hypothesis, KPIs, and success definition",
        "Risk register and enablement strategy"
      ],
      duration: "2-4 weeks",
      deliverables: ["Discovery Report", "Gap & Value Matrix", "Outcome Charter"]
    },
    {
      step: "02",
      title: "Solution Blueprint",
      titleRu: "Solution Blueprint",
      description: "We co-create an integrated architecture across modelling, IAM/DOF, software, and training so every initiative lands together.",
      descriptionRu: "We co-create an integrated architecture across modelling, IAM/DOF, software, and training so every initiative lands together.",
      icon: Lightbulb,
      details: [
        "Solution architecture and delivery roadmap",
        "Platform, tooling, and integration design",
        "Change management, training, and adoption plan",
        "Security, governance, and data model definition"
      ],
      duration: "3-6 weeks",
      deliverables: ["Blueprint & Roadmap", "Architecture Pack", "Enablement Plan"]
    },
    {
      step: "03",
      title: "Build & Integration",
      titleRu: "Build & Integration",
      description: "Hybrid squads deliver digital twins, IAM/DOF workflows, analytics, and software releases while iterating with your users.",
      descriptionRu: "Hybrid squads deliver digital twins, IAM/DOF workflows, analytics, and software releases while iterating with your users.",
      icon: Cog,
      details: [
        "Agile sprints combining engineering and software",
        "Data integration, automation, and model configuration",
        "Iterative testing with live users and stakeholders",
        "Operational readiness, documentation, and handover"
      ],
      duration: "8-16 weeks",
      deliverables: ["Configured Platforms", "Analytics & Workflows", "Knowledge Base"]
    },
    {
      step: "04",
      title: "Deployment & Enablement",
      titleRu: "Deployment & Enablement",
      description: "We orchestrate go-live, train users, and provide hypercare so solutions land smoothly in daily operations.",
      descriptionRu: "We orchestrate go-live, train users, and provide hypercare so solutions land smoothly in daily operations.",
      icon: Zap,
      details: [
        "Phased roll-out with cutover and contingency planning",
        "User training, labs, and coaching",
        "Hypercare support with KPI tracking",
        "Operational governance and ownership transition"
      ],
      duration: "2-4 weeks",
      deliverables: ["Go-live Playbook", "Training Assets", "Runbooks & SOPs"]
    },
    {
      step: "05",
      title: "Optimisation & Managed Services",
      titleRu: "Optimisation & Managed Services",
      description: "Our managed services teams keep the programmes delivering value with continuous optimisation, coaching, and support.",
      descriptionRu: "Our managed services teams keep the programmes delivering value with continuous optimisation, coaching, and support.",
      icon: Target,
      details: [
        "Production surveillance, analytics tuning, and insights",
        "System health checks, upgrades, and enhancements",
        "Continuous training, coaching, and change support",
        "24/7 incident response and SLA-backed support"
      ],
      duration: "Ongoing",
      deliverables: ["Service Dashboards", "Performance Reports", "Enhancement Backlog"]
    }
  ]

  const methodologies = [
    {
      title: "Hybrid Delivery Squads",
      titleRu: "Hybrid Delivery Squads",
      description: "Cross-functional squads of petroleum engineers, analysts, and software developers deliver together in sprint cycles.",
      descriptionRu: "Cross-functional squads of petroleum engineers, analysts, and software developers deliver together in sprint cycles.",
      icon: Users,
      benefits: ["Integrated expertise", "Agile sprints", "Transparent co-creation", "Continuous feedback"]
    },
    {
      title: "Automation & DevOps",
      titleRu: "Automation & DevOps",
      description: "Infrastructure-as-code, CI/CD, and automated testing keep deployments repeatable and resilient across environments.",
      descriptionRu: "Infrastructure-as-code, CI/CD, and automated testing keep deployments repeatable and resilient across environments.",
      icon: Cog,
      benefits: ["CI/CD pipelines", "Automated testing", "Scalable infrastructure", "Observability"]
    },
    {
      title: "Change & Enablement",
      titleRu: "Change & Enablement",
      description: "Dedicated adoption, training, and communication workstreams ensure solutions stick with end users.",
      descriptionRu: "Dedicated adoption, training, and communication workstreams ensure solutions stick with end users.",
      icon: Award,
      benefits: ["Structured change plans", "Hands-on training", "Embedded champions", "Sustained adoption"]
    }
  ]

  const tools = [
    { name: "Planning & Collaboration", tools: ["Jira", "Confluence", "Notion", "Miro"] },
    { name: "Engineering & Modelling", tools: ["IPM / IFM", "Petrel", "Python", "MATLAB"] },
    { name: "Software Delivery", tools: ["Git", "Docker", "Kubernetes", "CI/CD"] },
    { name: "Analytics & Visualisation", tools: ["Power BI", "Grafana", "Spotfire", "Superset"] },
    { name: "Monitoring & Support", tools: ["Prometheus", "ELK Stack", "New Relic", "PagerDuty"] },
    { name: "Documentation", tools: ["GitBook", "Swagger", "Docusaurus", "SharePoint"] }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Our Workflow
              </h1>
              <p className="text-xl md:text-2xl text-energy-100/90">
                Hybrid engineering and software delivery built around upstream teams
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
                              <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 shrink-0" />
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
                Capabilities that keep delivery aligned, transparent, and adoptable
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
                The toolchain we rely on to blend engineering expertise with software delivery
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
                Measurable impact from recent IAM, modelling, and software programmes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Forecast Cycle Reduction", value: "30%", description: "Average reduction in modelling and forecasting turnaround" },
              { icon: Award, title: "Adoption", value: "95%", description: "User adoption achieved within three months of go-live" },
              { icon: BarChart3, title: "Production Impact", value: "+12%", description: "Average uplift from optimisation and debottlenecking initiatives" },
              { icon: Zap, title: "Support Responsiveness", value: "<1 hr", description: "Average response time for managed service incidents" }
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
                Ready to Accelerate Your Programme?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s discuss how our hybrid delivery model can unlock measurable value for your asset teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="energy-gradient text-white hover:opacity-90">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Case Studies
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
