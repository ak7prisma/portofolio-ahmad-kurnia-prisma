import Link from "next/link";
import { navLinks, contactLink } from "../../data/navlink";

export default function FooterButton() {

  const fullLink = [...navLinks, contactLink];

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-white font-semibold mb-4 hidden md:block">Explore</h3>
      <ul className="flex flex-wrap justify-center md:flex-col gap-x-6 gap-y-2 text-sm">
        {fullLink.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}