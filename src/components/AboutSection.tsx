import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [showExtendedBio, setShowExtendedBio] = useState(false);

  const mainParagraphText =
    "I am a creative professional working at the intersection of design, media, storytelling and innovation. I develop visual and digital solutions that transform ideas into meaningful experiences. Combining creative thinking with practical execution, let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Decorative floating elements in corners */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative floating moon icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-pulse"
            style={{ animationDuration: '4s' }}
          />
        </FadeIn>
      </div>

      {/* Bottom-left: Abstract object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Abstract visual design element"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Top-right: Geometric icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative geometric design icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: Visual composition */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Abstract design composition"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', letterSpacing: '-0.03em' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll-driven opacity */}
        <FadeIn delay={0.2} y={20} className="w-full flex justify-center">
          <div className="max-w-[560px] text-[#D7E2EA] font-medium text-center leading-relaxed">
            <AnimatedText
              text={mainParagraphText}
              className="text-center font-medium"
            />

            {/* Subtle toggle for deeper creative philosophy */}
            <div className="mt-6 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setShowExtendedBio(!showExtendedBio)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7]/70 hover:text-white transition-colors py-1.5 px-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer"
              >
                <span>{showExtendedBio ? 'Show less' : 'Read creative philosophy'}</span>
                {showExtendedBio ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {showExtendedBio && (
                <div className="mt-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-sm text-[#D7E2EA]/90 leading-relaxed animate-fadeIn">
                  <p className="mb-3">
                    My work spans graphic design, photography, video production, content creation, and creative project development. I am particularly interested in using creativity not only to communicate, but also to solve problems, build brands, and create lasting impact.
                  </p>
                  <p>
                    I approach every project with curiosity, structure, and an eagerness to learn, uniting visionary artistic thinking with disciplined execution.
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button below the text block */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
