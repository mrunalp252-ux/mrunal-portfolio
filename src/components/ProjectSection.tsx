import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

export const ProjectSection: React.FC = () => {
  const flagshipProjects = PROJECTS.filter((p) => p.isFlagship);
  const secondaryProjects = PROJECTS.filter((p) => !p.isFlagship);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#232834]" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            <Layers className="w-4 h-4" />
            <span>Featured Software</span>
          </div>
          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight"
          >
            Built from requirements to code.
          </h2>
          <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed">
            A curated portfolio of software projects spanning clinical healthcare copilots, regional agronomy platforms, and web utilities. Every feature, technology, and link is derived directly from working source code.
          </p>
        </div>

        {/* Flagship Projects */}
        <div className="space-y-12">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Secondary / Focused Projects */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#232834] pb-3">
            <h3 className="text-lg font-display font-semibold text-[#F5F5F0]">
              Additional Engineering Work
            </h3>
            <span className="text-xs font-mono text-[#686D76]">
              {secondaryProjects.length} Verified Repositories
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
