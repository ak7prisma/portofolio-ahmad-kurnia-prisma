import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorAnimation from "@/components/CursorAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio AkPrisma",
  description: "Website ini berisi portofolio dari Ahmad Kurnia Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-200 selection:bg-blue-600 selection:text-white`}>
        
        <div className="fixed inset-0 w-full h-full -z-10">
            <div className="absolute inset-0 bg-black"></div>

            <div className="absolute top-0 left-0 w-full h-200 bg-linear-to-b from-blue-950/40 via-slate-950/60 to-black"></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[linear-gradient(to_bottom,black_10%,transparent_80%)]"></div>
            
            <div className="absolute top-0 left-0 right-0 h-125 bg-[radial-gradient(circle_800px_at_50%_-200px,#1e40af44,transparent)]"></div>
        </div>

        <CursorAnimation />
        <Navbar />
        
        <main className="min-h-screen relative overflow-x-hidden">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}