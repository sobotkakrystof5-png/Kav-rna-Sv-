"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/lib/data/nav";

type FormState = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "", type: "rezervace" });
  const [errors, setErrors] = useState<Partial<typeof values>>({});

  function validate() {
    const e: Partial<typeof values> = {};
    if (!values.name.trim()) e.name = "Vyplňte jméno";
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Neplatný email";
    if (!values.message.trim()) e.message = "Napište zprávu";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  function field(id: keyof typeof values, label: string, type = "text", multiline = false) {
    const Tag = multiline ? "textarea" : "input";
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium mb-1.5" style={{ color: "var(--clr-text)" }}>
          {label}
        </label>
        <Tag
          id={id}
          type={!multiline ? type : undefined}
          value={values[id]}
          onChange={(e) => setValues((v) => ({ ...v, [id]: e.target.value }))}
          rows={multiline ? 4 : undefined}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
          style={{
            background: "rgba(26,77,62,0.04)",
            border: errors[id] ? "1.5px solid #e53e3e" : "1.5px solid var(--clr-border)",
            color: "var(--clr-text)",
            fontFamily: "var(--font-inter)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--clr-forest)")}
          onBlur={(e) => (e.target.style.borderColor = errors[id] ? "#e53e3e" : "var(--clr-border)")}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          aria-invalid={!!errors[id]}
        />
        {errors[id] && (
          <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-500">{errors[id]}</p>
        )}
      </div>
    );
  }

  if (state === "success") {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
          Zpráva odeslána!
        </h3>
        <p style={{ color: "var(--clr-text-muted)" }}>Ozveme se vám do 24 hodin. Těšíme se na vás!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Kontaktní formulář">
      {/* Type select */}
      <div>
        <span className="block text-sm font-medium mb-1.5" style={{ color: "var(--clr-text)" }}>Typ poptávky</span>
        <div className="flex gap-2 flex-wrap">
          {[
            { value: "rezervace", label: "Rezervace" },
            { value: "dotaz", label: "Dotaz" },
            { value: "spoluprace", label: "Spolupráce" },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setValues((v) => ({ ...v, type: opt.value }))}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: values.type === opt.value ? "var(--clr-forest)" : "rgba(26,77,62,0.06)",
                color: values.type === opt.value ? "white" : "var(--clr-text-muted)",
                border: "1px solid " + (values.type === opt.value ? "var(--clr-forest)" : "var(--clr-border)"),
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("name", "Jméno a příjmení")}
        {field("email", "Email", "email")}
      </div>
      {field("phone", "Telefon (volitelné)", "tel")}
      {field("message", "Zpráva", "text", true)}

      <Button type="submit" size="lg" className="w-full" disabled={state === "loading"}>
        {state === "loading" ? "Odesílám…" : "Odeslat zprávu"}
      </Button>
    </form>
  );
}

export default function KontaktPage() {
  return (
    <article>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "var(--clr-text)" }}
        aria-labelledby="kontakt-heading"
      >
        <div className="container relative z-10 text-white">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Pojďme se potkat
            </span>
          </FadeIn>
          <TextReveal as="h1" text="Kontakt a rezervace." className="text-5xl sm:text-7xl font-bold" style={{ color: "white" }} />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: "var(--clr-bg)" }}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn direction="right">
            <div
              className="p-8 md:p-10 rounded-3xl"
              style={{ background: "white", border: "1px solid var(--clr-border)", boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-fraunces)", color: "var(--clr-text)" }}>
                Napište nám
              </h2>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-6">
              {/* Contact details */}
              <div className="p-6 rounded-3xl" style={{ background: "rgba(26,77,62,0.05)", border: "1px solid var(--clr-border)" }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--clr-caramel)" }}>
                  Kontaktní údaje
                </h3>
                <address className="not-italic space-y-4 text-sm">
                  <div className="flex gap-3 items-start">
                    <span className="text-xl mt-0.5">📍</span>
                    <div>
                      <div className="font-medium" style={{ color: "var(--clr-text)" }}>Adresa</div>
                      <div style={{ color: "var(--clr-text-muted)" }}>{contactInfo.address}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-xl mt-0.5">📞</span>
                    <div>
                      <div className="font-medium" style={{ color: "var(--clr-text)" }}>Telefon</div>
                      <a href={`tel:${contactInfo.phone}`} className="hover:underline" style={{ color: "var(--clr-forest)" }}>
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-xl mt-0.5">✉️</span>
                    <div>
                      <div className="font-medium" style={{ color: "var(--clr-text)" }}>Email</div>
                      <a href={`mailto:${contactInfo.email}`} className="hover:underline" style={{ color: "var(--clr-forest)" }}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </address>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-3xl" style={{ background: "rgba(26,77,62,0.05)", border: "1px solid var(--clr-border)" }}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--clr-caramel)" }}>
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

              {/* Map mini */}
              <div className="h-52 rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.4264099483657!2d14.432890677049764!3d50.07536287152388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f4d0b65537%3A0xbd1a2e5e39f11a4d!2zTsOhbcSbc3TDrSBNw61ydSwgUHJhaGEgMiAtIFZpbm9ocmFkeQ!5e0!3m2!1scs!2scz!4v1715952000000!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa kontaktu Kavárny Svěží Praha"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
