import Image from "next/image";

export default function HeroBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.5] mix-blend-luminosity">
        <Image
          src="/FotoPrisma.png"
          alt="Background Atmosphere"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
      </div>

      {/* Gradients & Effects */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-900/10 rounded-full blur-[120px]" />
    </div>
  );
}