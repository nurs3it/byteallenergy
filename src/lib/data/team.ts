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
    id: "amirbek-bekmukhanov",
    name: "Amirbek Bekmukhanov",
    role: "Founder and Managing Director",
    roleRu: "Founder and Managing Director",
    bio: "Petroleum industry expert and Digital Oilfield developer focused on creating efficient, data-driven solutions for modern energy challenges.",
    bioRu: "Petroleum industry expert and Digital Oilfield developer focused on creating efficient, data-driven solutions for modern energy challenges.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%7Btypelayers%2Cclient%7Bts1736465244477%2Cver-595cbd8.png",
    expertise: ["Digital Oilfield", "Strategic Leadership", "Production Optimization", "Innovation"],
    expertiseRu: ["Digital Oilfield", "Strategic Leadership", "Production Optimization", "Innovation"],
    isLeadership: true
  },
  {
    id: "gaziz-kyrgyzbay",
    name: "Gaziz Kyrgyzbay",
    role: "Petroleum Engineer | DOF Engineer",
    roleRu: "Petroleum Engineer | DOF Engineer",
    bio: "Expert in optimizing oilfield operations through advanced modelling and automation with experience in tools like IPM and IVM/IFM.",
    bioRu: "Expert in optimizing oilfield operations through advanced modelling and automation with experience in tools like IPM and IVM/IFM.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/2025-01-09%2023.33.03.jpg",
    expertise: ["Integrated Production Modelling", "Automation", "IPM Suite", "Field Optimization"],
    expertiseRu: ["Integrated Production Modelling", "Automation", "IPM Suite", "Field Optimization"],
    isLeadership: false
  },
  {
    id: "olzhas-tleukhabyluly",
    name: "Olzhas Tleukhabyluly",
    role: "Technical Director | Petroleum Engineer",
    roleRu: "Technical Director | Petroleum Engineer",
    bio: "Reservoir engineering expert with deep experience in integrated production modelling, management consulting, and petroleum economics.",
    bioRu: "Reservoir engineering expert with deep experience in integrated production modelling, management consulting, and petroleum economics.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20Facebook).jpg",
    expertise: ["Reservoir Engineering", "Integrated Production Modelling", "Management Consulting", "Petroleum Economics"],
    expertiseRu: ["Reservoir Engineering", "Integrated Production Modelling", "Management Consulting", "Petroleum Economics"],
    isLeadership: true
  },
  {
    id: "amangeldi-azat",
    name: "Amangeldi Azat",
    role: "DOF Engineer | Full-Stack Developer",
    roleRu: "DOF Engineer | Full-Stack Developer",
    bio: "IT engineer specialising in full-stack and Digital Oilfield development, creating web applications and data-driven tools for energy operations.",
    bioRu: "IT engineer specialising in full-stack and Digital Oilfield development, creating web applications and data-driven tools for energy operations.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20Facebook)-8.png",
    expertise: ["Full-Stack Development", "Digital Oilfield", "Data Tools", "Automation"],
    expertiseRu: ["Full-Stack Development", "Digital Oilfield", "Data Tools", "Automation"],
    isLeadership: false
  },
  {
    id: "aibek-ozhiken",
    name: "Aibek Ozhiken",
    role: "Frontend Developer",
    roleRu: "Frontend Developer",
    bio: "Software engineer specialising in building data-driven, user-centric web applications for modern digital solutions.",
    bioRu: "Software engineer specialising in building data-driven, user-centric web applications for modern digital solutions.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/IMG_4038.JPG",
    expertise: ["Frontend Development", "User Experience", "Web Applications", "Digital Solutions"],
    expertiseRu: ["Frontend Development", "User Experience", "Web Applications", "Digital Solutions"],
    isLeadership: false
  },
  {
    id: "kaiyrgeldi-shayakhmet",
    name: "Kaiyrgeldi Shayakhmet",
    role: "Reservoir Engineer",
    roleRu: "Reservoir Engineer",
    bio: "Reservoir and geoscience engineer with expertise in project management and digitalization initiatives.",
    bioRu: "Reservoir and geoscience engineer with expertise in project management and digitalization initiatives.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20Facebook)-6.png",
    expertise: ["Reservoir Engineering", "Project Management", "Digitalization", "Field Studies"],
    expertiseRu: ["Reservoir Engineering", "Project Management", "Digitalization", "Field Studies"],
    isLeadership: false
  },
  {
    id: "nazerke-murat",
    name: "Nazerke Murat",
    role: "Project Manager",
    roleRu: "Project Manager",
    bio: "Project manager overseeing deadlines, supporting administrative tasks, and preparing reports for smooth execution.",
    bioRu: "Project manager overseeing deadlines, supporting administrative tasks, and preparing reports for smooth execution.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/2025-05-08%2017.06.54.jpg",
    expertise: ["Project Coordination", "Reporting", "Team Support", "Process Control"],
    expertiseRu: ["Project Coordination", "Reporting", "Team Support", "Process Control"],
    isLeadership: false
  },
  {
    id: "aktan-ibrayev",
    name: "Aktan Ibrayev",
    role: "Petroleum Engineer",
    roleRu: "Petroleum Engineer",
    bio: "Reservoir engineer with expertise in Digital Oilfield development and building specialised applications for energy operations.",
    bioRu: "Reservoir engineer with expertise in Digital Oilfield development and building specialised applications for energy operations.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%D0%98%D0%B1%D1%80%D0%B0%D0%B5%D0%B2%20%D0%90%D0%BA%D1%82%D0%B0%D0%BD%20(4).jpg",
    expertise: ["Reservoir Management", "Digital Oilfield", "Production Analysis", "Software Development"],
    expertiseRu: ["Reservoir Management", "Digital Oilfield", "Production Analysis", "Software Development"],
    isLeadership: false
  },
  {
    id: "aibek-mukhtarov",
    name: "Aibek Mukhtarov",
    role: "Petroleum Engineer | DOF Engineer",
    roleRu: "Petroleum Engineer | DOF Engineer",
    bio: "Expert in creating and optimising production engineering tools in the IPM suite with strong focus on well performance modelling and optimisation.",
    bioRu: "Expert in creating and optimising production engineering tools in the IPM suite with strong focus on well performance modelling and optimisation.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%7Btypelayers%2Cclient%7Bts1736465244477%2Cver-144b481.png",
    expertise: ["Production Engineering", "IPM Suite", "Well Modelling", "Optimisation"],
    expertiseRu: ["Production Engineering", "IPM Suite", "Well Modelling", "Optimisation"],
    isLeadership: false
  },
  {
    id: "ali-aristanov",
    name: "Ali Aristanov",
    role: "Backend Developer",
    roleRu: "Backend Developer",
    bio: "Developer focused on creating efficient server-side systems and optimising processes to support business operations.",
    bioRu: "Developer focused on creating efficient server-side systems and optimising processes to support business operations.",
    image: "https://img1.wsimg.com/isteam/ip/20c41127-f617-4cb4-8864-5231b81fdf0b/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-2.png",
    expertise: ["Backend Development", "Process Optimisation", "Systems Architecture", "Automation"],
    expertiseRu: ["Backend Development", "Process Optimisation", "Systems Architecture", "Automation"],
    isLeadership: false
  }
]
