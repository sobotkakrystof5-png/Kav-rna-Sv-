"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/nav";
import { Button } from "./Button";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{
          background: scrolled ? "rgba(250,250,247,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
          borderBottom: scrolled ? "1px solid var(--clr-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <nav className="container-wide flex items-center justify-between h-16 md:h-20" aria-label="Hlavní navigace">

          {/* Logo — výrazný, větší */}
          <Link href="/" className="flex items-baseline gap-1.5 group" aria-label="Kavárna Svěží — domů">
            <motion.div
              className="flex items-baseline gap-1.5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span
                className="text-3xl md:text-4xl font-bold tracking-tight leading-none"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  color: scrolled ? "var(--clr-forest)" : "white",
                  letterSpacing: "-0.03em",
                }}
              >
                Svěží
              </span>
              <span
                className="hidden sm:inline-block font-normal"
                style={{
                  fontFamily: "var(--font-caveat)",
                  fontSize: "18px",
                  color: scrolled ? "var(--clr-caramel)" : "var(--clr-citrus)",
                  lineHeight: 1,
                }}
              >
                kavárna
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-[rgba(26,77,62,0.08)]"
                    style={{
                      color: scrolled
                        ? active ? "var(--clr-forest)" : "var(--clr-text-muted)"
                        : active ? "white" : "rgba(255,255,255,0.82)",
                      fontFamily: "var(--font-inter)",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "var(--clr-caramel)" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <MagneticButton>
              <Button as="a" href="/kontakt" size="sm" variant={scrolled ? "primary" : "secondary"}>
                Rezervovat stůl
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full transition-colors hover:bg-[rgba(255,255,255,0.1)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: scrolled ? "var(--clr-forest)" : "white" }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 8 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col"
            style={{ background: "var(--clr-forest)" }}
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 48px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-wide flex flex-col justify-center h-full gap-8">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-4xl font-bold tracking-tight py-2 transition-opacity hover:opacity-60"
                      style={{ fontFamily: "var(--font-fraunces)", color: "white" }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
              >
                <Button as="a" href="/kontakt" variant="secondary" size="lg" onClick={() => setMenuOpen(false)}>
                  Rezervovat stůl
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
