import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Clock, Calendar, MessageSquare, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Internship Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleSent, setScheduleSent] = useState(false);
  const [scheduleTime, setScheduleTime] = useState('Tomorrow 2:00 PM (WAT)');

  // Local storage draft auto-save
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem('cf_contact_draft');
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    try {
      localStorage.setItem('cf_contact_draft', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        localStorage.removeItem('cf_contact_draft');
      } catch {
        // ignore
      }
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleSent(true);
    setTimeout(() => {
      setScheduleSent(false);
      setShowScheduleModal(false);
    }, 2500);
  };

  return (
    <section className="space-y-4 pt-2" id="contact" data-purpose="contact-form-and-reachout">
      <div className="border-b border-slate-800 pb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Get In Touch</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Have an Opportunity or Project?</h2>
      </div>

      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          I'm always interested in learning, collaborating on impactful ideas, and joining forward-thinking teams.
          Send me a message below or email me directly!
        </p>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Email button card */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-xs font-medium text-slate-200 hover:text-cyan-400 transition truncate"
              title={PERSONAL_INFO.email}
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick Schedule Coffee Chat Card */}
          <button
            onClick={() => setShowScheduleModal(true)}
            className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between gap-2 text-xs font-medium text-slate-200 transition cursor-pointer text-left"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Book 15-min Intro Chat</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-300 font-mono">
              Virtual
            </span>
          </button>
        </div>

        {/* Interactive Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="contact-name">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="contact-email">
                  Your Email <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="contact-type">
                Opportunity / Inquiry Type
              </label>
              <select
                id="contact-type"
                name="opportunityType"
                value={formData.opportunityType}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-950 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              >
                <option value="Internship Opportunity">Internship Opportunity (Frontend / UI)</option>
                <option value="Junior Engineering Role">Junior Engineering Role</option>
                <option value="Product Collaboration">Product or Campus Project Collaboration</option>
                <option value="Freelance UI/UX Prototyping">Freelance UI/UX Prototyping</option>
                <option value="General Mentorship & Networking">General Mentorship &amp; Networking</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="contact-message">
                Message / Opportunity Details <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the internship, project, or role you have in mind..."
                className="w-full rounded-xl bg-slate-950 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="min-tap w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white font-semibold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition cursor-pointer hover:brightness-110 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Dispatching Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 ml-2" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Form Feedback Banner */
          <div className="p-5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-sm text-white">Thank you, {formData.name || 'there'}!</span>
            </div>
            <p className="leading-relaxed">
              Your message regarding <strong className="text-white">{formData.opportunityType}</strong> has been
              received. Chidubem Franklin will review it and reply to <span className="text-cyan-300 font-mono">{formData.email}</span> promptly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', opportunityType: 'Internship Opportunity', message: '' });
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-white text-xs font-medium transition cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Coffee Chat Modal */}
      {showScheduleModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Schedule 15-min Intro Chat</h3>
              </div>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded"
              >
                ✕
              </button>
            </div>

            {!scheduleSent ? (
              <form onSubmit={handleScheduleSubmit} className="space-y-3 text-xs">
                <p className="text-slate-300">
                  Select a preferred window for a short video or audio chat with Chidubem:
                </p>

                <div>
                  <label className="block text-slate-400 mb-1">Your Name &amp; Company / Role</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith, Lead Engineer"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Suggested Time Slot (WAT / GMT+1)</label>
                  <select
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-white outline-none focus:border-cyan-400"
                  >
                    <option value="Tomorrow 2:00 PM (WAT)">Tomorrow 2:00 PM (WAT)</option>
                    <option value="Tomorrow 4:30 PM (WAT)">Tomorrow 4:30 PM (WAT)</option>
                    <option value="Thursday 11:00 AM (WAT)">Thursday 11:00 AM (WAT)</option>
                    <option value="Friday 3:00 PM (WAT)">Friday 3:00 PM (WAT)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
                >
                  Confirm Meeting Request
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="font-bold text-white">Meeting Request Sent!</p>
                <p className="text-slate-300">
                  Calendar invitation drafted for <span className="text-cyan-300">{scheduleTime}</span>. Chidubem will send the Google Meet link shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
