import { contactData } from "@/data/contact";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-white font-semibold mb-4 hidden md:block">Connect</h3>
      
      <div className="flex gap-4 justify-center md:justify-start">
        {contactData.socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-10 h-10 rounded-full bg-slate-900/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group shadow-lg shadow-black/50"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}