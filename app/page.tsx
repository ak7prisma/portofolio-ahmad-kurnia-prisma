import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import Hero from "./components/HeroSection";
import Projects from "./components/ProjectsSection";
import Skills from "./components/SkillsSection";


export default function Home() {
  
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
