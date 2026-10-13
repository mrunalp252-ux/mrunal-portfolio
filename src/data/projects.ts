export interface Project {
  id: string;
  name: string;
  subtitle: string;
  isFlagship: boolean;
  problem: string;
  solution: string;
  corePrinciple?: string;
  features: string[];
  techStack: string[];
  repositoryUrl: string;
  liveUrl?: string;
  diagramType?: 'swasthyaai-flow' | 'krishi-arch';
}

export const PROJECTS: Project[] = [
  {
    id: 'swasthyaai',
    name: 'SwasthyaAI',
    subtitle: 'Doctor-Supervised Multilingual Patient Intake & Clinical Copilot',
    isFlagship: true,
    problem:
      'In high-volume public and rural clinics, patient case documentation is manually bottlenecked, and patients communicating in regional languages encounter language barriers when conveying complex symptoms.',
    solution:
      'An accessible, voice-first clinical intake assistant supporting Marathi, Hindi, and English. It listens to patient symptoms, generates adaptive follow-up questions to uncover missing parameters, formats observations into structured SOAP clinical summaries, and supports doctor review and FHIR R4 medical record exports.',
    corePrinciple:
      'Doctor Verification Required: AI prepares structured draft notes; clinicians verify, edit, and sign off. No autonomous diagnosis or prescribing.',
    features: [
      'Voice-First Multilingual Intake: Speech recognition supporting Marathi (mr-IN), Hindi (hi-IN), and English (en-IN) with bilingual transcripts',
      'Adaptive Follow-Up Questions: Dynamically identifies missing clinical context (duration, allergies, vitals) and generates targeted inquiry prompts',
      'Structured SOAP Summary: Organizes findings into Subjective, Objective, Assessment, and Plan format with full inline clinician editability',
      'Doctor Verification Gateway: Three-stage sign-off pipeline (AI Draft → Doctor Review → Doctor Approved) with digital approval audit trail',
      'Longitudinal Patient Records: Chronological timeline for vitals monitoring, consultations, and structured lab report extraction',
      'HL7 FHIR R4 Compatibility: Exportable FHIR R4 JSON bundles configured for ABDM (Ayushman Bharat Digital Mission) interoperability',
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Lucide Icons',
      'Web Speech API',
      'HL7 FHIR R4',
    ],
    repositoryUrl: 'https://github.com/mrunalp252-ux/swasthyaai',
    liveUrl: 'https://swasthyaai-eta.vercel.app',
    diagramType: 'swasthyaai-flow',
  },
  {
    id: 'krishi-sahayak',
    name: 'Krishi Sahayak (कृषी सहायक)',
    subtitle: 'Multilingual Digital Agronomic & Welfare Platform for Indian Farmers',
    isFlagship: true,
    problem:
      'Indian farmers—particularly in Maharashtra—frequently experience fragmented access to localized scientific cultivation cycles, hyper-local agro-meteorological advisories, and state government subsidy schemes in regional languages.',
    solution:
      'A dedicated smart agriculture platform offering 111 detailed crop cultivation guides across 37 staples and cash crops via a 10-step scientific lifecycle, regional agromet advisories, government subsidy portals (PM-KISAN, PMFBY, MahaDBT), and mandi market prices in Marathi, Hindi, and English.',
    features: [
      '111 Multilingual Crop Guides: 10-step scientific guides covering soil preparation, seed treatment, irrigation, IPM, and harvesting for 37 crops',
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
    // liveUrl intentionally omitted: repository backend with local seed/test suite; no live deployment URL in repository.
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
    liveUrl: 'https://mrunalp252-ux.github.io/question-paper-analyzer/',
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
    liveUrl: 'https://smartnotes-steel-five.vercel.app',
  },
  {
    id: 'carwash-connect',
    name: 'CarWash Connect',
    subtitle: 'Location-Based Auto Care Scheduling Web App',
    isFlagship: false,
    problem:
      'Vehicle owners in urban areas frequently experience uncertain wait times and lack transparent service package pricing when looking for local car wash facilities.',
    solution:
      'A client-side web application for discovering nearby automobile wash centers, viewing service options, selecting scheduling slots, and managing reservations.',
    features: [
      'Service Center Directory: Browse local vehicle wash stations with service offerings and pricing',
      'Interactive Slot Booking: Select date and time slot with instant confirmation state',
      'Client State Persistence: Booking records saved to browser storage for review',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Layout'],
    repositoryUrl: 'https://github.com/mrunalp252-ux/carwash-connect',
    liveUrl: 'https://mrunalp252-ux.github.io/carwash-connect/',
  },
];
