"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="dark cursor-none">
        <CustomCursor />
        <main className="min-h-screen bg-[#09090b] overflow-x-hidden selection:bg-white/20 selection:text-white">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />

          {/* ── Footer ── */}
          <footer className="relative py-12 px-6 bg-[#09090b] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500 tracking-[0.2em] uppercase font-bold">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  SYSTEM ONLINE
                </div>
                <span className="hidden md:inline text-gray-700">|</span>
                <span>© 2026 MAAZ AHMAD — ARCHITECTING INTELLIGENCE</span>
              </div>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: <Github size={16} />,   href: "#", label: "GitHub" },
                  { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
                  { icon: <Mail size={16} />,     href: "#", label: "Email" },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
}
