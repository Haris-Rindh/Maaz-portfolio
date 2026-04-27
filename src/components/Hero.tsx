"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <ParticleNetwork />
      
      <div className="z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full neo-shadow mb-8 mx-auto flex items-center justify-center bg-[#E8EDF2] border-4 border-white/50">
            <span className="text-4xl md:text-5xl font-bold text-gray-700">M</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-800 mb-4 drop-shadow-sm">
            Maaz Asad
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl text-gray-600 font-medium mb-10 h-[40px]"
        >
          <TypeAnimation
            sequence={[
              "Senior AI/ML Engineer",
              2000,
              "LLM & GenAI Specialist",
              2000,
              "NLP Architect",
              2000,
              "Data Science Lead",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary text-glow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl font-semibold text-white bg-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-[#E8EDF2] neo-shadow hover:neo-shadow-hover transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer text-gray-400 hover:text-primary transition-colors"
        onClick={() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
