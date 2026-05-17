"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-[9000] w-full max-w-lg px-4"
          style={{ translateX: "-50%" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Souhlas s cookies"
        >
          <div className="glass rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <p className="text-sm mb-4" style={{ color: "var(--clr-text)", fontFamily: "var(--font-inter)" }}>
              Používáme cookies pro zlepšení vašeho zážitku. Vaše soukromí je pro nás důležité.{" "}
              <a href="/gdpr" className="underline hover:no-underline" style={{ color: "var(--clr-forest)" }}>
                Více info
              </a>
            </p>
            <div className="flex gap-3">
              <Button onClick={accept} size="sm">Přijmout</Button>
              <Button onClick={decline} variant="ghost" size="sm">Odmítnout</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
