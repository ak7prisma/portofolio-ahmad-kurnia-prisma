import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SocialMedia() {
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/ak7prisma", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/ahmad-kurnia-prisma-1b639a313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/akprisma?igsh=MTJtd2lwaHZoeXFrZA==", label: "Instagram" },
    { icon: <FaEnvelope size={20} />, href: "mailto:ahmadkurniaprisma@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-white font-semibold mb-4 hidden md:block">Connect</h3>
      <div className="flex gap-4 justify-center md:justify-start">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-900/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group shadow-lg shadow-black/50"
            aria-label={social.label}
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