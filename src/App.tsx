/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Technologies } from './components/Technologies';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0F172A] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Container - responsive from mobile up to desktop */}
      <main className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-4 space-y-14 pb-16 flex-1 w-full">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Technologies />

        <About />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={handleOpenContact}
        />

        <Skills />

        <Journey />

        <Contact />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
