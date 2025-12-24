import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div 
      className={`
        relative bg-slate-900/60 border border-white/10 backdrop-blur-xl 
        shadow-2xl rounded-[30px] overflow-hidden group
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none" />
      
      {children}
    </div>
  );
};