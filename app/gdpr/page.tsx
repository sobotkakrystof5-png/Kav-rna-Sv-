import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR)",
  description: "Informace o zpracování osobních údajů Kavárnou Svěží v souladu s GDPR.",
  robots: { index: false },
};

export default function GDPRPage() {
  return (
    <section className="pt-36 pb-24" style={{ background: "var(--clr-bg)" }}>
      <div className="container max-w-2xl">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
          Ochrana osobních údajů
        </h1>
        <div className="prose max-w-none text-sm leading-relaxed" style={{ color: "var(--clr-text-muted)" }}>
          <p className="mb-4">
            Kavárna Svěží s.r.o., IČO: 12345678, zpracovává vaše osobní údaje v souladu s nařízením EU 2016/679 (GDPR).
          </p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
            Jaké údaje zpracováváme
          </h2>
          <p className="mb-4">
            Zpracováváme pouze údaje, které nám dobrovolně poskytnete prostřednictvím kontaktního formuláře (jméno, email, telefon, zpráva) nebo přihlášením k newsletteru (email).
          </p>
          <h2 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
            Vaše práva
          </h2>
          <p className="mb-4">
            Máte právo na přístup k údajům, jejich opravu, výmaz a přenositelnost. Kontaktujte nás na{" "}
            <a href="mailto:ahoj@kavarna-svezi.cz" style={{ color: "var(--clr-forest)" }}>ahoj@kavarna-svezi.cz</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
