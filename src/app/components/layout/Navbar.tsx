import { useState } from "react";
import { Phone, Sun, Moon, Menu, X, TowerControl } from "lucide-react";
import { cn } from "../ui/utils";
import type { Lang } from "../../types";
import logo from "../../assets/logo.png"

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
  scrollTo: (id: string) => void;
  nav: Record<string, string>;
  brand: string;
  callNow: string;
  phoneNumber: string;
  dir: string;
}

const navItems = [
  { key: "pbx", id: "pbx" },
  { key: "towers", id: "towers" },
  { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
];

export default function Navbar({
  lang,
  setLang,
  dark,
  setDark,
  scrollTo,
  nav,
  brand,
  callNow,
  phoneNumber,
  dir,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const langs: Lang[] = ["fa", "en"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => { scrollTo("hero"); setMenuOpen(false); }}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow text-foreground">
            <img
              src={logo}
              alt="icon"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="text-lg lg:text-xl font-bold text-foreground tracking-wide"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {brand}
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(({ key, id }) => (
            <button
              key={key}
              onClick={() => scrollTo(id)}
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all rounded-lg"
            >
              {nav[key]}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lang toggle */}
          <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden bg-secondary/30">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold tracking-wider transition-all",
                  lang === l
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Dark/Light */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-accent/50 hover:bg-secondary/50 transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Call button */}
          <a
            href={`tel:${phoneNumber}`}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-telecom-green hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-sm hover:shadow-md hover:shadow-green-500/20 active:scale-[0.97]"
          >
            <Phone className="w-3.5 h-3.5" />
            {callNow}
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border/60 bg-card/95 backdrop-blur-xl px-4 py-5 space-y-1">
          {navItems.map(({ key, id }) => (
            <button
              key={key}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}
              className="w-full text-start px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all rounded-lg"
            >
              {nav[key]}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-border rounded-lg overflow-hidden bg-secondary/30">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-semibold tracking-wider transition-all",
                      lang === l ? "bg-accent text-white" : "text-muted-foreground"
                    )}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 px-4 py-3.5 bg-telecom-green text-white text-sm font-bold rounded-lg transition-all"
              style={{ direction: "ltr" }}
            >
              <Phone className="w-3.5 h-3.5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
