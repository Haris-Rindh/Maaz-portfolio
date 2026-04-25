import { motion } from 'framer-motion';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useTypewriter } from '../hooks/useTypewriter';
import { Code2, Monitor, Database, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { translateX, translateY } = useMouseParallax(0.03);
  const subtitle = useTypewriter(['IT Student', 'Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver'], 100, 50, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-card text-blue-600 font-medium text-sm mb-6 shadow-sm border-blue-100/50">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 mb-4">
            Hi, I'm <br />
            <span className="text-gradient">Maaz Ahmad</span>
          </h1>
          <div className="h-10 mb-6">
            <p className="text-2xl md:text-3xl font-medium text-slate-600">
              I am a <span className="text-gradient-alt">{subtitle}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-slate-500 text-lg mb-8 max-w-lg leading-relaxed">
            I craft responsive, intuitive, and visually stunning web experiences. Let's build something amazing together.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-2 group">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 rounded-full glass-card text-slate-700 font-medium hover:bg-white/80 hover:-translate-y-1 transition-all">
              Download CV
            </button>
          </div>
        </motion.div>

        <div className="relative h-[500px] hidden lg:block perspective-1000">
          <motion.div 
            style={{ x: translateX, y: translateY }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Main Center Image / Graphic */}
            <div className="w-80 h-80 rounded-full glass-panel flex items-center justify-center relative shadow-2xl p-4 border border-white/60">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 p-2 shadow-inner">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maaz&backgroundColor=e2e8f0" 
                  alt="Maaz Ahmad" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating Orbs */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-16 h-16 glass-card rounded-full flex items-center justify-center text-blue-600 shadow-xl"
              >
                <Code2 size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 -right-12 w-20 h-20 glass-card rounded-full flex items-center justify-center text-indigo-500 shadow-xl"
              >
                <Monitor size={32} />
              </motion.div>
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 right-10 w-14 h-14 glass-card rounded-full flex items-center justify-center text-teal-500 shadow-xl"
              >
                <Database size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
