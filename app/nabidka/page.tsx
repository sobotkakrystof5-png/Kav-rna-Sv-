import type { Metadata } from "next";
import Image from "next/image";
import { menuItems, menuCategories } from "@/lib/data/menu";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Nabídka — fresh káva, juice a dezerty",
  description:
    "Kompletní nabídka Kavárny Svěží: specialty káva od 65 Kč, fresh juices od 109 Kč, domácí dezerty. Vše čerstvé, vše lokální. Praha Vinohrady.",
  alternates: { canonical: "/nabidka" },
  openGraph: {
    title: "Nabídka Kavárny Svěží — fresh káva a juice Praha",
    description: "Specialty káva, čerstvě lisované šťávy a domácí dezerty v srdci Prahy.",
    url: "/nabidka",
  },
};

const tagConfig: Record<string, { label: string; variant: "caramel" | "mint" | "forest" | "citrus" }> = {
  bestseller: { label: "Bestseller", variant: "caramel" },
  new:        { label: "Novinka",    variant: "mint" },
  vegan:      { label: "Vegan",      variant: "forest" },
  seasonal:   { label: "Sezonní",    variant: "citrus" },
};

export default function NabidkaPage() {
  return (
    <article>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 text-white overflow-hidden"
        style={{ background: "var(--clr-text)" }}
        aria-labelledby="nabidka-heading"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=60"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Kompletní přehled
            </span>
          </FadeIn>
          <TextReveal
            as="h1"
            text="Naše nabídka."
            className="text-5xl sm:text-7xl md:text-8xl font-bold"
            style={{ color: "white" }}
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
              Fresh káva, čerstvě lisované šťávy a domácí dezerty. Každý den čerstvé.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Menu by category */}
      {menuCategories.map((cat) => {
        const items = menuItems.filter((i) => i.category === cat.id);
        return (
          <section
            key={cat.id}
            className="section-padding"
            style={{ background: cat.id === "juice" ? "rgba(26,77,62,0.03)" : "var(--clr-bg)" }}
            aria-labelledby={`cat-${cat.id}`}
          >
            <div className="container">
              <FadeIn>
                <h2
                  id={`cat-${cat.id}`}
                  className="text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3"
                  style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                  <FadeIn key={item.id} delay={i * 0.07} direction="up">
                    <article
                      className="group rounded-2xl overflow-hidden border transition-all duration-400 hover:-translate-y-1"
                      style={{
                        background: "white",
                        border: "1px solid var(--clr-border)",
                        boxShadow: "var(--shadow-card)",
                      }}
                      aria-label={`${item.name}, ${item.price} Kč`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {item.tag && (
                          <div className="absolute top-3 left-3">
                            <Badge variant={tagConfig[item.tag].variant}>{tagConfig[item.tag].label}</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
                            {item.name}
                          </h3>
                          <span className="text-base font-bold shrink-0 ml-2" style={{ color: "var(--clr-caramel)" }}>
                            {item.price} Kč
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--clr-text-muted)" }}>
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Allergen note */}
      <section className="py-10" style={{ background: "var(--clr-bg)" }}>
        <div className="container">
          <p className="text-sm text-center" style={{ color: "var(--clr-text-muted)" }}>
            Informace o alergenech vám rádi sdělíme osobně. Ceny jsou včetně DPH.{" "}
            <a href="/kontakt" className="underline hover:no-underline" style={{ color: "var(--clr-forest)" }}>
              Napište nám
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
