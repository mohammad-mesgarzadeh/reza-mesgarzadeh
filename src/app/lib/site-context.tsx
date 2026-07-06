import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "../types";

interface SiteContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  phoneNumber: string;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("fa");
  const phoneNumber = "09123254266";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <SiteContext.Provider value={{ lang, setLang, dark, setDark, phoneNumber }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}
