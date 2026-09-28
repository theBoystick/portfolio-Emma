import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Live Project',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer select-none
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      <span>{label}</span>
    </button>
  );
};

export default LiveProjectButton;
