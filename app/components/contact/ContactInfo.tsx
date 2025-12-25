import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { fadeUp } from "../../lib/animation";
import { contactData } from "../../data/contact";

export default function ContactInfo() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">
          Contact Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Work <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
            Together
          </span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
          Have a project in mind or just want to say hi? 
          I'm currently open to new opportunities and collaborations.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <a 
          href={`mailto:${contactData.email}`} 
          className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
        >
          <div className="p-3 rounded-full bg-slate-900 border border-white/10 group-hover:border-blue-500/50 transition-colors">
            <Mail className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-lg">{contactData.email}</span>
        </a>

        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 rounded-full bg-slate-900 border border-white/10">
            <MapPin className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="text-lg">{contactData.location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-8 border-t border-white/5">
        <p className="text-slate-500 text-sm mb-4">Find me on</p>
        <div className="flex gap-4">
          {contactData.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 text-slate-400 border border-white/5 hover:bg-slate-800 hover:text-white hover:border-blue-500/30 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}