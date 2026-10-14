import React, { lazy, Suspense } from 'react';
import { ArrowDown, Mail, Code2, Sparkles, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PROFILE } from '../data/profile';
import { SignalCoreFallback } from './SignalCoreFallback';
import { MagneticButton } from './MagneticButton';

const SignalCore3D = lazy(() =>
  import('./SignalCore3D').then((module) => ({ default: module.SignalCore3D })),
);

const HEADLINE_WORDS = ['Ideas', 'into', 'working', 'software.'];

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center border-b border-[#232834] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Cyber Grid & CRT Scanline Layer */}
      <div className="absolute inset-0 tech-grid opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Luminous Atmospheric Accent Gradients */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] hero-glow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#C7FF3A]/[0.02] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Choreographed Entrance, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill Badge */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#13161C]/90 border border-[#232834] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C7FF3A] animate-pulse" />
              <span className="text-xs font-mono text-[#969BA3]">
                {PROFILE.academicStatus} • {PROFILE.degree} {PROFILE.branch.split(' ')[0]}
              </span>
            </motion.div>

            {/* Dramatic Choreographed Oversized Headline with Masked Reveals */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F5F0] leading-[1.08] select-none">
              {HEADLINE_WORDS.map((word, idx) => (
                <span
                  key={word}
                  className="inline-block overflow-hidden mr-3 sm:mr-4 last:mr-0 align-top"
                >
                  <motion.span
                    initial={
                      prefersReduced
                        ? false
                        : { y: '115%', opacity: 0, rotateX: 25 }
                    }
                    animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.08 + idx * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block origin-bottom ${
                      word === 'software.' ? 'text-[#C7FF3A]' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Authentic Introduction */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-[#969BA3] max-w-xl font-normal leading-relaxed"
            >
              {PROFILE.intro} Specializing in responsive frontends, modular Node and Python APIs, and dependable automated testing.
            </motion.p>

            {/* Institution Metadata */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-2 text-xs font-mono text-[#686D76]"
            >
              <Code2 className="w-4 h-4 text-[#C7FF3A]" />
              <span>{PROFILE.institute}</span>
            </motion.div>

            {/* Actions: View Projects and Contact Me with Magnetic Pull */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <MagneticButton
                href="#work"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#C7FF3A] text-[#0B0D10] font-semibold text-sm hover:bg-[#d6ff66] hover:shadow-[0_0_25px_rgba(199,255,58,0.35)] transition-all duration-200 active:translate-y-0.5 focus-visible:outline-[#C7FF3A]"
                aria-label="View Projects"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#13161C] border border-[#232834] text-[#F5F5F0] font-medium text-sm hover:border-[#C7FF3A]/60 hover:text-[#C7FF3A] hover:shadow-[0_0_15px_rgba(199,255,58,0.15)] transition-all duration-200 focus-visible:outline-[#C7FF3A]"
                aria-label="Contact Me"
              >
                <Mail className="w-4 h-4 text-[#969BA3] group-hover:text-[#C7FF3A]" />
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>

            {/* Verified Focus Highlights Strip */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 w-full border-t border-[#232834]/80"
            >
              <div className="p-3 rounded-lg bg-[#13161C]/80 border border-[#232834] transition-colors hover:border-[#373E50]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#686D76] uppercase">Flagship</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3A]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F5F5F0] block mt-1">Smart Agriculture</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/80 border border-[#232834] transition-colors hover:border-[#373E50]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#686D76] uppercase">Analytics</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#969BA3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F5F5F0] block mt-1">Exam Weightage</span>
              </div>
              <div className="p-3 rounded-lg bg-[#13161C]/80 border border-[#232834] transition-colors hover:border-[#373E50] col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#686D76] uppercase">Backend Core</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#969BA3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F5F5F0] block mt-1">Node &amp; Flask</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Signature 3D Signal Core */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-[#13161C]/60 border border-[#232834] p-2 flex items-center justify-center overflow-hidden shadow-2xl shadow-black/80 group">
              {/* Corner Tech Reticles */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C7FF3A]/60" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C7FF3A]/60" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C7FF3A]/60" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C7FF3A]/60" />

              {/* 3D Canvas / Fallback */}
              <Suspense fallback={<SignalCoreFallback />}>
                <SignalCore3D />
              </Suspense>

              {/* Status footer pill */}
              <div className="absolute bottom-4 inset-x-5 flex items-center justify-between px-3 py-1.5 rounded-md bg-[#0B0D10]/95 border border-[#232834] text-[11px] font-mono text-[#969BA3] backdrop-blur-md">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7FF3A]" />
                  <span className="text-[#F5F5F0]">SIGNAL CORE</span>
                </div>
                <div className="flex items-center space-x-1 text-[#686D76]">
                  <Terminal className="w-3 h-3" />
                  <span>Interactive 3D</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
