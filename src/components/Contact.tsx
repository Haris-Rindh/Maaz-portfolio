"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Loader2, Send } from "lucide-react";
import { MagicCard } from "./MagicCard";

const socials = [
  {
    icon: <Github size={18} />,
    label: "GitHub",
    sub: "github.com/maazasad",
    href: "#",
    hover: "hover:text-white hover:border-white/30",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    sub: "linkedin.com/in/maazasad",
    href: "#",
    hover: "hover:text-[#0077b5] hover:border-[#0077b5]/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "Hugging Face",
    sub: "hf.co/maazasad",
    href: "#",
    hover: "hover:text-[#FF9D00] hover:border-[#FF9D00]/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.5 8.5h-2.25c-.28 0-.5.22-.5.5v1.5h2.75l-.5 2.5H14.75V19h-2.5v-6H10.5V10.5h1.75V9c0-1.93 1.57-3.5 3.5-3.5H17.5v3z" />
      </svg>
    ),
    label: "Kaggle",
    sub: "kaggle.com/maazasad",
    href: "#",
    hover: "hover:text-[#20BEFF] hover:border-[#20BEFF]/50",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3500);
    }, 1600);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-[#09090b] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Direct Inquiry</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            INITIATE<br />
            <span className="text-gray-500">PROTOCOL</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">

          {/* Left — email prominent + socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-2/5 flex flex-col gap-6"
          >
            {/* Email card */}
            <MagicCard className="p-8 bg-[#121214]">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">
                Primary Communication Channel
              </p>
              <a
                href="mailto:maaz.asad@email.com"
                className="group relative flex items-center justify-between w-full rounded-xl bg-white/5 border border-white/10 px-6 py-5 font-medium text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-sm tracking-wider">maaz.asad@email.com</span>
                <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </a>
            </MagicCard>

            {/* Social connect */}
            <MagicCard className="p-8 flex-1 bg-[#121214]">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-6">
                Professional Networks
              </p>
              <div className="space-y-3">
                {socials.map(({ icon, label, sub, href, hover }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5 text-gray-400 ${hover} transition-all duration-300`}
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div className="font-semibold text-xs tracking-wider text-white mb-0.5 group-hover:text-inherit transition-colors">{label}</div>
                      <div className="text-[10px] text-gray-500 tracking-widest">{sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-3/5"
          >
            <MagicCard className="p-8 md:p-12 h-full flex flex-col bg-[#121214]">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Secure Transmission</h3>
              <p className="text-xs text-gray-400 tracking-wide mb-8">All messages are encrypted and sent directly to my primary inbox.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Name"  type="text"  placeholder="John Doe" />
                  <InputField label="Email" type="email" placeholder="john@company.com" />
                </div>
                <InputField label="Subject" type="text" placeholder="Project Collaboration" />
                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                  <textarea
                    required
                    placeholder="Describe the technical requirements or opportunity..."
                    className="w-full flex-1 min-h-[120px] p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 rounded-xl font-bold text-[10px] tracking-[0.2em] uppercase text-black bg-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? <><Loader2 className="animate-spin" size={14} /> Processing...</>
                    : isSubmitted
                    ? "Transmission Successful ✓"
                    : <><Send size={14} /> Transmit Message</>}
                </button>
              </form>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, type, placeholder }: { label: string; type: string; placeholder: string }) => (
  <div className="space-y-2">
    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">{label}</label>
    <input
      type={type}
      required
      placeholder={placeholder}
      className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
    />
  </div>
);

export default Contact;
