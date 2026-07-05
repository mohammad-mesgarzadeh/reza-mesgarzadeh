import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Ruler, Package, Tag, CheckCircle, Phone } from "lucide-react";
import { cn } from "../ui/utils";
import { SectionLabel } from "../SectionLabel";
import { ScrollReveal } from "../ui/ScrollReveal";
import { iconMap } from "../icons";
import type { TowerModelsContent, Lang } from "../../types";

interface TowerModelsProps {
  content: TowerModelsContent;
  lang: Lang;
  scrollTo: (id: string) => void;
  phoneNumber: string;
}

export default function TowerModels({ content, lang, scrollTo, phoneNumber }: TowerModelsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const navigate = useNavigate();
  const isRtl = lang === "fa";

  const filteredProducts = activeCategory === "all"
    ? content.products
    : content.products.filter((p) => p.category === activeCategory);

  return (
    <section id="towers" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel
          icon={iconMap["TowerControl"]({ className: "w-4 h-4" })}
          label={lang === "fa" ? "مدل‌های دکل" : "TOWER MODELS"}
        />
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 mt-4"
          style={{ fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Rajdhani', sans-serif" }}
        >
          {content.title}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 max-w-3xl">{content.subtitle}</p>

        {/* Intro */}
        <ScrollReveal>
          <div className="bg-card border border-border/60 rounded-xl p-6 lg:p-8 mb-12 shadow-sm">
            <p className="text-foreground/80 leading-relaxed">{content.intro}</p>
          </div>
        </ScrollReveal>

        {/* Category filter chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all",
              activeCategory === "all"
                ? "bg-accent text-white border-accent shadow-sm"
                : "bg-card text-muted-foreground border-border/60 hover:border-accent/30 hover:text-foreground"
            )}
          >
            {lang === "fa" ? "همه" : "All"}
          </button>
          {content.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all",
                activeCategory === cat.name
                  ? "bg-accent text-white border-accent shadow-sm"
                  : "bg-card text-muted-foreground border-border/60 hover:border-accent/30 hover:text-foreground"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {filteredProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.05}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate(`/scale-models/${product.id}`);
                }}
                className="group bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 text-left w-full"
              >
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <img
                    src={product.cover}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-card/90 backdrop-blur-sm text-accent border border-accent/20 rounded-md">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-right text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
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
                  <div className="pt-2 border-t border-border/40">
                    <span className="text-sm font-bold text-telecom-green">
                      {product.price}
                    </span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Categories section */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              {lang === "fa" ? "دسته‌بندی محصولات" : "Product Categories"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.categories.map((cat, i) => {
                const CatIcon = iconMap[cat.icon] || iconMap["TowerControl"];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-card border border-border/60 rounded-xl hover:border-accent/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{cat.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Use cases */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              {lang === "fa" ? "موارد استفاده" : "Use Cases"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.useCases.map((uc, i) => {
                const UcIcon = iconMap[uc.icon] || iconMap["Award"];
                return (
                  <div key={i} className="p-5 bg-card border border-border/60 rounded-xl hover:border-accent/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-telecom-green/10 flex items-center justify-center text-telecom-green mb-4">
                      <UcIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-2">{uc.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              {lang === "fa"
                ? "برای سفارش ماکت اختصاصی یا دریافت اطلاعات بیشتر با ما تماس بگیرید"
                : "Contact us for custom model orders or more information"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
              >
                <CheckCircle className="w-4 h-4" />
                {lang === "fa" ? "ثبت سفارش" : "Place Order"}
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-accent/30 hover:border-accent text-accent font-bold rounded-xl transition-all hover:bg-accent/5"
              >
                <Phone className="w-4 h-4" />
                {lang === "fa" ? "تماس بگیرید" : "Call Us"}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
