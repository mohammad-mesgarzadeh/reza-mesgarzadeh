import { ArrowRight } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import { iconMap } from "../icons";
import type { PBXSectionContent } from "../../types";
import telephone from "../../assets/telephone.avif";

interface PBXServicesProps {
  content: PBXSectionContent;
  lang: string;
}

export default function PBXServices({ content, lang }: PBXServicesProps) {
  const isRtl = lang === "fa";

  return (
    <section id="pbx" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel icon={iconMap["Radio"]({ className: "w-4 h-4" })} label="PBX" />
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4"
          style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
        >
          {content.title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-16 max-w-2xl">{content.subtitle}</p>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <div
                key={i}
                className="group bg-card border border-border/60 rounded-xl p-6 lg:p-8 flex flex-col gap-4 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>

        {/* PBX features visual */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden bg-secondary aspect-[4/3] shadow-lg">
            <img
              src={telephone}
              alt="IP desk phone system"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-semibold text-xs text-accent uppercase tracking-[0.15em]">
                IP Phone System
              </span>
            </div>
          </div>
          <div className={cn("space-y-8", isRtl && "text-right")}>
            {content.features.map((item, i) => {
              const FeatureIcon = iconMap[item.icon];

              return (
                <div
                  key={i}
                  className="flex items-start gap-5"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <FeatureIcon className="w-5 h-5" />
                  </div>

                  <div className={cn("flex-1", isRtl && "text-right")}>
                    <h4 className="font-bold text-foreground mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
