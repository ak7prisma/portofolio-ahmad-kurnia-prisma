"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowBigDown, Download, Code2, MousePointer2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const floatAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden pt-32 pb-20 px-6"
    >
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] mix-blend-luminosity">
          <Image
            src="/FotoPrisma.png" 
            alt="Background Atmosphere"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
        </div>

        {/* Gradients */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-0 items-center">
          
          {/*Left Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="glow" withDot>
                Available for Freelance
              </Badge>
            </motion.div>

            {/* Highlight */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="space-y-4 w-full"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-xl">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-300">
                  Ahmad Kurnia Prisma
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                Front-End Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-md"
            >
              Informatics student at Universitas Sriwijaya specializing in building best-performance web applications with Next.js, Supabase, and purposeful animations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <Button href="#projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                View Projects
              </Button>
              <Button variant="secondary" size="lg" icon={<Download size={18}/>}>
                Download CV
              </Button>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="mt-10 w-full flex flex-col items-center gap-3 animate-bounce cursor-pointer"
            >
                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">
                  Scroll Down
                </span>
                <ArrowBigDown className="text-blue-400/80 w-5 h-5" />
            </motion.div>

          </div>

          {/* Right Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center perspective-1000 relative h-87.5 md:h-100">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[50px]" />
              <motion.div variants={floatAnimation} animate="animate">
                <Card className="w-70 h-70 md:w-95 md:h-95 rounded-[40px] flex items-center justify-center relative group">
                  <div className="relative flex items-center justify-center scale-100">
                    <div className="text-[160px] md:text-[220px] font-black text-transparent bg-clip-text bg-linear-to-br from-white via-blue-100 to-slate-600 relative z-10 leading-none select-none drop-shadow-2xl">
                      P
                    </div>
                    {/* Badge AK */}
                    <div className="absolute -top-4 -left-2 bg-blue-600/30 border border-blue-400/30 rounded-xl px-3 py-1.5 backdrop-blur-md shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <span className="text-lg md:text-2xl font-bold text-blue-300">AK</span>
                    </div>
                    {/* Orbit Ring */}
                    <svg className="absolute w-60 h-60 md:w-80 md:h-80 text-blue-400/20 animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="5 5" />
                      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" fill="none" />
                    </svg>
                    {/* Floating Icons */}
                    <div className="absolute bottom-4 right-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse">
                      <MousePointer2 size={32} className="md:w-12 md:h-12 opacity-80" fill="currentColor" />
                    </div>
                    <div className="absolute top-8 -right-4 bg-slate-950/80 p-2.5 rounded-xl border border-white/20 shadow-xl animate-bounce">
                      <Code2 size={20} className="md:w-6 md:h-6 text-blue-400" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}