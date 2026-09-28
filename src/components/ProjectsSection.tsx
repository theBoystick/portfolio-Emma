import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard, type ProjectData } from './ProjectCard';
import { Award, BookOpen, Film, Camera, Presentation, Compass, CheckCircle2 } from 'lucide-react';

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'The Chalk Line',
    category: 'Narrative & Media Format',
    description:
      'Original storytelling format focused on untold experiences from the African classroom. Developed creative concepts, documentary narratives, visual storytelling, and multi-format production.',
    liveUrl: 'https://emmanuelkengne.design/chalk-line',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    name: 'Teach Connect Studio',
    category: 'Production & Operational Setup',
    description:
      'Contributed directly to the architectural development and operational setup of Teach Connect Studio, driving visual communication materials and creative content for education.',
    liveUrl: 'https://emmanuelkengne.design/teach-connect',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    name: 'Young Visionaries Media Lab',
    category: 'Education & Mentorship',
    description:
      'Project-based educational program teaching photography and videography to young learners. Honored with "Best Teacher" recognition for excellence in creative pedagogy.',
    liveUrl: 'https://emmanuelkengne.design/media-lab',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

const accomplishments = [
  {
    icon: <Award className="w-6 h-6 text-[#B600A8]" />,
    title: "'Best Teacher' Recognition",
    subtitle: 'Creative Pedagogy Award',
    description:
      'Received prestigious recognition for teaching photography, videography, and visual storytelling to young learners through project-based initiatives.',
  },
  {
    icon: <Film className="w-6 h-6 text-[#7621B0]" />,
    title: 'The Chalk Line Storytelling Concept',
    subtitle: 'African Classroom Experience',
    description:
      'Conceived and developed an original storytelling format shedding light on untold, profound experiences within the African educational journey.',
  },
  {
    icon: <Compass className="w-6 h-6 text-[#BE4C00]" />,
    title: 'Teach Connect Studio Setup',
    subtitle: 'Infrastructure & Operations',
    description:
      'Spearheaded the development and operational setup of Teach Connect Studio, establishing sustainable creative production pipelines.',
  },
  {
    icon: <Presentation className="w-6 h-6 text-[#BBCCD7]" />,
    title: 'Conferences & Brand Collateral',
    subtitle: 'Visual Communication',
    description:
      'Designed high-impact visual communication materials for major conferences, educational programs, and cross-sector organizational projects.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#D7E2EA]" />,
    title: 'Educational & Professional Media Initiatives',
    subtitle: 'Content Direction',
    description:
      'Developed and managed creative content projects bridging design, photography, video editing, and practical curriculum engagement.',
  },
  {
    icon: <Camera className="w-6 h-6 text-[#B600A8]" />,
    title: 'Multi-Disciplinary Production',
    subtitle: 'Cross-Sector Impact',
    description:
      'Executed graphic design, photography, video editing, and content production across diverse organizations, turning ideas into lasting experiences.',
  },
];

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-28 pb-32 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-24">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', letterSpacing: '-0.03em' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking 3 project cards */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>

        {/* Accomplishments & Milestones Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <FadeIn delay={0.1} y={30} className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-semibold block mb-2">
              Milestones & Recognition
            </span>
            <h3
              className="font-black uppercase text-[#D7E2EA] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Key Accomplishments
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accomplishments.map((item, idx) => (
              <FadeIn
                key={item.title}
                delay={0.1 + idx * 0.08}
                y={25}
                className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white/20 group-hover:text-[#B600A8] transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/50 block mb-1">
                  {item.subtitle}
                </span>
                <h4 className="text-lg sm:text-xl font-medium uppercase text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/70">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
