import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInViewStagger } from '../hooks/useInViewStagger';
import { Send, Mail, MapPin, Code2, Briefcase, MessageSquare } from 'lucide-react';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX * 0.5);
    y.set(mouseY * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-4 glass-card rounded-full cursor-pointer hover:text-blue-600 transition-colors text-slate-600"
    >
      {children}
    </motion.div>
  );
};

export const Contact = () => {
  const { ref, containerVariants, itemVariants } = useInViewStagger();
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Email</div>
                    <div className="font-semibold text-slate-800">hello@maazahmad.dev</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-teal-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Location</div>
                    <div className="font-semibold text-slate-800">Lahore, Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <MagneticButton><Code2 size={24} /></MagneticButton>
                  <MagneticButton><Briefcase size={24} /></MagneticButton>
                  <MagneticButton><MessageSquare size={24} /></MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <form className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  onFocus={() => setFocused('name')}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 px-2 text-slate-800 focus:outline-none focus:border-blue-500 transition-colors peer"
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    focused === 'name' ? '-top-2 text-xs text-blue-500' : 'top-4 text-slate-500'
                  }`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  onFocus={() => setFocused('email')}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 px-2 text-slate-800 focus:outline-none focus:border-blue-500 transition-colors peer"
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    focused === 'email' ? '-top-2 text-xs text-blue-500' : 'top-4 text-slate-500'
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={4}
                  onFocus={() => setFocused('message')}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 px-2 text-slate-800 focus:outline-none focus:border-blue-500 transition-colors resize-none peer"
                />
                <label 
                  htmlFor="message" 
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    focused === 'message' ? '-top-2 text-xs text-blue-500' : 'top-4 text-slate-500'
                  }`}
                >
                  Your Message
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
