import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { ProjectData } from './ProjectCard';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#101114] border border-[#D7E2EA]/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-10 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]">
                {project.number} / 03
              </span>
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/70 font-semibold">
                {project.category}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-[#D7E2EA]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white mb-4 tracking-tight">
            {project.name}
          </h3>

          <p className="text-base sm:text-lg font-light leading-relaxed text-[#D7E2EA]/85 mb-8">
            {project.description}
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#16171b]">
              <img
                src={project.images.col1Top}
                alt="Detail preview 1"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#16171b]">
              <img
                src={project.images.col1Bottom}
                alt="Detail preview 2"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="sm:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-[#16171b]">
              <img
                src={project.images.col2}
                alt="Detail preview wide"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Scope & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 mb-8">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B600A8] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-semibold uppercase text-white">Creative Direction</h5>
                <p className="text-xs text-[#D7E2EA]/60 font-light">Visual concept, styling & tone</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#7621B0] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-semibold uppercase text-white">Production & Media</h5>
                <p className="text-xs text-[#D7E2EA]/60 font-light">High-res assets & editing</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#BE4C00] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-semibold uppercase text-white">Execution</h5>
                <p className="text-xs text-[#D7E2EA]/60 font-light">Cross-platform storytelling</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="text-xs text-[#BBCCD7]/60 flex items-center gap-1.5">
              Portfolio Showcase &copy; Emmanuel KENGNE
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full border border-white/15 text-xs uppercase tracking-wider font-medium hover:bg-white/5 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn-gradient px-7 py-2.5 rounded-full text-white text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore Full Case</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
