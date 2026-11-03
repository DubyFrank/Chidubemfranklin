import React, { useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Twitter, Check, Copy, Terminal } from 'lucide-react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'developer' | 'skills' | 'philosophy'>('developer');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeCodeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-6 space-y-6" id="hero">
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <div className="space-y-5 lg:col-span-7">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {PERSONAL_INFO.availabilityStatus}
            </span>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400">
                {PERSONAL_INFO.name}
              </span>
              .<br />
              I Build Digital Experiences.
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              Tech enthusiast &amp; aspiring Developer &amp; UI/UX Designer studying Political Science at{' '}
              <strong className="text-white font-semibold">{PERSONAL_INFO.institutionShort}</strong>, blending
              analytical thinking with modern digital product development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={() => scrollToSection('projects')}
              className="min-tap w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 active:scale-[0.98] transition cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={onOpenResume}
              className="min-tap w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm active:scale-[0.98] transition cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Download CV / Resume</span>
            </button>
          </div>

          {/* Social Media Connect Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider mr-1">
              Connect:
            </span>

            <a
              aria-label="GitHub Profile"
              className="min-tap p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition flex items-center justify-center"
              href={PERSONAL_INFO.socials.github}
              rel="noopener noreferrer"
              target="_blank"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              aria-label="LinkedIn Profile"
              className="min-tap p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition flex items-center justify-center"
              href={PERSONAL_INFO.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              aria-label="Send Direct Email"
              className="min-tap p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition flex items-center justify-center"
              href={`mailto:${PERSONAL_INFO.email}`}
              title={`Email: ${PERSONAL_INFO.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              aria-label="Twitter / X Profile"
              className="min-tap p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition flex items-center justify-center"
              href={PERSONAL_INFO.socials.twitter}
              rel="noopener noreferrer"
              target="_blank"
              title="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="min-tap inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Email</span>
                  <span className="sm:hidden font-mono">Email</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="pt-2 grid grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="block text-lg font-bold text-cyan-400 font-mono">COOU</span>
              <span className="text-[11px] text-slate-400">Class of 2026</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="block text-lg font-bold text-blue-400 font-mono">4+</span>
              <span className="text-[11px] text-slate-400">Built Projects</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="block text-lg font-bold text-emerald-400 font-mono">100%</span>
              <span className="text-[11px] text-slate-400">Dedication</span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Card & Mini Floating Terminal */}
        <div className="relative pt-4 lg:pt-0 lg:col-span-5" data-purpose="hero-visual-card">
          {/* Glowing gradient backdrop */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600 rounded-3xl opacity-30 blur-xl"></div>

          {/* Main Profile Image Container */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-950 relative">
              {!imageError ? (
                <img
                  alt="Portrait of Chidubem Franklin in stylish casual wear"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  src={PERSONAL_INFO.photoUrl}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Fallback stylized avatar */
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl shadow-cyan-500/20 mb-4">
                    CF
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{PERSONAL_INFO.fullName}</h3>
                  <p className="text-xs text-cyan-300 mt-1">{PERSONAL_INFO.title}</p>
                  <p className="text-[11px] text-slate-400 mt-2 max-w-xs">{PERSONAL_INFO.institution}</p>
                </div>
              )}

              {/* Vignette overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* In-Photo Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-medium text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Chukwuemeka Odumegwu Ojukwu Univ.
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-600/90 text-[11px] font-bold text-white shadow">
                  Pol. Sci '26
                </span>
              </div>
            </div>
          </div>

          {/* Floating Mini IDE Code snippet widget with Switchable Tabs */}
          <div className="mt-3.5 p-3.5 rounded-xl bg-slate-900/95 border border-slate-800 shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                {/* Code file tabs */}
                <div className="flex items-center space-x-1 pl-2">
                  {(['developer', 'skills', 'philosophy'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`px-2 py-0.5 rounded text-[10px] font-sans transition ${
                        activeCodeTab === tab
                          ? 'bg-slate-800 text-cyan-300 font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {CODE_SNIPPETS[tab].filename}
                    </button>
                  ))}
                </div>
              </div>

              {/* Copy snippet button */}
              <button
                onClick={handleCopyCode}
                className="text-slate-500 hover:text-cyan-300 p-1 rounded transition flex items-center gap-1"
                title="Copy code snippet"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            {/* Code Body */}
            <div className="overflow-x-auto text-slate-300 text-[11px] leading-relaxed py-1">
              <pre className="font-mono">
                {activeCodeTab === 'developer' && (
                  <div>
                    <span className="text-blue-400">const</span> <span className="text-cyan-300">innovator</span> = {'{\n'}
                    {'  '}name: <span className="text-emerald-400">"Chidubem Franklin"</span>,{'\n'}
                    {'  '}discipline: <span className="text-emerald-400">"Political Science × Tech"</span>,{'\n'}
                    {'  '}focus: [<span className="text-amber-300">"Frontend"</span>, <span className="text-amber-300">"UI/UX"</span>, <span className="text-amber-300">"Systems"</span>],{'\n'}
                    {'  '}institution: <span className="text-cyan-300">"COOU '26"</span>,{'\n'}
                    {'  '}available: <span className="text-cyan-400">true</span>{'\n'}
                    {'}'};
                  </div>
                )}
                {activeCodeTab === 'skills' && (
                  <div>
                    <span className="text-slate-400">{`{\n`}</span>
                    {'  '}<span className="text-blue-300">"core_stack"</span>: [<span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"Tailwind"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"React"</span>],{'\n'}
                    {'  '}<span className="text-blue-300">"design"</span>: [<span className="text-amber-300">"Figma"</span>, <span className="text-amber-300">"Mobile-First UX"</span>],{'\n'}
                    {'  '}<span className="text-blue-300">"mindset"</span>: [<span className="text-cyan-300">"Critical Inquiry"</span>, <span className="text-cyan-300">"Systems Analysis"</span>]{'\n'}
                    <span className="text-slate-400">{`}`}</span>
                  </div>
                )}
                {activeCodeTab === 'philosophy' && (
                  <div>
                    <span className="text-blue-400">type</span> <span className="text-purple-300">DisciplineBridge</span> = {'{\n'}
                    {'  '}politicalScience: <span className="text-emerald-300">"Structural analysis &amp; human systems"</span>;{'\n'}
                    {'  '}softwareDesign: <span className="text-emerald-300">"Clean architecture &amp; intuitive UI"</span>;{'\n'}
                    {'}'};
                  </div>
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
