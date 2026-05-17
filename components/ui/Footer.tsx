import Link from "next/link";
import { navLinks, socialLinks, contactInfo } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--clr-text)", color: "rgba(255,255,255,0.7)" }}
      aria-label="Patička webu"
    >
      {/* Top decorative line */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, var(--clr-forest), var(--clr-caramel), var(--clr-mint))" }} />

      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <span className="text-4xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            Svěží
          </span>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Místo, kde začíná tvůj nejlepší den v Praze. Fresh káva, čerstvé šťávy a pozitivní energie.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--clr-caramel)] hover:text-[var(--clr-caramel)] transition-colors text-sm"
              aria-label="Sledovat Kavárnu Svěží na Instagramu"
            >
              IG
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--clr-caramel)] hover:text-[var(--clr-caramel)] transition-colors text-sm"
              aria-label="Sledovat Kavárnu Svěží na Facebooku"
            >
              FB
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigace v patičce">
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Stránky</h3>
          <ul className="space-y-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Kontakt</h3>
          <address className="not-italic space-y-2 text-sm">
            <p>{contactInfo.address}</p>
            <p>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </p>
          </address>
          <div className="mt-5 space-y-1 text-sm">
            {contactInfo.hours.map((h) => (
              <p key={h.day}>
                <span className="text-white/50">{h.day}:</span>{" "}
                <span className="text-white">{h.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Kavárna Svěží s.r.o. · IČO: 12345678</p>
          <div className="flex gap-5">
            <Link href="/gdpr" className="hover:text-white transition-colors">Ochrana soukromí</Link>
            <Link href="/podminky" className="hover:text-white transition-colors">Podmínky</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
