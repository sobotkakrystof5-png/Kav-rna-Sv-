import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--clr-bg)" }}
      aria-labelledby="notfound-heading"
    >
      <div
        className="text-[180px] font-bold leading-none mb-6"
        style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-mint)", opacity: 0.3 }}
        aria-hidden
      >
        404
      </div>
      <h1
        id="notfound-heading"
        className="text-3xl sm:text-5xl font-bold mb-4"
        style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}
      >
        Tato stránka neexistuje
      </h1>
      <p className="max-w-md text-base mb-10" style={{ color: "var(--clr-text-muted)" }}>
        Ale naše káva existuje. A je vynikající. Pojďte zpátky domů.
      </p>
      <Button as="a" href="/" size="lg">← Zpět na hlavní stránku</Button>
    </section>
  );
}
