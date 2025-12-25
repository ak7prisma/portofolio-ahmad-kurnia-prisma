import { Code2, Zap, LayoutDashboard, Cpu } from "lucide-react";

export const aboutData = {
  headline: "Architecting digital experiences that matter",
  bio: [
    {
      id: "bio-intro",
      content: (
        <>
          Hello! I'm <span className="text-slate-200 font-medium">Ahmad Kurnia Prisma</span>, an Informatics student at <span className="text-blue-300">Universitas Sriwijaya</span> with a deep passion for modern web development.
        </>
      ),
    },
    {
      id: "bio-specialization",
      content: (
        <>
          Specializing in <strong className="text-slate-200 font-medium">Next.js</strong> and <strong className="text-slate-200 font-medium">Supabase</strong>, I focus on crafting bold, user-friendly designs enhanced by purposeful animations to drive engagement.
        </>
      ),
    },
    {
      id: "bio-leadership",
      content: (
        <>
          Beyond writing code, I’ve demonstrated strong leadership and technical adaptability actively collaborating on the maintenance and technical stability of the <strong className="text-blue-400/80">SRIFOTON 2025</strong> platform, while fully leading the curriculum design and logic development for the Java Programming Training 2025.
        </>
      ),
    },
  ],
  stats: [
    {
      id: "stat-clean-code",
      label: "Clean Code",
      subLabel: "Next.js & React Expert",
      icon: <Code2 size={24} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      id: "stat-interactive",
      label: "Interactive UI",
      subLabel: "Framer Motion & Tailwind",
      icon: <Zap size={24} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    }
  ]
};

export const educationData = {
  year: "2024 - Present",
  degree: "Informatics - Fasilkom",
  university: "Universitas Sriwijaya",
  description: "Focusing on Software Engineering and Web Technologies. Actively contributing as PJ Software Engineering for SRIFOTON 2025."
};

export const stackData = [
  {
    id: "stack-frontend",
    title: "Frontend",
    desc: "Next.js, Tailwind CSS, Framer Motion",
    icon: <LayoutDashboard size={24} />,
    color: "cyan"
  },
  {
    id: "stack-backend",
    title: "Backend",
    desc: "Supabase, PostgreSQL, MySQL",
    icon: <Cpu size={24} />,
    color: "teal"
  }
];