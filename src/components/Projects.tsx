import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'productivity') return p.category === 'productivity';
    if (filter === 'finance') return p.category === 'finance';
    if (filter === 'campus') return p.category === 'marketplace' || p.category === 'academic';
    return true;
  });

  return (
    <section className="space-y-4 pt-2" id="projects" data-purpose="portfolio-showcase">
      <div className="border-b border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Selected Work</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Projects That Bring Ideas to Life</h2>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'productivity', label: 'Productivity' },
            { id: 'finance', label: 'Finance' },
            { id: 'campus', label: 'Campus Utilities' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg transition-all duration-200 hover:border-slate-700 hover:shadow-cyan-950/20 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Graphic Header */}
              <div
                className={`h-40 w-full bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between relative border-b border-slate-800/80`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-950/60 border border-white/20 text-[10px] font-mono text-cyan-300">
                    {project.versionBadge}
                  </span>
                  <div className="flex space-x-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400">{project.tagline}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">{project.summary}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-4 pt-1 flex items-center gap-2 border-t border-slate-800/40">
              <button
                onClick={() => onSelectProject(project)}
                className="min-tap flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition active:scale-[0.98] cursor-pointer"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>

              <button
                onClick={() => onSelectProject(project)}
                className="min-tap px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 transition cursor-pointer flex items-center gap-1.5"
                title="Open Simulator & Deep Dive"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Try Demo</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
