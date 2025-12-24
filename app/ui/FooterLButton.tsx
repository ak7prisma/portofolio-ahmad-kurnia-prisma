import Link from "next/link";

export default function FooterButton() {
  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-white font-semibold mb-4 hidden md:block">Explore</h3>
      <ul className="flex flex-wrap justify-center md:flex-col gap-x-6 gap-y-2 text-sm">
        {links.map((item) => (
          <li key={item}>
            <Link 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}