import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-text">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalLength = text.length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`relative inline-block leading-relaxed ${className}`}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const currentIndex = charCounter;
              charCounter += 1;
              const start = currentIndex / totalLength;
              const end = Math.min(1, start + 2 / totalLength);

              return (
                <CharSpan
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for the space following the word
        charCounter += 1;

        return (
          <React.Fragment key={wordIdx}>
            {renderedWord}
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
