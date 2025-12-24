import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //Dark Mode
        dark: {
          bg: "#020617",
          surface: "#0f172a",
          accent: "#7c3aed",
          text: "#f8fafc",
        },
        //Light Mode
        light: {
          bg: "#ffffff",
          surface: "#f1f5f9",
          accent: "#6366f1",
          text: "#1e293b",
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;