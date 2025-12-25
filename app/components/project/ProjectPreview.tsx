"use client";

import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import { ProjectData } from "../../data/projects";
import ProjectImage from "./ProjectImage";

interface ProjectPreviewProps {
  project: ProjectData;
}

export default function ProjectPreview({ project }: Readonly<ProjectPreviewProps>) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="w-full lg:w-3/5 group perspective-1000 flex flex-col items-center">
      
      {/* 1. Toggle Controls */}
      <div className="flex bg-slate-900/80 p-1 rounded-full border border-white/5 mb-6 backdrop-blur-sm">
        {[
          { mode: "desktop", icon: <Monitor size={14} />, label: "Desktop" },
          { mode: "mobile", icon: <Smartphone size={14} />, label: "Mobile" }
        ].map((item) => (
          <button
            key={item.mode}
            onClick={() => setViewMode(item.mode as "desktop" | "mobile")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              viewMode === item.mode
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* 2. Animated Frame Container */}
      <div
        className={`relative overflow-hidden bg-slate-950 transition-all duration-500 ease-in-out shadow-2xl origin-top
          ${viewMode === "mobile"
            ? "w-70 sm:w-[320px] rounded-[2.5rem] border-8 border-slate-800 ring-1 ring-white/10"
            : "w-full rounded-xl border border-white/10 bg-slate-900/50"
          }
        `}
      >
        {/* Browser Header (Desktop) */}
        <div
          className={`absolute top-0 left-0 right-0 h-8 bg-slate-900/90 flex items-center px-4 gap-2 border-b border-white/5 z-20 backdrop-blur-md transition-opacity duration-300
            ${viewMode === "mobile" ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 h-4 w-1/3 bg-white/5 rounded-full" />
        </div>

        {/* Image Display */}
        <div
          className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-500 ease-in-out
             ${viewMode === "desktop" ? "aspect-1280/576 mt-8" : "aspect-9/19 mt-0"} 
          `}
        >
          <ProjectImage 
            src={project.desktopImage} 
            alt="Desktop View" 
            isVisible={viewMode === "desktop"} 
          />
          <ProjectImage 
            src={project.mobileImage} 
            alt="Mobile View" 
            isVisible={viewMode === "mobile"} 
          />

          {/* Overlay Hover Effect (Desktop) */}
          {viewMode === "desktop" && (
            <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
}