"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { MagicCard } from "./MagicCard";

const experienceData = [
  {
    duration: "2023 – Present",
    title: "Senior AI Engineer",
    company: "TechNexus AI Labs",
    location: "Remote / Global",
    tags: ["LLMs", "RAG", "MLOps"],
    achievements: [
      "Architected a production RAG pipeline that reduced hallucination rates by 35% across enterprise document QA.",
      "Fine-tuned LLaMA-3 8B on proprietary financial corpora via QLoRA — GPT-4-level domain benchmark accuracy.",
      "Optimised inference latency by 40% with vLLM batching + Triton on AWS SageMaker.",
      "Established internal LLM evaluation frameworks; promoted 3 junior engineers.",
    ],
  },
  {
    duration: "2020 – 2023",
    title: "Machine Learning Engineer",
    company: "DataSphere Solutions",
    location: "Remote / Global",
    tags: ["NLP", "Kubernetes", "Pipelines"],
    achievements: [
      "Deployed real-time NLP inference APIs handling 10k RPS at sub-50ms p99 with FastAPI + Kubernetes.",
      "Built a continuous training platform with MLflow + Airflow — cut deployment cycles from days to hours.",
      "Shipped a churn model at 92% AUC, attributed to $1.2M in annual retention savings.",
      "Implemented dbt + Great Expectations data quality layer — catches 98% of schema anomalies pre-prod.",
    ],
  },
  {
    duration: "2018 – 2020",
    title: "Data Scientist",
    company: "Innovate Analytics",
    location: "Remote / Global",
    tags: ["Spark", "Analytics", "A/B Testing"],
    achievements: [
      "Built Spark pipelines processing 50TB+ of daily IoT telemetry with zero-downtime rolling updates.",
      "Delivered executive KPI dashboards in React + D3.js — replaced 40 hours/week of manual reporting.",
      "Designed A/B testing infra — surfaced a 15% conversion uplift within the first product quarter.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">The Journey</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
            CAREER<br />
            <span className="text-gray-500">EVOLUTION</span>
          </h2>
        </motion.div>

        {/* Center-line timeline */}
        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px]"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ height: '20%' }}
            />
          </div>

          <div className="space-y-16">
            {experienceData.map((job, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card wrapper */}
                  <div className="w-full md:w-[45%]">
                    <MagicCard className="p-8 bg-black/40 backdrop-blur-md">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-white/10">
                        <span className="flex items-center gap-2 text-white font-bold text-[10px] tracking-widest uppercase">
                          <Calendar size={12} className="text-primary" />
                          {job.duration}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{job.title}</h3>
                      <div className="flex items-center gap-2 mb-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <Briefcase size={12} className="text-secondary" />
                        {job.company}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.tags.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest text-gray-300 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3">
                        {job.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                            <span className="text-gray-400 text-sm leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </MagicCard>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-[10%] justify-center relative">
                    <div className="w-4 h-4 rounded-full border border-white/20 bg-black flex items-center justify-center z-10 shadow-[0_0_10px_rgba(79,195,247,0.5)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
