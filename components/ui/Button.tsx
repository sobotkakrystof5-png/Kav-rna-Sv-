"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, as: Tag = "button", href, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 select-none overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--clr-forest)]";

    const variants = {
      primary:
        "bg-[var(--clr-forest)] text-white hover:bg-[#133d31] shadow-[0_4px_20px_rgba(26,77,62,0.3)] hover:shadow-[0_8px_30px_rgba(26,77,62,0.45)] hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-[var(--clr-caramel)] text-white hover:bg-[#e8914e] shadow-[0_4px_20px_rgba(244,162,97,0.35)] hover:shadow-[0_8px_30px_rgba(244,162,97,0.5)] hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "border border-[var(--clr-forest)] text-[var(--clr-forest)] hover:bg-[var(--clr-forest)] hover:text-white hover:-translate-y-0.5 active:translate-y-0",
      ghost:
        "text-[var(--clr-forest)] hover:bg-[rgba(26,77,62,0.08)] hover:-translate-y-0.5 active:translate-y-0",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-9 py-4 text-lg",
    };

    const cls = cn(base, variants[variant], sizes[size], className);

    if (Tag === "a" && href) {
      return (
        <a href={href} className={cls}>
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} {...props}>
        <motion.span
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ borderRadius: "50%", originX: "50%", originY: "50%" }}
        />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";
