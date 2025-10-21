export interface NewsArticle {
  id: string
  title: string
  titleRu: string
  excerpt: string
  excerptRu: string
  content: string
  contentRu: string
  author: string
  authorRu: string
  publishedAt: string
  category: string
  categoryRu: string
  image: string
  featured: boolean
  slug: string
  tags: string[]
  tagsRu: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: "digital-transformation-oil-gas-2024",
    title: "Digital Transformation Trends in Oil & Gas Industry 2024",
    titleRu: "Тренды цифровой трансформации в нефтегазовой отрасли 2024",
    excerpt: "Exploring the latest digital transformation trends shaping the future of oil & gas operations, from AI-powered analytics to IoT integration.",
    excerptRu: "Исследование последних трендов цифровой трансформации, формирующих будущее нефтегазовых операций, от аналитики на основе ИИ до интеграции IoT.",
    content: "The oil and gas industry is experiencing unprecedented digital transformation, driven by the need for operational efficiency, cost reduction, and environmental sustainability. In 2024, we're seeing several key trends that are reshaping how energy companies operate...",
    contentRu: "Нефтегазовая отрасль переживает беспрецедентную цифровую трансформацию, движимую необходимостью операционной эффективности, снижения затрат и экологической устойчивости. В 2024 году мы наблюдаем несколько ключевых трендов, которые перестраивают то, как энергетические компании работают...",
    author: "Amir Bekmukhanov",
    authorRu: "Амир Бекмуханов",
    publishedAt: "2024-01-15",
    category: "Industry Insights",
    categoryRu: "Инсайты отрасли",
    image: "/images/news/digital-transformation-2024.jpg",
    featured: true,
    slug: "digital-transformation-oil-gas-2024",
    tags: ["Digital Transformation", "Industry Trends", "Technology"],
    tagsRu: ["Цифровая трансформация", "Тренды отрасли", "Технологии"]
  },
  {
    id: "integrated-production-modelling-success",
    title: "Success Story: Integrated Production Modelling Implementation",
    titleRu: "История успеха: Внедрение интегрированного моделирования производства",
    excerpt: "Case study showcasing how our integrated production modelling solution increased field efficiency by 25% for a major oil operator.",
    excerptRu: "Кейс-стади, демонстрирующий, как наше решение интегрированного моделирования производства повысило эффективность месторождения на 25% для крупного нефтяного оператора.",
    content: "We recently completed a comprehensive integrated production modelling project for one of Kazakhstan's largest oil operators. The implementation resulted in significant improvements in field efficiency and production optimization...",
    contentRu: "Мы недавно завершили комплексный проект интегрированного моделирования производства для одного из крупнейших нефтяных операторов Казахстана. Внедрение привело к значительным улучшениям в эффективности месторождения и оптимизации производства...",
    author: "Sarah Chen",
    authorRu: "Сара Чен",
    publishedAt: "2024-01-10",
    category: "Case Studies",
    categoryRu: "Кейс-стади",
    image: "/images/news/integrated-modelling-success.jpg",
    featured: true,
    slug: "integrated-production-modelling-success",
    tags: ["Case Study", "Success Story", "Production Optimization"],
    tagsRu: ["Кейс-стади", "История успеха", "Оптимизация производства"]
  },
  {
    id: "ai-machine-learning-oil-gas",
    title: "AI and Machine Learning Revolutionizing Oil & Gas Operations",
    titleRu: "ИИ и машинное обучение революционизируют нефтегазовые операции",
    excerpt: "How artificial intelligence and machine learning are transforming predictive maintenance, production optimization, and decision-making in the energy sector.",
    excerptRu: "Как искусственный интеллект и машинное обучение трансформируют предиктивное обслуживание, оптимизацию производства и принятие решений в энергетическом секторе.",
    content: "Artificial Intelligence and Machine Learning are no longer futuristic concepts in the oil and gas industry. They are actively transforming how companies approach maintenance, production optimization, and strategic decision-making...",
    contentRu: "Искусственный интеллект и машинное обучение больше не являются футуристическими концепциями в нефтегазовой отрасли. Они активно трансформируют то, как компании подходят к обслуживанию, оптимизации производства и стратегическому принятию решений...",
    author: "Elena Petrov",
    authorRu: "Елена Петрова",
    publishedAt: "2024-01-05",
    category: "Technology",
    categoryRu: "Технологии",
    image: "/images/news/ai-machine-learning.jpg",
    featured: false,
    slug: "ai-machine-learning-oil-gas",
    tags: ["Artificial Intelligence", "Machine Learning", "Predictive Analytics"],
    tagsRu: ["Искусственный интеллект", "Машинное обучение", "Предиктивная аналитика"]
  },
  {
    id: "sustainable-energy-transition",
    title: "Sustainable Energy Transition: Digital Solutions for Environmental Goals",
    titleRu: "Устойчивый энергетический переход: Цифровые решения для экологических целей",
    excerpt: "Exploring how digital technologies are helping oil & gas companies achieve their sustainability goals while maintaining operational efficiency.",
    excerptRu: "Исследование того, как цифровые технологии помогают нефтегазовым компаниям достигать своих целей устойчивости, сохраняя при этом операционную эффективность.",
    content: "As the world moves towards a more sustainable energy future, oil and gas companies are under increasing pressure to reduce their environmental footprint while maintaining profitability...",
    contentRu: "По мере того, как мир движется к более устойчивому энергетическому будущему, нефтегазовые компании находятся под растущим давлением, чтобы сократить свой экологический след, сохраняя при этом прибыльность...",
    author: "David Kim",
    authorRu: "Дэвид Ким",
    publishedAt: "2023-12-28",
    category: "Sustainability",
    categoryRu: "Устойчивость",
    image: "/images/news/sustainable-energy.jpg",
    featured: false,
    slug: "sustainable-energy-transition",
    tags: ["Sustainability", "Environmental", "Energy Transition"],
    tagsRu: ["Устойчивость", "Экология", "Энергетический переход"]
  },
  {
    id: "real-time-monitoring-benefits",
    title: "The Benefits of Real-time Monitoring in Oil & Gas Operations",
    titleRu: "Преимущества мониторинга в реальном времени в нефтегазовых операциях",
    excerpt: "Understanding how real-time monitoring systems can improve safety, efficiency, and profitability in oil & gas operations.",
    excerptRu: "Понимание того, как системы мониторинга в реальном времени могут улучшить безопасность, эффективность и прибыльность в нефтегазовых операциях.",
    content: "Real-time monitoring has become a cornerstone of modern oil and gas operations, providing operators with immediate insights into field conditions and equipment performance...",
    contentRu: "Мониторинг в реальном времени стал краеугольным камнем современных нефтегазовых операций, предоставляя операторам немедленные инсайты о состоянии месторождения и производительности оборудования...",
    author: "Michael Rodriguez",
    authorRu: "Майкл Родригес",
    publishedAt: "2023-12-20",
    category: "Operations",
    categoryRu: "Операции",
    image: "/images/news/real-time-monitoring.jpg",
    featured: false,
    slug: "real-time-monitoring-benefits",
    tags: ["Real-time Monitoring", "Operations", "Safety"],
    tagsRu: ["Мониторинг в реальном времени", "Операции", "Безопасность"]
  },
  {
    id: "future-digital-oilfield",
    title: "The Future of Digital Oilfield: What to Expect in 2025",
    titleRu: "Будущее цифровых нефтяных месторождений: Чего ожидать в 2025 году",
    excerpt: "Predictions and insights into the future of digital oilfield technologies and their impact on the energy industry.",
    excerptRu: "Прогнозы и инсайты о будущем технологий цифровых нефтяных месторождений и их влиянии на энергетическую отрасль.",
    content: "As we look ahead to 2025, the digital oilfield landscape is poised for significant transformation. Emerging technologies and evolving industry needs are shaping the future of how oil and gas operations will be conducted...",
    contentRu: "Глядя вперед на 2025 год, ландшафт цифровых нефтяных месторождений готов к значительной трансформации. Новые технологии и развивающиеся потребности отрасли формируют будущее того, как будут проводиться нефтегазовые операции...",
    author: "Amir Bekmukhanov",
    authorRu: "Амир Бекмуханов",
    publishedAt: "2023-12-15",
    category: "Future Trends",
    categoryRu: "Будущие тренды",
    image: "/images/news/future-digital-oilfield.jpg",
    featured: true,
    slug: "future-digital-oilfield",
    tags: ["Future Trends", "Digital Oilfield", "Technology"],
    tagsRu: ["Будущие тренды", "Цифровые нефтяные месторождения", "Технологии"]
  }
]
