import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { contactInfo } from "@/lib/data/nav";

export function Location() {
  return (
    <section id="lokace" className="section-padding" style={{ background: "var(--clr-bg)" }} aria-labelledby="location-heading">
      <div className="container">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Kde nás najdete
            </span>
          </FadeIn>
          <TextReveal as="h2" text="Srdce Prahy, Vinohrady." className="text-4xl sm:text-5xl md:text-6xl font-bold" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="h-[420px] rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.4264099483657!2d14.432890677049764!3d50.07536287152388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f4d0b65537%3A0xbd1a2e5e39f11a4d!2zTsOhbcSbc3TDrSBNw61ydSwgUHJhaGEgMiAtIFZpbm9ocmFkeQ!5e0!3m2!1scs!2scz!4v1715952000000!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.9) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Kavárny Svěží Praha — Náměstí Míru, Vinohrady"
                aria-label="Interaktivní mapa polohy Kavárny Svěží v Praze"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-2">
            <div className="h-full flex flex-col gap-6">
              {/* Address */}
              <div
                className="p-6 rounded-3xl flex-1"
                style={{ background: "rgba(26,77,62,0.05)", border: "1px solid var(--clr-border)" }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--clr-caramel)" }}>
                  Adresa
                </h3>
                <address className="not-italic text-base leading-relaxed" style={{ color: "var(--clr-text)" }}>
                  {contactInfo.address}
                </address>
                <div className="mt-4 space-y-1 text-sm" style={{ color: "var(--clr-text-muted)" }}>
                  <p>
                    <a href={`tel:${contactInfo.phone}`} className="hover:underline" style={{ color: "var(--clr-forest)" }}>
                      {contactInfo.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline" style={{ color: "var(--clr-forest)" }}>
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
                <div className="mt-4 text-xs" style={{ color: "var(--clr-text-muted)" }}>
                  <span className="font-medium" style={{ color: "var(--clr-text)" }}>MHD:</span> Metro A — Náměstí Míru (2 min pěšky)
                </div>
              </div>

              {/* Hours */}
              <div
                className="p-6 rounded-3xl"
                style={{ background: "rgba(26,77,62,0.05)", border: "1px solid var(--clr-border)" }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--clr-caramel)" }}>
                  Otevírací hodiny
                </h3>
                <dl className="space-y-2">
                  {contactInfo.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <dt style={{ color: "var(--clr-text-muted)" }}>{h.day}</dt>
                      <dd className="font-medium" style={{ color: "var(--clr-text)" }}>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
