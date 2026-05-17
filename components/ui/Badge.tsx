import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "forest" | "caramel" | "mint" | "citrus";
  className?: string;
}

const variants = {
  /* Bestseller — sytá karamelová, bílý text */
  caramel: "bg-[#F4A261] text-white shadow-[0_2px_8px_rgba(244,162,97,0.55)]",
  /* Novinka — sytá mint/zelená, tmavý text */
  mint:    "bg-[#A8D5BA] text-[#0F1F1A] shadow-[0_2px_8px_rgba(168,213,186,0.55)]",
  /* Vegan — sytá forest zelená, bílý text */
  forest:  "bg-[#1A4D3E] text-white shadow-[0_2px_8px_rgba(26,77,62,0.45)]",
  /* Sezonní — sytá citrus žlutá, tmavý text */
  citrus:  "bg-[#FFD56B] text-[#0F1F1A] shadow-[0_2px_8px_rgba(255,213,107,0.6)]",
};

export function Badge({ children, variant = "forest", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
