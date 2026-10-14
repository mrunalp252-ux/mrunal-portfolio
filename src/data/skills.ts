export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming and scripting languages used across frontend, backend, and data persistence projects.',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend Engineering',
    description: 'Component architectures, design systems, WebGL rendering, and responsive spatial interfaces.',
    skills: [
      'React',
      'Tailwind CSS',
      'Three.js (WebGL)',
      'Semantic HTML5',
      'Responsive Web Design',
      'Leaflet.js & OpenStreetMap',
      'DOM & Web APIs',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server runtimes, HTTP routing, middleware validation, and session security.',
    skills: [
      'Node.js',
      'Express.js',
      'Python Flask',
      'RESTful API Architecture',
      'JWT Authentication',
      'Express Validator',
      'Haversine Distance Logic',
    ],
  },
  {
    title: 'Databases & Persistence',
    description: 'Document databases, relational ORMs, serverless databases, and client caching.',
    skills: [
      'MongoDB',
      'Mongoose ORM',
      'SQLite',
      'PostgreSQL',
      'SQLAlchemy',
      'LocalStorage & Session',
    ],
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Automated regression test suites, endpoint assertions, and structured runtime logging.',
    skills: [
      'Jest (Automated Unit & Integration)',
      'Supertest (API Testing)',
      'Python Unit Testing',
      'Winston Logger',
      'Helmet Security Headers',
    ],
  },
  {
    title: 'Tools & Cloud Deployment',
    description: 'Version control, build bundlers, continuous integration, and production hosting.',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'Vercel',
      'Render',
      'npm',
      'GitHub Actions',
    ],
  },
];
