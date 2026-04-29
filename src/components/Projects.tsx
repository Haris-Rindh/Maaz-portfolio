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
    title: "Enterprise RAG Assistant",
    description: "Production RAG platform for legal document analysis. Integrates LangChain, Pinecone, and GPT-4 for citation-grounded summarisation and multi-turn QA over million-token corpora.",
    tags: ["LLMs", "LangChain", "Pinecone", "FastAPI"],
    metric: "Reduced review time by 60%",
    github: "#",
    live: "#",
  },
  {
    title: "Real-time NLP Inference Engine",
    description: "High-throughput serving layer built on vLLM + Kubernetes with dynamic batching, autoscaling, and a Prometheus + Grafana observability stack. Zero-downtime rolling model updates.",
    tags: ["Kubernetes", "vLLM", "Docker", "Prometheus"],
    metric: "10k+ RPS · sub-50ms p99 latency",
    github: "#",
    live: "#",
  },
  {
    title: "Financial Sentiment Dashboard",
    description: "Real-time analytics platform aggregating 1M+ daily news items through a fine-tuned FinBERT model, with live candlestick overlays in D3.js and automated daily email briefs.",
    tags: ["PyTorch", "React", "D3.js", "Kafka"],
    metric: "1M+ signals processed daily",
    github: "#",
    live: "#",
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
              <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
              <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              FEATURED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">PROJECT</span>
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
              <MagneticButton onClick={next} className="p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <ChevronRight size={20} />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Featured card */}
        <div className="relative w-full h-auto md:h-[480px]" style={{ perspective: "2000px" }}>
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
              <MagicCard className="w-full h-full flex flex-col md:flex-row p-0 bg-black/40 backdrop-blur-md">
                {/* Left — main info */}
                <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center">
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 drop-shadow-md"
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
                    className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base max-w-lg"
                  >
                    {projectsData[current].description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 mb-12"
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
                    <a href={projectsData[current].github} className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-transparent font-bold text-[10px] tracking-widest uppercase text-white hover:bg-white/10 transition-all">
                      <Github size={14} className="group-hover:scale-110 transition-transform" /> Source
                    </a>
                    <a href={projectsData[current].live} className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-[10px] tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
                      <ExternalLink size={14} className="group-hover:scale-110 transition-transform" /> Deploy
                    </a>
                  </motion.div>
                </div>

                {/* Right — decorative panel */}
                <div className="hidden md:flex md:w-2/5 relative items-center justify-center p-12 bg-black/60 border-l border-white/10 overflow-hidden">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="text-center relative z-10"
                  >
                    <div className="text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none leading-none">
                      {String(current + 1).padStart(2, "0")}
                    </div>
                  </motion.div>
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
              <div className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-white/30 w-1.5 hover:bg-white/60"}`} />
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
