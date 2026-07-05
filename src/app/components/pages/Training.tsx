import { Phone } from "lucide-react";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";
import { SectionLabel } from "../SectionLabel";
import { iconMap } from "../icons";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Training() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const c = CONTENT[lang];
  const isRtl = lang === "fa";
  const t = c.training;

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

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel
            icon={iconMap["BookOpen"]({ className: "w-4 h-4" })}
            label={lang === "fa" ? "آموزش" : "TRAINING"}
            center
          />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4 text-center"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {t.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-14 text-center max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          <div className="space-y-10 mb-16">
            {t.categories.map((cat, i) => {
              const CatIcon = iconMap[cat.icon] || iconMap["BookOpen"];
              return (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-foreground"
                        style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cat.courses.map((course, j) => (
                      <div
                        key={j}
                        className="bg-card border border-border/60 rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                      >
                        <h4 className="font-bold text-foreground mb-2">{course.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.desc}</p>
                        <div className="flex flex-wrap gap-3 text-xs">
                          <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg font-semibold">
                            {course.duration}
                          </span>
                          <span className="px-3 py-1.5 bg-telecom-green/10 text-telecom-green rounded-lg font-semibold">
                            {course.audience}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mb-16">
            <h3
              className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center"
              style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
            >
              {lang === "fa" ? "مزایای دوره‌ها" : "Training Benefits"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.benefits.map((benefit, i) => {
                const BenIcon = iconMap[benefit.icon] || iconMap["Award"];
                return (
                  <div
                    key={i}
                    className="bg-card border border-border/60 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-telecom-green/10 flex items-center justify-center text-telecom-green mb-4">
                      <BenIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              {t.cta}
            </a>
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
