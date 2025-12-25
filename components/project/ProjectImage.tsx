import Image from "next/image";

export default function ProjectImage({ src, alt, isVisible }: Readonly<{ src: string, alt: string, isVisible: boolean }>) {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
      />
    </div>
  );
}