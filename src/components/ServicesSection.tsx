import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags?: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Creative Direction & Storytelling',
    description:
      'Leading holistic visual narratives and conceptual frameworks -- such as The Chalk Line -- that articulate compelling stories, solve problems, and forge memorable brand identities.',
    tags: ['Creative Direction', 'Storytelling', 'Ideation', 'Narrative Design'],
  },
  {
    number: '02',
    name: 'Graphic Design & Visual Communication',
    description:
      'Crafting cohesive visual identities, brand systems, and editorial communication materials for conferences, educational programs, and progressive corporate initiatives.',
    tags: ['Brand Identity', 'Typography', 'Visual Communication', 'Print & Digital'],
  },
  {
    number: '03',
    name: 'Photography & Videography / Editing',
    description:
      'High-precision photographic composition, cinematic video production, and dynamic editing that capture human truth, brand essence, and experiential depth with award-winning mastery.',
    tags: ['Cinematography', 'Post-Production', 'Color Grading', 'Documentary'],
  },
  {
    number: '04',
    name: 'Content Strategy & Studio Development',
    description:
      'Designing scalable media infrastructures -- including end-to-end studio setup (Teach Connect Studio) -- and strategic multi-platform content campaigns that drive meaningful engagement.',
    tags: ['Studio Architecture', 'Content Strategy', 'Project Development', 'Operations'],
  },
  {
    number: '05',
    name: 'Digital & Editorial Graphic Design',
    description:
      'Designing high-impact publication layouts, digital graphics, print assets, marketing collaterals, and cohesive visual systems with meticulous attention to typography, structure, and brand storytelling.',
    tags: ['Graphic Design', 'Editorial & Print', 'Visual Systems', 'Layout & Typography'],
  },
];

const allSkills = [
  'Writing',
  'Graphic Design & Visual Communication',
  'Photography',
  'Videography & Video Editing',
  'Creative Direction',
  'Content Strategy & Creation',
  'Storytelling',
  'Branding & Visual Identity',
  'Project Development',
  'Creative Problem Solving',
  'Digital & Social Media Communication',
  'Innovation & Ideation',
  'Team Collaboration',
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', letterSpacing: '-0.03em' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items in vertical list */}
        <div className="w-full flex flex-col">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className={`
                group flex flex-col md:flex-row md:items-start justify-between
                py-8 sm:py-10 md:py-12
                ${index !== servicesData.length - 1 ? 'border-b border-[#0C0C0C]/15' : ''}
                transition-colors duration-300
              `}
            >
              {/* Left: Number */}
              <div className="flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
                <span
                  className="font-black text-[#0C0C0C] leading-none transition-transform duration-300 group-hover:translate-x-2 inline-block select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)', letterSpacing: '-0.04em' }}
                >
                  {service.number}
                </span>
              </div>

              {/* Right: Name + Description stacked vertically */}
              <div className="md:w-2/3 flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-3 md:mb-4 group-hover:text-black transition-colors"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', letterSpacing: '-0.01em' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/75 group-hover:text-[#0C0C0C]/90 transition-colors"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>

                {/* Micro skill tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider font-medium px-2.5 py-1 rounded-md bg-[#0C0C0C]/5 text-[#0C0C0C]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Complete Skills Directory Badge Bar */}
        <FadeIn delay={0.4} y={30} className="mt-20 pt-10 border-t border-[#0C0C0C]/15">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0C0C0C]/50">
              Core Competencies & Toolkit
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {allSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm font-medium uppercase tracking-wider px-4 py-2 rounded-full border border-[#0C0C0C]/15 bg-[#0C0C0C]/[0.02] hover:bg-[#0C0C0C] hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
