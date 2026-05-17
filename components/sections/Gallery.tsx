"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

const images = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", alt: "Interiér Kavárny Svěží Praha — příjemná atmosféra", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80", alt: "Espresso v Kavárně Svěží Praha", span: "" },
  { src: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80", alt: "Fresh green juice v Kavárně Svěží Praha", span: "" },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80", alt: "Barista připravující specialty kávu v Praze", span: "" },
  { src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80", alt: "Cold brew káva Praha — Kavárna Svěží", span: "" },
  { src: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80", alt: "Domácí cheesecake Kavárna Svěží Praha", span: "" },
  { src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80", alt: "Cinnamon roll čerstvý v kavárně Praha", span: "" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section-padding" style={{ background: "var(--clr-bg)" }} aria-labelledby="gallery-heading">
      <div className="container-wide">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--clr-caramel)" }}>
              Galerie
            </span>
          </FadeIn>
          <TextReveal as="h2" text="Pohled do světa Svěží." className="text-4xl sm:text-5xl md:text-6xl font-bold" />
        </div>

        {/* Masonry-style grid */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(img.src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-label={`Otevřít: ${img.alt}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-sm">
                    ⊕
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(10,26,20,0.95)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal
            aria-label="Fotografie v plné velikosti"
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Plná velikost fotografie z Kavárny Svěží Praha"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors text-lg"
              onClick={() => setLightbox(null)}
              aria-label="Zavřít"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
