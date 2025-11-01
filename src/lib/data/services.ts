export interface Service {
  id: string
  title: string
  titleRu: string
  shortDescription: string
  shortDescriptionRu: string
  description: string
  descriptionRu: string
  features: string[]
  featuresRu: string[]
  icon: string
  category: string
  featured: boolean
  slug: string
}

export const services: Service[] = [
  {
    id: "integrated-production-modelling",
    title: "Integrated Production System Modelling",
    titleRu: "Integrated Production System Modelling",
    shortDescription: "Build, calibrate, and sustain enterprise-grade digital twins that reflect the entire production system.",
    shortDescriptionRu: "Build, calibrate, and sustain enterprise-grade digital twins that reflect the entire production system.",
    description: "We engineer fully integrated production system models that connect wells, networks, and facilities into a single decision environment. Our team applies proven methodologies, curates bespoke workflows, and deploys industry-standard software suites to create sustainable digital twins that operators can rely on.",
    descriptionRu: "We engineer fully integrated production system models that connect wells, networks, and facilities into a single decision environment. Our team applies proven methodologies, curates bespoke workflows, and deploys industry-standard software suites to create sustainable digital twins that operators can rely on.",
    features: [
      "Best-in-class domain expertise combined with state-of-the-art modelling tools",
      "Custom workflows mirroring real business processes and field collaboration",
      "Industry-standard IPM/IFM software stack tuned to your asset",
      "Continuous development, adoption, and sustainment of integrated models",
      "Embedded optimisation scenarios and decision support dashboards",
      "Actionable insights that shorten forecasting cycles and maximise uptime"
    ],
    featuresRu: [
      "Best-in-class domain expertise combined with state-of-the-art modelling tools",
      "Custom workflows mirroring real business processes and field collaboration",
      "Industry-standard IPM/IFM software stack tuned to your asset",
      "Continuous development, adoption, and sustainment of integrated models",
      "Embedded optimisation scenarios and decision support dashboards",
      "Actionable insights that shorten forecasting cycles and maximise uptime"
    ],
    icon: "Network",
    category: "Modelling",
    featured: true,
    slug: "integrated-production-modelling"
  },
  {
    id: "digital-oilfield-solutions",
    title: "IAM & Digital Oilfield Services",
    titleRu: "IAM & Digital Oilfield Services",
    shortDescription: "Deploy IAM/DOF platforms, surveillance workflows, and automation that keep your assets connected and under control.",
    shortDescriptionRu: "Deploy IAM/DOF platforms, surveillance workflows, and automation that keep your assets connected and under control.",
    description: "We orchestrate end-to-end IAM and Digital Oilfield programmes — from hardware roll-out to workflow design — so that reservoir, production, and operations teams make decisions with unified, real-time intelligence.",
    descriptionRu: "We orchestrate end-to-end IAM and Digital Oilfield programmes — from hardware roll-out to workflow design — so that reservoir, production, and operations teams make decisions with unified, real-time intelligence.",
    features: [
      "Strategic IAM/DOF deployment across greenfield and brownfield assets",
      "Client configuration management, upgrades, and hardware lifecycle support",
      "Realtime surveillance dashboards and production allocation workflows",
      "Well diagnostics, troubleshooting, and optimisation programmes",
      "ML/AI powered analytics for anomaly detection and forecasting",
      "Tailored technical service agreements and round-the-clock operations support"
    ],
    featuresRu: [
      "Strategic IAM/DOF deployment across greenfield and brownfield assets",
      "Client configuration management, upgrades, and hardware lifecycle support",
      "Realtime surveillance dashboards and production allocation workflows",
      "Well diagnostics, troubleshooting, and optimisation programmes",
      "ML/AI powered analytics for anomaly detection and forecasting",
      "Tailored technical service agreements and round-the-clock operations support"
    ],
    icon: "Cpu",
    category: "Digital Solutions",
    featured: true,
    slug: "digital-oilfield-solutions"
  },
  {
    id: "real-time-monitoring",
    title: "Production Performance Monitoring & Analytics",
    titleRu: "Production Performance Monitoring & Analytics",
    shortDescription: "Unlock actionable production insights with continuous surveillance, predictive analytics, and optimisation support.",
    shortDescriptionRu: "Unlock actionable production insights with continuous surveillance, predictive analytics, and optimisation support.",
    description: "We configure surveillance, allocation, and analytics environments that turn raw field data into decisions. From ML-driven diagnostics to performance debottlenecking, our team keeps production targets on track.",
    descriptionRu: "We configure surveillance, allocation, and analytics environments that turn raw field data into decisions. From ML-driven diagnostics to performance debottlenecking, our team keeps production targets on track.",
    features: [
      "24/7 surveillance and event alerting across wells, networks, and facilities",
      "Automated optimisation scenarios with guided response playbooks",
      "Anomaly detection supported by ML/AI pattern recognition",
      "Production allocation and reconciliation workflows",
      "Custom dashboards and KPI storytelling for leadership",
      "Integration with SCADA, historians, and third-party data lakes"
    ],
    featuresRu: [
      "24/7 surveillance and event alerting across wells, networks, and facilities",
      "Automated optimisation scenarios with guided response playbooks",
      "Anomaly detection supported by ML/AI pattern recognition",
      "Production allocation and reconciliation workflows",
      "Custom dashboards and KPI storytelling for leadership",
      "Integration with SCADA, historians, and third-party data lakes"
    ],
    icon: "Activity",
    category: "Monitoring",
    featured: false,
    slug: "real-time-monitoring"
  },
  {
    id: "pvt-characterization",
    title: "PVT Characterisation & Reservoir Modelling",
    titleRu: "PVT Characterisation & Reservoir Modelling",
    shortDescription: "Laboratory-backed PVT, compositional modelling, and reservoir studies tailored to maximise recovery.",
    shortDescriptionRu: "Laboratory-backed PVT, compositional modelling, and reservoir studies tailored to maximise recovery.",
    description: "From laboratory PVT interpretation to compositional simulation and EOR scenarios, we provide the subsurface insight needed to support planning, surveillance, and investment decisions.",
    descriptionRu: "From laboratory PVT interpretation to compositional simulation and EOR scenarios, we provide the subsurface insight needed to support planning, surveillance, and investment decisions.",
    features: [
      "Advanced PVT laboratory data analysis and quality control",
      "Compositional and black-oil reservoir simulation suites",
      "Scenario design for EOR and production enhancement",
      "Reservoir performance prediction and decline analysis",
      "Uncertainty quantification and risk mitigation studies",
      "History matching, model tuning, and validation support"
    ],
    featuresRu: [
      "Advanced PVT laboratory data analysis and quality control",
      "Compositional and black-oil reservoir simulation suites",
      "Scenario design for EOR and production enhancement",
      "Reservoir performance prediction and decline analysis",
      "Uncertainty quantification and risk mitigation studies",
      "History matching, model tuning, and validation support"
    ],
    icon: "Droplets",
    category: "Reservoir Engineering",
    featured: false,
    slug: "pvt-characterization"
  },
  {
    id: "software-development",
    title: "Software Development for Oil & Gas",
    titleRu: "Software Development for Oil & Gas",
    shortDescription: "Design and deliver cloud, web, and analytics platforms that automate complex energy workflows.",
    shortDescriptionRu: "Design and deliver cloud, web, and analytics platforms that automate complex energy workflows.",
    description: "Our full-stack engineering team crafts bespoke software — from workflow automation to data visualisation and ML/AI analytics — ensuring every deployment aligns with operational reality and corporate IT standards.",
    descriptionRu: "Our full-stack engineering team crafts bespoke software — from workflow automation to data visualisation and ML/AI analytics — ensuring every deployment aligns with operational reality and corporate IT standards.",
    features: [
      "Full-stack web, mobile, and cloud application development",
      "Workflow automation, visualisation, and reporting platforms",
      "Data engineering, API integration, and database management",
      "Machine learning and AI-driven analytics pipelines",
      "Legacy system modernisation and integration",
      "End-to-end delivery: discovery, build, deployment, and support"
    ],
    featuresRu: [
      "Full-stack web, mobile, and cloud application development",
      "Workflow automation, visualisation, and reporting platforms",
      "Data engineering, API integration, and database management",
      "Machine learning and AI-driven analytics pipelines",
      "Legacy system modernisation and integration",
      "End-to-end delivery: discovery, build, deployment, and support"
    ],
    icon: "Code",
    category: "Software",
    featured: false,
    slug: "software-development"
  },
  {
    id: "professional-training",
    title: "Professional Training & Capability Development",
    titleRu: "Professional Training & Capability Development",
    shortDescription: "Upskill your teams with tailored IPM, IFM, DOF, and process engineering programmes led by practitioners.",
    shortDescriptionRu: "Upskill your teams with tailored IPM, IFM, DOF, and process engineering programmes led by practitioners.",
    description: "We design and deliver hands-on training academies, asset-specific workshops, and coaching programmes that accelerate adoption of digital workflows, integrated models, and production optimisation practices.",
    descriptionRu: "We design and deliver hands-on training academies, asset-specific workshops, and coaching programmes that accelerate adoption of digital workflows, integrated models, and production optimisation practices.",
    features: [
      "IPM, IFM, and DOF simulator courses delivered by field engineers",
      "Asset-specific advanced workshops and troubleshooting clinics",
      "Process engineering courses for petroleum and production engineers",
      "Digital oilfield workflow coaching and adoption support",
      "Custom curriculum design aligned with corporate competency frameworks",
      "Blended learning formats: onsite, virtual, and lab-based"
    ],
    featuresRu: [
      "IPM, IFM, and DOF simulator courses delivered by field engineers",
      "Asset-specific advanced workshops and troubleshooting clinics",
      "Process engineering courses for petroleum and production engineers",
      "Digital oilfield workflow coaching and adoption support",
      "Custom curriculum design aligned with corporate competency frameworks",
      "Blended learning formats: onsite, virtual, and lab-based"
    ],
    icon: "Users",
    category: "Training",
    featured: false,
    slug: "professional-training"
  },
  {
    id: "engineering-consulting",
    title: "Process Engineering & Technical Services",
    titleRu: "Process Engineering & Technical Services",
    shortDescription: "Solve asset challenges with process engineering, debottlenecking, and multi-discipline technical support.",
    shortDescriptionRu: "Solve asset challenges with process engineering, debottlenecking, and multi-discipline technical support.",
    description: "ByteAll Energy’s consultants embed with your teams to address production bottlenecks, energy efficiency goals, and asset management challenges — combining process engineering rigour with automation and analytics.",
    descriptionRu: "ByteAll Energy’s consultants embed with your teams to address production bottlenecks, energy efficiency goals, and asset management challenges — combining process engineering rigour with automation and analytics.",
    features: [
      "Process engineering, debottlenecking, and energy efficiency studies",
      "Asset integrity reviews and technical feasibility assessments",
      "Development of custom workflows and operating procedures",
      "Regulatory compliance, documentation, and reporting support",
      "Technology evaluation, selection, and rollout governance",
      "Project management, change management, and post go-live support"
    ],
    featuresRu: [
      "Process engineering, debottlenecking, and energy efficiency studies",
      "Asset integrity reviews and technical feasibility assessments",
      "Development of custom workflows and operating procedures",
      "Regulatory compliance, documentation, and reporting support",
      "Technology evaluation, selection, and rollout governance",
      "Project management, change management, and post go-live support"
    ],
    icon: "BarChart3",
    category: "Consulting",
    featured: false,
    slug: "engineering-consulting"
  }
]
