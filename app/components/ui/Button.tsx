import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  children,
  className = "",
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) => {
  
  //Basee
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  //Variant
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-105",
    secondary: "bg-slate-900/40 border border-white/10 text-white hover:bg-white/5 hover:border-white/20 backdrop-blur-sm",
    outline: "border border-blue-500/50 text-blue-400 hover:bg-blue-500/10",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
  };

  //Sizes
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-lg font-semibold",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const IconWrapper = icon ? <span className="group-hover:translate-x-0.5 transition-transform">{icon}</span> : null;

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} group`}>
        {iconPosition === "left" && IconWrapper}
        {children}
        {iconPosition === "right" && IconWrapper}
      </Link>
    );
  }

  return (
    <button className={`${combinedClassName} group`} {...props}>
      {iconPosition === "left" && IconWrapper}
      {children}
      {iconPosition === "right" && IconWrapper}
    </button>
  );
};