"use client";

import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "TechNexus AI Labs",
    title: "Senior AI Engineer",
    duration: "2023 - Present",
    achievements: [
      "Architected and deployed a production RAG pipeline, reducing hallucination rates by 35%.",
      "Fine-tuned LLaMA-3 8B on proprietary financial data using QLoRA, achieving human-level accuracy in sentiment analysis.",
      "Optimized inference latency by 40% using vLLM and Triton Inference Server on AWS.",
      "Mentored a team of 3 junior engineers and established internal LLM evaluation frameworks."
    ],
  },
  {
    company: "DataSphere Solutions",
    title: "Machine Learning Engineer",
    duration: "2020 - 2023",
    achievements: [
      "Deployed real-time NLP inference APIs supporting up to 10k RPS for conversational agents.",
      "Designed an MLOps platform using MLflow and Kubernetes, reducing model deployment time from days to hours.",
      "Developed a customer churn prediction model with 92% AUC, saving an estimated $1.2M annually.",
      "Implemented a comprehensive data quality monitoring system using dbt and Great Expectations."
    ],
  },
  {
    company: "Innovate Analytics",
    title: "Data Scientist",
    duration: "2018 - 2020",
    achievements: [
      "Built end-to-end data pipelines in Apache Spark processing 50TB+ of telemetry data daily.",
      "Created interactive executive dashboards in Tableau and React to visualize key KPIs.",
      "Collaborated with product teams to design A/B testing frameworks, improving conversion by 15%."
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Work Experience</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative border-l-4 border-gray-300 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[61px] top-6 w-6 h-6 rounded-full bg-primary border-4 border-[#E8EDF2] neo-shadow" />

            <div className="group p-8 rounded-3xl neo-shadow bg-[#E8EDF2] hover:neo-shadow-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(74,144,217,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                <span className="text-primary font-medium tracking-wide mt-2 md:mt-0">{job.duration}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-600 mb-6">{job.company}</h4>
              
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1.5 text-xl leading-none">•</span>
                    <span className="text-gray-600 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
