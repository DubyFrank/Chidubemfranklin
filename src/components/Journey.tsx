import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(3); // Default open on current horizon

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section className="space-y-4 pt-2" id="journey" data-purpose="experience-timeline">
      <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Milestones</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">My Journey So Far</h2>
        </div>
        <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">2023 — Present</span>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-6 pt-2">
        {JOURNEY_MILESTONES.map((milestone, idx) => {
          const isExpanded = expandedPhase === idx;

          let bulletBg = 'bg-blue-600';
          if (idx === 1) bulletBg = 'bg-cyan-500';
          if (idx === 2) bulletBg = 'bg-sky-400';
          if (idx === 3) bulletBg = 'bg-emerald-400 animate-pulse';

          return (
            <div key={milestone.phase} className="relative group">
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full ${bulletBg} border-4 border-slate-900 shadow-md transition-transform group-hover:scale-125`}
              />

              {/* Milestone Box */}
              <div
                className={`border p-4 rounded-xl space-y-2 transition-all ${
                  milestone.isCurrent
                    ? 'bg-gradient-to-r from-slate-900 to-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-mono font-semibold uppercase ${
                      milestone.isCurrent ? 'text-emerald-400' : 'text-cyan-400'
                    }`}
                  >
                    {milestone.phase}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-mono">{milestone.period}</span>
                    {milestone.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-medium border border-emerald-500/30">
                        Now
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => togglePhase(idx)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition">
                      {milestone.title}
                    </h3>
                    <button
                      className="text-slate-400 hover:text-white p-1"
                      aria-label={isExpanded ? 'Collapse milestone details' : 'Expand milestone details'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {milestone.description}
                  </p>
                </div>

                {/* Expandable Key Takeaways */}
                {isExpanded && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5 animate-in fade-in duration-150">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Key Takeaways:
                    </span>
                    <ul className="space-y-1">
                      {milestone.takeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
