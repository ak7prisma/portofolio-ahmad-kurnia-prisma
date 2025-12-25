"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { fadeUp } from "../lib/animation";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Projects</span>
          </h2>
          <p className="text-slate-400">
            From collaborative team projects to personal explorations in web technology
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}