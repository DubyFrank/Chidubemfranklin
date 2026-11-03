import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
CHIDUBEM FRANKLIN EZEASOIBE
Aspiring Developer & UI/UX Designer
Email: ${PERSONAL_INFO.email}
Institution: ${PERSONAL_INFO.institution}
Location: ${PERSONAL_INFO.location}

EDUCATION
${RESUME_DATA.education.degree}
${RESUME_DATA.education.institution} (${RESUME_DATA.education.expectedGraduation})
Coursework: ${RESUME_DATA.education.relevantCoursework.join(', ')}

TECHNICAL SKILLS
Frontend & Languages: ${RESUME_DATA.skills.technical.join(', ')}
UI/UX & Prototyping: ${RESUME_DATA.skills.design.join(', ')}
Professional: ${RESUME_DATA.skills.professional.join(', ')}

FEATURED PROJECTS
${RESUME_DATA.projects.map((p) => `- ${p.name} (${p.tech}): ${p.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10">
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h2 id="resume-title" className="text-sm sm:text-base font-bold">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition cursor-pointer"
              title="Copy plain text CV"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedText ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm bg-slate-900 leading-relaxed font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {RESUME_DATA.name}
                </h1>
                <p className="text-cyan-400 font-medium text-xs sm:text-sm">{RESUME_DATA.role}</p>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 sm:text-right font-mono space-y-0.5">
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.institutionShort}</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-2 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-white text-xs sm:text-sm">
                  {RESUME_DATA.education.degree}
                </span>
                <span className="text-xs text-cyan-400 font-mono">
                  {RESUME_DATA.education.expectedGraduation}
                </span>
              </div>
              <div className="text-xs text-slate-400">{RESUME_DATA.education.institution}</div>
              <div className="text-[11px] text-slate-300 pt-1">
                <strong className="text-slate-400">Relevant Coursework:</strong>{' '}
                {RESUME_DATA.education.relevantCoursework.join(' · ')}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Technical &amp; Design Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-200">Frontend &amp; Development</span>
                <div className="flex flex-wrap gap-1 pt-1">
                  {RESUME_DATA.skills.technical.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-200">UI/UX &amp; Prototyping</span>
                <div className="flex flex-wrap gap-1 pt-1">
                  {RESUME_DATA.skills.design.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-cyan-300 border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Featured Projects
            </h3>
            <div className="space-y-3">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.name} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-xs sm:text-sm">{proj.name}</span>
                    <span className="text-[11px] text-cyan-400 font-mono">{proj.tech}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Core Mindsets &amp; Strengths
            </h3>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
              {RESUME_DATA.skills.professional.join('  •  ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
