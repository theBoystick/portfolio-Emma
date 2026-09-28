import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Contact Me',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center font-medium tracking-widest uppercase transition-transform duration-300 group-hover:scale-[1.03]">
      {label}
    </span>
  );

  const baseClasses = `
    contact-btn-gradient group relative inline-flex items-center justify-center
    rounded-full text-white font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer select-none
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default ContactButton;
