"use client";

import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/EmailForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Section Info & Socials */}
          <ContactInfo />

          {/* Right Section Email Form */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}