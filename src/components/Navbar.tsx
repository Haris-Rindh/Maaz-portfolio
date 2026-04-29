"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/10 bg-black/80 backdrop-blur-xl" : "border border-transparent bg-transparent shadow-none"
        }`}
      >
        {/* Brand */}
        <div className="flex items-center gap-2 text-white font-black text-sm tracking-widest select-none cursor-pointer" onClick={() => handleNav("Home", "#home")}>
          <Terminal size={18} className="text-primary" />
          <span>MAAZ<span className="text-gray-500">.AI</span></span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.label, link.href)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300
                  ${active === link.label
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {active === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold tracking-widest text-[10px] uppercase text-black bg-white border border-white hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Initialize Contact
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mt-2 bg-black/90 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/10"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all
                  ${active === link.label ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
