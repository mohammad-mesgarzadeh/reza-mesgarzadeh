import { Play } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export interface EmbeddedVideoProps {
  title: string;
  description: string;
  embedUrl: string;
}

export function EmbeddedVideo({ title, description, embedUrl }: EmbeddedVideoProps) {
  return (
    <ScrollReveal>
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300">
        <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 shrink-0 rounded-lg bg-telecom-green/10 flex items-center justify-center text-telecom-green mt-0.5">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base mb-1">{title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
