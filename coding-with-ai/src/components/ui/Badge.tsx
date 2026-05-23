import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "purple" | "cyan" | "green" | "orange" | "silver" | "gold" | "diamond";
  className?: string;
}

const variantStyles = {
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  green: "bg-green-500/15 text-green-400 border-green-500/30",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  silver: "bg-slate-500/15 text-slate-300 border-slate-500/30",
  gold: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  diamond: "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

export default function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
