import React, { useEffect, useState } from 'react';
import { X, CheckCircle, ExternalLink, Github, Sparkles, Layers, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { InteractiveGPA } from './InteractiveGPA';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'interactive'>('case-study');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10">
        {/* Modal Header */}
        <div className={`p-5 bg-gradient-to-r ${project.gradient} border-b border-slate-800 text-white relative`}>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900/70 border border-slate-700/60 text-cyan-300">
                  {project.versionBadge}
                </span>
                <span className="text-xs text-slate-300">·</span>
                <span className="text-xs font-medium text-slate-300">{project.tagline}</span>
              </div>
              <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400 shrink-0"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub-tab navigation */}
          <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-800/60">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === 'case-study'
                  ? 'bg-white text-slate-900 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Case Study &amp; Architecture
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'interactive' ? (
            <div className="space-y-4">
              {project.id === 'gpa-calculator' ? (
                <InteractiveGPA />
              ) : (
                /* Interactive simulation card for other projects */
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Live Architecture Prototype Simulation
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Status: Ready</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    This module is architected with modular React components and stateful event pipelines.
                    Below is an active demonstration of data structures and test states validated at COOU.
                  </p>

                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
                    <div className="text-cyan-300 font-semibold">// Live State Mock Engine</div>
                    <div className="text-slate-400 text-[11px]">
                      active_user_context: "COOU Faculty of Social Sciences"
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      offline_cache_driver: "IndexedDB / LocalStorage active"
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      performance_metric: "Sub-16ms render cycle (60fps)"
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>Explore Repository Code</span>
                    </a>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenContact();
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                    >
                      <span>Inquire About Implementation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Standard Case Study Content */
            <div className="space-y-5">
              {/* Summary & Background */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Project Overview</h3>
                <p className="text-slate-300">{project.description}</p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-1.5">
                  <h4 className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    The Problem
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
                  <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    The Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Key Architectural Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Technology Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes & Impact */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Testing &amp; Outcomes
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.caseStudy.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
