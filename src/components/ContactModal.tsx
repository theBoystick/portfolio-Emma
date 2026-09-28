import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, Send, MapPin, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'adolphekengne@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121316] border border-white/15 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-3xl pointer-events-none rounded-full" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/70 font-semibold">
                  Get In Touch
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-[#D7E2EA]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2 tracking-tight">
              Let&apos;s Build Something Incredible
            </h3>
            <p className="text-sm font-light text-[#D7E2EA]/75 mb-6">
              Whether you have an upcoming project, creative collaboration, or media initiative in mind, I&apos;d love to connect.
            </p>

            {/* Quick Email Copy Chip */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#BBCCD7]" />
                <span className="font-mono text-xs sm:text-sm text-white select-all">
                  {email}
                </span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-xs font-medium uppercase tracking-wider cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center flex flex-col items-center justify-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold uppercase text-white">Message Sent!</h4>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm">
                  Thank you! Emmanuel has received your inquiry and will respond promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Patrick MBOMGA"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#B600A8] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]/70 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="patrick@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#B600A8] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]/70 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your vision, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#B600A8] focus:outline-none text-white text-sm transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-[#BBCCD7]/50">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Worldwide / Remote
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" /> English & French
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="contact-btn-gradient px-8 py-3 rounded-full text-white text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
