"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { fadeUp } from "../lib/animation";
import { heroData } from "../data/hero";
import HeroBg from "./hero/HeroBg";
import ProfilCard from "./hero/ProfilCard";
import ScrollDown from "./ui/ScrollDown";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden pt-32 pb-20 px-6"
    >
      {/* 1. Background Component */}
      <HeroBg />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-0 items-center">
          
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="glow" withDot>
                {heroData.status}
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
                  {heroData.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                {heroData.role}
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
              {heroData.description}
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
              <Button variant="secondary" size="lg" icon={<Download size={18}/>} href={heroData.cvLink}>
                Download CV
              </Button>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="mt-10 w-full gap-3 animate-bounce cursor-pointer"
            >
              <ScrollDown />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="order-1 lg:order-2">
             <ProfilCard />
          </div>
          
        </div>
      </div>
    </section>
  );
}