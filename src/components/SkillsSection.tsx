import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#232834]" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight"
          >
            Verified technical stack.
          </h2>
          <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed">
            All listed skills are grounded in completed projects, repositories, and automated test suites. Organized by engineering domain without artificial proficiency percentages or fabricated progress meters.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#13161C] border border-[#232834] p-6 hover:border-[#373E50] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-display font-bold text-[#F5F5F0]">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#686D76]">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-[#969BA3] leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#232834]/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-[#181C25] border border-[#232834] text-xs font-mono text-[#F5F5F0] hover:border-[#C7FF3A]/60 hover:text-[#C7FF3A] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
