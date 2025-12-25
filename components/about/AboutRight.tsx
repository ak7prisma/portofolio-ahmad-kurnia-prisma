import { motion } from "framer-motion";
import { GraduationCap, Globe, Zap } from "lucide-react";
import { Card } from "../ui/Card";
import { fadeUp } from "../../lib/animation";
import { educationData, stackData } from "../../data/about";

export default function AboutRight() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Education Card */}
      <motion.div variants={fadeUp} className="sm:col-span-2">
        <Card className="p-6 h-full bg-slate-900/50 border-white/5 hover:border-blue-500/30 transition-colors group">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <GraduationCap size={24} />
            </div>
            <span className="text-xs text-slate-500 font-mono">{educationData.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{educationData.degree}</h3>
          <p className="text-slate-400 text-sm">{educationData.university}</p>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            {educationData.description}
          </p>
        </Card>
      </motion.div>

      {/* Tech Stack Cards */}
      {stackData.map((stack) => (
        <motion.div key={stack.id} variants={fadeUp}>
          <Card className={`p-6 h-full bg-slate-900/50 border-white/5 hover:border-${stack.color}-500/30 transition-colors group`}>
            <div className={`p-3 w-fit bg-${stack.color}-600/20 rounded-xl text-${stack.color}-400 mb-4 group-hover:bg-${stack.color}-600 group-hover:text-white transition-colors duration-300`}>
              {stack.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{stack.title}</h3>
            <p className="text-slate-400 text-sm">{stack.desc}</p>
          </Card>
        </motion.div>
      ))}

      {/* Collaboration Card */}
      <motion.div variants={fadeUp} className="sm:col-span-2">
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
  );
}