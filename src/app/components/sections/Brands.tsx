import { Layers } from "lucide-react";
import { SectionLabel } from "../SectionLabel";
import type { BrandsContent } from "../../types";

interface BrandsProps {
  content: BrandsContent;
  lang: string;
}

export default function Brands({ content, lang }: BrandsProps) {
  return (
    <section className="py-20 lg:py-24 bg-background border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel icon={<Layers className="w-4 h-4" />} label={lang === "fa" ? "برندها" : "BRANDS"} center />
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-3"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {content.title}
          </h2>
          <p className="text-muted-foreground">{content.subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {content.list.map((brand, i) => (
            <div
              key={i}
              className="px-8 py-5 border border-border/60 bg-card hover:border-accent/40 hover:bg-secondary/50 hover:shadow-sm transition-all rounded-xl"
            >
              <span className="text-lg lg:text-xl font-bold tracking-widest text-foreground font-mono">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
