"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuCategories, type MenuCategory } from "@/lib/data/menu";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const tagConfig: Record<string, { label: string; variant: "caramel" | "mint" | "forest" | "citrus" }> = {
  bestseller: { label: "Bestseller", variant: "caramel" },
  new:        { label: "Novinka",    variant: "mint" },
  vegan:      { label: "Vegan",      variant: "forest" },
  seasonal:   { label: "Sezonní",    variant: "citrus" },
};

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory>("kava");

  const filtered = menuItems.filter((i) => i.category === active);

  return (
    <section
      id="nabidka"
      className="section-padding"
      style={{ background: "var(--clr-text)" }}
      aria-labelledby="menu-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Co nabízíme
            </span>
          </FadeIn>
          <TextReveal
            as="h2"
            text="Čerstvé. Lokální. Dokonalé."
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{ color: "white" }}
          />
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Každý nápoj i dezert připravujeme ze surovin, které jsou čerstvé dnes — ne včera.
            </p>
          </FadeIn>
        </div>

        {/* Category tabs */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-3 mb-12 flex-wrap" role="tablist" aria-label="Kategorie nabídky">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className="relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  color: active === cat.id ? "white" : "rgba(255,255,255,0.5)",
                  background: active === cat.id ? "var(--clr-forest)" : "transparent",
                  border: `1px solid ${active === cat.id ? "var(--clr-forest)" : "rgba(255,255,255,0.15)"}`,
                }}
              >
                <span className="mr-2">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div role="tabpanel" id={`panel-${active}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {filtered.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-3xl overflow-hidden cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(168,213,186,0.2)",
                  }}
                  aria-label={`${item.name} — ${item.price} Kč`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {item.tag && (
                      <div className="absolute top-3 left-3">
                        <Badge variant={tagConfig[item.tag].variant}>
                          {tagConfig[item.tag].label}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: "var(--font-fraunces)", color: "white" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-lg font-bold shrink-0"
                        style={{ color: "var(--clr-citrus)", fontFamily: "var(--font-fraunces)" }}
                      >
                        {item.price} Kč
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-3xl"
                    style={{ boxShadow: "inset 0 0 30px rgba(168,213,186,0.06)" }}
                  />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-14">
            <Button as="a" href="/nabidka" variant="outline"
              className="border-white/25 text-white hover:bg-white hover:text-[var(--clr-forest)]">
              Zobrazit celou nabídku
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
