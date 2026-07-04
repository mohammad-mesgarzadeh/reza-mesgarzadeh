import { Phone } from "lucide-react";
import type { FinalCTAContent } from "../../types";

interface FinalCTAProps {
  content: FinalCTAContent;
  lang: string;
  scrollTo: (id: string) => void;
  phoneNumber: string;
}

export default function FinalCTA({ content, lang, scrollTo, phoneNumber }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-accent relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
        >
          {content.title}
        </h2>
        <p className="text-white/80 text-lg sm:text-xl mb-10">{content.desc}</p>
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-white hover:text-white/80 transition-colors group"
          dir="ltr"
        >
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 group-hover:animate-pulse" />
          {phoneNumber}
        </a>
        <div className="mt-10">
          <button
            onClick={() => scrollTo("contact")}
            className="px-10 py-4 bg-white text-accent font-bold text-base sm:text-lg rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.97]"
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
