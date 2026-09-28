import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Layers, Video, Palette, Camera } from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  type: 'design' | 'video' | 'photo' | 'layout';
  description: string;
  proficiency: string;
  accentColor: string;
  icon: React.ReactNode;
}

// Crisp, accurate brand logo SVGs
const PhotoshopLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe Photoshop">
    <rect width="100" height="100" rx="22" fill="#001E36" stroke="#31A8FF" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#31A8FF"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Ps
    </text>
  </svg>
);

const IllustratorLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe Illustrator">
    <rect width="100" height="100" rx="22" fill="#330000" stroke="#FF9A00" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#FF9A00"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Ai
    </text>
  </svg>
);

const PremiereProLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe Premiere Pro">
    <rect width="100" height="100" rx="22" fill="#00005B" stroke="#9999FF" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#EA77FF"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Pr
    </text>
  </svg>
);

const CapCutLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="CapCut">
    <rect width="100" height="100" rx="22" fill="#000000" stroke="#2DE0F5" strokeWidth="4" />
    {/* CapCut geometric bowtie ribbon */}
    <g transform="translate(18, 22) scale(0.64)">
      <polygon points="10,10 50,45 10,80" fill="#FFFFFF" />
      <polygon points="90,10 50,45 90,80" fill="#2DE0F5" />
      <polygon points="10,10 90,10 50,45" fill="#FFFFFF" fillOpacity="0.8" />
      <polygon points="10,80 90,80 50,45" fill="#2DE0F5" fillOpacity="0.8" />
    </g>
  </svg>
);

const FilmoraLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Wondershare Filmora">
    <rect width="100" height="100" rx="22" fill="#0D1F2D" stroke="#00F5D4" strokeWidth="4" />
    {/* Filmora geometric play folding ribbon */}
    <g transform="translate(24, 20) scale(0.55)">
      <polygon points="20,10 70,40 20,70" fill="#00F5D4" />
      <polygon points="35,30 85,60 35,90" fill="#059669" />
      <polygon points="50,15 80,45 50,60" fill="#5EEAD4" />
    </g>
  </svg>
);

const AfterEffectsLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe After Effects">
    <rect width="100" height="100" rx="22" fill="#00005B" stroke="#9999FF" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#CF96FD"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Ae
    </text>
  </svg>
);

const InDesignLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe InDesign">
    <rect width="100" height="100" rx="22" fill="#49021F" stroke="#FF3366" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#FF3366"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Id
    </text>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Figma">
    <rect width="100" height="100" rx="22" fill="#1E1E1E" stroke="#A259FF" strokeWidth="4" />
    <g transform="translate(28, 16) scale(0.72)">
      {/* Figma 5 pillars */}
      <rect x="0" y="0" width="30" height="30" rx="15" fill="#F24E1E" />
      <rect x="30" y="0" width="30" height="30" rx="15" fill="#FF7262" />
      <rect x="30" y="30" width="30" height="30" rx="15" fill="#1ABCFE" />
      <circle cx="15" cy="45" r="15" fill="#A259FF" />
      <rect x="0" y="60" width="30" height="30" rx="15" fill="#0ACF83" />
    </g>
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Canva">
    <rect width="100" height="100" rx="22" fill="#00C4CC" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="50" cy="50" r="32" fill="#FFFFFF" fillOpacity="0.2" />
    <text
      x="50%"
      y="67%"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Kanit, sans-serif"
      fontSize="52"
      fontStyle="italic"
      fontWeight="900"
    >
      C
    </text>
  </svg>
);

const LightroomLogo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" aria-label="Adobe Lightroom">
    <rect width="100" height="100" rx="22" fill="#001E36" stroke="#31A8FF" strokeWidth="4" />
    <text
      x="50%"
      y="64%"
      textAnchor="middle"
      fill="#31A8FF"
      fontFamily="Kanit, sans-serif"
      fontSize="44"
      fontWeight="800"
    >
      Lr
    </text>
  </svg>
);

const toolsData: ToolItem[] = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Photo Manipulation & Retouching',
    type: 'photo',
    description:
      'High-end image compositing, visual retouching, poster design, and precision raster graphics.',
    proficiency: 'Mastery',
    accentColor: '#31A8FF',
    icon: <PhotoshopLogo />,
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'Vector Art & Brand Identity',
    type: 'design',
    description:
      'Logotypes, brand visual systems, scalable vector assets, typography, and marketing illustrations.',
    proficiency: 'Mastery',
    accentColor: '#FF9A00',
    icon: <IllustratorLogo />,
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    category: 'Cinematic Video Editing',
    type: 'video',
    description:
      'Multi-track video assembly, narrative pacing, color correction, sound design, and broadcast deliverables.',
    proficiency: 'Advanced',
    accentColor: '#EA77FF',
    icon: <PremiereProLogo />,
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'Short-Form & Social Motion',
    type: 'video',
    description:
      'Dynamic mobile-first video editing, viral pacing, kinetic captions, rhythm cuts, and reels.',
    proficiency: 'Expert',
    accentColor: '#2DE0F5',
    icon: <CapCutLogo />,
  },
  {
    id: 'filmora',
    name: 'Wondershare Filmora',
    category: 'Creative Video Production',
    type: 'video',
    description:
      'Expressive visual transitions, creative motion titles, layered filters, and compelling video storytelling.',
    proficiency: 'Advanced',
    accentColor: '#00F5D4',
    icon: <FilmoraLogo />,
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    type: 'video',
    description:
      'Animated logos, kinetic titles, visual effects, broadcast overlays, and seamless video transitions.',
    proficiency: 'Advanced',
    accentColor: '#CF96FD',
    icon: <AfterEffectsLogo />,
  },
  {
    id: 'indesign',
    name: 'Adobe InDesign',
    category: 'Editorial & Publication Design',
    type: 'layout',
    description:
      'Multi-page brochures, conference booklets, educational materials, and professional print layouts.',
    proficiency: 'Advanced',
    accentColor: '#FF3366',
    icon: <InDesignLogo />,
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX & Visual Layouts',
    type: 'design',
    description:
      'Digital moodboards, presentation decks, interactive web wireframes, and design consistency systems.',
    proficiency: 'Expert',
    accentColor: '#A259FF',
    icon: <FigmaLogo />,
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Agile Social Media Design',
    type: 'design',
    description:
      'Fast-turnaround collateral, collaborative social media packs, and agile campaign adaptations.',
    proficiency: 'Expert',
    accentColor: '#00C4CC',
    icon: <CanvaLogo />,
  },
  {
    id: 'lightroom',
    name: 'Adobe Lightroom',
    category: 'Color Grading & Batch RAW',
    type: 'photo',
    description:
      'Tonal grading, exposure balance, cohesive color palettes, and large-batch photo curation.',
    proficiency: 'Mastery',
    accentColor: '#31A8FF',
    icon: <LightroomLogo />,
  },
];

export const ToolsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'design' | 'video' | 'photo' | 'layout'>('all');

  const filteredTools =
    filter === 'all' ? toolsData : toolsData.filter((tool) => tool.type === filter);

  return (
    <section
      id="tools"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#31A8FF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/70 font-semibold">
              Software & Technical Stack
            </span>
          </div>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)', letterSpacing: '-0.03em' }}
          >
            Tools
          </h2>

          <p className="mt-4 text-sm sm:text-base font-light text-[#D7E2EA]/75 max-w-xl mx-auto leading-relaxed">
            The creative industry-standard software suite empowering every graphic identity, photo composite, and video production.
          </p>
        </FadeIn>

        {/* Filter Pills */}
        <FadeIn delay={0.15} y={20} className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {[
              { key: 'all', label: 'All Tools', icon: <Layers className="w-3.5 h-3.5" /> },
              { key: 'design', label: 'Graphic & Vector', icon: <Palette className="w-3.5 h-3.5" /> },
              { key: 'video', label: 'Video & Motion', icon: <Video className="w-3.5 h-3.5" /> },
              { key: 'photo', label: 'Photo & Grading', icon: <Camera className="w-3.5 h-3.5" /> },
              { key: 'layout', label: 'Editorial & Print', icon: <Layers className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key as any)}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer
                  ${filter === tab.key
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-[#7621B0]/30'
                    : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredTools.map((tool, index) => (
            <FadeIn
              key={tool.id}
              delay={0.05 * index}
              y={25}
              className="group relative p-6 rounded-3xl bg-[#141518]/90 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle dynamic glow on hover matching tool accent */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none -z-0"
                style={{ backgroundColor: tool.accentColor }}
              />

              <div className="relative z-10">
                {/* Logo & Category Row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {tool.icon}
                  </div>

                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]">
                    {tool.proficiency}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-medium uppercase text-white mb-1 tracking-wide group-hover:text-[#D7E2EA] transition-colors">
                  {tool.name}
                </h3>

                {/* Category label */}
                <span className="text-xs uppercase tracking-wider font-normal text-[#BBCCD7]/60 block mb-3">
                  {tool.category}
                </span>

                {/* Description */}
                <p className="text-xs font-light leading-relaxed text-[#D7E2EA]/75">
                  {tool.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
