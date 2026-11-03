import React from 'react';
import { Code, Palette, ShieldCheck, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Design & Prototyping':
        return <Palette className="w-4 h-4 text-cyan-400" />;
      case 'Professional & Soft Skills':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="space-y-4 pt-2" id="skills" data-purpose="categorized-skills">
      <div className="border-b border-slate-800 pb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Competencies</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">My Skills &amp; Strengths</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 hover:border-slate-700 transition"
          >
            <div className="flex items-center space-x-2 border-b border-slate-800/80 pb-2.5">
              <span className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                {getCategoryIcon(cat.category)}
              </span>
              <h3 className="text-sm font-bold text-white">{cat.category}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                    skill.highlight
                      ? cat.color === 'blue'
                        ? 'bg-blue-900/40 border-blue-500/40 text-cyan-300 font-medium'
                        : cat.color === 'cyan'
                        ? 'bg-cyan-900/40 border-cyan-500/40 text-cyan-300 font-medium'
                        : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-medium'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
