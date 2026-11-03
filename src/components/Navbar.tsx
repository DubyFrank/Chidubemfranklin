import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'technologies', 'about', 'projects', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Me', id: 'about' },
    { href: '#technologies', label: 'Tech Stack', id: 'technologies' },
    { href: '#projects', label: 'Featured Projects', id: 'projects' },
    { href: '#skills', label: 'Skills & Strengths', id: 'skills' },
    { href: '#journey', label: 'My Journey', id: 'journey' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full glass-nav border-b border-slate-800/80 px-4 py-3 transition-all duration-200 ${scrolled ? 'shadow-lg shadow-slate-950/40 bg-slate-950/90' : ''}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 transition"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {PERSONAL_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium leading-none">
              {PERSONAL_INFO.institutionShort} • Tech &amp; Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`transition-colors hover:text-cyan-400 py-1 ${
                activeSection === link.id ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400' : 'text-slate-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Resume Button on desktop */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex min-tap items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 transition-all active:scale-95"
            title="View & Download Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="min-tap inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm shadow-cyan-500/25 active:scale-95 transition-all hover:brightness-110"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </a>

          {/* Mobile Drawer Toggle Button */}
          <button
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-tap w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/90 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 active:bg-slate-700 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav className="max-w-md mx-auto pt-3 pb-2 border-t border-slate-800/60 mt-3 flex flex-col gap-1 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                activeSection === link.id
                  ? 'text-cyan-400 bg-slate-800/70 font-semibold'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="px-3 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 flex items-center justify-between text-left"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              View &amp; Download Resume (CV)
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="px-3 py-2.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-between mt-1 transition hover:bg-cyan-900/60"
          >
            <span>Send a Direct Message</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      )}
    </header>
  );
};
