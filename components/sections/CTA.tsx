"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { socialLinks } from "@/lib/data/nav";

export function CTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--clr-forest)" }}
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&q=75"
          alt="Atmosféra Kavárny Svěží Praha"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14]/70 to-[#1A4D3E]/90" />
      </div>

      {/* Static decorative blobs — CSS, ne JS animace */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,213,107,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,213,186,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 section-padding">
        <div className="container text-center text-white">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-5 block" style={{ color: "var(--clr-citrus)" }}>
              Přijďte se zchladit
            </span>
          </FadeIn>

          <TextReveal
            as="h2"
            id="cta-heading"
            text="Váš nejlepší den začíná tady."
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
            style={{ color: "white", fontFamily: "var(--font-fraunces)" }}
          />

          <FadeIn delay={0.15}>
            <p className="text-base max-w-md mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Fresh juice nebo specialty káva — přijďte si vybrat. Praha · Vinohrady · Náměstí Míru.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <MagneticButton>
                <Button as="a" href="/kontakt" size="lg" variant="secondary">
                  Rezervovat stůl →
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  as="a"
                  href={socialLinks.instagram}
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  Instagram
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Newsletter */}
          <FadeIn delay={0.35}>
            <div className="max-w-sm mx-auto glass-dark rounded-2xl p-1 flex gap-2" role="form" aria-label="Přihlášení k newsletteru">
              <input
                type="email"
                placeholder="Váš email"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
                aria-label="Email pro newsletter"
              />
              <Button size="sm" variant="secondary">
                Odebírat
              </Button>
            </div>
            <p className="mt-2.5 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              Žádný spam. Odhlásíte se kdykoliv.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
