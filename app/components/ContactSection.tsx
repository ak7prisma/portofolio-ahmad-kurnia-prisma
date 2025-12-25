"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeUp } from "../lib/animation";
import { FormInput } from "../ui/FormInput";
import { SubmitButton } from "../ui/SubmitButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/xlgrybva`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
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
                href="mailto:ahmadkurniaprisma@gmail.com" 
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-full bg-slate-900 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-lg">ahmadkurniaprisma@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-full bg-slate-900 border border-white/10">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-lg">Palembang, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-slate-500 text-sm mb-4">Find me on</p>
              <div className="flex gap-4">
                {[
                  { name: "github", icon: <FaGithub size={20} />, href: "#" },
                  { name: "linkedin", icon: <FaLinkedin size={20} />, href: "#" },
                  { name: "instagram", icon: <FaInstagram size={20} />, href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 rounded-xl bg-slate-900 text-slate-400 border border-white/5 hover:bg-slate-800 hover:text-white hover:border-blue-500/30 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            {/* Form Card */}
            <form 
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm shadow-2xl space-y-6"
            >
              <FormInput
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex"
                required
              />

              <FormInput
                label="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                required
              />

              <FormInput
                label="Message"
                textarea={true}
                rows={5}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
              />

              <SubmitButton isLoading={status === 'submitting'} />

            </form>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl opacity-5 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}