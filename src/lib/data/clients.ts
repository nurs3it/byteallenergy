export interface Client {
  id: string
  name: string
  logo: string
  industry: string
  industryRu: string
  country: string
  description: string
  descriptionRu: string
  projectType: string
  projectTypeRu: string
}

export const clients: Client[] = [
  {
    id: "kazmunaigas",
    name: "KazMunayGas",
    logo: "/images/clients/kazmunaigas.png",
    industry: "National Oil Company",
    industryRu: "Национальная нефтяная компания",
    country: "Kazakhstan",
    description: "Leading national oil company implementing digital oilfield solutions across multiple fields.",
    descriptionRu: "Ведущая национальная нефтяная компания, внедряющая цифровые решения для нефтяных месторождений на множественных месторождениях.",
    projectType: "Integrated Production Modelling",
    projectTypeRu: "Интегрированное моделирование производства"
  },
  {
    id: "tengizchevroil",
    name: "Tengizchevroil",
    logo: "/images/clients/tengizchevroil.png",
    industry: "International Oil Company",
    industryRu: "Международная нефтяная компания",
    country: "Kazakhstan",
    description: "Major international joint venture implementing advanced digital monitoring systems.",
    descriptionRu: "Крупное международное совместное предприятие, внедряющее передовые системы цифрового мониторинга.",
    projectType: "Real-time Monitoring",
    projectTypeRu: "Мониторинг в реальном времени"
  },
  {
    id: "karachaganak",
    name: "Karachaganak Petroleum Operating",
    logo: "/images/clients/karachaganak.png",
    industry: "Oil & Gas Operator",
    industryRu: "Оператор нефти и газа",
    country: "Kazakhstan",
    description: "Complex gas condensate field operator using advanced reservoir simulation technologies.",
    descriptionRu: "Оператор сложного газоконденсатного месторождения, использующий передовые технологии моделирования резервуаров.",
    projectType: "Reservoir Simulation",
    projectTypeRu: "Моделирование резервуаров"
  },
  {
    id: "kashagan",
    name: "North Caspian Operating Company",
    logo: "/images/clients/kashagan.png",
    industry: "Offshore Oil Operator",
    industryRu: "Морской нефтяной оператор",
    country: "Kazakhstan",
    description: "Offshore oil production company implementing comprehensive digital transformation solutions.",
    descriptionRu: "Компания по морской добыче нефти, внедряющая комплексные решения цифровой трансформации.",
    projectType: "Digital Oilfield Solutions",
    projectTypeRu: "Цифровые решения для нефтяных месторождений"
  },
  {
    id: "equinor",
    name: "Equinor",
    logo: "/images/clients/equinor.png",
    industry: "International Energy Company",
    industryRu: "Международная энергетическая компания",
    country: "Norway",
    description: "Global energy company collaborating on innovative digital solutions for sustainable energy production.",
    descriptionRu: "Глобальная энергетическая компания, сотрудничающая в области инновационных цифровых решений для устойчивого производства энергии.",
    projectType: "Data Integration",
    projectTypeRu: "Интеграция данных"
  },
  {
    id: "shell",
    name: "Shell",
    logo: "/images/clients/shell.png",
    industry: "Multinational Oil Company",
    industryRu: "Многонациональная нефтяная компания",
    country: "Netherlands",
    description: "Global energy company implementing advanced analytics and optimization solutions.",
    descriptionRu: "Глобальная энергетическая компания, внедряющая передовые решения аналитики и оптимизации.",
    projectType: "Engineering Consulting",
    projectTypeRu: "Инженерное консультирование"
  },
  {
    id: "bp",
    name: "BP",
    logo: "/images/clients/bp.png",
    industry: "International Oil Company",
    industryRu: "Международная нефтяная компания",
    country: "United Kingdom",
    description: "Major oil company using integrated production modeling for field optimization.",
    descriptionRu: "Крупная нефтяная компания, использующая интегрированное моделирование производства для оптимизации месторождений.",
    projectType: "Software Development",
    projectTypeRu: "Разработка программного обеспечения"
  },
  {
    id: "totalenergies",
    name: "TotalEnergies",
    logo: "/images/clients/totalenergies.png",
    industry: "Multinational Energy Company",
    industryRu: "Многонациональная энергетическая компания",
    country: "France",
    description: "Global energy company implementing digital solutions for operational excellence.",
    descriptionRu: "Глобальная энергетическая компания, внедряющая цифровые решения для операционного совершенства.",
    projectType: "PVT Characterization",
    projectTypeRu: "PVT характеристика"
  }
]

export const clientStats = {
  totalClients: 50,
  countries: 15,
  projectsCompleted: 200,
  yearsOfExperience: 7
}
