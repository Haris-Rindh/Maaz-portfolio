"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicCard } from "./MagicCard";

const stats = [
  { value: "5+",   label: "Years of Exp." },
  { value: "30+",  label: "Projects Shipped" },
  { value: "40%",  label: "Avg. Latency Cut" },
  { value: "10k",  label: "RPS at Peak Load" },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} id="about" className="relative py-32 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">

        {/* ── Left copy (Parallax) ── */}
        <motion.div style={{ y: yText }} className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
            <span className="text-xs font-bold tracking-widest text-white/50 uppercase">The Architect</span>
          </div>

          <div className="mb-8 flex flex-col gap-1">
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter"
              >
                THE AI MIND
              </motion.h2>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-gray-500 leading-none tracking-tighter"
              >
                BEHIND THE
              </motion.h2>
            </div>
            <div className="overflow-hidden py-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-none tracking-tighter"
              >
                INTELLIGENCE.
              </motion.h2>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6 max-w-lg text-sm md:text-base">
            I am <strong className="text-white font-medium">Maaz Ahmad</strong>, a Senior AI/ML Engineer specialising in
            large language models, RAG architectures, and production-grade NLP systems. I bridge
            the gap between cutting-edge research and reliable, scalable enterprise deployment.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base">
            With deep expertise spanning PyTorch, Hugging Face, LangChain, Kubernetes, and AWS
            SageMaker, I architect AI systems that don&apos;t just demo well — they perform under
            intense real-world load, serving millions of requests with absolute precision.
          </p>
        </motion.div>

        {/* ── Right stats grid (Parallax + Magic Hover) ── */}
        <motion.div style={{ y: yCards }} className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagicCard className="h-full flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-md">
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center">
                  {stat.label}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
