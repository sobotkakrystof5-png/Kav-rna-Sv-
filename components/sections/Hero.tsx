"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const headline = ["Místo, kde", "začíná tvůj", "nejlepší den"];

const stats = [
  { value: "500+",  label: "spokojených hostů denně", icon: "☕" },
  { value: "4.9 ★", label: "hodnocení na Google",      icon: "⭐" },
  { value: "100%",  label: "čerstvé suroviny",          icon: "🌿" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale    = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOp  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      aria-label="Uvítací sekce Kavárny Svěží Praha"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: bgScale }}>
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
          alt="Interiér Kavárny Svěží Praha — specialty káva a fresh juice"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,22,16,0.55) 0%, rgba(8,22,16,0.2) 40%, rgba(8,22,16,0.85) 100%)",
          }}
        />
      </motion.div>

      {/* ── Obsah ─────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center text-white px-6 pb-10"
        style={{ y: contentY, opacity: contentOp }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{
            background: "rgba(255,255,255,0.09)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.16)",
            color: "var(--clr-citrus)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-citrus)] animate-pulse" />
          Kavárna · Praha · Vinohrady
        </motion.div>

        {/* Headline */}
        <h1
          className="font-bold leading-[0.93] tracking-tighter mb-5"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "clamp(50px, 9vw, 110px)",
            color: "white",
          }}
          aria-label="Místo, kde začíná tvůj nejlepší den"
        >
          {headline.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.45 + li * 0.1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-lg mx-auto text-base sm:text-lg leading-relaxed mb-9"
          style={{ color: "rgba(255,255,255,0.72)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
        >
          Fresh káva, čerstvé šťávy,{" "}
          <em className="not-italic font-semibold" style={{ color: "var(--clr-citrus)" }}>
            pozitivní energie.
          </em>{" "}
          Přijďte se k nám zchladit uprostřed Prahy.
        </motion.p>

        {/* CTA tlačítka */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
        >
          <MagneticButton>
            <Button as="a" href="/kontakt" size="lg" variant="secondary">
              Rezervovat stůl
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              as="a"
              href="/nabidka"
              size="lg"
              variant="outline"
              className="border-white/35 text-white hover:bg-white hover:text-[var(--clr-forest)]"
            >
              Naše nabídka
            </Button>
          </MagneticButton>
        </motion.div>

        {/* ── STATISTIKY — pod tlačítky, symetrické, výrazné ── */}
        <motion.div
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease: EASE }}
        >
          {/* Tenká oddělovací linka */}
          <div
            className="w-24 h-px mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
          />

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.35 + i * 0.1, ease: EASE }}
              >
                {/* Velká čísla */}
                <span
                  className="leading-none font-bold"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: "clamp(32px, 5vw, 56px)",
                    color: "var(--clr-citrus)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </span>

                {/* Popis */}
                <span
                  className="text-center leading-snug"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 14px)",
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.label}
                </span>

                {/* Subtilní oddělovač (jen mezi sloupcemi) */}
                {i < stats.length - 1 && (
                  <div
                    className="absolute"
                    style={{
                      right: 0,
                      top: "10%",
                      height: "80%",
                      width: "1px",
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator — úplně dole ─────────────────── */}
      <motion.div
        className="relative z-10 w-full pb-7 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter)" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-8 rounded-full"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)" }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
