import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { MenuSection } from "@/components/sections/MenuSection";
import { USP } from "@/components/sections/USP";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Kavárna Svěží — Místo, kde začíná tvůj nejlepší den v Praze",
  description:
    "Fresh káva, čerstvé šťávy a pozitivní energie personálu. Nejlepší kavárna v Praze na Vinohradech — zastavte se a načerpejte sílu.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CafeOrCoffeeShop",
      "@id": "https://kavarna-svezi.cz/#business",
      name: "Kavárna Svěží",
      description:
        "Prémiová kavárna v Praze specializující se na fresh juice, specialty kávu a domácí dezerty. Výjimečný personál s pozitivní energií.",
      url: "https://kavarna-svezi.cz",
      telephone: "+420777123456",
      email: "ahoj@kavarna-svezi.cz",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Náměstí Míru 12",
        addressLocality: "Praha",
        addressRegion: "Praha 2",
        postalCode: "120 00",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.07536,
        longitude: 14.43289,
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "09:00", closes: "16:00" },
      ],
      servesCuisine: ["Coffee", "Fresh Juice", "Pastry"],
      priceRange: "65 – 130 Kč",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "350",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://instagram.com/kavarna.svezi",
        "https://facebook.com/kavarna.svezi",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kavarna-svezi.cz/#website",
      url: "https://kavarna-svezi.cz",
      name: "Kavárna Svěží",
      inLanguage: "cs-CZ",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <MenuSection />
      <USP />
      <Gallery />
      <Reviews />
      <Location />
      <CTA />
    </>
  );
}
