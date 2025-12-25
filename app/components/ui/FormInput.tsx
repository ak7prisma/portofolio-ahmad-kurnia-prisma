import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  rows?: number;
}

export function FormInput({ 
  label, 
  id, 
  textarea = false, 
  className = "", 
  ...props 
}: Readonly<FormInputProps>) {
 
  const baseStyles = "w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all";

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-400 ml-1">
        {label}
      </label>
      
      {textarea ? (
        <textarea
          id={id}
          className={`${baseStyles} resize-none ${className}`}
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={id}
          className={`${baseStyles} ${className}`}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
      )}
    </div>
  );
}