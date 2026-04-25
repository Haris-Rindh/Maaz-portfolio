import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm glass-panel border-t border-white/50">
        <p>© {new Date().getFullYear()} Maaz Ahmad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
