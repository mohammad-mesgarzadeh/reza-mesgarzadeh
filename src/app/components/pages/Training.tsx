import { useState } from "react";
import { Phone, ChevronDown, GraduationCap, PlayCircle, CheckCircle2 } from "lucide-react";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";
import { SectionLabel } from "../SectionLabel";
import { ScrollReveal } from "../ui/ScrollReveal";
import { EmbeddedVideo } from "../ui/EmbeddedVideo";
import { iconMap } from "../icons";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Training() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const c = CONTENT[lang];
  const isRtl = lang === "fa";
  const t = c.training;
  const headingFont = lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif";

  const totalLessons = t.modules.reduce((sum, mod) => sum + mod.lessons.length, 0);

  return (
    <div dir={c.dir} style={{ fontFamily: c.font }} className="min-h-screen bg-background text-foreground">
      <Navbar
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
        brand={c.brand}
        nav={c.nav}
        callNow={c.callNow}
        phoneNumber={phoneNumber}
        dir={c.dir}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-telecom-green/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-telecom-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative py-24 sm:py-28 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel
                icon={iconMap["GraduationCap"]({ className: "w-4 h-4" })}
                label={lang === "fa" ? "آموزش تخصصی" : "PROFESSIONAL TRAINING"}
                center
              />
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-5 mb-4 tracking-tight"
                style={{ fontFamily: headingFont }}
              >
                {t.courseTitle}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                {t.courseDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
                {[
                  { value: t.modules.length, label: lang === "fa" ? " ماژول آموزشی" : " Modules" },
                  { value: totalLessons, label: lang === "fa" ? " درس" : " Lessons" },
                  { value: t.videos.length, label: lang === "fa" ? " ویدیو" : " Videos" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-3">
                    <span className="text-2xl font-bold text-accent">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                {t.cta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <SectionLabel
                icon={iconMap["BookOpen"]({ className: "w-4 h-4" })}
                label={lang === "fa" ? "برنامه درسی" : "CURRICULUM"}
                center
              />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3"
                style={{ fontFamily: headingFont }}
              >
                {t.title}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {t.modules.map((mod, i) => {
              const ModIcon = iconMap[mod.icon] || iconMap["BookOpen"];
              return (
                <ScrollReveal key={mod.id} delay={i * 0.05}>
                  <ModuleCard
                    mod={mod}
                    ModIcon={ModIcon}
                    isRtl={isRtl}
                    headingFont={headingFont}
                    lang={lang}
                    isLast={i === t.modules.length - 1}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Training Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <SectionLabel
                icon={iconMap["Video"]({ className: "w-4 h-4" })}
                label={lang === "fa" ? "ویدیوهای آموزشی" : "VIDEO TRAINING"}
                center
              />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3"
                style={{ fontFamily: headingFont }}
              >
                {lang === "fa" ? "آموزش تصویری" : "Video Lessons"}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {lang === "fa"
                  ? "ویدیوهای آموزشی برای یادگیری بهتر مفاهیم و تمرین‌های عملی"
                  : "Visual learning resources to reinforce concepts with practical demonstrations"}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.videos.map((video) => (
              <EmbeddedVideo
                key={video.id}
                title={video.title}
                description={video.description}
                embedUrl={video.embedUrl}
              />
            ))}
          </div>
        </div>
      </section>

     

      <Footer
        brand={c.brand}
        nav={c.nav}
        footer={c.footer}
        pbxServices={c.pbxSection}
        lang={lang}
        setLang={setLang}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}
function ModuleCard({
  mod,
  ModIcon,
  isRtl,
  headingFont,
  lang,
  isLast,
}: {
  mod: {
    id: string;
    number: number;
    title: string;
    description: string;
    icon: string;
    lessons: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  ModIcon: React.FC<{ className?: string }>;
  isRtl: boolean;
  headingFont: string;
  lang: string;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-accent font-bold text-lg shrink-0">
          {mod.number}
        </div>

        {!isLast && <div className="w-px flex-1 bg-border/60 mt-2" />}
      </div>

      {/* Module content */}
      <div className="flex-1 pb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-card border border-border/60 rounded-2xl p-5 sm:p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <ModIcon className="w-5 h-5" />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className={`text-lg sm:text-xl font-bold text-foreground mb-1 ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                  style={{ fontFamily: headingFont }}
                >
                  {mod.title}
                </h3>

                <p
                  className={`text-sm text-muted-foreground leading-relaxed ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  {mod.description}
                </p>

                <div className="flex items-center gap-2 mt-2.5">
                  <span className="text-xs text-muted-foreground/80 bg-muted/50 px-2.5 py-1 rounded-lg">
                    {mod.lessons.length}{" "}
                    {lang === "fa" ? "درس" : "Lessons"}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`shrink-0 w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </button>

        {/* Lessons list */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${isRtl ? "mr-6 sm:mr-7" : "ml-6 sm:ml-7"} space-y-2`}
          >
            {mod.lessons.map((lesson, li) => (
              <div
                key={lesson.id}
                className="flex items-start gap-3 bg-card/60 border border-border/40 rounded-xl p-4 hover:border-accent/20 transition-all duration-200"
              >
                <div className="w-7 h-7 shrink-0 rounded-lg bg-telecom-green/10 flex items-center justify-center text-telecom-green mt-0.5">
                  <span className="text-xs font-bold">{li + 1}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className={`font-semibold text-foreground text-sm mb-0.5 ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {lesson.title}
                  </h4>

                  <p
                    className={`text-xs text-muted-foreground leading-relaxed ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {lesson.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
