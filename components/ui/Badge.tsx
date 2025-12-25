import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "glow";
  withDot?: boolean;
}

export const Badge = ({ 
  children, 
  className = "", 
  variant = "default",
  withDot = false 
}: BadgeProps) => {

  const baseStyles = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors";
  
  const variants = {
    default: "bg-slate-800 text-slate-300 border border-slate-700",
    outline: "bg-transparent border border-slate-600 text-slate-400",
    glow: "bg-blue-950/40 border border-blue-500/20 text-blue-400 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
      )}
      {children}
    </div>
  );
};