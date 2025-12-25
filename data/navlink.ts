export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" }
];

export const contactLink: NavLink = { 
    name: "Contact", href: "#contact" 
};