import { useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const useMouseParallax = (strength: number = 0.05) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate from center of screen (-1 to 1)
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Use spring for smooth, jitter-free movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const translateX = useTransform(springX, [-1, 1], [-strength * 100, strength * 100]);
  const translateY = useTransform(springY, [-1, 1], [-strength * 100, strength * 100]);

  return { translateX, translateY };
};
