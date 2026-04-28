"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { MagicCard } from "./MagicCard";

const projectsData = [
  {
    title: "Enterprise RAG Assistant",
    description:
      "Production RAG platform for legal document analysis. Integrates LangChain, Pinecone, and GPT-4 for citation-grounded summarisation and multi-turn QA over million-token corpora.",
    tags: ["LLMs", "LangChain", "Pinecone", "FastAPI", "React"],
    metric: "Reduced document review time by 60%",
    github: "#",
    live: "#",
  },
  {
    title: "Real-time NLP Inference Engine",
    description:
      "High-throughput serving layer built on vLLM + Kubernetes with dynamic batching, autoscaling, and a Prometheus + Grafana observability stack. Zero-downtime rolling model updates.",
    tags: ["Kubernetes", "vLLM", "Docker", "Python", "Prometheus"],
    metric: "10k+ RPS · sub-50ms p99 latency",
    github: "#",
    live: "#",
  },
  {
    title: "Financial Sentiment Dashboard",
    description:
      "Real-time analytics platform aggregating 1M+ daily news items through a fine-tuned FinBERT model, with live candlestick overlays in D3.js and automated daily email briefs.",
    tags: ["PyTorch", "Hugging Face", "React", "D3.js", "Kafka"],
    metric: "1M+ signals processed daily",
    github: "#",
    live: "#",
  },
  {
    title: "Automated MLOps Pipeline",
    description:
      "End-to-end continuous training platform: detects data drift via Evidently AI, triggers retraining on AWS SageMaker, tracks runs in MLflow, promotes models via blue/green Terraform deployments.",
    tags: ["MLflow", "SageMaker", "Airflow", "Terraform", "CI/CD"],
    metric: "Zero-downtime model deployments",
    github: "#",
    live: "#",
  },
  {
    title: "LLaMA-3 Domain Fine-tuner",
    description:
      "QLoRA fine-tuning pipeline for adapting LLaMA-3 8B to financial and legal domains. Includes automated dataset curation, PEFT training, GGUF quantisation, and Ollama deployment.",
    tags: ["QLoRA", "PEFT", "LLaMA-3", "Hugging Face", "Quantisation"],
    metric: "GPT-4 parity on domain benchmarks",
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
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto">

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
              <span className="text-gray-500">PROJECT</span>
            </h2>
          </motion.div>

          {/* Counter + nav */}
          <div className="flex items-center gap-8">
            <span className="text-5xl font-black text-white tabular-nums tracking-tighter">
              {String(current + 1).padStart(2, "0")}
              <span className="text-2xl text-gray-700 mx-2">/</span>
              <span className="text-3xl text-gray-600">{String(total).padStart(2, "0")}</span>
            </span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured card (Optimized 2D Slider for Smoothness) */}
        <div className="relative w-full h-auto md:h-[480px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full absolute inset-0"
            >
              <MagicCard className="w-full h-full flex flex-col md:flex-row p-0 bg-[#121214]">
                {/* Left — main info */}
                <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center">
                  <p className="text-gray-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                    {projectsData[current].metric}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                    {projectsData[current].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base">
                    {projectsData[current].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {projectsData[current].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest text-gray-300 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                      href={projectsData[current].github}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-transparent font-bold text-[10px] tracking-widest uppercase text-white hover:bg-white/5 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={14} /> Source
                    </a>
                    <a
                      href={projectsData[current].live}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-[10px] tracking-widest uppercase hover:bg-gray-200 transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} /> Deploy
                    </a>
                  </div>
                </div>

                {/* Right — decorative panel */}
                <div className="hidden md:flex md:w-2/5 relative items-center justify-center p-12 bg-[#09090b] border-l border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                  
                  <div className="text-center relative z-10">
                    <div className="text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none leading-none mb-6">
                      {String(current + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Space filler for mobile since absolute positioning kills height */}
        <div className="md:hidden h-[600px]" />

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-16 md:mt-12 relative z-10">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "bg-white w-8" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
