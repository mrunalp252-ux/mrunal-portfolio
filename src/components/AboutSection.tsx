import React from 'react';
import { User, GraduationCap, MapPin, BookOpen, Compass, ShieldCheck, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#232834]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            <User className="w-4 h-4" />
            <span>Profile &amp; Background</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight"
          >
            Engineering fundamentals &amp; curiosity.
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#969BA3] leading-relaxed">
            {PROFILE.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-4 border-t border-[#232834]">
              <h3 className="text-sm font-mono uppercase text-[#F5F5F0] mb-3 flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#C7FF3A]" />
                <span>Core Engineering Principles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#969BA3]">
                <div className="p-3.5 rounded-lg bg-[#13161C] border border-[#232834] hover:border-[#373E50] transition-colors">
                  <strong className="text-[#F5F5F0] block mb-1">Accessibility &amp; Inclusion</strong>
                  Prioritizing multilingual support, responsive touch ergonomics, and intuitive navigation across diverse user contexts.
                </div>
                <div className="p-3.5 rounded-lg bg-[#13161C] border border-[#232834] hover:border-[#373E50] transition-colors">
                  <strong className="text-[#F5F5F0] block mb-1">Measurable Correctness</strong>
                  Validating endpoints with automated regression test suites and enforcing strict type contracts with TypeScript.
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Fast Facts Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#13161C] border border-[#232834] p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-display font-semibold text-[#F5F5F0] pb-2 border-b border-[#232834] flex items-center justify-between">
              <span>Academic Profile</span>
              <span className="text-xs font-mono text-[#C7FF3A]">B.Tech CSE</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <GraduationCap className="w-5 h-5 text-[#C7FF3A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#686D76] uppercase">Degree &amp; Branch</span>
                  <p className="text-sm font-medium text-[#F5F5F0]">{PROFILE.degree} in {PROFILE.branch}</p>
                  <p className="text-xs text-[#969BA3]">{PROFILE.academicStatus}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <BookOpen className="w-5 h-5 text-[#C7FF3A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#686D76] uppercase">Institution</span>
                  <p className="text-sm font-medium text-[#F5F5F0]">{PROFILE.institute}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#C7FF3A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#686D76] uppercase">Location</span>
                  <p className="text-sm font-medium text-[#F5F5F0]">{PROFILE.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Compass className="w-5 h-5 text-[#C7FF3A] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#686D76] uppercase">Primary Interest</span>
                  <p className="text-sm font-medium text-[#F5F5F0]">Full-Stack Systems &amp; Web Applications</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#232834] text-xs text-[#969BA3]">
              <div className="flex items-center space-x-2 text-[#C7FF3A] font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Engineering Ethics</span>
              </div>
              Focused on writing clean, reproducible software with truthful specifications, open source documentation, and verifiable testing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
