import { motion } from 'framer-motion';
import { useInViewStagger } from '../hooks/useInViewStagger';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Experience = () => {
  const { ref, containerVariants, itemVariants } = useInViewStagger();

  const timeline = [
    {
      id: 1,
      type: 'education',
      title: "Bachelor of Science in Information Technology",
      institution: "University of Technology",
      date: "2023 - Present",
      description: "Focusing on software engineering, web development, and database management. Maintaining a 3.8 GPA.",
      icon: <GraduationCap size={20} />
    },
    {
      id: 2,
      type: 'certification',
      title: "Meta Front-End Developer Professional Certificate",
      institution: "Coursera",
      date: "2024",
      description: "Comprehensive training in React, advanced JavaScript, and UI/UX best practices.",
      icon: <Award size={20} />
    },
    {
      id: 3,
      type: 'education',
      title: "Higher Secondary Education",
      institution: "Science College",
      date: "2021 - 2023",
      description: "Pre-Engineering group with strong foundation in mathematics and computer science.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500">
            My academic journey and professional certifications.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-transparent -translate-x-1/2 rounded-full hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-0 w-10 h-10 rounded-full glass-card border-2 border-blue-500 -translate-x-1/2 items-center justify-center text-blue-600 z-10 shadow-lg shadow-blue-500/20">
                  {item.icon}
                </div>

                <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right px-4">
                  {index % 2 === 0 ? (
                    // Right side content
                    <div className="glass-panel p-6 rounded-3xl w-full text-left hover:shadow-xl transition-shadow border-t border-l border-white/60">
                      <div className="flex items-center gap-2 text-blue-600 mb-2 text-sm font-medium">
                        <Calendar size={16} />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                      <div className="text-indigo-500 font-medium mb-3">{item.institution}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    // Empty space for layout
                    <div className="hidden md:block w-full" />
                  )}
                </div>

                <div className="md:w-1/2 flex flex-col items-start px-4">
                  {index % 2 !== 0 ? (
                    // Left side content
                    <div className="glass-panel p-6 rounded-3xl w-full text-left hover:shadow-xl transition-shadow border-t border-l border-white/60">
                      <div className="flex items-center gap-2 text-blue-600 mb-2 text-sm font-medium">
                        <Calendar size={16} />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                      <div className="text-indigo-500 font-medium mb-3">{item.institution}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="hidden md:block w-full" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
