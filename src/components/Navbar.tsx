import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const Navbar = () => {
  const { scrollProgress, isScrolled } = useScrollProgress();

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            MA.
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
          <button onClick={() => scrollToSection('Contact')} className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all font-medium">
            Hire Me
          </button>
        </div>
      </motion.nav>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
      />
    </>
  );
};
