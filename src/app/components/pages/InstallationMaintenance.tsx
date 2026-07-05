import { useNavigate } from "react-router";
import { Phone, ArrowRight } from "lucide-react";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";
import { SectionLabel } from "../SectionLabel";
import { iconMap } from "../icons";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function InstallationMaintenance() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const navigate = useNavigate();
  const c = CONTENT[lang];
  const isRtl = lang === "fa";
  const im = c.installationMaintenance;

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
            icon={iconMap["Wrench"]({ className: "w-4 h-4" })}
            label={lang === "fa" ? "نصب و نگهداری" : "INSTALLATION & MAINTENANCE"}
            center
          />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4 text-center"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {im.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-14 text-center max-w-2xl mx-auto">
            {im.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {im.services.map((service, i) => {
              const ServiceIcon = iconMap[service.icon] || iconMap["Wrench"];
              return (
                <div
                  key={i}
                  className="bg-card border border-border/60 rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <ServiceIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-16">
            <h3
              className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center"
              style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
            >
              {lang === "fa" ? "فرآیند خدمات" : "Service Process"}
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {im.process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-card border border-border/60 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent font-mono">{step.step}</span>
                  </div>
                  <div className={`${isRtl ? "pr-4 border-r-2 border-accent/20" : "pl-4 border-l-2 border-accent/20"}`}>
                    <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border/60 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{im.contactText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                {lang === "fa" ? "تماس بگیرید" : "Call Us"}
              </a>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-accent/30 hover:border-accent text-accent font-bold rounded-xl transition-all hover:bg-accent/5"
              >
                <ArrowRight className={`w-4 h-4 ${isRtl ? "" : "rotate-180"}`} />
                {lang === "fa" ? "فرم تماس" : "Contact Form"}
              </button>
            </div>
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
