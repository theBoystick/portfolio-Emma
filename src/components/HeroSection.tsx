import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            onClick={() => scrollTo('about')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('tools')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Tools
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onContactClick || (() => scrollTo('contact'))}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center z-0 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pointer-events-none select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            Hi, i&apos;m emmanuel
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered absolutely with Magnet effect) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="flex justify-center items-end">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <div className="relative group cursor-pointer">
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Emmanuel Kengne - Graphic Designer & Visual Media Creator"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105 select-none pointer-events-none"
                loading="eager"
              />
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-4 bg-gradient-to-t from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 pointer-events-auto">
        {/* Left: paragraph text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a graphic designer driven by crafting striking and unforgettable visual projects
          </p>
        </FadeIn>

        {/* Right: ContactButton */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick || (() => scrollTo('contact'))} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
