import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
  display: "swap",
});

const siteUrl = "https://kavarna-svezi.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kavárna Svěží — Místo, kde začíná tvůj nejlepší den v Praze",
    template: "%s | Kavárna Svěží Praha",
  },
  description:
    "Fresh káva, čerstvé šťávy a pozitivní energie našeho personálu. Nejlepší kavárna v Praze — zastavte se u nás a načerpejte sílu uprostřed města.",
  keywords: [
    "kavárna Praha",
    "nejlepší kavárna Praha",
    "fresh juice Praha",
    "specialty coffee Praha",
    "kavárna fresh juice",
    "fresh káva Praha",
    "kavárna s čerstvými šťávami Praha",
    "místo na práci kavárna Praha",
    "Kavárna Svěží",
  ],
  authors: [{ name: "Kavárna Svěží", url: siteUrl }],
  creator: "Kavárna Svěží",
  publisher: "Kavárna Svěží",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Kavárna Svěží",
    title: "Kavárna Svěží — Místo, kde začíná tvůj nejlepší den v Praze",
    description:
      "Fresh káva, čerstvé šťávy a pozitivní energie. Přijďte se k nám zchladit na fresh juice nebo fresh kávu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kavárna Svěží — prémiová kavárna v Praze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavárna Svěží — Místo, kde začíná tvůj nejlepší den v Praze",
    description:
      "Fresh káva, čerstvé šťávy a pozitivní energie. Prémiová kavárna v Praze.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
    languages: { "cs-CZ": siteUrl, "en-US": `${siteUrl}/en` },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" style={{ background: "var(--clr-bg)", color: "var(--clr-text)" }}>
        <LoadingScreen />
        <ScrollProgress />
        <SmoothScrollProvider>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
