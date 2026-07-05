import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Phone, Sun, Moon, Menu, X, TowerControl } from "lucide-react";
import { cn } from "../ui/utils";
import type { Lang, NavContent } from "../../types";
import logo from "../../assets/logo.png"

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
  brand: string;
  callNow: string;
  phoneNumber: string;
  dir: string;
  nav: NavContent;
}

const navItems: { key: keyof NavContent; path: string }[] = [
  { key: "home", path: "/" },
  { key: "products", path: "/products" },
  { key: "installation", path: "/installation-maintenance" },
  { key: "training", path: "/training" },
  { key: "scaleModels", path: "/scale-models" },
];

export default function Navbar({
  lang,
  setLang,
  dark,
  setDark,
  brand,
  callNow,
  phoneNumber,
  dir,
  nav,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const langs: Lang[] = ["fa", "en"];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => { navigate("/"); setMenuOpen(false); }}
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
          {navItems.map(({ key, path }) => (
            <button
              key={key}
              onClick={() => { navigate(path); setMenuOpen(false); }}
              className={cn(
                "px-4 py-2.5 text-sm font-medium transition-all rounded-lg",
                isActive(path)
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
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
          {navItems.map(({ key, path }) => (
            <button
              key={key}
              onClick={() => { navigate(path); setMenuOpen(false); }}
              className={cn(
                "w-full text-start px-4 py-3.5 text-sm font-medium transition-all rounded-lg",
                isActive(path)
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
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
