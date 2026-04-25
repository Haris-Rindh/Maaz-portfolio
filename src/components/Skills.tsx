import { motion } from 'framer-motion';
import { useInViewStagger } from '../hooks/useInViewStagger';
import { LayoutTemplate, Palette, Globe, Server, Database, Lock, Wrench, GitBranch, Code2, PenTool, Terminal } from 'lucide-react';

export const Skills = () => {
  const { ref, containerVariants, itemVariants } = useInViewStagger();

  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="text-blue-500" />,
      skills: [
        { name: "React", icon: <LayoutTemplate size={24} /> },
        { name: "Tailwind CSS", icon: <Palette size={24} /> },
        { name: "Framer Motion", icon: <Globe size={24} /> },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-indigo-500" />,
      skills: [
        { name: "Node.js", icon: <Server size={24} /> },
        { name: "SQL", icon: <Database size={24} /> },
        { name: "Auth", icon: <Lock size={24} /> },
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-teal-500" />,
      skills: [
        { name: "Git", icon: <GitBranch size={24} /> },
        { name: "GitHub", icon: <Code2 size={24} /> },
        { name: "Figma", icon: <PenTool size={24} /> },
        { name: "Terminal", icon: <Terminal size={24} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="glass-panel p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
