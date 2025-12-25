import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectData } from "../../data/projects";
import ActionProject from "./ActionProject";

export default function ProjectDetails({ project }: Readonly<{ project: ProjectData }>) {
  return (
    <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left pt-2">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
          {project.category}
        </span>
        <h3 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-lg leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
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
        <ActionProject 
          href={project.links.demo} 
          label="Live Demo" 
          icon={<ExternalLink size={18} />} 
          variant="primary" 
        />
        <ActionProject 
          href={project.links.github} 
          label="Code" 
          icon={<FaGithub size={18} />} 
          variant="outline" 
          lockedLabel="Private Code"
        />
      </div>
    </div>
  );
}