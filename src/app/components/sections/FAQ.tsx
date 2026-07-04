import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import type { FAQContent } from "../../types";

interface FAQProps {
  content: FAQContent;
  lang: string;
}

export default function FAQ({ content, lang }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel icon={<ChevronDown className="w-4 h-4" />} label="FAQ" center />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {content.title}
          </h2>
          <p className="text-muted-foreground">{content.subtitle}</p>
        </div>

        <div className="space-y-3">
          {content.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/20 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-start hover:bg-secondary/30 transition-colors"
              >
                <span className="font-bold text-foreground pr-4 text-sm sm:text-base">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
