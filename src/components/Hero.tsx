import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PROFILE } from '../data/profile';
import { SignalCoreFallback } from './SignalCoreFallback';

const SignalCore3D = lazy(() =>
  import('./SignalCore3D').then((module) => ({ default: module.SignalCore3D })),
);

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center border-b border-[#232834] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#C7FF3A]/[0.025] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent with Staggered Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Academic Status Badge */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#13161C] border border-[#232834]"
            >
              <span className="w-2 h-2 rounded-full bg-[#C7FF3A] animate-pulse" />
              <span className="text-xs font-mono text-[#969BA3]">
                {PROFILE.academicStatus} • {PROFILE.degree} {PROFILE.branch.split(' ')[0]}
              </span>
            </motion.div>

            {/* Main Headline with Staggered Reveal */}
            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F5F0] leading-[1.08]"
            >
              {PROFILE.headline}
            </motion.h1>

            {/* Authentic Introduction */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-[#969BA3] max-w-xl font-normal leading-relaxed"
            >
              {PROFILE.intro} Building smart agriculture platforms, university exam analytics engines, and responsive web systems.
            </motion.p>

            {/* Institution Metadata */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-2 text-xs font-mono text-[#686D76]"
            >
              <Code2 className="w-4 h-4 text-[#C7FF3A]" />
              <span>{PROFILE.institute}</span>
            </motion.div>

            {/* CTA Buttons with Magnetic Hover Feel */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#C7FF3A] text-[#0B0D10] font-semibold text-sm hover:bg-[#d6ff66] hover:shadow-[0_0_25px_rgba(199,255,58,0.3)] transition-all duration-200 active:translate-y-0.5 focus-visible:outline-[#C7FF3A]"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#13161C] border border-[#232834] text-[#F5F5F0] font-medium text-sm hover:border-[#C7FF3A]/60 hover:text-[#C7FF3A] transition-all duration-200 focus-visible:outline-[#C7FF3A]"
              >
                <span>About Me</span>
              </a>
            </motion.div>

            {/* Verified Focus Highlights */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 w-full border-t border-[#232834]/70"
            >
              <div className="p-3 rounded-lg bg-[#13161C]/70 border border-[#232834] transition-colors hover:border-[#373E50]">
                <span className="block text-[10px] font-mono text-[#686D76] uppercase">Flagship</span>
                <span className="text-sm font-medium text-[#F5F5F0]">Smart Agriculture</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/70 border border-[#232834] transition-colors hover:border-[#373E50]">
                <span className="block text-[10px] font-mono text-[#686D76] uppercase">Analytics</span>
                <span className="text-sm font-medium text-[#F5F5F0]">Exam Intelligence</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/70 border border-[#232834] transition-colors hover:border-[#373E50] col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono text-[#686D76] uppercase">Stack</span>
                <span className="text-sm font-medium text-[#F5F5F0]">Node &amp; Express</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Signature 3D Hero - Signal Core */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-[#13161C]/50 border border-[#232834] p-2 flex items-center justify-center overflow-hidden shadow-2xl shadow-black/80">
              {/* Corner tech crosshairs */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C7FF3A]/50" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C7FF3A]/50" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C7FF3A]/50" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C7FF3A]/50" />

              {mounted ? (
                <Suspense fallback={<SignalCoreFallback />}>
                  <SignalCore3D />
                </Suspense>
              ) : (
                <SignalCoreFallback />
              )}

              {/* Status footer pill */}
              <div className="absolute bottom-4 inset-x-6 flex items-center justify-between px-3 py-1.5 rounded-md bg-[#0B0D10]/95 border border-[#232834] text-[11px] font-mono text-[#969BA3]">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7FF3A]" />
                  <span>SIGNAL CORE</span>
                </div>
                <span className="text-[#686D76]">Geometric Node Lattice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
