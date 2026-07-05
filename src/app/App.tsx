import { useEffect } from "react";
import { useLocation } from "react-router";
import { CONTENT } from "./content";
import { useSite } from "./lib/site-context";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import PBXServices from "./components/sections/PBXServices";
import ProductCarousel from "./components/sections/ProductCarousel";
import Advantages from "./components/sections/Advantages";
import Brands from "./components/sections/Brands";
import Workflow from "./components/sections/Workflow";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/layout/Footer";

export default function App() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const location = useLocation();

  const c = CONTENT[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => scrollTo(state.scrollTo), 300);
    }
  }, [location.state]);

  return (
    <div dir={c.dir} style={{ fontFamily: c.font }} className="min-h-screen bg-background text-foreground overflow-x-hidden">
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

      <Hero content={c.hero} lang={lang} scrollTo={scrollTo} phoneNumber={phoneNumber} />
      <PBXServices content={c.pbxSection} lang={lang} />
      <ProductCarousel products={c.telecomProducts.products} lang={lang} phoneNumber={phoneNumber} />
      <Advantages content={c.advantages} hero={c.hero} lang={lang} scrollTo={scrollTo} />
      <Brands content={c.brands} lang={lang} />
      <Workflow content={c.workflow} lang={lang} />
      <Testimonials content={c.testimonials} lang={lang} />
      <FAQ content={c.faq} lang={lang} />
      <Contact content={c.contact} lang={lang} phoneNumber={phoneNumber} />
      <FinalCTA content={c.finalCta} lang={lang} scrollTo={scrollTo} phoneNumber={phoneNumber} />

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
