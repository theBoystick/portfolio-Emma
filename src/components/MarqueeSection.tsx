import React, { useRef, useEffect, useState } from 'react';

const row1Images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled sets for seamless looping scroll
const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;

      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      animationFrameId = requestAnimationFrame(() => {
        setOffset(calculatedOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial computation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#18191C] shadow-lg border border-white/5 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Creative visual preview"
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback styling if remote gif is restricted
                  (e.target as HTMLElement).style.opacity = '0.4';
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#18191C] shadow-lg border border-white/5 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Motion design showcase"
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.4';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
