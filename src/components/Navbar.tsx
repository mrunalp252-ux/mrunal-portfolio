import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('work');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'about', 'skills', 'education', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D10]/85 backdrop-blur-md border-b border-[#232834] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-inherit no-underline focus-visible:outline-[#C7FF3A]"
          aria-label={`${PROFILE.name} - Return to top`}
        >
          <div className="w-10 h-10 rounded-lg bg-[#13161C] border border-[#232834] flex items-center justify-center transition-all duration-300 group-hover:border-[#C7FF3A]/60 group-hover:shadow-[0_0_15px_rgba(199,255,58,0.25)]">
            <span className="font-mono text-sm font-semibold tracking-wider text-[#F5F5F0] group-hover:text-[#C7FF3A] transition-colors">
              {PROFILE.monogram}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-[#F5F5F0]">
              {PROFILE.name}
            </span>
            <span className="text-[11px] font-mono text-[#969BA3]">
              B.Tech CSE • 2nd Year
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Animated Indicator */}
        <nav
          className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-[#13161C]/80 border border-[#232834] backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-[#0B0D10] font-semibold'
                    : 'text-[#969BA3] hover:text-[#F5F5F0]'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-[#C7FF3A] shadow-sm shadow-[#C7FF3A]/30 transition-all"
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop External GitHub Button */}
        <div className="hidden md:flex items-center">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-lg bg-[#13161C] border border-[#232834] text-[#F5F5F0] hover:border-[#C7FF3A] hover:text-[#C7FF3A] hover:shadow-[0_0_12px_rgba(199,255,58,0.15)] transition-all"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#13161C] border border-[#232834] text-[#F5F5F0] hover:border-[#C7FF3A] focus-visible:outline-[#C7FF3A]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-50 bg-[#0B0D10]/95 backdrop-blur-xl border-t border-[#232834] md:hidden flex flex-col justify-between p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-3 pt-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="text-xl font-semibold text-[#F5F5F0] hover:text-[#C7FF3A] py-2.5 border-b border-[#232834]/50 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#C7FF3A]" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#232834] flex flex-col space-y-3 pb-6">
            <span className="text-xs font-mono text-[#969BA3]">Connect</span>
            <div className="flex items-center space-x-4">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center space-x-1.5 text-sm text-[#F5F5F0] hover:text-[#C7FF3A]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center space-x-1.5 text-sm text-[#F5F5F0] hover:text-[#C7FF3A]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
