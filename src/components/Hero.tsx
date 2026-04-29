"use client";

import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

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

// 3D Tilt Image Component
const TiltImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-3xl z-20 cursor-crosshair group"
    >
      {/* Glow Layer */}
      <div className="absolute inset-[-20px] bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500" style={{ transform: "translateZ(-50px)" }} />
      
      {/* Glass Container */}
      <div className="absolute inset-0 rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/20 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        {/* Placeholder High-Quality Image */}
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
          alt="Profile" 
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Floating UI Elements linked to 3D depth */}
      <motion.div 
        style={{ transform: "translateZ(60px)" }}
        className="absolute -right-12 top-10 glass px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-md"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#4fc3f7]" />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">Available for<br/>Deployment</span>
      </motion.div>

      <motion.div 
        style={{ transform: "translateZ(80px)" }}
        className="absolute -left-8 bottom-12 glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-md"
      >
        <Sparkles size={16} className="text-secondary" />
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">Senior AI/ML<br/>Architect</span>
      </motion.div>
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

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent pt-24 pb-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

        {/* ── Left copy (Parallax) ── */}
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex-1 text-center md:text-left z-20">
          
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-sm hover:bg-white/5 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(79,195,247,0.8)]"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">System Online</span>
          </motion.div>

          {/* Staggered Name Reveal */}
          <div className="mb-6 flex flex-col gap-2">
            <TextReveal text="MAAZ" delay={1} className="text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter leading-none text-white drop-shadow-xl" />
            <TextReveal text="AHMAD." delay={2} className="text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter leading-none text-gradient-accent drop-shadow-lg" />
          </div>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-lg md:text-2xl font-medium text-gray-400 mb-8 min-h-[2rem]"
          >
            <TypeAnimation
              sequence={[
                "Architecting Intelligence.", 2000,
                "Scaling LLM Pipelines.", 2000,
                "Deploying RAG Systems.", 2000,
                "Mastering MLOps.", 2000,
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
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase text-black bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Explore Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase text-white bg-transparent border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Read Origin
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right side 3D Interactive Image ── */}
        <motion.div style={{ y: yImage }} className="hidden md:flex flex-1 justify-end perspective-1000">
          <TiltImage />
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
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
