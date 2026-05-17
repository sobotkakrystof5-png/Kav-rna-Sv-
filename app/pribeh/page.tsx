import type { Metadata } from "next";
import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Příběh — jak vznikla Kavárna Svěží",
  description:
    "Příběh Kavárny Svěží: proč jsme ji otevřeli, co nás pohání každý den a proč věříme, že skvělá káva nebo juice může změnit náladu na celý den.",
  alternates: { canonical: "/pribeh" },
};

const chapters = [
  {
    year: "2019",
    title: "Začátek",
    text: "Kavárna Svěží otevřela dveře v říjnu 2019 — uprostřed Vinohrad, s jedním espresso strojem, třemi zaměstnanci a snem o místě, které bude jiné.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    imageAlt: "Počátky Kavárny Svěží Praha — otevření 2019",
  },
  {
    year: "2021",
    title: "Fresh juice revoluce",
    text: "V létě 2021 jsme přidali fresh juice bar. Zákazníci si rychle zamilovali Green Boost i Sunrise — a my jsme pochopili, že svěžest je naše DNA.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80",
    imageAlt: "Fresh juice bar v Kavárně Svěží Praha — rozšíření 2021",
  },
  {
    year: "2023",
    title: "Specialty káva",
    text: "Navázali jsme spolupráci s lokálními pražírnami a zavedli specialty filtr jako standard. Káva přestala být součástí nabídky — stala se filozofií.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    imageAlt: "Specialty káva Kavárna Svěží Praha — spolupráce s pražírnami",
  },
  {
    year: "Dnes",
    title: "Pozitivní energie",
    text: "Dnes vítáme každý den více než 500 hostů. Každý z nich odchází s lepší náladou — a to je náš nejdůležitější ukazatel úspěchu.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    imageAlt: "Kavárna Svěží Praha dnes — pozitivní energie a spokojení zákazníci",
  },
];

export default function PribehPage() {
  return (
    <article>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "var(--clr-forest)" }}
        aria-labelledby="pribeh-heading"
      >
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&q=60"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 text-white">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-citrus)" }}>
              Kdo jsme
            </span>
          </FadeIn>
          <TextReveal
            as="h1"
            text="Příběh Kavárny Svěží."
            className="text-5xl sm:text-7xl font-bold"
            style={{ color: "white" }}
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
              Od malého snu po místo, kde Praha načerpává energii. Takhle to celé začalo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline chapters */}
      <section className="section-padding" style={{ background: "var(--clr-bg)" }}>
        <div className="container">
          <div className="space-y-24">
            {chapters.map((ch, i) => (
              <FadeIn key={ch.year} direction={i % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Text */}
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className="text-6xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-caveat)", color: "var(--clr-mint)", opacity: 0.6, lineHeight: 1 }}
                    >
                      {ch.year}
                    </div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-5"
                      style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}
                    >
                      {ch.title}
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--clr-text-muted)" }}>
                      {ch.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`relative h-80 rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)] ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={ch.image}
                      alt={ch.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-mesh" aria-labelledby="values-heading">
        <div className="container text-center">
          <FadeIn>
            <h2
              id="values-heading"
              className="text-4xl sm:text-5xl font-bold mb-16"
              style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}
            >
              Co nás pohání
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "🌱", title: "Čerstvost", text: "Každý nápoj připravíme ze surovin přivezených dnes ráno." },
              { icon: "💚", title: "Péče", text: "O naše hosty, o naše produkty, o naše město." },
              { icon: "⚡", title: "Energie", text: "Přicházíme do práce s úsměvem — a předáváme ho dál." },
            ].map((v) => (
              <FadeIn key={v.title} direction="up">
                <div
                  className="p-8 rounded-3xl"
                  style={{ background: "rgba(250,250,247,0.8)", border: "1px solid var(--clr-border)" }}
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--clr-text-muted)" }}>{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
