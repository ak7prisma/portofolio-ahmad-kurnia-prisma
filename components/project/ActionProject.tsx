import { Button } from "../ui/Button";
import { Lock } from "lucide-react";

export default function ActionProject({ href, label, icon, variant, lockedLabel = "Coming Soon" }: any) {
  if (href) {
    return (
      <Button href={href} variant={variant} size="md" icon={icon}>
        {label}
      </Button>
    );
  }

  return (
    <button
      disabled
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-500 cursor-not-allowed text-sm font-semibold border border-white/5"
    >
      <Lock size={16} />
      {lockedLabel}
    </button>
  );
}