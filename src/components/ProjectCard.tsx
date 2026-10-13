import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { Project } from '../data/projects';
import { KrishiSahayakDiagram } from './Diagrams';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (project.isFlagship) {
    return (
      <article
        ref={cardRef}
        id={`project-${project.id}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl bg-[#13161C] border border-[#232834] overflow-hidden transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col space-y-6 hover:border-[#373E50] hover:shadow-2xl hover:shadow-black/60 group"
        aria-labelledby={`heading-${project.id}`}
      >
        {/* Dynamic Pointer Spotlight Glow on Desktop */}
        {!reducedMotion && isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 rounded-2xl"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 255, 58, 0.07), transparent 40%)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Flagship Header */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#181C25] border border-[#232834] text-[#C7FF3A]">
                Flagship Project
              </span>
            </div>
            <h3
              id={`heading-${project.id}`}
              className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F0] group-hover:text-white transition-colors"
            >
              {project.name}
            </h3>
            <p className="text-sm font-medium text-[#969BA3]">{project.subtitle}</p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#181C25] border border-[#232834] text-xs font-mono text-[#F5F5F0] hover:border-[#C7FF3A] hover:text-[#C7FF3A] transition-all"
              aria-label={`View ${project.name} repository on GitHub (opens in new tab)`}
            >
              <GitHubIcon className="w-4 h-4" />
              <span>View repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#C7FF3A] text-xs font-mono font-semibold text-[#0B0D10] hover:bg-[#d6ff66] transition-all shadow-sm"
                aria-label={`Visit live website for ${project.name} (opens in new tab)`}
              >
                <span>Visit live app</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Narrative Columns: Problem & Solution */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2 p-5 rounded-xl bg-[#0B0D10]/50 border border-[#232834]/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#686D76]">
              Problem Addressed
            </h4>
            <p className="text-sm text-[#969BA3] leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-2 p-5 rounded-xl bg-[#0B0D10]/50 border border-[#232834]/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
              Solution Overview
            </h4>
            <p className="text-sm text-[#969BA3] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Flow Diagram */}
        {project.diagramType === 'krishi-arch' && (
          <div className="relative z-10">
            <KrishiSahayakDiagram />
          </div>
        )}

        {/* Verified Features List */}
        <div className="relative z-10 space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#686D76]">
            Verified Implemented Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2.5 text-xs text-[#969BA3] leading-snug"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C7FF3A] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Tags */}
        <div className="relative z-10 pt-4 border-t border-[#232834] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#686D76] mr-2">Tech Stack:</span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded bg-[#181C25] border border-[#232834] text-[#F5F5F0]"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    );
  }

  // Secondary Project Card with Spotlight Hover & Refined Details
  return (
    <article
      ref={cardRef}
      id={`project-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl bg-[#13161C] border border-[#232834] p-6 transition-all duration-300 hover:border-[#373E50] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between space-y-4 group overflow-hidden"
      aria-labelledby={`heading-${project.id}`}
    >
      {/* Pointer Spotlight on Desktop */}
      {!reducedMotion && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 rounded-xl"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 255, 58, 0.08), transparent 50%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              id={`heading-${project.id}`}
              className="text-lg font-display font-bold text-[#F5F5F0] group-hover:text-white transition-colors"
            >
              {project.name}
            </h3>
            <p className="text-xs font-medium text-[#969BA3]">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-xs text-[#969BA3] leading-relaxed">{project.solution}</p>

        {/* Features preview */}
        <ul className="space-y-1.5 pt-1">
          {project.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-[11px] text-[#969BA3]">
              <span className="text-[#C7FF3A] font-bold">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 space-y-3 pt-3 border-t border-[#232834]">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181C25] text-[#969BA3] border border-[#232834]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#181C25] border border-[#232834] text-xs font-mono text-[#F5F5F0] hover:border-[#C7FF3A] hover:text-[#C7FF3A] transition-colors"
            aria-label={`View ${project.name} repository on GitHub (opens in new tab)`}
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#C7FF3A]/10 border border-[#C7FF3A]/40 text-xs font-mono text-[#C7FF3A] hover:bg-[#C7FF3A] hover:text-[#0B0D10] transition-colors"
              aria-label={`Visit live website for ${project.name} (opens in new tab)`}
            >
              <span>Visit live app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
