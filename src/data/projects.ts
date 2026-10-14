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
      'Automated Test Suite: Integration test suite built with Jest and Supertest (8 test suites, 70 passing tests) ensuring route validation and schema integrity',
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
      'Visual Difficulty Matrix: Classifies questions into foundational, analytical, and advanced tiers',
      'Recurrence Identification: Highlights frequently asked questions across previous exam sessions',
      'Custom SVG Analytics: High-performance SVG visualization engines for donut distributions and marks progress',
      'Searchable Question Bank: Filterable questions with instant keyword search and clipboard copying',
    ],
    techStack: [
      'HTML5',
      'Vanilla CSS3',
      'JavaScript (ES6+)',
      'SVG Visualization Engines',
      'LocalStorage',
    ],
    repositoryUrl: 'https://github.com/mrunalp252-ux/question-paper-analyzer',
    liveUrl: 'https://question-paper-analyzer-beta.vercel.app/',
  },
  {
    id: 'smartnotes',
    name: 'SmartNotes',
    subtitle: 'Full-Stack Academic & Developer Notes Management Platform',
    isFlagship: false,
    problem:
      'Everyday lecture note-taking, code snippet archiving, and idea capture require a fast, clean interface with dependable server-side persistence and zero clutter.',
    solution:
      'A modern web application built with Python Flask and SQLAlchemy providing full CRUD capabilities, tag filtering, responsive mobile layouts, and persistent database storage.',
    features: [
      'Full CRUD Lifecycle: Create, edit, tag, search, and organize notes seamlessly',
      'Priority Pinning: Pin crucial lecture notes to keep them anchored at the top of the grid',
      'Structured Taxonomy: Organize notes across academic, programming, personal, and project categories',
      'SQLAlchemy Persistence: Relational data models supporting local SQLite and cloud PostgreSQL',
      'Automated Test Suite: Python test suite (test_smartnotes.py) verifying routes, validations, and CRUD operations',
    ],
    techStack: [
      'Python 3.11',
      'Flask 3.0',
      'SQLAlchemy',
      'SQLite / PostgreSQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vercel Serverless',
    ],
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
      'Geodesic Distance Engine: Implements the Haversine formula with HTML5 Geolocation to rank centers by proximity',
      'Interactive Leaflet Mapping: Free, privacy-friendly map rendering with custom service markers via OpenStreetMap',
      'Two-Tier Collision-Proof Booking: Visual slot disabling on client paired with atomic concurrency checking on backend',
      'Provider Management Dashboard: Real-time appointment review, slot configuration, and custom wash package CRUD',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Leaflet.js',
      'OpenStreetMap',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'JWT Auth',
    ],
    repositoryUrl: 'https://github.com/Abhi-1703/carwash-connect',
    liveUrl: 'https://carwash-connect-4v4f.onrender.com/',
  },
];
