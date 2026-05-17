"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  stagger?: number;
}

export function TextReveal({
  text,
  className = "",
  style,
  id,
  delay = 0,
  as: Tag = "h2",
  stagger = 0.04,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const wordVariant: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={style}
      id={id}
      aria-label={text}
    >
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em]"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span className="inline-block" variants={wordVariant}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
