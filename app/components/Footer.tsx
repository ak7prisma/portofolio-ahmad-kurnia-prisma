"use client";

import { motion } from "framer-motion";
import FooterButton from "./ui/FooterButton";
import SocialMedia from "./ui/SocialMedia";
import FooterLogo from "./ui/FooterLogo";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-slate-950/20 text-slate-400 pt-16 pb-8 border-t border-white/10 overflow-hidden"
    >
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-900/50 to-transparent"></div>
      <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-125 h-50 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          
          <FooterLogo />
          <FooterButton />
          <SocialMedia />
          
        </div>

        {/* Bottom Area (Copyright) */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-6">
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {new Date().getFullYear()} Ahmad Kurnia Prisma | ahmadkurniaprisma@gmail.com
          </p>
        </div>

      </div>
    </motion.footer>
  );
}