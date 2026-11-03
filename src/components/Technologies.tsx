import React, { useState } from 'react';
import { Code2, Terminal, Palette, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const Technologies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<{
    name: string;
    level: string;
    description: string;
    category: string;
  } | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'workflow':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'design':
        return <Palette className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const filteredCategories = TECH_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((cat) => cat.items.length > 0);

  return (
    <section className="space-y-4 pt-2" id="technologies" data-purpose="tech-stack">
      <div className="border-b border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Toolbox</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Technologies I Work With</h2>
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full sm:w-48">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>
      </div>

      {/* Selected Tech Detail Drawer / Banner if clicked */}
      {selectedTech && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-cyan-500/40 flex items-start justify-between gap-3 animate-in fade-in duration-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                {selectedTech.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                {selectedTech.level}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {selectedTech.category}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedTech.description}
            </p>
          </div>
          <button
            onClick={() => setSelectedTech(null)}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800/80"
          >
            ✕
          </button>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700/80 transition duration-200"
          >
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                {getCategoryIcon(cat.id)}
                {cat.title}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">{cat.subtitle}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => {
                const isSelected = selectedTech?.name === item.name;

                let tagClass = "bg-slate-800 border-slate-700/70 text-slate-200";
                if (item.color === 'amber') {
                  tagClass = "bg-amber-500/10 border-amber-500/30 text-amber-300 font-medium";
                } else if (item.color === 'cyan') {
                  tagClass = "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 font-medium";
                } else if (item.color === 'purple') {
                  tagClass = "bg-purple-500/10 border-purple-500/30 text-purple-300 font-medium";
                } else if (item.color === 'blue') {
                  tagClass = "bg-blue-500/10 border-blue-500/30 text-blue-300";
                }

                return (
                  <button
                    key={item.name}
                    onClick={() =>
                      setSelectedTech(
                        isSelected
                          ? null
                          : {
                              name: item.name,
                              level: item.level,
                              description: item.description,
                              category: cat.title
                            }
                      )
                    }
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all text-left flex items-center gap-1 active:scale-95 cursor-pointer ${tagClass} ${
                      isSelected ? 'ring-2 ring-cyan-400 shadow-md' : 'hover:border-slate-500'
                    }`}
                    title={`${item.name} - Click for details`}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-400 text-center sm:text-left">
        Tip: Click any technology tag to view practical application context and proficiency.
      </p>
    </section>
  );
};
