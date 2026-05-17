"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations/FadeIn";

const usps = [
  {
    icon: "✨",
    title: "Nakažlivě pozitivní personál",
    description: "Naši baristé přicházejí do práce s úsměvem a tu energii předávají dál. Zažijete to od prvního kroku dovnitř.",
    glow: "rgba(255,213,107,0.22)",
  },
  {
    icon: "🍊",
    title: "100% čerstvé každý den",
    description: "Ovoce dorazí ráno, šťávu lisujeme na objednávku. Žádné koncentráty, žádné kompromisy.",
    glow: "rgba(168,213,186,0.22)",
  },
  {
    icon: "📍",
    title: "Srdce Prahy — Vinohrady",
    description: "Dvě minuty od metra Náměstí Míru. Ideální zastávka před prací, po práci, nebo uprostřed dne.",
    glow: "rgba(244,162,97,0.22)",
  },
  {
    icon: "☕",
    title: "Specialty káva z lokálních pražíren",
    description: "Výhradně česká a slovenská mikropražírna. Každý týden nová filtrační kávová mikrodávka.",
    glow: "rgba(26,77,62,0.18)",
  },
];

export function USP() {
  return (
    <section className="section-padding gradient-mesh" aria-labelledby="usp-heading">
      <div className="container">

        <div className="text-center mb-14">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Proč Svěží
            </span>
          </FadeIn>
          <TextReveal
            as="h2"
            id="usp-heading"
            text="Čtyři důvody, proč se vrátíte."
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}
          />
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.1}>
          {usps.map((usp) => (
            <motion.article
              key={usp.title}
              variants={staggerItem}
              className="group relative p-7 rounded-3xl overflow-hidden cursor-default"
              style={{
                background: "rgba(250,250,247,0.85)",
                border: "1px solid var(--clr-border)",
                backdropFilter: "blur(8px)",
              }}
              whileHover={{ y: -5, boxShadow: `0 18px 50px ${usp.glow}` }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: usp.glow }}
              >
                {usp.icon}
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
                {usp.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--clr-text-muted)" }}>
                {usp.description}
              </p>

              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${usp.glow} 0%, transparent 70%)` }}
              />
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
