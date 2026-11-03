import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] px-4 py-8 text-center" data-purpose="site-footer">
      <div className="max-w-md sm:max-w-xl mx-auto space-y-5">
        {/* Brand & Tagline */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow">
              {PERSONAL_INFO.initials}
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Learning, building, and growing through technology.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('technologies')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Stack
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Divider & Socials */}
        <div className="border-t border-slate-800/80 pt-4 space-y-3">
          <div className="flex items-center justify-center space-x-4 text-slate-400">
            <a
              className="hover:text-cyan-400 text-xs transition flex items-center gap-1"
              href={PERSONAL_INFO.socials.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              className="hover:text-cyan-400 text-xs transition flex items-center gap-1"
              href={PERSONAL_INFO.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              className="hover:text-cyan-400 text-xs transition flex items-center gap-1"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 pt-1">
            <p className="text-[11px] text-slate-500">
              © 2025–2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white transition ml-2 cursor-pointer"
              title="Back to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
