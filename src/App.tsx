import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import type { ProjectData } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-kanit relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* SECTION ORDER as specified: */}
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. TOOLS SECTION */}
      <ToolsSection />

      {/* 6. PROJECTS SECTION */}
      <ProjectsSection onOpenProject={(proj) => setSelectedProject(proj)} />

      {/* Footer & Final Contact */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
