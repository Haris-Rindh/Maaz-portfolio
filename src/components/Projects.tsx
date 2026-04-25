import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInViewStagger } from '../hooks/useInViewStagger';
import { useTilt } from '../hooks/useTilt';
import { ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(10);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-panel rounded-3xl overflow-hidden group cursor-pointer h-full border border-white/50 shadow-lg"
      >
        <div className="relative h-48 overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-slate-100/50 text-blue-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <Code2 size={16} /> Code
            </button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <ExternalLink size={16} /> Live Demo
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const { ref, containerVariants, itemVariants } = useInViewStagger();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Fullstack', 'UI/UX'];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern admin dashboard for managing products, orders, and customer data with real-time analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Frontend",
      tags: ["React", "Tailwind", "Chart.js"]
    },
    {
      id: 2,
      title: "Social Connect App",
      description: "Full-stack social media application featuring real-time messaging, post sharing, and user interactions.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      category: "Fullstack",
      tags: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Task Management Tool",
      description: "Kanban-style task management application with drag-and-drop functionality and team collaboration.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      category: "Frontend",
      tags: ["React", "Redux", "Framer Motion"]
    },
    {
      id: 4,
      title: "Portfolio Redesign",
      description: "A conceptual redesign for a creative agency focusing on typography and whitespace.",
      image: "https://images.unsplash.com/photo-1481481300826-bb4d2b998d79?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX",
      tags: ["Figma", "Prototyping"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 max-w-2xl mx-auto mb-8">
            Explore a selection of my recent work across frontend, fullstack, and UI design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat ? 'text-white' : 'text-slate-600 hover:text-blue-600 glass-card'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
