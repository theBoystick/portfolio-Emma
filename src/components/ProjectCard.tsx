import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  liveUrl?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[88vh] md:h-[90vh] flex items-start justify-center sticky"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden"
      >
        {/* Top Row: Number, Category label, Project name, Live Project button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6 pb-3 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-medium">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
            <LiveProjectButton onClick={() => onOpenProject(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-column image grid */}
        {/* Left column (40% width) has 2 stacked images, right column (60%) has 1 tall image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full">
          {/* Left Column (40% width -> md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/10 group relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/10 group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Right Column (60% width -> md:col-span-7) */}
          <div className="md:col-span-7 flex">
            <div className="w-full h-[280px] sm:h-[360px] md:h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191C] border border-white/10 group relative min-h-[280px] sm:min-h-[380px] md:min-h-[460px]">
              <img
                src={project.images.col2}
                alt={`${project.name} hero showcase`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light max-w-lg backdrop-blur-sm bg-black/40 p-3 sm:p-4 rounded-2xl border border-white/10">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
