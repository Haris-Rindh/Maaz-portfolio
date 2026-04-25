import { motion } from 'framer-motion';
import { useInViewStagger } from '../hooks/useInViewStagger';

export const About = () => {
  const { ref, containerVariants, itemVariants } = useInViewStagger(true);

  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'UI / UX Design', level: 75 },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={ref.current ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-4">About <span className="text-gradient">Me</span></motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 max-w-2xl mx-auto">Get to know more about my background, experience, and what drives me.</motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Passionate IT Student & Developer</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Hello! I'm Maaz Ahmad, a dedicated Information Technology student with a deep passion for web development and design. I love combining logic and creativity to build beautiful, user-friendly applications.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Currently, I am focusing on mastering modern frontend technologies like React and Tailwind CSS, while continually exploring full-stack development and UI/UX design principles to deliver comprehensive digital solutions.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="text-center p-4 glass-card rounded-2xl w-full">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-slate-500 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-4 glass-card rounded-2xl w-full">
                  <div className="text-3xl font-bold text-indigo-500 mb-1">3.8</div>
                  <div className="text-sm text-slate-500 font-medium">Current GPA</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Core Proficiencies</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-slate-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
