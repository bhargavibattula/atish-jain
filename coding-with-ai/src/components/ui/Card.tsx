import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  gradient?: boolean;
}

export function Card({ className, glow, gradient, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#111827] border border-white/10 p-6 transition-all duration-300",
        glow && "hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10",
        gradient && "bg-gradient-to-br from-[#111827] to-[#0f1729]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
