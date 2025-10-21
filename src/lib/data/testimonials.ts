export interface Testimonial {
  id: string
  name: string
  position: string
  positionRu: string
  company: string
  companyRu: string
  content: string
  contentRu: string
  rating: number
  image: string
  project: string
  projectRu: string
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dr. Aisulu Nurgaliyeva",
    position: "Chief Technology Officer",
    positionRu: "Главный технический директор",
    company: "KazMunayGas",
    companyRu: "КазМунайГаз",
    content: "ByteAll Energy's integrated production modelling solution has revolutionized our field operations. The 25% increase in efficiency we achieved exceeded our expectations and has significantly improved our bottom line.",
    contentRu: "Решение интегрированного моделирования производства ByteAll Energy революционизировало наши полевые операции. Достигнутое нами повышение эффективности на 25% превзошло наши ожидания и значительно улучшило нашу прибыльность.",
    rating: 5,
    image: "/images/testimonials/aisulu-nurgaliyeva.jpg",
    project: "Integrated Production Modelling Implementation",
    projectRu: "Внедрение интегрированного моделирования производства",
    featured: true
  },
  {
    id: "testimonial-2",
    name: "James Mitchell",
    position: "Operations Manager",
    positionRu: "Менеджер операций",
    company: "Tengizchevroil",
    companyRu: "Тенгизшевройл",
    content: "The real-time monitoring system provided by ByteAll Energy has given us unprecedented visibility into our operations. We can now make data-driven decisions that improve both safety and efficiency.",
    contentRu: "Система мониторинга в реальном времени, предоставленная ByteAll Energy, дала нам беспрецедентную видимость наших операций. Теперь мы можем принимать решения, основанные на данных, которые улучшают как безопасность, так и эффективность.",
    rating: 5,
    image: "/images/testimonials/james-mitchell.jpg",
    project: "Real-time Field Monitoring System",
    projectRu: "Система мониторинга месторождения в реальном времени",
    featured: true
  },
  {
    id: "testimonial-3",
    name: "Marina Petrov",
    position: "Reservoir Engineer",
    positionRu: "Инженер-нефтяник",
    company: "Karachaganak Petroleum Operating",
    companyRu: "Карачаганак Петролеум Оперейтинг",
    content: "Their reservoir simulation expertise helped us optimize our gas condensate field operations. The detailed PVT analysis and modeling recommendations were spot-on and delivered excellent results.",
    contentRu: "Их экспертиза в области моделирования резервуаров помогла нам оптимизировать операции нашего газоконденсатного месторождения. Детальный PVT анализ и рекомендации по моделированию были точными и дали отличные результаты.",
    rating: 5,
    image: "/images/testimonials/marina-petrov.jpg",
    project: "Reservoir Simulation & PVT Analysis",
    projectRu: "Моделирование резервуаров и PVT анализ",
    featured: true
  },
  {
    id: "testimonial-4",
    name: "Ahmed Al-Rashid",
    position: "Digital Transformation Director",
    positionRu: "Директор по цифровой трансформации",
    company: "North Caspian Operating Company",
    companyRu: "Северо-Каспийская операционная компания",
    content: "ByteAll Energy's digital oilfield solutions have been instrumental in our digital transformation journey. Their team's expertise and commitment to excellence is unmatched in the industry.",
    contentRu: "Цифровые решения для нефтяных месторождений ByteAll Energy сыграли ключевую роль в нашем пути цифровой трансформации. Экспертиза их команды и приверженность совершенству не имеют аналогов в отрасли.",
    rating: 5,
    image: "/images/testimonials/ahmed-al-rashid.jpg",
    project: "Digital Oilfield Implementation",
    projectRu: "Внедрение цифровых нефтяных месторождений",
    featured: false
  },
  {
    id: "testimonial-5",
    name: "Erik Johansson",
    position: "Senior Project Manager",
    positionRu: "Старший менеджер проектов",
    company: "Equinor",
    companyRu: "Эквинор",
    content: "Working with ByteAll Energy on our data integration project was a pleasure. Their technical expertise and project management skills ensured timely delivery and exceptional quality.",
    contentRu: "Работа с ByteAll Energy над нашим проектом интеграции данных была удовольствием. Их техническая экспертиза и навыки управления проектами обеспечили своевременную поставку и исключительное качество.",
    rating: 5,
    image: "/images/testimonials/erik-johansson.jpg",
    project: "Data Integration & Visualization Platform",
    projectRu: "Платформа интеграции и визуализации данных",
    featured: false
  },
  {
    id: "testimonial-6",
    name: "Sarah Williams",
    position: "Engineering Manager",
    positionRu: "Менеджер инженерии",
    company: "Shell",
    companyRu: "Шелл",
    content: "The custom software solution developed by ByteAll Energy has streamlined our operations significantly. Their understanding of oil & gas workflows is impressive and reflected in the quality of their work.",
    contentRu: "Индивидуальное программное решение, разработанное ByteAll Energy, значительно упростило наши операции. Их понимание нефтегазовых рабочих процессов впечатляет и отражается в качестве их работы.",
    rating: 5,
    image: "/images/testimonials/sarah-williams.jpg",
    project: "Custom Software Development",
    projectRu: "Индивидуальная разработка программного обеспечения",
    featured: false
  },
  {
    id: "testimonial-7",
    name: "Dr. Pierre Dubois",
    position: "Head of Reservoir Engineering",
    positionRu: "Руководитель инженерии резервуаров",
    company: "TotalEnergies",
    companyRu: "ТоталЭнержи",
    content: "ByteAll Energy's consulting services helped us optimize our reservoir management strategies. Their deep industry knowledge and practical approach delivered measurable improvements in our field performance.",
    contentRu: "Консультационные услуги ByteAll Energy помогли нам оптимизировать наши стратегии управления резервуарами. Их глубокие отраслевые знания и практический подход привели к измеримым улучшениям в производительности наших месторождений.",
    rating: 5,
    image: "/images/testimonials/pierre-dubois.jpg",
    project: "Reservoir Management Consulting",
    projectRu: "Консультирование по управлению резервуарами",
    featured: false
  },
  {
    id: "testimonial-8",
    name: "Robert Chen",
    position: "Operations Director",
    positionRu: "Директор операций",
    company: "BP",
    companyRu: "БП",
    content: "The training programs provided by ByteAll Energy have significantly enhanced our team's capabilities. The practical, hands-on approach made complex concepts accessible and immediately applicable.",
    contentRu: "Программы обучения, предоставленные ByteAll Energy, значительно повысили возможности нашей команды. Практический, практический подход сделал сложные концепции доступными и немедленно применимыми.",
    rating: 5,
    image: "/images/testimonials/robert-chen.jpg",
    project: "Digital Oilfield Training Program",
    projectRu: "Программа обучения цифровым нефтяным месторождениям",
    featured: false
  }
]
