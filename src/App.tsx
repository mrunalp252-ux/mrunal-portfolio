import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#C7FF3A]/20 selection:text-[#C7FF3A]">
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
