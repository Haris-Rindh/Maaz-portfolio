"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl overflow-hidden bg-[#0a0a0c]/85 border border-white/10 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* Spotlight Hover Glow Layer for Dark WebGL Theme */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79,195,247,0.15), transparent 40%)`
        }}
      />
      
      {/* Inner subtle mouse follow glow */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(179,136,255,0.08), transparent 40%)`
        }}
      />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
