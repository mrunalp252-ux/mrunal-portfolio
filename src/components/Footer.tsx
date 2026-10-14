import React from 'react';
import { PROFILE } from '../data/profile';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0B0D10] border-t border-[#232834]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#13161C] border border-[#232834] flex items-center justify-center">
              <span className="font-mono text-xs font-semibold text-[#C7FF3A]">
                {PROFILE.monogram}
              </span>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#F5F5F0]">{PROFILE.name}</span>
              <span className="block text-[11px] font-mono text-[#686D76]">
                {PROFILE.degree} {PROFILE.branch}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#969BA3]" aria-label="Footer Navigation">
            <a href="#work" className="hover:text-[#C7FF3A] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#C7FF3A] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#C7FF3A] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#C7FF3A] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#C7FF3A] transition-colors">Contact</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#686D76] hover:text-[#C7FF3A] transition-colors focus-visible:outline-[#C7FF3A]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center space-x-6 text-xs font-mono text-[#969BA3] pt-4 border-t border-[#232834]/50">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-[#C7FF3A] transition-colors"
            aria-label="Mrunal Patil on GitHub (opens in new tab)"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>github.com/mrunalp252-ux</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-[#C7FF3A] transition-colors"
            aria-label="Mrunal Patil on LinkedIn (opens in new tab)"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>linkedin.com/in/mrunal-mahendra-patil</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Dynamic Year & Copyright */}
        <div className="pt-6 border-t border-[#232834]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#686D76]">
          <p>© {CURRENT_YEAR} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
