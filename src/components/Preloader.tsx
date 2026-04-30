"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  "INITIALIZING SECURE CONNECTION...",
  "BYPASSING MAINFRAME PROTOCOLS...",
  "LOADING NEURAL NETWORKS [████████░░] 80%",
  "ESTABLISHING WEBGL CONTEXT...",
  "RENDERING 3D ENVIRONMENT...",
  "SYSTEM ONLINE. WELCOME MAAZ."
];

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    // Sequence the text commands
    const commandInterval = setInterval(() => {
      setCurrentCommand((prev) => {
        if (prev < commands.length - 1) return prev + 1;
        clearInterval(commandInterval);
        return prev;
      });
    }, 400);

    // End loading after the sequence is complete
    const finishTimeout = setTimeout(() => {
      setLoading(false);
    }, 3200);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(commandInterval);
      clearTimeout(finishTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="fixed inset-0 z-[9999] bg-[#020202] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          
          <div className="relative w-full max-w-3xl px-6 md:px-12 flex flex-col items-start font-mono z-10">
            {/* Command History */}
            <div className="flex flex-col gap-2 w-full">
              {commands.slice(0, currentCommand + 1).map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-xs md:text-sm font-bold tracking-widest ${
                    index === commands.length - 1 ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <span className="text-gray-700 mr-4">[{String(index + 1).padStart(2, "0")}]</span>
                  &gt; {cmd}
                </motion.div>
              ))}
              
              {/* Blinking Cursor */}
              {currentCommand < commands.length - 1 && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-3 h-4 bg-white mt-1"
                />
              )}
            </div>

            {/* Loading Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-full h-1 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
