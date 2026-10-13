import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { PROFILE } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#232834]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#C7FF3A]">
            <Mail className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight"
          >
            Let's connect.
          </h2>
          <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed">
            I am actively seeking software engineering internships, technical collaborations, and guidance. Reach out directly via email or professional platforms.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Email Primary Card */}
          <div className="md:col-span-7 rounded-2xl bg-[#13161C] border border-[#232834] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#686D76] uppercase">Primary Email Address</span>
              <div className="text-xl sm:text-2xl font-mono font-medium text-[#F5F5F0] break-all">
                {PROFILE.email}
              </div>
              <p className="text-xs text-[#969BA3]">
                Feel free to email regarding technical opportunities, internship openings, or project inquiries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#232834]">
              {/* Mailto Link */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#C7FF3A] text-[#0B0D10] text-xs font-mono font-semibold hover:bg-[#d6ff66] transition-colors focus-visible:outline-[#C7FF3A]"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#181C25] border border-[#232834] text-xs font-mono text-[#F5F5F0] hover:border-[#C7FF3A] hover:text-[#C7FF3A] transition-colors focus-visible:outline-[#C7FF3A]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#C7FF3A]" />
                    <span className="text-[#C7FF3A]">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Screen reader live notification */}
              <div aria-live="polite" className="sr-only">
                {copied ? 'Email address copied to clipboard successfully' : ''}
              </div>
            </div>
          </div>

          {/* Social / Profiles Card */}
          <div className="md:col-span-5 rounded-2xl bg-[#13161C] border border-[#232834] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#686D76] uppercase">Verified Profiles</span>
              <h3 className="text-lg font-display font-semibold text-[#F5F5F0]">
                External Channels
              </h3>
              <p className="text-xs text-[#969BA3]">
                Connect with me on GitHub to inspect live repositories and source commits, or via LinkedIn.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#232834]">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#181C25] border border-[#232834] hover:border-[#C7FF3A] transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <div className="flex items-center space-x-3">
                  <GitHubIcon className="w-5 h-5 text-[#969BA3] group-hover:text-[#C7FF3A] transition-colors" />
                  <div className="text-left">
                    <span className="block text-xs font-mono font-medium text-[#F5F5F0] group-hover:text-[#C7FF3A]">
                      GitHub
                    </span>
                    <span className="block text-[11px] text-[#686D76]">
                      @mrunalp252-ux
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#686D76] group-hover:text-[#C7FF3A] transition-colors" />
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#181C25] border border-[#232834] hover:border-[#C7FF3A] transition-colors"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center space-x-3">
                  <LinkedInIcon className="w-5 h-5 text-[#969BA3] group-hover:text-[#C7FF3A] transition-colors" />
                  <div className="text-left">
                    <span className="block text-xs font-mono font-medium text-[#F5F5F0] group-hover:text-[#C7FF3A]">
                      LinkedIn
                    </span>
                    <span className="block text-[11px] text-[#686D76]">
                      in/mrunal-mahendra-patil
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#686D76] group-hover:text-[#C7FF3A] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
