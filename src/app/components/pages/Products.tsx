import { useState, useMemo, memo } from "react";
import { useNavigate } from "react-router";
import { Search, Building2, Layers } from "lucide-react";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";
import { getAllTelecomProducts } from "../../lib/products";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import { ScrollReveal } from "../ui/ScrollReveal";
import { iconMap } from "../icons";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import type { TelecomProduct } from "../../types";

const ProductCard = memo(function ProductCard({
  product,
  isRtl,
  onNavigate,
}: {
  product: TelecomProduct;
  isRtl: boolean;
  onNavigate: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onNavigate(product.id)}
      className="group bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 text-left w-full"
    >
      <div className="relative h-48 bg-secondary overflow-hidden">
        <img
          loading="lazy"
          src={product.cover}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"}`}>
          <span className="text-xs font-semibold px-2.5 py-1 bg-card/90 backdrop-blur-sm text-accent border border-accent/20 rounded-md">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className={`font-bold text-foreground group-hover:text-accent transition-colors ${isRtl ? "text-right" : ""}`}>
          {product.name}
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="font-semibold">{product.brand}</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{product.category}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
          {product.features.slice(0, 2).map((f, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 bg-accent/5 text-accent/80 border border-accent/10 rounded-full">
              {f}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-[10px] px-2 py-0.5 text-muted-foreground">
              +{product.features.length - 2}
            </span>
          )}
        </div>
        <div className="pt-1">
          <span className="text-sm font-bold text-telecom-green">
            {product.price}
          </span>
        </div>
      </div>
    </button>
  );
});

export default function Products() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const navigate = useNavigate();
  const c = CONTENT[lang];
  const isRtl = lang === "fa";
  const products = getAllTelecomProducts(lang);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)] as const;
  }, [products]);

  const filtered = useMemo(() => {
    let result: TelecomProduct[] = products;
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [products, category, search]);

  const handleNavigate = useMemo(() => (id: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/products/${id}`);
  }, [navigate]);

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

      <ScrollReveal as="section">
        <div className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel
            icon={iconMap["Radio"]({ className: "w-4 h-4" })}
            label={lang === "fa" ? "محصولات" : "PRODUCTS"}
            center
          />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4 text-center"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {c.telecomProducts.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10 text-center max-w-2xl mx-auto">
            {c.telecomProducts.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRtl ? "right-3" : "left-3"}`} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "fa" ? "جستجوی محصولات..." : "Search products..."}
                className={cn(
                  "w-full h-11 rounded-xl border border-border/60 bg-card px-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all",
                )}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all",
                  category === cat
                    ? "bg-accent text-white border-accent shadow-sm"
                    : "bg-card text-muted-foreground border-border/60 hover:border-accent/30 hover:text-foreground",
                )}
              >
                {cat === "all"
                  ? lang === "fa" ? "همه" : "All"
                  : cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {lang === "fa" ? "محصولی یافت نشد" : "No products found"}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 0.03}>
                  <ProductCard product={product} isRtl={isRtl} onNavigate={handleNavigate} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </ScrollReveal>

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
