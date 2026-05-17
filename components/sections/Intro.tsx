"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

const pills = [
  { icon: "🌿", label: "Lokální suroviny" },
  { icon: "☕", label: "Specialty roastery" },
  { icon: "✨", label: "Pozitivní energie" },
  { icon: "📍", label: "Srdce Prahy" },
];

export function Intro() {
  return (
    <section
      id="pribeh"
      className="section-padding overflow-hidden"
      style={{ background: "var(--clr-bg)" }}
      aria-labelledby="intro-heading"
    >
      <div className="container">
        <FadeIn>
          <span
            className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-5 block"
            style={{ color: "var(--clr-caramel)" }}
          >
            Náš příběh
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <TextReveal
              as="h2"
              id="intro-heading"
              text="Svěžest není jen chuť — je to způsob bytí."
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)", lineHeight: 1.08 }}
            />

            <FadeIn delay={0.15} direction="up">
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--clr-text-muted)" }}>
                Otevřeli jsme Svěží s jedním přesvědčením — dobrá káva nebo fresh juice mohou nastavit celý den.
                Proto vybíráme ty nejlepší suroviny a dbáme na to, aby náš tým přenášel{" "}
                <strong style={{ color: "var(--clr-forest)", fontWeight: 600 }}>opravdovou pozitivní energii.</strong>
              </p>
            </FadeIn>

            {/* Signature */}
            <FadeIn delay={0.25} direction="up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 shrink-0" style={{ borderColor: "var(--clr-mint)" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80"
                    alt="Zakladatelka Kavárny Svěží"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-caveat)", color: "var(--clr-forest)", fontSize: "20px" }}>
                    Tereza &amp; tým Svěží
                  </div>
                  <div className="text-xs" style={{ color: "var(--clr-text-muted)" }}>zakladatelé, od 2019</div>
                </div>
              </div>
            </FadeIn>

            {/* Pills */}
            <FadeIn delay={0.35} direction="up">
              <div className="grid grid-cols-2 gap-3">
                {pills.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-medium"
                    style={{ background: "rgba(26,77,62,0.06)", border: "1px solid var(--clr-border)", color: "var(--clr-text)" }}
                  >
                    <span>{p.icon}</span>
                    {p.label}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn direction="left" delay={0.1}>
            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.13)]">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
                  alt="Barista v Kavárně Svěží Praha připravuje specialty kávu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Floating rating card */}
              <motion.div
                className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                    style={{ background: "var(--clr-citrus)" }}
                  >
                    ⭐
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-tight" style={{ color: "var(--clr-text)" }}>4.9 / 5.0</div>
                    <div className="text-xs" style={{ color: "var(--clr-text-muted)" }}>500+ recenzí Google</div>
                  </div>
                </div>
              </motion.div>

              {/* Year badge */}
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--clr-mint)", rotate: "6deg" }}
                whileHover={{ rotate: 0, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                <span className="text-center text-[11px] font-bold leading-snug" style={{ color: "var(--clr-forest)" }}>
                  Od<br />2019
                </span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
