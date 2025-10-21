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
    titleRu: "Интегрированное моделирование производственных систем",
    shortDescription: "Build and enhance your integrated asset model with proven methodologies and industry-standard software suites.",
    shortDescriptionRu: "Создавайте и улучшайте вашу интегрированную модель актива с помощью проверенных методологий и отраслевых программных комплексов.",
    description: "Our experts combine domain expertise and advanced technology to build and improve your integrated asset model. We use established integrated methodologies, customized workflows, and industry-standard software suites. Our commitment is to develop and implement integrated modeling solutions tailored to your specific business needs.",
    descriptionRu: "Наши эксперты сочетают предметную экспертизу и передовые технологии для создания и улучшения вашей интегрированной модели актива. Мы используем проверенные интегрированные методологии, настраиваемые рабочие процессы и отраслевые программные комплексы. Наша цель — разрабатывать и внедрять решения интегрированного моделирования, адаптированные под ваши конкретные бизнес-потребности.",
    features: [
      "Apply proven methodologies of integrated approach",
      "Customized workflows to replicate business processes and solve asset-specific optimization challenges",
      "Technologies for integrated modeling using industry-wide software suites",
      "Developing, adopting and applying integrated modeling to your business requirements",
      "Real-time optimization and decision support",
      "Comprehensive asset performance analysis"
    ],
    featuresRu: [
      "Применение проверенных методологий интегрированного подхода",
      "Настраиваемые рабочие процессы для воспроизведения бизнес-процессов и решения специфических задач оптимизации активов",
      "Технологии интегрированного моделирования с использованием широко применяемых в отрасли программных комплексов",
      "Разработка, внедрение и применение интегрированного моделирования под ваши бизнес-требования",
      "Оптимизация и поддержка принятия решений в реальном времени",
      "Комплексный анализ производительности активов"
    ],
    icon: "Network",
    category: "Modelling",
    featured: true,
    slug: "integrated-production-modelling"
  },
  {
    id: "digital-oilfield-solutions",
    title: "Digital Oilfield Solutions",
    titleRu: "Цифровые решения для нефтяных месторождений",
    shortDescription: "Transform your oilfield operations with comprehensive digital solutions and real-time monitoring capabilities.",
    shortDescriptionRu: "Трансформируйте операции на нефтяных месторождениях с помощью комплексных цифровых решений и возможностей мониторинга в реальном времени.",
    description: "Comprehensive digital transformation solutions for oilfield operations, including real-time data collection, analysis, and optimization systems that enhance productivity and reduce operational costs.",
    descriptionRu: "Комплексные решения цифровой трансформации для операций на нефтяных месторождениях, включая сбор данных в реальном времени, анализ и системы оптимизации, которые повышают производительность и снижают операционные расходы.",
    features: [
      "Real-time data collection and monitoring",
      "Automated decision support systems",
      "Predictive maintenance capabilities",
      "Remote operation management",
      "Integration with existing systems",
      "Performance analytics and reporting"
    ],
    featuresRu: [
      "Сбор данных и мониторинг в реальном времени",
      "Автоматизированные системы поддержки принятия решений",
      "Возможности предиктивного обслуживания",
      "Управление удаленными операциями",
      "Интеграция с существующими системами",
      "Аналитика производительности и отчетность"
    ],
    icon: "Cpu",
    category: "Digital Solutions",
    featured: true,
    slug: "digital-oilfield-solutions"
  },
  {
    id: "real-time-monitoring",
    title: "Real-time Field Data Monitoring & Optimization",
    titleRu: "Мониторинг и оптимизация данных месторождения в реальном времени",
    shortDescription: "Monitor and optimize your field operations with advanced real-time data analytics and automated optimization systems.",
    shortDescriptionRu: "Мониторьте и оптимизируйте операции на месторождении с помощью передовой аналитики данных в реальном времени и автоматизированных систем оптимизации.",
    description: "Advanced real-time monitoring and optimization systems that continuously analyze field data to maximize production efficiency and minimize operational risks.",
    descriptionRu: "Передовые системы мониторинга и оптимизации в реальном времени, которые непрерывно анализируют данные месторождения для максимизации эффективности производства и минимизации операционных рисков.",
    features: [
      "24/7 real-time data monitoring",
      "Automated optimization algorithms",
      "Anomaly detection and alerting",
      "Performance trend analysis",
      "Customizable dashboards",
      "Integration with SCADA systems"
    ],
    featuresRu: [
      "Мониторинг данных в реальном времени 24/7",
      "Автоматизированные алгоритмы оптимизации",
      "Обнаружение аномалий и оповещения",
      "Анализ трендов производительности",
      "Настраиваемые панели управления",
      "Интеграция с системами SCADA"
    ],
    icon: "Activity",
    category: "Monitoring",
    featured: false,
    slug: "real-time-monitoring"
  },
  {
    id: "pvt-characterization",
    title: "PVT Characterization and Reservoir Simulation",
    titleRu: "PVT характеристика и моделирование резервуара",
    shortDescription: "Advanced PVT analysis and reservoir simulation services to optimize reservoir performance and recovery.",
    shortDescriptionRu: "Передовые услуги PVT анализа и моделирования резервуара для оптимизации производительности и извлечения из резервуара.",
    description: "Comprehensive PVT characterization and reservoir simulation services using state-of-the-art modeling techniques to optimize reservoir performance and maximize hydrocarbon recovery.",
    descriptionRu: "Комплексные услуги PVT характеристики и моделирования резервуара с использованием передовых методов моделирования для оптимизации производительности резервуара и максимизации извлечения углеводородов.",
    features: [
      "Advanced PVT laboratory analysis",
      "Compositional reservoir simulation",
      "EOR process optimization",
      "Reservoir performance prediction",
      "Uncertainty quantification",
      "History matching and validation"
    ],
    featuresRu: [
      "Передовой лабораторный PVT анализ",
      "Композиционное моделирование резервуара",
      "Оптимизация процессов ПНП",
      "Прогнозирование производительности резервуара",
      "Количественная оценка неопределенности",
      "Историческое сопоставление и валидация"
    ],
    icon: "Droplets",
    category: "Reservoir Engineering",
    featured: false,
    slug: "pvt-characterization"
  },
  {
    id: "software-development",
    title: "Software Development for Oil & Gas",
    titleRu: "Разработка программного обеспечения для нефтегазовой отрасли",
    shortDescription: "Custom software solutions designed specifically for oil & gas industry challenges and workflows.",
    shortDescriptionRu: "Индивидуальные программные решения, разработанные специально для задач и рабочих процессов нефтегазовой отрасли.",
    description: "Specialized software development services creating custom applications, tools, and platforms tailored to the unique requirements of oil & gas operations and workflows.",
    descriptionRu: "Специализированные услуги разработки программного обеспечения, создающие индивидуальные приложения, инструменты и платформы, адаптированные под уникальные требования нефтегазовых операций и рабочих процессов.",
    features: [
      "Custom web and desktop applications",
      "Mobile solutions for field operations",
      "Data visualization platforms",
      "API development and integration",
      "Cloud-based solutions",
      "Legacy system modernization"
    ],
    featuresRu: [
      "Индивидуальные веб и настольные приложения",
      "Мобильные решения для полевых операций",
      "Платформы визуализации данных",
      "Разработка и интеграция API",
      "Облачные решения",
      "Модернизация устаревших систем"
    ],
    icon: "Code",
    category: "Software",
    featured: false,
    slug: "software-development"
  },
  {
    id: "data-integration",
    title: "Data Integration and Visualization",
    titleRu: "Интеграция и визуализация данных",
    shortDescription: "Seamlessly integrate and visualize complex oil & gas data from multiple sources for better decision making.",
    shortDescriptionRu: "Бесшовная интеграция и визуализация сложных нефтегазовых данных из множественных источников для лучшего принятия решений.",
    description: "Comprehensive data integration and visualization services that transform complex, multi-source oil & gas data into actionable insights through advanced analytics and intuitive visual interfaces.",
    descriptionRu: "Комплексные услуги интеграции и визуализации данных, которые преобразуют сложные, многоисточниковые нефтегазовые данные в действенные инсайты через передовую аналитику и интуитивные визуальные интерфейсы.",
    features: [
      "Multi-source data integration",
      "Real-time data streaming",
      "Interactive dashboards",
      "Advanced data analytics",
      "Custom visualization tools",
      "Data quality assurance"
    ],
    featuresRu: [
      "Интеграция данных из множественных источников",
      "Потоковая передача данных в реальном времени",
      "Интерактивные панели управления",
      "Передовая аналитика данных",
      "Индивидуальные инструменты визуализации",
      "Обеспечение качества данных"
    ],
    icon: "BarChart3",
    category: "Data Analytics",
    featured: false,
    slug: "data-integration"
  },
  {
    id: "engineering-consulting",
    title: "Engineering Consulting",
    titleRu: "Инженерное консультирование",
    shortDescription: "Expert engineering consulting services to optimize your oil & gas operations and technical processes.",
    shortDescriptionRu: "Экспертные услуги инженерного консультирования для оптимизации ваших нефтегазовых операций и технических процессов.",
    description: "Professional engineering consulting services providing expert guidance on process optimization, technical problem-solving, and strategic planning for oil & gas operations.",
    descriptionRu: "Профессиональные услуги инженерного консультирования, предоставляющие экспертное руководство по оптимизации процессов, решению технических проблем и стратегическому планированию нефтегазовых операций.",
    features: [
      "Process optimization consulting",
      "Technical feasibility studies",
      "Risk assessment and mitigation",
      "Regulatory compliance guidance",
      "Technology evaluation and selection",
      "Project management support"
    ],
    featuresRu: [
      "Консультирование по оптимизации процессов",
      "Технико-экономические обоснования",
      "Оценка и снижение рисков",
      "Руководство по соблюдению нормативных требований",
      "Оценка и выбор технологий",
      "Поддержка управления проектами"
    ],
    icon: "Users",
    category: "Consulting",
    featured: false,
    slug: "engineering-consulting"
  }
]
