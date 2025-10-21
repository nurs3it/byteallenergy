export interface TeamMember {
  id: string
  name: string
  role: string
  roleRu: string
  bio: string
  bioRu: string
  image: string
  linkedin?: string
  email?: string
  expertise: string[]
  expertiseRu: string[]
  isLeadership: boolean
}

export const teamMembers: TeamMember[] = [
  {
    id: "amir-bekmukhanov",
    name: "Amir Bekmukhanov",
    role: "Founder & CEO",
    roleRu: "Основатель и генеральный директор",
    bio: "Visionary leader with over 15 years of experience in oil & gas digitalization and software development. Amir founded ByteAll Energy to bridge the gap between traditional engineering and modern digital solutions.",
    bioRu: "Визионерский лидер с более чем 15-летним опытом в области цифровизации нефтегазовой отрасли и разработки программного обеспечения. Амир основал ByteAll Energy для преодоления разрыва между традиционной инженерией и современными цифровыми решениями.",
    image: "/images/team/amir-bekmukhanov.jpg",
    linkedin: "https://linkedin.com/in/amir-bekmukhanov",
    email: "amir@byteallenergy.com",
    expertise: ["Digital Oilfield", "Software Architecture", "Strategic Planning", "Team Leadership"],
    expertiseRu: ["Цифровые нефтяные месторождения", "Архитектура ПО", "Стратегическое планирование", "Лидерство команды"],
    isLeadership: true
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Head of Engineering",
    roleRu: "Руководитель инженерии",
    bio: "Senior petroleum engineer with expertise in reservoir simulation and integrated production modeling. Sarah leads our technical team in developing cutting-edge solutions for complex reservoir challenges.",
    bioRu: "Старший инженер-нефтяник с экспертизой в области моделирования резервуаров и интегрированного моделирования производства. Сара возглавляет нашу техническую команду в разработке передовых решений для сложных задач резервуаров.",
    image: "/images/team/sarah-chen.jpg",
    linkedin: "https://linkedin.com/in/sarah-chen",
    email: "sarah@byteallenergy.com",
    expertise: ["Reservoir Engineering", "Production Optimization", "PVT Analysis", "Technical Leadership"],
    expertiseRu: ["Инженерия резервуаров", "Оптимизация производства", "PVT анализ", "Техническое лидерство"],
    isLeadership: true
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "Lead Software Developer",
    roleRu: "Ведущий разработчик ПО",
    bio: "Full-stack developer specializing in oil & gas applications. Michael has built scalable software solutions for real-time monitoring, data visualization, and process optimization.",
    bioRu: "Full-stack разработчик, специализирующийся на приложениях для нефтегазовой отрасли. Майкл создал масштабируемые программные решения для мониторинга в реальном времени, визуализации данных и оптимизации процессов.",
    image: "/images/team/michael-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/michael-rodriguez",
    email: "michael@byteallenergy.com",
    expertise: ["Full-Stack Development", "Real-time Systems", "Data Visualization", "Cloud Architecture"],
    expertiseRu: ["Full-Stack разработка", "Системы реального времени", "Визуализация данных", "Облачная архитектура"],
    isLeadership: false
  },
  {
    id: "elena-petrov",
    name: "Elena Petrov",
    role: "Senior Data Scientist",
    roleRu: "Старший специалист по данным",
    bio: "Data science expert with a focus on predictive analytics and machine learning applications in oil & gas operations. Elena develops algorithms that optimize production and predict equipment failures.",
    bioRu: "Эксперт по науке о данных с фокусом на предиктивной аналитике и применении машинного обучения в нефтегазовых операциях. Елена разрабатывает алгоритмы, которые оптимизируют производство и предсказывают отказы оборудования.",
    image: "/images/team/elena-petrov.jpg",
    linkedin: "https://linkedin.com/in/elena-petrov",
    email: "elena@byteallenergy.com",
    expertise: ["Machine Learning", "Predictive Analytics", "Data Mining", "Statistical Modeling"],
    expertiseRu: ["Машинное обучение", "Предиктивная аналитика", "Добыча данных", "Статистическое моделирование"],
    isLeadership: false
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Digital Transformation Consultant",
    roleRu: "Консультант по цифровой трансформации",
    bio: "Digital transformation specialist helping oil & gas companies modernize their operations. David has led successful digitalization projects for major energy companies across multiple continents.",
    bioRu: "Специалист по цифровой трансформации, помогающий нефтегазовым компаниям модернизировать свои операции. Дэвид возглавлял успешные проекты цифровизации для крупных энергетических компаний на нескольких континентах.",
    image: "/images/team/david-kim.jpg",
    linkedin: "https://linkedin.com/in/david-kim",
    email: "david@byteallenergy.com",
    expertise: ["Digital Transformation", "Change Management", "Process Optimization", "Client Relations"],
    expertiseRu: ["Цифровая трансформация", "Управление изменениями", "Оптимизация процессов", "Работа с клиентами"],
    isLeadership: false
  },
  {
    id: "anna-mueller",
    name: "Anna Mueller",
    role: "Project Manager",
    roleRu: "Менеджер проектов",
    bio: "Experienced project manager with a background in engineering and software development. Anna ensures our projects are delivered on time, within budget, and exceed client expectations.",
    bioRu: "Опытный менеджер проектов с опытом в области инженерии и разработки программного обеспечения. Анна обеспечивает своевременную поставку наших проектов в рамках бюджета и превышение ожиданий клиентов.",
    image: "/images/team/anna-mueller.jpg",
    linkedin: "https://linkedin.com/in/anna-mueller",
    email: "anna@byteallenergy.com",
    expertise: ["Project Management", "Agile Methodologies", "Risk Management", "Client Communication"],
    expertiseRu: ["Управление проектами", "Agile методологии", "Управление рисками", "Коммуникация с клиентами"],
    isLeadership: false
  }
]
