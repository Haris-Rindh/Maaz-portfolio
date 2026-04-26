import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, MapPin, Sparkles, ArrowRight, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10 py-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/20">
              HA
            </div>
            <span className="font-bold text-xl tracking-tight">Haris Asad</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-semibold backdrop-blur-md flex items-center gap-2"
          >
            <Mail size={16} />
            Let's Talk
          </motion.button>
        </header>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]"
        >
          
          {/* Main Hero Card (Spans 2x2) */}
          <BentoCard className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1c1c1e] to-[#0a0a0b] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-8 shadow-inner shadow-white/5">
                <Sparkles size={14} className="text-purple-400" />
                Available for new opportunities
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Crafting digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">experiences</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed font-medium">
                I'm a Full Stack Developer specializing in React, Node.js, and building beautiful, high-performance web applications.
              </p>
            </div>
            <div className="flex gap-3 mt-8">
               <SocialLink href="https://github.com" icon={<GithubIcon />} />
               <SocialLink href="https://linkedin.com" icon={<LinkedinIcon />} />
               <SocialLink href="https://twitter.com" icon={<TwitterIcon />} />
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard className="bg-[#111] p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
            <MapPin size={36} className="text-blue-400 mb-4 relative z-10" />
            <h3 className="font-bold text-xl relative z-10 mb-1">Earth</h3>
            <p className="text-sm text-gray-400 font-medium relative z-10">Remote / Global</p>
          </BentoCard>

          {/* Resume / CV Card */}
          <BentoCard className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 flex flex-col items-center justify-center group cursor-pointer hover:from-blue-900/50 hover:to-purple-900/50 transition-colors border-blue-500/20">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Download size={28} className="text-blue-300" />
            </div>
            <h3 className="font-bold text-lg mb-1">My Resume</h3>
            <p className="text-sm text-blue-200/70 font-medium">Download PDF</p>
          </BentoCard>

          {/* Project 1 */}
          <BentoCard className="md:col-span-2 md:row-span-2 bg-[#111] p-0 overflow-hidden group relative cursor-pointer border-none">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" alt="Project" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Nexus Platform</h3>
                      <p className="text-gray-300 mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium max-w-sm">
                        A robust full-stack team management dashboard built with React and Node.js.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>
                </div>
             </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="md:col-span-2 bg-[#111] p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="font-bold text-gray-400 mb-6 text-sm uppercase tracking-widest relative z-10">Tech Arsenal</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Framer Motion', 'PostgreSQL'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Experience Card */}
          <BentoCard className="md:col-span-2 bg-[#111] p-8 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-400 text-sm uppercase tracking-widest">Experience</h3>
              <a href="#" className="text-sm font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-1">
                View all <ArrowRight size={14} />
              </a>
            </div>
            <div className="space-y-6 w-full">
              <ExperienceItem role="Senior Developer" company="Tech Corp" year="2023 - Present" />
              <div className="w-full h-px bg-white/10"></div>
              <ExperienceItem role="Frontend Engineer" company="Startup Inc" year="2021 - 2023" />
            </div>
          </BentoCard>

        </motion.div>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-white/10 flex justify-between items-center text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Haris Asad. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">♥</span></p>
        </footer>

      </div>
    </div>
  );
}

const BentoCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={`rounded-3xl border border-white/10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95"
  >
    {icon}
  </a>
);

const ExperienceItem = ({ role, company, year }: { role: string, company: string, year: string }) => (
  <div className="flex justify-between items-center group">
    <div>
      <h4 className="font-bold text-white text-lg group-hover:text-purple-400 transition-colors">{role}</h4>
      <p className="text-sm font-medium text-gray-400">{company}</p>
    </div>
    <span className="text-sm font-bold text-gray-500">{year}</span>
  </div>
);

// SVGs
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C5.3 1.2 4.3 1.5 4.3 1.5c-.7 1.8-.2 3.2-.1 3.5-1 1-1.5 2.2-1.5 3.5 0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default App;
