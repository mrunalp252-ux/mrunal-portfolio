import React from 'react';
import { ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { Project } from '../data/projects';
import { SwasthyaAiDiagram, KrishiSahayakDiagram } from './Diagrams';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.isFlagship) {
    return (
      <article
        id={`project-${project.id}`}
        className="rounded-2xl bg-[#13161C] border border-[#232834] overflow-hidden hover:border-[#373E50] transition-colors p-6 sm:p-8 lg:p-10 flex flex-col space-y-6"
        aria-labelledby={`heading-${project.id}`}
      >
        {/* Flagship Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#181C25] border border-[#232834] text-[#C7FF3A]">
                Flagship Project
              </span>
            </div>
            <h3
              id={`heading-${project.id}`}
              className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F0]"
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
                <span>Visit website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Core Principle / Disclaimer if present */}
        {project.corePrinciple && (
          <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#181C25]/80 border border-[#C7FF3A]/30 text-xs text-[#F5F5F0]">
            <AlertCircle className="w-4 h-4 text-[#C7FF3A] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#C7FF3A]">Core Clinical Principle: </strong>
              {project.corePrinciple}
            </span>
          </div>
        )}

        {/* Narrative Columns: Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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
        {project.diagramType === 'swasthyaai-flow' && <SwasthyaAiDiagram />}
        {project.diagramType === 'krishi-arch' && <KrishiSahayakDiagram />}

        {/* Verified Features List */}
        <div className="space-y-3 pt-2">
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
        <div className="pt-4 border-t border-[#232834] flex flex-wrap items-center gap-2">
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

  // Secondary Project: Compact Card
  return (
    <article
      id={`project-${project.id}`}
      className="rounded-xl bg-[#13161C] border border-[#232834] p-6 hover:border-[#373E50] transition-colors flex flex-col justify-between space-y-4"
      aria-labelledby={`heading-${project.id}`}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              id={`heading-${project.id}`}
              className="text-lg font-display font-bold text-[#F5F5F0]"
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

      <div className="space-y-3 pt-3 border-t border-[#232834]">
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
              <span>Visit</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
