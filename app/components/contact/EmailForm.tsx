"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animation";
import { useEmailForm } from "@/hooks/useEmailForm";
import { contactData } from "../../data/contact";
import { FormInput } from "../ui/FormInput";
import { SubmitButton } from "../ui/SubmitButton";

export default function EmailForm() {
  const { formData, status, handleChange, handleSubmit } = useEmailForm(contactData.formEndpoint);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="relative"
    >
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
        
        {status === 'success' && (
           <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
           <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
        )}

      </form>

      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl opacity-5 blur-2xl -z-10" />
    </motion.div>
  );
}