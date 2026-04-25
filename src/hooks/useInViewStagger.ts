import { useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

export const useInViewStagger = (once: boolean = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        duration: 0.6,
      },
    },
  };

  return { ref, isInView, containerVariants, itemVariants };
};
