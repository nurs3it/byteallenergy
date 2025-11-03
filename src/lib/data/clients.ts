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
  },
  {
    id: "tenaz-energy",
    name: "Tenaz Energy",
    logo: "/images/clients/tenaz-energy.png",
    industry: "Energy Company",
    industryRu: "Энергетическая компания",
    country: "Canada",
    description: "Energy company focused on production optimization and digital transformation initiatives.",
    descriptionRu: "Энергетическая компания, специализирующаяся на оптимизации производства и цифровой трансформации.",
    projectType: "Production Optimization",
    projectTypeRu: "Оптимизация производства"
  },
  {
    id: "ineos",
    name: "Ineos",
    logo: "/images/clients/ineos.png",
    industry: "Chemical and Energy Company",
    industryRu: "Химическая и энергетическая компания",
    country: "United Kingdom",
    description: "Leading chemical and energy company implementing integrated production modelling solutions.",
    descriptionRu: "Ведущая химическая и энергетическая компания, внедряющая решения интегрированного моделирования производства.",
    projectType: "Integrated Production Modelling",
    projectTypeRu: "Интегрированное моделирование производства"
  }
]

export const clientStats = {
  totalClients: 5,
  countries: 4,
  projectsCompleted: 5,
  yearsOfExperience: 7
}
