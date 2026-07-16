import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang, PortfolioContent } from "../../types";
import { SectionLabel } from "../SectionLabel";
import { ScrollReveal } from "../ui/ScrollReveal";
import { cn } from "../ui/utils";

interface PortfolioGalleryProps {
  lang: Lang;
  data: PortfolioContent;
  dir: string;
  font: string;
}

export default function PortfolioGallery({ lang, data, dir, font }: PortfolioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isRtl = lang === "fa";

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % data.items.length);
  }, [lightboxIndex, data.items.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + data.items.length) % data.items.length);
  }, [lightboxIndex, data.items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") (isRtl ? goPrev : goNext)();
      if (e.key === "ArrowLeft") (isRtl ? goNext : goPrev)();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev, isRtl]);

  const currentItem = lightboxIndex !== null ? data.items[lightboxIndex] : null;

  return (
    <section aria-label={data.title}>
      <ScrollReveal>
        <div className="mb-12">
          <SectionLabel
            icon={<span className="text-xs font-bold">✦</span>}
            label={data.badge}
            center
          />
          <h3
            className="text-2xl sm:text-3xl font-bold text-foreground mt-4 mb-4 text-center"
            style={{ fontFamily: font }}
          >
            {data.title}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto text-center">
            {data.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {data.items.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => openLightbox(i)}
              className={cn(
                "group relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer",
                "bg-card border border-border/60",
                "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
                "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
              aria-label={item.title[lang]}
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span
                className={cn(
                  "absolute top-2.5 z-10 text-[10px] sm:text-xs font-semibold px-2 py-0.5",
                  "bg-card/90 backdrop-blur-sm text-accent border border-accent/20 rounded-md",
                  isRtl ? "right-2.5" : "left-2.5"
                )}
              >
                {item.category[lang]}
              </span>

              <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                <p className="text-white text-xs sm:text-sm font-bold leading-snug drop-shadow-md">
                  {item.title[lang]}
                </p>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={currentItem.title[lang]}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className={cn(
                "absolute top-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm",
                "flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                isRtl ? "left-4" : "right-4"
              )}
              aria-label={lang === "fa" ? "بستن" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono z-50 select-none"
              aria-live="polite"
            >
              {lightboxIndex + 1} / {data.items.length}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                isRtl ? goNext() : goPrev();
              }}
              className={cn(
                "absolute z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm",
                "flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                isRtl ? "right-4 sm:right-6" : "left-4 sm:left-6"
              )}
              aria-label={lang === "fa" ? " تصویر قبلی" : "Previous image"}
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                isRtl ? goPrev() : goNext();
              }}
              className={cn(
                "absolute z-50 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm",
                "flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
              )}
              aria-label={lang === "fa" ? "تصویر بعدی" : "Next image"}
            >
              {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>

            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[80vh] sm:max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title[lang]}
                className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
                draggable={false}
              />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                  {currentItem.title[lang]}
                </p>
                <span className="text-white/70 text-xs sm:text-sm">
                  {currentItem.category[lang]}
                </span>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
              {data.items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === lightboxIndex ? "bg-white w-5" : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`${lang === "fa" ? "تصویر" : "Image"} ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
