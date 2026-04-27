import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8EDF2] overflow-x-hidden">
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 mt-20 border-t border-gray-300/50">
        <p>&copy; {new Date().getFullYear()} Maaz Asad. All rights reserved.</p>
      </footer>
    </main>
  );
}
