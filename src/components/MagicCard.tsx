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
      
      // Calculate mouse position relative to the card
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
      className={`relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 transition-colors duration-500 hover:border-white/10 ${className}`}
    >
      {/* Spotlight Border Glow Layer */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      {/* Content wrapper with interior gradient */}
      <div className="absolute inset-[1px] bg-[#09090b] rounded-[calc(1.5rem-1px)] z-0 pointer-events-none" />
      <div className="absolute inset-[1px] bg-gradient-to-br from-white/[0.03] to-transparent rounded-[calc(1.5rem-1px)] z-0 pointer-events-none" />
      
      {/* Inner subtle mouse follow glow */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.02), transparent 40%)`
        }}
      />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
