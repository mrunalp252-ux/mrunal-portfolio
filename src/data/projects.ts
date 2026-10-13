export interface Project {
  id: string;
  name: string;
  subtitle: string;
  isFlagship: boolean;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  repositoryUrl: string;
  liveUrl?: string;
  diagramType?: 'krishi-arch';
}

export const PROJECTS: Project[] = [
  {
    id: 'krishi-sahayak',
    name: 'Krishi Sahayak (कृषी सहायक)',
    subtitle: 'Multilingual Digital Agronomic & Welfare Platform for Indian Farmers',
    isFlagship: true,
    problem:
      'Indian farmers—particularly across regional Maharashtra—often experience fragmented access to localized scientific cultivation cycles, hyper-local agro-meteorological advisories, and state government subsidy schemes in regional languages.',
    solution:
      'A dedicated smart agriculture platform delivering 111 localized cultivation guides across 37 staples and cash crops via a 10-step scientific lifecycle, regional agromet advisories, government subsidy portals (PM-KISAN, PMFBY, MahaDBT), and mandi market prices in Marathi, Hindi, and English.',
    features: [
      '111 Multilingual Crop Guides: Sequential 10-step scientific guides covering soil preparation, irrigation, IPM, and harvesting for 37 crops',
      'Government Welfare Portal: Verification and application guidelines for PM-KISAN, PMFBY crop insurance, Soil Health Card, and MahaDBT',
      'Agromet Advisories: Hyper-local weather data paired with actionable farm activity guidelines',
      'Modular REST API: Express.js backend with Mongoose ORM, structured route controllers, and JWT authentication',
      'Automated Test Suite: Integration test suite built with Jest and Supertest ensuring route validation and schema integrity',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JavaScript (ES6+)',
      'Jest',
      'Supertest',
      'JWT Auth',
      'Winston Logger',
    ],
    repositoryUrl: 'https://github.com/mrunalp252-ux/KrishiSahayak',
    liveUrl: 'https://krishi-sahayak-i53i.onrender.com',
    diagramType: 'krishi-arch',
  },
  {
    id: 'question-paper-analyzer',
    name: 'Question Paper Analyzer',
    subtitle: 'Semester University Exam Pattern & Weightage Engine',
    isFlagship: false,
    problem:
      'Students preparing for university semester exams often find it difficult to identify recurring questions, high-yield syllabus modules, and marks distribution across exam sessions.',
    solution:
      'A responsive static web application designed to parse semester university question papers, uncovering recurring question trends, unit marks weightage, and difficulty distributions for strategic exam preparation.',
    features: [
      'Topic & Module Weightage: Breaks down examination questions by syllabus unit and mark allocation',
      'Recurrence Identification: Highlights frequently asked questions across previous exam sessions',
      'Static Client-Side Execution: Fast, zero-dependency browser execution with responsive dashboard layouts',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Local Storage'],
    repositoryUrl: 'https://github.com/mrunalp252-ux/question-paper-analyzer',
    liveUrl: 'https://question-paper-analyzer-beta.vercel.app/',
  },
  {
    id: 'smartnotes',
    name: 'SmartNotes',
    subtitle: 'Full-Stack Notes Management Platform',
    isFlagship: false,
    problem:
      'Everyday lecture note-taking, code snippet archiving, and idea capture require a fast, clean interface with dependable server-side persistence and zero clutter.',
    solution:
      'A modern web application built with Python Flask and SQLAlchemy providing full CRUD capabilities, tag filtering, responsive mobile layouts, and persistent SQLite database storage.',
    features: [
      'Full CRUD Workflow: Create, edit, tag, search, and organize notes seamlessly',
      'SQLAlchemy Persistence: Structured relational models with SQLite storage backend',
      'Responsive Web UI: Tailored for mobile and desktop reading with clean typography',
    ],
    techStack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
    repositoryUrl: 'https://github.com/mrunalp252-ux/smartnotes',
    liveUrl: 'https://smartnotes-club.vercel.app/notes',
  },
  {
    id: 'carwash-connect',
    name: 'CarWash Connect',
    subtitle: 'Location-Based Auto Care Scheduling Platform',
    isFlagship: false,
    problem:
      'Vehicle owners in urban areas frequently experience uncertain wait times and lack transparent service package pricing when looking for local car wash facilities.',
    solution:
      'A location-aware web application for discovering nearby automobile wash centers, calculating distances via geodesic coordinates, selecting scheduling slots, and managing reservations.',
    features: [
      'Service Center Directory: Browse local vehicle wash stations with service offerings and pricing',
      'Interactive Slot Booking: Select date and time slot with instant confirmation state',
      'Geodesic Mapping: Integrates coordinate distance estimation and client-side reservation state',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Leaflet.js', 'Responsive Layout'],
    repositoryUrl: 'https://github.com/Abhi-1703/carwash-connect',
    liveUrl: 'https://carwash-connect-4v4f.onrender.com/',
  },
];
