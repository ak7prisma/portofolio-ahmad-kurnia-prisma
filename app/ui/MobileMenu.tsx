import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  links: { name: string; href: string }[];
};

export default function MobileMenu({ isOpen, setIsOpen, links }: Readonly<MobileMenuProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/5 border-t border-white/10 overflow-hidden rounded-b-3xl backdrop-blur-xl"
        >
          <div className="flex flex-col p-6 space-y-4 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-blue-400 py-2 block font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-full w-full block font-bold"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}