"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Cpu, Globe, Zap, GraduationCap, LayoutDashboard } from "lucide-react";
import { Card } from "../ui/Card"; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Left Section */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Architecting digital <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                  experiences that matter
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-slate-200 font-medium">Ahmad Kurnia Prisma</span>, an Informatics student at <span className="text-blue-300">Universitas Sriwijaya</span> with a deep passion for modern web development.
              </p>
              <p>
                Specializing in <strong className="text-slate-200 font-medium">Next.js</strong> and <strong className="text-slate-200 font-medium">Supabase</strong>, I focus on crafting bold, user-friendly designs enhanced by purposeful animations to drive engagement.
              </p>
              <p>
                Beyond writing code, I've proven my commitment to the tech community through leadership roles—managing technical development for <strong className="text-blue-400/80">SRIFOTON 2025</strong> and designing roadmaps for Java programming competitions.
              </p>
            </motion.div>

            {/* Stats/Focus */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Clean Code</h4>
                    <p className="text-slate-500 text-sm">Next.js & React Expert</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Interactive UI</h4>
                    <p className="text-slate-500 text-sm">Framer Motion & Tailwind</p>
                  </div>
                </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Education Card */}
            <motion.div variants={itemVariants} className="sm:col-span-2">
              <Card className="p-6 h-full bg-slate-900/50 border-white/5 hover:border-blue-500/30 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">2024 - Present</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Informatics - Fasilkom</h3>
                <p className="text-slate-400 text-sm">Universitas Sriwijaya</p>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  Focusing on Software Engineering and Web Technologies. Actively contributing as PJ Software Engineering for SRIFOTON 2025.
                </p>
              </Card>
            </motion.div>

            {/* Stack Card: Frontend */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full bg-slate-900/50 border-white/5 hover:border-cyan-500/30 transition-colors group">
                <div className="p-3 w-fit bg-cyan-600/20 rounded-xl text-cyan-400 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <LayoutDashboard size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Frontend</h3>
                <p className="text-slate-400 text-sm">Next.js, Tailwind CSS, Framer Motion</p>
              </Card>
            </motion.div>

            {/* Stack Card: Backend */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full bg-slate-900/50 border-white/5 hover:border-teal-500/30 transition-colors group">
                <div className="p-3 w-fit bg-teal-600/20 rounded-xl text-teal-400 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Backend</h3>
                <p className="text-slate-400 text-sm">Supabase, PostgreSQL, MySQL</p>
              </Card>
            </motion.div>

            {/* Collaboration Card */}
            <motion.div variants={itemVariants} className="sm:col-span-2">
               <Card className="relative p-6 overflow-hidden bg-linear-to-br from-blue-900/20 to-slate-900/50 border-white/5 group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={100} />
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Let's Work Together</h3>
                      <p className="text-blue-200/70 text-sm mt-1">ahmadkurniaprisma@gmail.com</p>
                    </div>
                    <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Zap size={20} className="text-sky-500 fill-sky-500" />
                    </div>
                  </div>
               </Card>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}