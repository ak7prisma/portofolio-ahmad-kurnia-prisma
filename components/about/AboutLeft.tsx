import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animation";
import { aboutData } from "../../data/about";

export default function AboutLeft() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <motion.div variants={fadeUp} className="space-y-2">
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

      {/* Paragraphs */}
      <motion.div variants={fadeUp} className="space-y-6 text-slate-400 text-lg leading-relaxed">
        {aboutData.bio.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUp} className="pt-4 flex flex-wrap gap-6">
        {aboutData.stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">{stat.label}</h4>
              <p className="text-slate-500 text-sm">{stat.subLabel}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}