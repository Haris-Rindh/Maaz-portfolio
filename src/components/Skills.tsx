"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Globe, BrainCircuit } from "lucide-react";
import { MagicCard } from "./MagicCard";

type Level = "EXPERT" | "ADVANCED" | "INTERMEDIATE";

interface Skill {
  name: string;
  level: Level;
}

interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    id: "llm",
    icon: <BrainCircuit size={18} className="text-white" />,
    title: "LLM & GenAI Engineering",
    subtitle: "Building and shipping production-grade large language model systems at scale.",
    skills: [
      { name: "OpenAI API / GPT-4o",  level: "EXPERT" },
      { name: "LangChain / LlamaIndex",level: "EXPERT" },
      { name: "RAG Pipelines",         level: "EXPERT" },
      { name: "PEFT / QLoRA Fine-tuning", level: "EXPERT" },
      { name: "Vector DBs (Pinecone, Weaviate)", level: "ADVANCED" },
      { name: "LLaMA / Mistral / Qwen", level: "ADVANCED" },
    ],
  },
  {
    id: "ml",
    icon: <Cpu size={18} className="text-white" />,
    title: "ML Frameworks & Research",
    subtitle: "From transformer architectures to classical ML — model design and training at research quality.",
    skills: [
      { name: "PyTorch",              level: "EXPERT" },
      { name: "Hugging Face Transformers", level: "EXPERT" },
      { name: "scikit-learn",         level: "EXPERT" },
      { name: "TensorFlow / Keras",   level: "ADVANCED" },
      { name: "ONNX / TorchScript",   level: "ADVANCED" },
      { name: "Weights & Biases",     level: "ADVANCED" },
    ],
  },
  {
    id: "mlops",
    icon: <Globe size={18} className="text-white" />,
    title: "MLOps & Infrastructure",
    subtitle: "Production pipelines, CI/CD for models, and cloud-native ML infrastructure.",
    skills: [
      { name: "Docker / Kubernetes",   level: "EXPERT" },
      { name: "MLflow",                level: "EXPERT" },
      { name: "AWS SageMaker",         level: "ADVANCED" },
      { name: "Apache Airflow",        level: "ADVANCED" },
      { name: "Terraform",             level: "ADVANCED" },
      { name: "Prometheus / Grafana",  level: "INTERMEDIATE" },
    ],
  },
  {
    id: "data",
    icon: <Code2 size={18} className="text-white" />,
    title: "Languages & Data Stack",
    subtitle: "Core languages and data engineering tools for end-to-end pipeline ownership.",
    skills: [
      { name: "Python",            level: "EXPERT" },
      { name: "SQL / BigQuery",    level: "EXPERT" },
      { name: "Pandas / Polars",   level: "EXPERT" },
      { name: "Apache Spark",      level: "ADVANCED" },
      { name: "dbt",               level: "ADVANCED" },
      { name: "Bash / Linux",      level: "ADVANCED" },
    ],
  },
];

const levelClass: Record<Level, string> = {
  EXPERT:       "bg-white text-black border border-white",
  ADVANCED:     "bg-white/10 text-white border border-white/20",
  INTERMEDIATE: "bg-transparent text-gray-500 border border-white/10",
};

const Skills = () => {
  const [activeId, setActiveId] = useState("llm");
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">

        {/* ── Layout: left info + right panel ── */}
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
                <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Core Competencies</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-6 tracking-tighter">
                TECHNICAL<br />
                <span className="text-gray-500">ARSENAL</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base">
                Advanced orchestration of machine learning models, infrastructure, and generative AI systems. Built for scale.
              </p>
            </motion.div>

            {/* Category switcher icons */}
            <div className="flex md:flex-col gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`group relative flex items-center gap-4 px-5 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 text-left overflow-hidden border
                    ${activeId === cat.id
                      ? "bg-white/5 text-white border-white/10"
                      : "bg-transparent text-gray-500 border-transparent hover:bg-white/[0.02] hover:text-gray-300"
                    }`}
                >
                  <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">{cat.icon}</div>
                  <span className="relative z-10 hidden md:inline">{cat.title.split(" ")[0]} {cat.title.split(" ")[1]}</span>
                  {activeId === cat.id && (
                    <motion.div layoutId="skill-active-bg" className="absolute inset-0 bg-white/5 z-0" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — skill panel (Magic View) */}
          <div className="md:w-2/3 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MagicCard className="p-8 md:p-12 min-h-[420px] bg-[#121214]">
                  {/* Panel header */}
                  <div className="flex items-start gap-5 mb-10 pb-8 border-b border-white/5">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">{active.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{active.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{active.subtitle}</p>
                    </div>
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: "easeOut" }}
                        className="group bg-black/20 border border-white/5 rounded-xl px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      >
                        <span className="font-medium text-gray-300 text-sm group-hover:text-white transition-colors">{skill.name}</span>
                        <span
                          className={`text-[9px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-full ${levelClass[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </MagicCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
