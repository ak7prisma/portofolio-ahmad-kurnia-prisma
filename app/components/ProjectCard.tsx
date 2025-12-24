"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Lock, Smartphone, Monitor } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/Button";
import { ProjectData } from "../data/projects"; 

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function ProjectCard({ project, index }: Readonly<{ project: ProjectData, index: number }>) {
  const isEven = index % 2 === 0; 
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-16 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      
      {/* Image Section */}
      <div className="w-full lg:w-3/5 group perspective-1000 flex flex-col items-center">
        
        {/* Toggle Controls */}
        <div className="flex bg-slate-900/80 p-1 rounded-full border border-white/5 mb-6 backdrop-blur-sm">
           <button 
             onClick={() => setViewMode("desktop")}
             className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
               viewMode === "desktop" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50" : "text-slate-400 hover:text-white"
             }`}
           >
             <Monitor size={14} /> Desktop
           </button>
           <button 
             onClick={() => setViewMode("mobile")}
             className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
               viewMode === "mobile" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50" : "text-slate-400 hover:text-white"
             }`}
           >
             <Smartphone size={14} /> Mobile
           </button>
        </div>

        {/* Animated Frame */}
        <div 
          className={`relative overflow-hidden bg-slate-950 transition-all duration-500 ease-in-out shadow-2xl origin-top
            ${viewMode === 'mobile' 
              ? 'w-70 sm:w-[320px] rounded-[2.5rem] border-8 border-slate-800 ring-1 ring-white/10' 
              : 'w-full rounded-xl border border-white/10 bg-slate-900/50'
            }
          `}
        >
          
          {/* Browser Header (Desktop Only) */}
          <div 
            className={`absolute top-0 left-0 right-0 h-8 bg-slate-900/90 flex items-center px-4 gap-2 border-b border-white/5 z-20 backdrop-blur-md transition-opacity duration-300
              ${viewMode === 'mobile' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 h-4 w-1/3 bg-white/5 rounded-full" />
          </div>

          {/* Image Container */}
          <div className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-500 ease-in-out
             ${viewMode === 'desktop' ? 'aspect-1280/576 mt-8' : 'aspect-9/19 mt-0'} 
          `}>
             
             {/* Desktop Image */}
             <div className={`absolute inset-0 transition-opacity duration-500 ${viewMode === 'desktop' ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={project.desktopImage} 
                  alt={`${project.title} Desktop`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
             </div>

             {/* Mobile Image */}
             <div className={`absolute inset-0 transition-opacity duration-500 ${viewMode === 'mobile' ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={project.mobileImage} 
                  alt={`${project.title} Mobile`}
                  fill
                  className="object-cover object-top"
                />
             </div>
             
             {/* Overlay Hover */}
             {viewMode === 'desktop' && (
                <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none" />
             )}
          </div>
        </div>
      </div>

      {/* Text Section*/}
      <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left pt-2">
        <div className="space-y-2">
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            {project.category}
          </span>
          <h3 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm text-blue-300 bg-blue-900/20 border border-blue-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
          
          {project.links.demo ? (
            <Button href={project.links.demo} variant="primary" size="md" icon={<ExternalLink size={18} />}>
              Live Demo
            </Button>
          ) : (
            <button 
              disabled 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-500 cursor-not-allowed text-sm font-semibold border border-white/5"
            >
              <Lock size={16} />
              Coming Soon
            </button>
          )}

          {project.links.github ? (
            <Button href={project.links.github} variant="outline" size="md" icon={<FaGithub size={18} />}>
              Code
            </Button>
          ) : (
            <button 
              disabled 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-500 cursor-not-allowed text-sm font-semibold border border-white/5"
            >
              <Lock size={16} />
              Private Code
            </button>
          )}
          
        </div>
      </div>
    </motion.div>
  );
}