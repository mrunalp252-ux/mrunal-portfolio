export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages used across frontend, backend, and scripting projects.',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    description: 'Modern component architectures, design systems, and responsive user interfaces.',
    skills: [
      'React',
      'Tailwind CSS',
      'Semantic HTML5',
      'Responsive Web Design',
      'Three.js (WebGL)',
      'DOM & Web APIs',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server runtimes, HTTP routing, middleware validation, and authentication.',
    skills: [
      'Node.js',
      'Express.js',
      'Python Flask',
      'RESTful API Design',
      'JWT Authentication',
      'Express Validator',
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Document databases, relational engines, and client-side data persistence.',
    skills: [
      'MongoDB',
      'Mongoose ORM',
      'SQLite',
      'SQLAlchemy',
      'Browser Storage',
    ],
  },
  {
    title: 'Tools & Quality Assurance',
    description: 'Version control, build pipelines, testing frameworks, and continuous deployment.',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'Jest',
      'Supertest',
      'GitHub Actions',
      'Vercel',
      'npm',
    ],
  },
];
