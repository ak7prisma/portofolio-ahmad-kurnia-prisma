"use client";
import { motion } from "framer-motion";
import { Code2, MousePointer2 } from "lucide-react";
import { Card } from "../ui/Card";
import { floatAnimation } from "../../lib/animation";
import { heroData } from "../../data/hero";

export default function ProfilCard() {
  return (
    <div className="flex justify-center lg:justify-end items-center perspective-1000 relative h-87.5 md:h-100">
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
              
              {/* Main Initial */}
              <div className="text-[160px] md:text-[220px] font-black text-transparent bg-clip-text bg-linear-to-br from-white via-blue-100 to-slate-600 relative z-10 leading-none select-none drop-shadow-2xl">
                {heroData.initial}
              </div>

              {/* Badge AK */}
              <div className="absolute -top-4 -left-2 bg-blue-600/30 border border-blue-400/30 rounded-xl px-3 py-1.5 backdrop-blur-md shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-lg md:text-2xl font-bold text-blue-300">{heroData.initialBadge}</span>
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
  );
}