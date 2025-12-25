"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../lib/animation";
import AboutLeft from "./about/AboutLeft";
import AboutRight from "./about/AboutRight";

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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Left Section*/}
          <AboutLeft />

          {/* Right Section */}
          <AboutRight />

        </motion.div>
      </div>
    </section>
  );
}