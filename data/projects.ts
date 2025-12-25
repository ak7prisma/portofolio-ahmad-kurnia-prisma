export interface ProjectLink {
  demo: string | null;
  github: string | null;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  tech: string[];
  links: ProjectLink;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "StarShop",
    category: "E-Commerce & Digital Products",
    description: "A seamless digital top-up platform designed for gamers. Features digital product store and a highly responsive user interface optimized for mobile transactions.",
    desktopImage: "/Starshop.png",
    mobileImage: "/StarshopMobile.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    links: {
      demo: "https://starshop-jf2g.vercel.app",
      github: "https://github.com/ak7prisma/starshop.git",
    },
  },
  {
    id: 2,
    title: "Srifoton Website",
    category: "Event & Organization",
    description: "The official event portal for HMIF Unsri's annual IT competition (Team Project). Built collaboratively to facilitate participant registration, event scheduling, and information dissemination with dynamic animations.",
    desktopImage: "/Srifoton.png",
    mobileImage: "/SrifotonMobile.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    links: {
      demo: "https://srifoton.hmifunsri.com",
      github: null,
    },
  },
  {
    id: 3,
    title: "My Drakor Checklist",
    category: "Personal Utility App",
    description: "A personalized tracking application for K-Drama enthusiasts. Allows users to manage K-Drama watchlists. Focused on simple and responsive UI.",
    desktopImage: "/DrakorCheckList.png",
    mobileImage: "/DrakorCheckListMobile.png",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Fun Project"],
    links: {
      demo: null,
      github: "https://github.com/username/repo",
    },
  },
];