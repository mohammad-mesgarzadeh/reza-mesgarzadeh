import { useNavigate } from "react-router";
import { TowerControl, Instagram, Linkedin, Youtube } from "lucide-react";
import type { Lang, NavContent, FooterContent, PBXSectionContent } from "../../types";

interface FooterProps {
  brand: string;
  nav: NavContent;
  footer: FooterContent;
  pbxServices: PBXSectionContent;
  lang: Lang;
  setLang: (l: Lang) => void;
  phoneNumber: string;
}

const socialLinks = {
  ig: "https://www.instagram.com/reza_mesgarzadeh?igsh=MXJ2MWJzYXYwY3dmZA==",
  li: "https://www.linkedin.com/in/reza-mesgarzadeh-b875b2380/",
  yt: "https://youtube.com/@user-pn8vg8go9e?si=HwnfYvWSxKdt9lAI",
};

export default function Footer({
  brand,
  nav,
  footer,
  pbxServices,
  lang,
  setLang,
  phoneNumber,
}: FooterProps) {
  const navigate = useNavigate();
  const years = new Date().getFullYear();
  const langs: Lang[] = ["fa", "en"];

  const quickLinks = [
    { label: nav.home, path: "/" },
    { label: nav.products, path: "/products" },
    { label: nav.installation, path: "/installation-maintenance" },
    { label: nav.training, path: "/training" },
    { label: nav.scaleModels, path: "/scale-models" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center shadow-sm">
                <TowerControl className="w-4 h-4 text-white" />
              </div>
              <span
                className="text-lg font-bold text-primary-foreground"
                style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
              >
                {brand}
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-sm leading-relaxed">{footer.desc}</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-xl lg:text-2xl font-bold font-mono text-primary-foreground hover:text-accent transition-colors"
              dir="ltr"
            >
              {phoneNumber}
            </a>
            <div className="flex gap-3 mt-6">
              {[
                { href: socialLinks.ig, icon: <Instagram className="w-4 h-4" /> },
                { href: socialLinks.li, icon: <Linkedin className="w-4 h-4" /> },
                { href: socialLinks.yt, icon: <Youtube className="w-4 h-4" /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/30 hover:bg-primary-foreground/5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">
              {footer.links}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => { navigate(link.path); window.scrollTo({ top: 0 }); }}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">
              {lang === "fa" ? "خدمات" : "Services"}
            </h4>
            <ul className="space-y-3">
              {pbxServices.services.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate("/")}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors text-start"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            &copy; {years} {brand} &mdash; {footer.rights}
          </p>
          <div className="flex gap-4">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  lang === l ? "text-accent" : "text-primary-foreground/40 hover:text-primary-foreground/70"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
