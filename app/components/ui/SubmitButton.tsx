import { Loader2, Send } from "lucide-react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  text?: string;
  loadingText?: string;
}

export function SubmitButton({ 
  isLoading, 
  text = "Send Message", 
  loadingText = "Sending...", 
  className,
  ...props 
}: Readonly<SubmitButtonProps>) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full py-4 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          {loadingText}
        </>
      ) : (
        <>
          {text}
          <Send size={18} />
        </>
      )}
    </button>
  );
}