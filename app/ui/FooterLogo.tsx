import Link from "next/link";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-1">
        <Image src="/LogoPrisma.png" alt="Logo" width={150} height={150} className="group-hover:rotate-2 duration-300" />
      </Link>
      
      {/* Deskripsi */}
      <p className="text-sm leading-relaxed max-w-xs text-slate-500 mx-auto md:mx-0">
        Menyelami kedalaman kode untuk menciptakan solusi digital yang fungsional dan estetik.
      </p>
    </div>
  );
}