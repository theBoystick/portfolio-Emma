import React from 'react';
import { ArrowUp, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-16 sm:py-20 text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top Call to Action */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/70 font-semibold">
                Available for New Collaborations
              </span>
            </div>
            <h3
              className="font-black uppercase tracking-tight text-white leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
            >
              Ready to create something bold?
            </h3>
          </div>

          <ContactButton onClick={onContactClick} label="Get In Touch" />
        </div>

        {/* Bottom Metadata & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#BBCCD7]/60">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-semibold text-white uppercase tracking-wider">
              Emmanuel KENGNE
            </span>
            <span>Graphic Designer & Visual Media Creator</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onContactClick}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Behance</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all text-white ml-2 cursor-pointer group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
