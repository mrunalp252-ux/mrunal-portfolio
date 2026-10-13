# Mrunal Patil — Developer Portfolio

A modern, neo-futuristic personal developer portfolio engineered with React 19, TypeScript, Vite, Tailwind CSS, Motion, and Three.js. Built for high performance, accessibility (WCAG AA), responsive fidelity, and truthful representation of engineering work.

---

## 🌟 Highlights & Architecture

- **Neo-Futuristic Minimalism (Signal Core)**: Sleek dark-mode aesthetic pairing deep graphite (`#0B0D10`), crisp off-white typography (`#F5F5F0`), cool grey structural wireframes (`#969BA3`), and electric acid-lime accents (`#C7FF3A`).
- **Signature 3D Hero (Signal Core)**: Lightweight Three.js interactive canvas displaying a wireframe geometric node lattice with idle rotation, damped pointer tilt, viewport pause, and WebGL/reduced-motion SVG fallback.
- **Single Source of Truth**: All profile data, projects, and skills are decoupled into type-safe data files under `src/data/`.
- **Verified Engineering Projects**: Flagship storytelling for **Krishi Sahayak** (multilingual Indian agriculture platform), alongside focused showcases for **Question Paper Analyzer**, **SmartNotes**, and **CarWash Connect**.
- **High Performance**: Code-split Three.js bundle, sub-85 KB initial gzipped JavaScript, local `@fontsource` font packages, and zero external blocking fonts.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | React 19, TypeScript, Vite |
| **Styling & Design System** | Tailwind CSS v4, Modern CSS Custom Properties |
| **3D & Visuals** | Vanilla Three.js (WebGL), Custom SVG Flow Diagrams |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/Labels) |
| **Icons & Tooling** | Lucide React, Custom Bespoke SVG Monograms |
| **Testing & CI/CD** | GitHub Actions, ESLint/Oxlint, GitHub Pages, Vercel |

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg           # Bespoke MP monogram SVG favicon
│   └── icons.svg
├── src/
│   ├── assets/               # Static assets
│   ├── components/
│   │   ├── AboutSection.tsx  # Academic background & values
│   │   ├── ContactSection.tsx# Direct email, copy-to-clipboard, social links
│   │   ├── Diagrams.tsx      # System architecture & clinical pipeline diagrams
│   │   ├── Footer.tsx        # Dynamic copyright & quick navigation
│   │   ├── Hero.tsx          # Headline, introduction & 3D hero container
│   │   ├── Icons.tsx         # Accessible SVG icon components
│   │   ├── Navbar.tsx        # Monogram, anchor navigation & mobile drawer
│   │   ├── ProjectCard.tsx   # Flagship storytelling & secondary cards
│   │   ├── ProjectSection.tsx# Project showcases
│   │   ├── SignalCore3D.tsx  # Three.js interactive geometric lattice
│   │   ├── SignalCoreFallback.tsx # Accessible SVG fallback
│   │   └── SkillsSection.tsx # Verified technical competencies
│   ├── data/
│   │   ├── profile.ts        # Single source of truth for personal information
│   │   ├── projects.ts       # Detailed project records, features & URLs
│   │   └── skills.ts         # Verified technical skills by category
│   ├── App.tsx               # Root application layout
│   ├── index.css             # Tailwind v4 theme tokens & accessibility rules
│   └── main.tsx              # React mounting & font imports
├── index.html                # Semantic HTML5 shell, Open Graph & SEO metadata
├── vite.config.ts            # Vite build configuration with GitHub Pages base path
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development

### Prerequisites

- **Node.js**: `v20.x` or higher (verified on Node `v24.x`)
- **npm**: `v10.x` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/mrunalp252-ux/mrunal-portfolio.git
cd mrunal-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✏️ Customization & Updating Content

To update website content, edit the corresponding file in `src/data/`:

1. **Personal Information (`src/data/profile.ts`)**:
   - Name, headline, introduction, academic status, institution, and contact links.
2. **Projects (`src/data/projects.ts`)**:
   - Add, edit, or remove project cards, problem/solution descriptions, feature checklists, repository URLs, or live URLs.
3. **Skills (`src/data/skills.ts`)**:
   - Update languages, frontend, backend, database, and tool categories.

---

## 🌐 Deployment

### 1. GitHub Pages (Automated via GitHub Actions)

The repository includes `.github/workflows/deploy.yml` which automatically builds and deploys the portfolio on every push to `main`.

- **Base Path**: Configured dynamically in `vite.config.ts` so that `GITHUB_PAGES=true` outputs assets relative to `/mrunal-portfolio/`.
- **Setup in GitHub**:
  1. Navigate to **Settings > Pages** in your repository.
  2. Under **Build and deployment > Source**, select **GitHub Actions**.
  3. Pushing commits to `main` will automatically trigger deployment to `https://mrunalp252-ux.github.io/mrunal-portfolio/`.

### 2. Vercel (Root Domain)

- When deployed on Vercel, `GITHUB_PAGES` is unset, so Vite builds with root base `/`.
- Connect the repository to Vercel with default settings:
  - **Framework Preset**: Vite
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`

---

## 🔒 Privacy & Content Integrity

- No phone numbers, roll numbers, or personal secrets are exposed.
- All project details, technical skills, and features reflect verifiable source code and repositories.
- Zero placeholder text, fake counters, or fabricated progress bars.

---

## 📄 License

MIT License. Designed and engineered by **Mrunal Patil**.
