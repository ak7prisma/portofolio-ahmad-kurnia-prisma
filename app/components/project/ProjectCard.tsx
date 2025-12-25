"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animation";
import { ProjectData } from "../../data/projects";
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetail";

export default function ProjectCard({ project, index }: Readonly<{ project: ProjectData, index: number }>) {
  const isEven = index % 2 === 0;

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
      
      {/* Preview Section  */}
      <ProjectPreview project={project} />

      {/* Details Section */}
      <ProjectDetails project={project} />

    </motion.div>
  );
}