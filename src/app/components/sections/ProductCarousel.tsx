import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Phone, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionLabel } from "../SectionLabel";
import { iconMap } from "../icons";
import type { TelecomProduct } from "../../types";
import { useState, useEffect, useCallback, useRef } from "react";

interface ProductCarouselProps {
  products: TelecomProduct[];
  lang: string;
  phoneNumber: string;
}

export default function ProductCarousel({ products, lang, phoneNumber }: ProductCarouselProps) {
  const navigate = useNavigate();
  const isRtl = lang === "fa";
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const featured = products.slice(0, 5);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % featured.length);
  }, [featured.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);
  }, [featured.length]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  if (featured.length === 0) return null;

  const product = featured[current];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel
          icon={iconMap["Radio"]({ className: "w-4 h-4" })}
          label={lang === "fa" ? "محصولات شاخص" : "FEATURED PRODUCTS"}
          center
        />
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4 text-center"
          style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
        >
          {lang === "fa" ? "محصولات برگزیده" : "Featured Products"}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 text-center max-w-2xl mx-auto">
          {lang === "fa"
            ? "مجموعه‌ای از بهترین تجهیزات مخابراتی ما"
            : "A selection of our finest telecom equipment"}
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden bg-card border border-border/60 shadow-xl">
            <AnimatePresence custom={direction} mode="sync">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col lg:flex-row"
              >
                <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full bg-secondary overflow-hidden">
                  <img
                    src={product.cover}
                    alt={product.name}
                    className="w-full h-full object-contain lg:object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-card/60 lg:via-transparent lg:to-transparent" />
                </div>
                <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-md">
                      {product.category}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1.5 bg-telecom-green/10 text-telecom-green border border-telecom-green/20 rounded-md">
                      {product.brand}
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
                    style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-accent/5 text-accent/80 border border-accent/10 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => { navigate(`/products/${product.id}`); window.scrollTo({ top: 0 }); }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97] text-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {lang === "fa" ? "جزئیات محصول" : "View Details"}
                    </button>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent/30 hover:border-accent text-accent font-bold rounded-xl transition-all hover:bg-accent/5 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {lang === "fa" ? "تماس بگیرید" : "Call Us"}
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 flex items-center justify-center text-foreground hover:bg-background transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 flex items-center justify-center text-foreground hover:bg-background transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
