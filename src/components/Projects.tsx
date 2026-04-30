"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { MagicCard } from "./MagicCard";

// Magnetic Button Wrapper
const MagneticButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    x.set((e.clientX - cx) * 0.2);
    y.set((e.clientY - cy) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const projectsData = [
  {
    title: "Intelligent RAG Support Agent",
    description: "An automated, context-aware customer support pipeline built with LangChain and OpenAI. Utilizes Retrieval-Augmented Generation to instantly resolve user queries by semantic searching across internal knowledge bases.",
    tags: ["LLMs", "LangChain", "OpenAI", "VectorDB"],
    metric: "95% Query Resolution Rate",
    github: "https://github.com/Maaz1034/Ai-customer-support-bot.git",
    live: "#",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Disinformation Detection Engine",
    description: "A high-accuracy NLP pipeline designed to classify and predict fake news articles. Built leveraging modern transformer architectures to extract semantic features and detect linguistic anomalies in real-time.",
    tags: ["NLP", "Transformers", "scikit-learn", "Python"],
    metric: "98.2% Classification F1-Score",
    github: "https://github.com/Maaz1034/fake-news-prediction.git",
    live: "#",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Medical Diagnostic ML Model",
    description: "A robust machine learning classification system for the early detection of malignant breast cancer tumors. Processes complex clinical datasets through optimized XGBoost and Random Forest ensembles.",
    tags: ["Machine Learning", "XGBoost", "Pandas", "Healthcare"],
    metric: "Reduced False Negatives by 40%",
    github: "https://github.com/maazh1034-png/Breast-cancer-project-Ml-",
    live: "#",
    image: "/projects/project-3.jpg",
  },
  {
    title: "AI Orchestration Framework",
    description: "A comprehensive artificial intelligence platform demonstrating advanced model orchestration, data pipeline integration, and scalable deployment strategies for modern GenAI applications.",
    tags: ["Deep Learning", "PyTorch", "MLOps", "API"],
    metric: "Scalable Microservice Architecture",
    github: "https://github.com/maazh1034-png/Ai-project.git",
    live: "#",
    image: "/projects/project-4.jpg",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = projectsData.length;

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -10 : 10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: dir < 0 ? -10 : 10,
    }),
  };

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              FEATURED<br />
              <span className="text-gradient-accent">PROJECT</span>
            </h2>
          </motion.div>

          {/* Counter + nav */}
          <div className="flex items-center gap-8">
            <span className="text-5xl font-black text-white tabular-nums tracking-tighter drop-shadow-lg">
              {String(current + 1).padStart(2, "0")}
              <span className="text-2xl text-gray-700 mx-2">/</span>
              <span className="text-3xl text-gray-600">{String(total).padStart(2, "0")}</span>
            </span>
            <div className="flex gap-4">
              <MagneticButton onClick={prev} className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-md">
                <ChevronLeft size={20} />
              </MagneticButton>
              <MagneticButton onClick={next} className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,0,127,0.4)]">
                <ChevronRight size={20} />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Featured card */}
        <div className="relative w-full h-auto md:h-[500px]" style={{ perspective: "2000px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full absolute inset-0 transform-style-3d"
            >
              <MagicCard className="w-full h-full flex flex-col md:flex-row p-0">
                {/* Left — main info */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 drop-shadow-md"
                  >
                    {projectsData[current].metric}
                  </motion.p>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter"
                  >
                    {projectsData[current].title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base max-w-lg"
                  >
                    {projectsData[current].description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 mb-10"
                  >
                    {projectsData[current].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[9px] font-bold tracking-widest text-gray-300 uppercase">
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 mt-auto"
                  >
                    <a href={projectsData[current].github} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-transparent font-bold text-[10px] tracking-widest uppercase text-white hover:bg-white/10 transition-all">
                      <Github size={14} className="group-hover:scale-110 transition-transform" /> Source
                    </a>
                    <a href={projectsData[current].live} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-[10px] tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
                      <ExternalLink size={14} className="group-hover:scale-110 transition-transform" /> Deploy
                    </a>
                  </motion.div>
                </div>

                {/* Right — Project Image */}
                <div className="w-full md:w-1/2 relative h-64 md:h-full border-t md:border-t-0 md:border-l border-white/10 overflow-hidden group">
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                  
                  {/* The Image with hover zoom effect */}
                  <img 
                    src={projectsData[current].image} 
                    alt={projectsData[current].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </MagicCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:hidden h-[600px]" />

        {/* Magnetic Dot indicators */}
        <div className="flex justify-center gap-4 mt-16 md:mt-12 relative z-10">
          {projectsData.map((_, i) => (
            <MagneticButton
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`p-2 transition-all duration-500`}
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-primary w-8 shadow-[0_0_10px_rgba(255,0,127,0.8)]" : "bg-white/30 w-1.5 hover:bg-white/60"}`} />
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
