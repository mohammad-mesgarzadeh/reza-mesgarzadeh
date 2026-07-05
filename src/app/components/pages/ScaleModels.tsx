import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { Search, Ruler, Package, Tag, ChevronDown } from "lucide-react";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";
import { getAllScaleModels } from "../../lib/products";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import { iconMap } from "../icons";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import type { TowerModelProduct } from "../../types";

const ITEMS_PER_PAGE = 6;

export default function ScaleModels() {
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const navigate = useNavigate();
  const c = CONTENT[lang];
  const isRtl = lang === "fa";
  const products = getAllScaleModels(lang);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [material, setMaterial] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)] as const;
  }, [products]);

  const materials = useMemo(() => {
    const mats = new Set(products.map((p) => p.material));
    return ["all", ...Array.from(mats)] as const;
  }, [products]);

  const filtered = useMemo(() => {
    let result: TowerModelProduct[] = products;
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (material !== "all") result = result.filter((p) => p.material === material);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.useCase.toLowerCase().includes(q),
      );
    }
    return result;
  }, [products, category, material, search]);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filtered.length));
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setMaterial("all");
    setVisibleCount(ITEMS_PER_PAGE);
  };

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

      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel
            icon={iconMap["TowerControl"]({ className: "w-4 h-4" })}
            label={lang === "fa" ? "مدل‌های مقیاس" : "SCALE MODELS"}
            center
          />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4 text-center"
            style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
          >
            {c.towerModels.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 text-center max-w-2xl mx-auto">
            {c.towerModels.subtitle}
          </p>

          <div className="bg-card border border-border/60 rounded-xl p-6 lg:p-8 mb-10 shadow-sm max-w-4xl mx-auto">
            <p className="text-foreground/80 leading-relaxed text-center">{c.towerModels.intro}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRtl ? "right-3" : "left-3"}`} />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                placeholder={lang === "fa" ? "جستجوی مدل‌ها..." : "Search models..."}
                className={cn(
                  "w-full h-11 rounded-xl border border-border/60 bg-background px-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all",
                )}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            <span className="text-xs text-muted-foreground self-center font-semibold">
              {lang === "fa" ? "دسته:" : "Category:"}
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setVisibleCount(ITEMS_PER_PAGE); }}
                className={cn(
                  "px-4 py-2 text-xs font-semibold rounded-lg border transition-all",
                  category === cat
                    ? "bg-accent text-white border-accent shadow-sm"
                    : "bg-card text-muted-foreground border-border/60 hover:border-accent/30 hover:text-foreground",
                )}
              >
                {cat === "all" ? (lang === "fa" ? "همه" : "All") : cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <span className="text-xs text-muted-foreground self-center font-semibold">
              {lang === "fa" ? "جنس:" : "Material:"}
            </span>
            {materials.map((mat) => (
              <button
                key={mat}
                onClick={() => { setMaterial(mat); setVisibleCount(ITEMS_PER_PAGE); }}
                className={cn(
                  "px-4 py-2 text-xs font-semibold rounded-lg border transition-all",
                  material === mat
                    ? "bg-telecom-green text-white border-telecom-green shadow-sm"
                    : "bg-card text-muted-foreground border-border/60 hover:border-telecom-green/30 hover:text-foreground",
                )}
              >
                {mat === "all" ? (lang === "fa" ? "همه" : "All") : mat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                {lang === "fa" ? "مدلی یافت نشد" : "No models found"}
              </p>
              <button
                onClick={resetFilters}
                className="text-accent hover:underline text-sm font-semibold"
              >
                {lang === "fa" ? "پاک کردن فیلترها" : "Clear filters"}
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-6 text-center">
                {lang === "fa"
                  ? `نمایش ${displayed.length} از ${filtered.length} مدل`
                  : `Showing ${displayed.length} of ${filtered.length} models`}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {displayed.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate(`/scale-models/${product.id}`); }}
                    className="group bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 text-left w-full"
                  >
                    <div className="relative h-56 bg-secondary overflow-hidden">
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
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Ruler className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="font-mono">{product.scale}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{product.material}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{product.useCase}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                        <span className="text-sm font-bold text-telecom-green">{product.price}</span>
                        <span className="text-xs text-accent font-semibold">
                          {lang === "fa" ? "جزئیات بیشتر" : "View Details"}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border/60 hover:border-accent/30 text-foreground font-bold rounded-xl transition-all hover:shadow-md active:scale-[0.97]"
                  >
                    <ChevronDown className="w-4 h-4" />
                    {lang === "fa" ? "نمایش بیشتر" : "Load More"}
                  </button>
                </div>
              )}
            </>
          )}
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
