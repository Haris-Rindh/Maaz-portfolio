"use client";

import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

// Staggered Text Reveal Component
const TextReveal = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };
  const child = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div style={{ perspective: 1000 }} className="overflow-hidden flex">
      <motion.span variants={container} initial="hidden" animate="visible" className={`flex ${className}`}>
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index} className="inline-block origin-bottom">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050505] pt-24"
    >
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <ParticleNetwork />

      {/* Subtle Aurora Glows */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ── Left copy (Parallax) ── */}
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex-1 text-center md:text-left z-20">
          
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-gray-300 uppercase">Deployed & Online</span>
          </motion.div>

          {/* Staggered Name Reveal */}
          <div className="mb-6 flex flex-col gap-2">
            <TextReveal text="MAAZ" delay={1} className="text-6xl md:text-[7rem] font-black tracking-tighter leading-none text-white drop-shadow-xl" />
            <TextReveal text="AHMAD." delay={2} className="text-6xl md:text-[7rem] font-black tracking-tighter leading-none text-gradient-accent drop-shadow-lg" />
          </div>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-xl md:text-2xl font-medium text-gray-400 mb-8 min-h-[2rem]"
          >
            <TypeAnimation
              sequence={[
                "Architecting Intelligence", 2000,
                "Scaling LLM Pipelines", 2000,
                "Deploying RAG Systems", 2000,
                "Mastering MLOps", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-300"
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase text-black bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Explore Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right avatar (Glassmorphic Mirror & Parallax) ── */}
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          initial={{ opacity: 0, scale: 0.85, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0 hidden md:flex items-center justify-center z-10"
        >
          {/* Outer ring glow */}
          <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent scale-[1.1] animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }} />
          
          <div className="relative w-72 h-72 lg:w-[350px] lg:h-[350px] rounded-full glass-panel flex items-center justify-center overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-transform duration-700 hover:scale-[1.02]">
            {/* Inner "Mirror" reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 mix-blend-overlay" />
            <span className="text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 select-none z-10 drop-shadow-2xl">M</span>
          </div>

          {/* Floating Glass Chips - Magnetic Effect */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-4 -right-8 glass px-5 py-3 rounded-full flex items-center gap-2 text-[10px] font-bold text-white tracking-[0.2em] border border-white/20 shadow-2xl backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-gray-300" />
            AI ARCHITECT
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-8 glass px-5 py-3 rounded-full flex items-center gap-2 text-[10px] font-bold text-white tracking-[0.2em] border border-white/20 shadow-2xl backdrop-blur-xl"
          >
            <MapPin size={14} className="text-gray-300" />
            GLOBAL REACH
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
