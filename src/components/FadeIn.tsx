import React from 'react';
import { motion, type MotionProps } from 'framer-motion';

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  id,
  ...rest
}) => {
  // Use motion.create or motion dynamic component
  const Component = (motion as unknown as Record<string, React.ComponentType<any>>)[as] || motion.div;

  return (
    <Component
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
