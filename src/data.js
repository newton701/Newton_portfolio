// ====== Edit your details here ======
export const profile = {
  firstName: 'Newton',
  fullName: 'Newton Dakua',
  roles: [
    'scalable backend services',
    'FHIR healthcare APIs',
    'Spring Boot microservices',
    'Flutter front ends',
  ],
  intro:
    'Software Engineer with 3+ years of experience in Java, Spring Boot and RESTful APIs across healthcare and media platforms, building FHIR-based integrations, and recently working with Flutter for the front end.',
  email: 'dakuanewton99@gmail.com',
  // Opens Gmail compose in the browser (works even without a mail app installed)
  gmailCompose:
    'https://mail.google.com/mail/?view=cm&fs=1&to=dakuanewton99@gmail.com&su=Hello%20Newton',
  phones: ['+91 8339855633', '+91 8917201875'],
  location: 'Bengaluru, India',
  github: 'https://share.google/FumWAU55LX8XfhlxD',
  githubName: 'newton701',
  linkedin: 'https://www.linkedin.com/in/newton-dakua-219011313/',
  resume: 'Newton_Dakua_Resume.pdf',
}

export const navLinks = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

export const stats = [
  { end: 3, suffix: '+', label: 'Years Experience' },
  { end: 20, suffix: '%', label: 'Fewer Production Defects' },
  { end: 3, suffix: '', label: 'Major Projects' },
  { end: 2, suffix: '', label: 'Companies' },
]

export const aboutCards = [
  ['🏥', 'Healthcare Tech', 'Surgical device data and clinical systems.'],
  ['📺', 'Media Streaming', 'IPTV platform backend and stability.'],
  ['🧪', 'Quality First', 'Unit testing and root-cause analysis.'],
  ['📱', 'Flutter', 'Recent hands-on front-end work.'],
]

export const skills = [
  { icon: '☕', title: 'Languages', level: 92, items: ['Java 17', 'Java 8+', 'Core Java', 'SQL', 'Flutter'], hot: 'Java 17' },
  { icon: '🍃', title: 'Frameworks', level: 90, items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA'] },
  { icon: '🌐', title: 'Web Services', level: 88, items: ['RESTful APIs', 'Swagger / OpenAPI', 'FHIR'] },
  { icon: '🗄️', title: 'Database & Messaging', level: 82, items: ['PostgreSQL', 'Apache Kafka', 'Tomcat'] },
  { icon: '🚀', title: 'DevOps Tools', level: 78, items: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Postman'] },
  { icon: '✅', title: 'Testing & Process', level: 85, items: ['JUnit', 'API Testing', 'Agile', 'Scrum', 'Linux'] },
]

export const jobs = [
  {
    title: 'Software Engineer',
    company: 'PCS Global Pvt. Ltd. · Bengaluru',
    date: 'Jun 2025 – Present',
    now: true,
    points: [
      'Engineered scalable RESTful APIs using Spring Boot to process surgical device data for a healthcare platform.',
      'Developed FHIR-compliant data exchange services for interoperability with clinical systems.',
      'Reduced recurring production defects by 20% through root-cause analysis and better unit test coverage.',
      'Optimized database queries and request handling to improve API reliability and throughput.',
      'Took part in Agile sprints, delivered client demos and ensured timely feature releases.',
    ],
  },
  {
    title: 'Associate Engineer',
    company: 'Kozy Kreative Concept Pvt. Ltd.',
    date: 'Nov 2019 – Apr 2022',
    points: [
      'Developed backend service components using Core Java for an IPTV media streaming platform.',
      'Built reusable Java utilities that reduced manual testing effort and improved automation efficiency.',
      'Resolved production issues to keep video streaming and the platform stable.',
      'Reviewed pull requests and contributed to proof-of-concept implementations for new features.',
    ],
  },
]

export const projects = [
  {
    icon: '💈',
    name: 'Salon Sathi',
    tone: 'amber',
    points: [
      'Spring Boot services for real-time owner, barber and admin processes.',
      'FHIR-based salon data integration via RESTful APIs.',
      'Flutter front end; tuned PostgreSQL performance.',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'Flutter'],
  },
  {
    icon: '🏥',
    name: 'Health Suite Digital Platform',
    tone: 'emerald',
    points: [
      'Backend services for real-time surgery device data.',
      'FHIR-based healthcare data integration over REST.',
      'PostgreSQL optimization for reliability.',
    ],
    tech: ['Java', 'Spring Boot', 'Swagger', 'Kafka'],
  },
  {
    icon: '📝',
    name: 'Online Examination System',
    tone: 'rose',
    points: [
      'Secure web platform with authentication and authorization.',
      'Timer-based exam flow with auto-submit on timeout.',
      'Instant result evaluation and display module.',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
]

export const education = [
  ['Master of Computer Applications (MCA)', 'NIST Institute of Science and Technology, Odisha'],
  ['Bachelor of Science (Chemistry)', 'Berhampur University, Odisha'],
]

export const certifications = [
  ['Java Full Stack Development Training', 'JSpiders, Bengaluru'],
  ['Database Management System (Elite)', 'NPTEL'],
  ['Programming in Java', 'NPTEL · Yhills'],
]
