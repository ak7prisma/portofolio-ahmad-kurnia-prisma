import About from "@/components/AboutSection";
import Contact from "@/components/ContactSection";
import Hero from "@/components/HeroSection";
import Projects from "@/components/ProjectsSection";


export default function Home() {
  
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
