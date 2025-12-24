import Link from "next/link";

type NavLinkProps = {
  links: { name: string; href: string }[];
};

export default function NavButton({ links }: Readonly<NavLinkProps>) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative group py-2"
        >
          <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
            {link.name}
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center shadow-[0_0_10px_#3b82f6]" />
        </Link>
      ))}
    </div>
  );
}