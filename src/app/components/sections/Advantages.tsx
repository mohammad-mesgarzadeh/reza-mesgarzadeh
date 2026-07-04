import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import type { AdvantagesContent, HeroContent } from "../../types";

interface AdvantagesProps {
  content: AdvantagesContent;
  hero: HeroContent;
  lang: string;
  scrollTo: (id: string) => void;
}

export default function Advantages({ content, hero, lang, scrollTo }: AdvantagesProps) {
  const isRtl = lang === "fa";

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionLabel
              icon={<CheckCircle className="w-4 h-4" />}
              label={lang === "fa" ? "مزایا" : "ADVANTAGES"}
              light
            />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6"
              style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
            >
              {content.title}
            </h2>
            <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed">
              {content.subtitle}
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
            >
              {hero.cta1}
              <ArrowRight className={cn("w-4 h-4", isRtl && "rotate-180")} />
            </button>
          </div>
          <div className="lg:col-span-3 space-y-px bg-primary-foreground/10 rounded-xl overflow-hidden">
            {content.items.map((adv, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 lg:p-8 bg-primary hover:bg-primary-foreground/5 transition-colors"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg bg-telecom-green/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-telecom-green" />
                </div>

                <div className={cn("flex-1", isRtl && "text-right")}>
                  <h3 className="font-bold text-primary-foreground mb-1.5">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
