import { Phone, ArrowRight } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import type { HeroContent } from "../../types";
import hero from "../../assets/hero.webp";
interface HeroProps {
  content: HeroContent;
  lang: string;
  scrollTo: (id: string) => void;
  phoneNumber: string;
}

const statBgClass = "bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10";

export default function Hero({ content, lang, scrollTo, phoneNumber }: HeroProps) {
  const isRtl = lang === "fa";

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Telecommunication towers at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20 dark:from-[#060b16] dark:via-[#060b16]/85 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:from-[#060b16]" />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div
          className={cn(
            "max-w-2xl",
            isRtl ? "ml-auto text-right" : "text-left"
          )}
        >
          <SectionLabel
            icon={
              <span className="w-1.5 h-1.5 rounded-full bg-telecom-green animate-pulse" />
            }
            label={content.badge}
            className="mb-6"
          />

          <h1
            className="text-4xl text-nowrap sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-3"
            style={{
              fontFamily:
                lang === "fa"
                  ? "'Vazirmatn', sans-serif"
                  : "'Rajdhani', sans-serif",
            }}
          >
            {content.headline}
          </h1>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6"
            style={{
              fontFamily:
                lang === "fa"
                  ? "'Vazirmatn', sans-serif"
                  : "'Rajdhani', sans-serif",
            }}
          >
            {content.subheadline}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            {content.desc}
          </p>

          <div
            className={cn(
              "flex flex-wrap gap-4",
              isRtl && "justify-start"
            )}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-telecom-green hover:bg-green-700 text-white font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.97]"
            >
              {content.cta1}

              <ArrowRight
                className={cn(
                  "w-4 h-4 transition-transform group-hover:translate-x-0.5",
                  isRtl && "rotate-180"
                )}
              />
            </button>

            <a
              href={`tel:${phoneNumber}`}
              className="group inline-flex items-center gap-2.5 px-8 py-4 border-2 border-foreground/20 hover:border-accent/60 text-foreground hover:text-accent font-bold text-base rounded-xl transition-all hover:bg-accent/5"
            >
              <Phone className="w-4 h-4" />
              {content.cta2}
            </a>
          </div>

          <div
            className={cn(
              "mt-16 flex flex-wrap gap-6 lg:gap-10",
              isRtl && "justify-start"
            )}
          >
            {[
              {
                val: "50+",
                label:
                  lang === "fa"
                    ? "پروژه موفق"
                    : "Successful Projects",
              },
              {
                val: "30+",
                label:
                  lang === "fa"
                    ? "سال تجربه"
                    : "Years Experience",
              },
              {
                val: "24/7",
                label:
                  lang === "fa"
                    ? "پشتیبانی"
                    : "Support",
              },
            ].map((s) => (
              <div
                key={s.val}
                className={cn(
                  "flex flex-col px-5 py-3 rounded-xl",
                  statBgClass
                )}
              >
                <span className="text-3xl lg:text-4xl font-bold text-accent font-mono tracking-tight">
                  {s.val}
                </span>

                <span className="text-xs text-muted-foreground tracking-wide uppercase font-semibold mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
