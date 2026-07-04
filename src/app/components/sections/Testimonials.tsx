import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import type { TestimonialsContent } from "../../types";

interface TestimonialsProps {
  content: TestimonialsContent;
  lang: string;
}

export default function Testimonials({ content, lang }: TestimonialsProps) {
  const [idx, setIdx] = useState(0);
  const item = content.items[idx];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel icon={<Star className="w-4 h-4" />} label={lang === "fa" ? "نظرات" : "TESTIMONIALS"} center />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {content.title}
          </h2>
          <p className="text-muted-foreground">{content.subtitle}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-card border border-border/60 rounded-xl p-8 lg:p-12 shadow-sm">
            <Quote className="w-8 h-8 text-accent/20 mb-4" />
            <div className="flex mb-4 gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-8 italic text-foreground/90">
              &ldquo;{item.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              <div className="flex gap-2">
                {content.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === idx ? "w-6 bg-accent" : "w-2 bg-border hover:bg-accent/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
