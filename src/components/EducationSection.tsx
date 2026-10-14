import React from 'react';
import { GraduationCap, BookOpen, Calendar, Award, Code, Database, Cpu, Network } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface Coursework {
  title: string;
  icon: React.ReactNode;
  topics: string[];
}

const COURSES: Coursework[] = [
  {
    title: 'Data Structures & Algorithms',
    icon: <Code className="w-4 h-4 text-[#C7FF3A]" />,
    topics: ['Arrays, Stacks, Queues', 'Trees & Graph Traversal', 'Sorting & Search Algorithms', 'Complexity Analysis (Big-O)'],
  },
  {
    title: 'Database Management Systems',
    icon: <Database className="w-4 h-4 text-[#C7FF3A]" />,
    topics: ['Relational Schema Design', 'SQL Queries & Joins', 'ACID Transactions & Normalization', 'Document Stores (MongoDB)'],
  },
  {
    title: 'Object-Oriented Programming',
    icon: <Cpu className="w-4 h-4 text-[#C7FF3A]" />,
    topics: ['Encapsulation & Polymorphism', 'Class Hierarchies & Inheritance', 'Interface Contracts', 'Exception Handling'],
  },
  {
    title: 'Web & Network Technologies',
    icon: <Network className="w-4 h-4 text-[#C7FF3A]" />,
    topics: ['HTTP/REST Protocols', 'Client-Server Architecture', 'DOM & Browser Runtime', 'State & Session Handling'],
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#232834]" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Milestones</span>
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight"
          >
            Education &amp; academic foundation.
          </h2>
          <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed">
            Formal undergraduate training in computer science fundamentals paired with project-based engineering implementation.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-[#13161C] border border-[#232834] p-6 sm:p-8 lg:p-10 space-y-8 relative overflow-hidden">
          {/* Subtle Corner Reticle */}
          <div className="absolute top-4 right-4 text-[11px] font-mono text-[#686D76] px-2.5 py-1 rounded bg-[#181C25] border border-[#232834]">
            Undergraduate Status
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#C7FF3A]/10 border border-[#C7FF3A]/40 text-[#C7FF3A] font-medium">
                {PROFILE.degree} • {PROFILE.academicStatus}
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[#969BA3]">
                <Calendar className="w-3.5 h-3.5 text-[#686D76]" />
                <span>2023 – 2027</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F0]">
              {PROFILE.branch}
            </h3>

            <div className="flex items-center space-x-2 text-sm text-[#969BA3]">
              <BookOpen className="w-4 h-4 text-[#C7FF3A]" />
              <span className="font-medium text-[#F5F5F0]">{PROFILE.institute}</span>
              <span className="text-[#686D76]">• {PROFILE.location}</span>
            </div>

            <p className="text-sm text-[#969BA3] leading-relaxed pt-2">
              Engaged in rigorous study of computational fundamentals, algorithmic problem solving, software engineering lifecycle, and database systems. Applying core theoretical principles directly to functional web platforms and automated test frameworks.
            </p>
          </div>

          {/* Key Coursework Grid */}
          <div className="pt-6 border-t border-[#232834] space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#686D76]">
                Core Academic Coursework &amp; Competencies
              </h4>
              <span className="text-xs font-mono text-[#C7FF3A] flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Curriculum</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {COURSES.map((course) => (
                <div
                  key={course.title}
                  className="p-4 rounded-xl bg-[#0B0D10]/70 border border-[#232834] space-y-2 hover:border-[#373E50] transition-colors"
                >
                  <div className="flex items-center space-x-2 text-[#F5F5F0]">
                    {course.icon}
                    <h5 className="text-xs font-display font-semibold">{course.title}</h5>
                  </div>
                  <ul className="space-y-1 pt-1">
                    {course.topics.map((t, idx) => (
                      <li key={idx} className="text-[11px] text-[#969BA3] flex items-center space-x-1.5">
                        <span className="text-[#C7FF3A]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
