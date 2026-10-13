import React, { lazy, Suspense } from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SignalCoreFallback } from './SignalCoreFallback';

const SignalCore3D = lazy(() =>
  import('./SignalCore3D').then((module) => ({ default: module.SignalCore3D })),
);

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center border-b border-[#232834]"
      aria-label="Introduction"
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status & Academic Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#13161C] border border-[#232834]">
              <span className="w-2 h-2 rounded-full bg-[#C7FF3A] animate-pulse" />
              <span className="text-xs font-mono text-[#969BA3]">
                {PROFILE.academicStatus} • {PROFILE.degree} {PROFILE.branch.split(' ')[0]}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F5F0] leading-[1.08]">
              {PROFILE.headline}
            </h1>

            {/* Authentic Introduction */}
            <p className="text-lg sm:text-xl text-[#969BA3] max-w-xl font-normal leading-relaxed">
              {PROFILE.intro} Exploring doctor-supervised healthcare AI, localized agriculture platforms, and full-stack systems.
            </p>

            {/* Institution metadata */}
            <div className="flex items-center space-x-2 text-xs font-mono text-[#686D76] pt-1">
              <Code2 className="w-4 h-4 text-[#C7FF3A]" />
              <span>{PROFILE.institute}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#C7FF3A] text-[#0B0D10] font-semibold text-sm hover:bg-[#d6ff66] transition-all duration-150 shadow-md shadow-[#C7FF3A]/10 active:translate-y-0.5 focus-visible:outline-[#C7FF3A]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#13161C] border border-[#232834] text-[#F5F5F0] font-medium text-sm hover:border-[#C7FF3A]/60 hover:text-[#C7FF3A] transition-all duration-150 focus-visible:outline-[#C7FF3A]"
              >
                <span>About Me</span>
              </a>
            </div>

            {/* Key Focus Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 w-full border-t border-[#232834]/60">
              <div className="p-3 rounded-lg bg-[#13161C]/60 border border-[#232834]">
                <span className="block text-[11px] font-mono text-[#686D76] uppercase">Domain</span>
                <span className="text-sm font-medium text-[#F5F5F0]">Healthcare AI</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/60 border border-[#232834]">
                <span className="block text-[11px] font-mono text-[#686D76] uppercase">Domain</span>
                <span className="text-sm font-medium text-[#F5F5F0]">Agri-Tech</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/60 border border-[#232834] col-span-2 sm:col-span-1">
                <span className="block text-[11px] font-mono text-[#686D76] uppercase">Architecture</span>
                <span className="text-sm font-medium text-[#F5F5F0]">React &amp; Node</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3D Hero - Signal Core */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-[#13161C]/40 border border-[#232834] p-2 flex items-center justify-center overflow-hidden">
              {/* Corner tech crosshairs */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C7FF3A]/40" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C7FF3A]/40" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C7FF3A]/40" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C7FF3A]/40" />

              <Suspense fallback={<SignalCoreFallback />}>
                <SignalCore3D />
              </Suspense>

              {/* Status footer pill */}
              <div className="absolute bottom-4 inset-x-6 flex items-center justify-between px-3 py-1.5 rounded-md bg-[#0B0D10]/90 border border-[#232834] text-[11px] font-mono text-[#969BA3]">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7FF3A]" />
                  <span>SIGNAL CORE</span>
                </div>
                <span className="text-[#686D76]">Geometric Node Lattice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
