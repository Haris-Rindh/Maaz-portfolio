"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Bash", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "ML Frameworks",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Hugging Face", level: 95 },
      { name: "scikit-learn", level: 90 },
    ],
  },
  {
    category: "LLM / GenAI",
    items: [
      { name: "OpenAI API", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "RAG Pipelines", level: 95 },
      { name: "PEFT/LoRA", level: 85 },
      { name: "Vector DBs", level: 85 },
    ],
  },
  {
    category: "MLOps / Data",
    items: [
      { name: "Docker / K8s", level: 85 },
      { name: "MLflow", level: 90 },
      { name: "AWS SageMaker", level: 80 },
      { name: "Pandas / Spark", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Tech Stack</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-3xl neo-shadow bg-[#E8EDF2]"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">{skillGroup.category}</h3>
            <div className="space-y-6">
              {skillGroup.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-600">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full neo-shadow-inset bg-[#E8EDF2] overflow-hidden p-[2px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
