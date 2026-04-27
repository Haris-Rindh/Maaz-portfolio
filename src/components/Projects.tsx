"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Enterprise RAG Assistant",
    description: "An advanced retrieval-augmented generation platform for legal document analysis. Integrates LangChain, Pinecone, and GPT-4 to provide highly accurate semantic search and summarization.",
    tags: ["LLMs", "LangChain", "Pinecone", "FastAPI", "React"],
    metric: "Reduced document review time by 60%",
    github: "#",
    live: "#",
  },
  {
    title: "Real-time NLP Inference Engine",
    description: "A highly optimized API service for deploying transformer models. Built with vLLM and deployed on Kubernetes. Features dynamic batching and autoscaling based on queue length.",
    tags: ["Kubernetes", "vLLM", "Docker", "Python", "Prometheus"],
    metric: "Handles 10k+ RPS with <50ms latency",
    github: "#",
    live: "#",
  },
  {
    title: "Financial Sentiment Dashboard",
    description: "An analytics platform that aggregates news feeds and social media, running real-time sentiment analysis using a fine-tuned FinBERT model. Includes interactive data visualizations.",
    tags: ["PyTorch", "Hugging Face", "React", "D3.js", "Kafka"],
    metric: "Processed 1M+ daily financial data points",
    github: "#",
    live: "#",
  },
  {
    title: "Automated MLOps Pipeline",
    description: "End-to-end continuous training and deployment pipeline. Automatically detects data drift, triggers retraining on AWS SageMaker, and logs model metrics to MLflow.",
    tags: ["MLflow", "AWS SageMaker", "Airflow", "Terraform", "CI/CD"],
    metric: "Zero-downtime model deployments",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Case Studies</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-96 rounded-3xl neo-shadow bg-[#E8EDF2] overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="font-semibold text-primary mb-4">{project.metric}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-[#E8EDF2] neo-shadow rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Glassmorphic Overlay */}
            <div className="absolute inset-0 translate-y-[80%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] glass-panel flex flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors text-gray-800 backdrop-blur-sm"
                  aria-label="GitHub Repository"
                >
                  <Github size={24} />
                </a>
                <a
                  href={project.live}
                  className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors text-gray-800 backdrop-blur-sm"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
