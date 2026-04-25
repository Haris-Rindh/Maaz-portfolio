import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      {/* Aurora mesh gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-200/40 mix-blend-multiply filter blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-200/40 mix-blend-multiply filter blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 100, 0],
          y: [0, -100, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-mint-200/30 bg-teal-100/40 mix-blend-multiply filter blur-[120px]"
      />
    </div>
  );
};
