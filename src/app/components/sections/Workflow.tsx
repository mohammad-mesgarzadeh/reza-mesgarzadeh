import { ArrowRight } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import type { WorkflowContent } from "../../types";

interface WorkflowProps {
  content: WorkflowContent;
  lang: string;
}

export default function Workflow({ content, lang }: WorkflowProps) {
  const isRtl = lang === "fa";

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel icon={<ArrowRight className="w-4 h-4" />} label={lang === "fa" ? "فرآیند" : "PROCESS"} />
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4"
          style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
        >
          {content.title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-16 max-w-2xl">{content.subtitle}</p>

        <div className="relative">
          <div className={cn("absolute top-8 h-px bg-border/60 hidden lg:block", isRtl ? "right-8 left-8" : "left-8 right-8")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {content.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4">
                <div className="w-16 h-16 rounded-xl border-2 border-accent/30 bg-card flex items-center justify-center shrink-0 relative z-10 shadow-sm">
                  <span className="text-lg font-bold font-mono text-accent">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
