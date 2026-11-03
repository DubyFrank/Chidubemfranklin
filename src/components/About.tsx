import React, { useState } from 'react';
import { BookOpen, Layers, Target, ChevronDown, ChevronUp, Cpu, Compass, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, THREE_PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  const [showSynergyDeepDive, setShowSynergyDeepDive] = useState(false);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'learning':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'building':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'career':
        return <Target className="w-4 h-4 text-emerald-400" />;
      default:
        return <Compass className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="space-y-4 pt-2" id="about" data-purpose="biography-cards">
      <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Background</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">A Little About Me</h2>
        </div>
        <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
          COOU • Pol. Sci '26
        </span>
      </div>

      {/* Narrative Bio */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3.5 leading-relaxed text-sm text-slate-300 shadow-md">
        <p>
          I am a university student at{' '}
          <strong className="text-white font-semibold">{PERSONAL_INFO.institution}</strong> studying{' '}
          <span className="text-cyan-300 font-medium">{PERSONAL_INFO.major}</span>, with a deep passion for software
          development and user-centered interface design.
        </p>
        <p className="text-slate-400">
          My academic training equips me with acute critical inquiry, structural governance insight, and behavioral
          analysis. I translate these foundational problem-solving strengths directly into writing clean code, designing
          thoughtful layouts, and building intuitive digital products.
        </p>

        {/* Synergy Button Toggle */}
        <div className="pt-1">
          <button
            onClick={() => setShowSynergyDeepDive(!showSynergyDeepDive)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition py-1 cursor-pointer"
          >
            <span>{showSynergyDeepDive ? 'Hide' : 'Explore'} the Political Science × Tech synergy</span>
            {showSynergyDeepDive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Deep Dive Collapsible */}
        {showSynergyDeepDive && (
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-3 animate-in fade-in duration-200">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              How Political Science Supercharges Engineering
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-1">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Structural Thinking
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Understanding state institutions and bureaucratic bottlenecks teaches how complex data pipelines flow and where friction builds up.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-1">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Human Behavioral Empathy
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Studying electorate incentives translates to UX psychology: anticipating user hesitation, error recovery, and seamless onboarding.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-1">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Civic Utility Focus
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Building software that serves immediate community pain points—such as campus book exchange and accurate GPA tools.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3 Key Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {THREE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition"
          >
            <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60 shrink-0 mt-0.5">
              {getPillarIcon(pillar.id)}
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
