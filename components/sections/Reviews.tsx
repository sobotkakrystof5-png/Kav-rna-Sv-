"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/lib/data/reviews";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Hodnocení ${count} z 5 hvězd`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--clr-citrus)" }} aria-hidden>★</span>
      ))}
    </div>
  );
}

export function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-padding gradient-mesh" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Co říkají hosté
            </span>
          </FadeIn>
          <TextReveal as="h2" text="Jejich slova, naše hrdost." className="text-4xl sm:text-5xl md:text-6xl font-bold" />
        </div>

        {/* Rating summary */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            {[
              { value: "4.9", label: "Google recenze", sub: "200+ hodnocení" },
              { value: "4.8", label: "TripAdvisor",    sub: "150+ hodnocení" },
              { value: "98%", label: "spokojených",    sub: "z dotazníků" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-5xl font-bold mb-1" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-forest)" }}>
                  {s.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--clr-text)" }}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--clr-text-muted)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.2}>
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-8 md:p-12 text-center"
              >
                <Stars count={reviews[current].rating} />
                <p
                  className="mt-6 mb-8 text-lg md:text-2xl leading-relaxed"
                  style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)", fontStyle: "italic" }}
                >
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <footer>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-white" style={{ background: "var(--clr-forest)" }}>
                    {reviews[current].avatar}
                  </div>
                  <cite className="not-italic text-sm font-semibold" style={{ color: "var(--clr-text)" }}>
                    {reviews[current].name}
                  </cite>
                  <div className="text-xs mt-0.5" style={{ color: "var(--clr-text-muted)" }}>
                    {reviews[current].date} · {reviews[current].source === "google" ? "Google Maps" : "TripAdvisor"}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Výběr recenze">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Recenze ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? "var(--clr-forest)" : "var(--clr-border)",
                  }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
