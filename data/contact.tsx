import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const contactData = {
  email: "ahmadkurniaprisma@gmail.com",
  location: "Palembang, Indonesia",
  formEndpoint: "https://formspree.io/f/xlgrybva",
  
  socials: [
    { 
        name: "GitHub",
        href: "https://github.com/ak7prisma",
        icon: <FaGithub size={20} /> 
      },
      { 
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ahmad-kurnia-prisma-1b639a313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: <FaLinkedin size={20} /> 
      },
      { 
        name: "Instagram",
        href: "https://www.instagram.com/akprisma?igsh=MTJtd2lwaHZoeXFrZA==",
        icon: <FaInstagram size={20} /> 
      },
      { 
        name: "WhatsApp",
        href: "https://wa.me/628989209565", 
        icon: <FaWhatsapp size={20} /> 
      },
  ]
};