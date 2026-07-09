import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import {
  ArrowLeft,
  Ruler,
  Package,
  Tag,
  Phone,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  Home,
  Layers,
  Scale,
  HardHat,
  X,
  ChevronRight,
  Building2,
  List,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useSite } from "../../lib/site-context";
import {
  getTelecomProductById,
  getRelatedTelecomProducts,
  getScaleModelById,
  getRelatedScaleModels,
} from "../../lib/products";
import { CONTENT } from "../../content";
import { cn } from "../ui/utils";
import { Badge } from "../ui/badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { TowerModelProduct, TelecomProduct } from "../../types";
import NotFound from "./NotFound";

type AnyProduct = (TowerModelProduct & { brand?: string; features?: string[] }) | (TelecomProduct & { scale?: string; material?: string; useCase?: string });

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  isRtl,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isRtl: boolean;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowLeft") { isRtl ? onNext() : onPrev(); return; }
      if (e.key === "ArrowRight") { isRtl ? onPrev() : onNext(); return; }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, isRtl]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
          "bg-black/50 hover:bg-black/70 backdrop-blur-md",
          "border border-white/30 shadow-lg shadow-black/30",
          "text-white transition-all hover:scale-110 active:scale-95",
          isRtl ? "right-4" : "left-4",
        )}
        aria-label="Previous image"
      >
        <ChevronRight className={cn("w-6 h-6", isRtl ? "" : "rotate-180")} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
          "bg-black/50 hover:bg-black/70 backdrop-blur-md",
          "border border-white/30 shadow-lg shadow-black/30",
          "text-white transition-all hover:scale-110 active:scale-95",
          isRtl ? "left-4" : "right-4",
        )}
        aria-label="Next image"
      >
        <ChevronRight className={cn("w-6 h-6", isRtl ? "rotate-180" : "")} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center max-w-[90vw] max-h-[85vh]"
        >
          <img
            src={images[currentIndex]}
            alt={`Product view ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function ProductHero({
  product,
  onThumbnailClick,
  selectedThumb,
  onImageClick,
}: {
  product: AnyProduct;
  onThumbnailClick: (index: number) => void;
  selectedThumb: number;
  onImageClick: () => void;
}) {
  const images = product.images;
  const currentImage = images.length > 0 && images[selectedThumb] ? images[selectedThumb] : product.cover;

  if (images.length === 0) {
    return (
      <div className="space-y-4">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-secondary">
          <img
            src={product.cover}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-card/90 backdrop-blur-sm text-accent border border-accent/20 text-xs px-3 py-1.5">
              {product.category}
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        onClick={onImageClick}
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-white group cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedThumb}
            src={currentImage}
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-card/90 backdrop-blur-sm text-accent border border-accent/20 text-xs px-3 py-1.5">
            {product.category}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {selectedThumb + 1} / {images.length}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin flex-nowrap scroll-smooth">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onThumbnailClick(i)}
            className={cn(
              "relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200",
              selectedThumb === i
                ? "border-accent ring-2 ring-accent/20 ring-offset-2 ring-offset-background"
                : "border-border/60 hover:border-accent/40 opacity-70 hover:opacity-100",
            )}
          >
            <img
              src={img}
              alt={`${product.name} view ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SpecTable({ specifications }: { specifications: { label: string; value: string }[] }) {
  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {specifications.map((spec, i) => (
            <tr
              key={i}
              className={cn(
                "transition-colors",
                i % 2 === 0 ? "bg-card" : "bg-secondary/30",
                "hover:bg-accent/5",
              )}
            >
              <td className="px-5 py-3.5 font-semibold text-foreground/80 w-1/3 border-b border-border/40">
                {spec.label}
              </td>
              <td className="px-5 py-3.5 text-muted-foreground border-b border-border/40">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StickySidebar({
  product,
  phoneNumber,
  lang,
  isRtl,
}: {
  product: AnyProduct;
  phoneNumber: string;
  lang: string;
  isRtl: boolean;
}) {
  const navigate = useNavigate();
  const isScaleModel = "scale" in product && product.scale;
  const isContactPrice = product.price.includes("Contact") || product.price.includes("تماس");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/^0/, "98")}?text=${encodeURIComponent(isRtl ? `سلام، درباره ${product.name} اطلاعات بیشتری می‌خواهم` : `Hi, I'd like more information about ${product.name}`)}`;

  return (
    <div className="sticky top-24">
      <div className="bg-card border border-border/60 rounded-xl p-6 shadow-sm space-y-5">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {isRtl ? "قیمت" : "Price"}
          </p>
          <p className={cn(
            "text-2xl font-bold",
            isContactPrice ? "text-telecom-green" : "text-foreground",
          )}>
            {product.price}
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            {isRtl ? "تماس بگیرید" : "Call Us"}
          </a>

          <button
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
            className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.97]"
          >
            <CheckCircle className="w-4 h-4" />
            {isRtl ? "درخواست مشاوره" : "Request Consultation"}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 border-2 border-telecom-green/30 hover:border-telecom-green text-telecom-green font-bold rounded-xl transition-all hover:bg-telecom-green/5 active:scale-[0.97]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <div className="pt-4 border-t border-border/40 space-y-2.5 text-sm">
          {isScaleModel ? (
            <>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Scale className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <span className="text-foreground/70">{isRtl ? "مقیاس" : "Scale"}:</span>{" "}
                  <span className="font-semibold font-mono">{product.scale}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Package className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <span className="text-foreground/70">{isRtl ? "جنس" : "Material"}:</span>{" "}
                  <span className="font-semibold">{product.material}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <HardHat className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <span className="text-foreground/70">{isRtl ? "کاربرد" : "Use Case"}:</span>{" "}
                  <span className="font-semibold">{product.useCase}</span>
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Building2 className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <span className="text-foreground/70">{isRtl ? "برند" : "Brand"}:</span>{" "}
                  <span className="font-semibold">{product.brand}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Layers className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <span className="text-foreground/70">{isRtl ? "دسته" : "Category"}:</span>{" "}
                  <span className="font-semibold">{product.category}</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturesList({ features }: { features: string[] }) {
  if (!features || features.length === 0) return null;
  return (
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
        <List className="w-5 h-5 text-accent" />
        {features[0].includes("خودکار") || features[0].includes("پشتیبانی") || features[0].includes("تا") ? "ویژگی‌ها" : "Features"}
      </h2>
      <div className="grid sm:grid-cols-2 gap-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5 px-4 py-3 bg-card border border-border/60 rounded-lg">
            <CheckCircle className="w-4 h-4 text-telecom-green shrink-0" />
            <span className="text-sm text-foreground/80">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RelatedProducts({
  products,
  lang,
  isRtl,
  isScaleModel,
}: {
  products: AnyProduct[];
  lang: string;
  isRtl: boolean;
  isScaleModel: boolean;
}) {
  const navigate = useNavigate();

  if (products.length === 0) return null;

  return (
    <section className="py-16 border-t border-border/40">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {isRtl ? "محصولات مرتبط" : "Related Products"}
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {products.map((p) => (
              <CarouselItem key={p.id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(isScaleModel ? `/scale-models/${p.id}` : `/products/${p.id}`);
                  }}
                  className="group text-left w-full"
                >
                  <div className="bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
                    <div className="relative h-48 bg-secondary overflow-hidden">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 from-card via-card/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-semibold px-2.5 py-1 bg-card/90 backdrop-blur-sm text-accent border border-accent/20 rounded-md">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {isScaleModel && "scale" in p ? (
                          <>
                            <Ruler className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="font-mono">{p.scale}</span>
                          </>
                        ) : "brand" in p ? (
                          <span className="font-semibold">{p.brand}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

function Breadcrumb({
  productName,
  isRtl,
  isScaleModel,
}: {
  productName: string;
  isRtl: boolean;
  isScaleModel: boolean;
}) {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 hover:text-accent transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        {isRtl ? "خانه" : "Home"}
      </button>
      <ChevronLeft className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
      <button
        onClick={() => navigate(isScaleModel ? "/scale-models" : "/products")}
        className="hover:text-accent transition-colors"
      >
        {isScaleModel
          ? (isRtl ? "ماکت‌ها" : "Scale Models")
          : (isRtl ? "محصولات" : "Products")}
      </button>
      <ChevronLeft className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
      <span className="text-foreground/60 font-medium truncate max-w-[200px]">
        {productName}
      </span>
    </nav>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useSite();
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isRtl = lang === "fa";
  const c = CONTENT[lang];

  const isScaleModel = location.pathname.includes("/scale-models/");
  const product = id
    ? isScaleModel
      ? getScaleModelById(id, lang)
      : getTelecomProductById(id, lang)
    : undefined;
  const related = product
    ? isScaleModel
      ? getRelatedScaleModels(product as any, lang)
      : getRelatedTelecomProducts(product as any, lang)
    : [];

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handlePrevImage = useCallback(() => {
    if (!product || product.images.length === 0) return;
    setSelectedThumb((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  }, [product]);

  const handleNextImage = useCallback(() => {
    if (!product || product.images.length === 0) return;
    setSelectedThumb((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    if (product && selectedThumb >= product.images.length) {
      setSelectedThumb(0);
    }
  }, [product, selectedThumb]);

  if (!id || !product) {
    return <NotFound />;
  }

  const isModel = "scale" in product;

  return (
    <div
      dir={c.dir}
      style={{ fontFamily: c.font }}
      className="min-h-screen bg-background text-foreground"
    >
      {lightboxOpen && (
        <Lightbox
          images={product.images}
          currentIndex={selectedThumb}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          isRtl={isRtl}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb productName={product.name} isRtl={isRtl} isScaleModel={isScaleModel} />

        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6 group"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-0.5 ${isRtl ? "rotate-180" : ""}`} />
          {isRtl ? "بازگشت" : "Back"}
        </button>

        <ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <ProductHero
                product={product}
                onThumbnailClick={setSelectedThumb}
                selectedThumb={selectedThumb}
                onImageClick={() => product.images.length > 0 && setLightboxOpen(true)}
              />

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {product.name}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20"
                  >
                    {product.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
                  {product.description}
                </p>
              </div>

              {"features" in product && product.features && (
                <FeaturesList features={product.features} />
              )}

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent" />
                    {isRtl ? "مشخصات فنی" : "Technical Specifications"}
                  </h2>
                  <SpecTable specifications={product.specifications} />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid sm:grid-cols-3 gap-4">
                  {isModel ? (
                    <>
                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                          <Scale className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "مقیاس" : "Scale"}
                        </h3>
                        <p className="text-lg font-mono font-bold text-accent">{product.scale}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "مقیاس دقیق مهندسی" : "Precision engineering scale"}
                        </p>
                      </div>

                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-telecom-green/10 flex items-center justify-center text-telecom-green mb-3">
                          <Package className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "جنس" : "Material"}
                        </h3>
                        <p className="text-lg font-bold text-telecom-green">{product.material}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "مواد با کیفیت بالا" : "High-quality materials"}
                        </p>
                      </div>

                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-telecom-amber/10 flex items-center justify-center text-telecom-amber mb-3">
                          <Tag className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "کاربرد" : "Use Case"}
                        </h3>
                        <p className="text-lg font-bold text-telecom-amber">{product.useCase}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "کاربردهای متنوع" : "Versatile applications"}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "برند" : "Brand"}
                        </h3>
                        <p className="text-lg font-bold text-accent">{product.brand}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "برند معتبر جهانی" : "Trusted global brand"}
                        </p>
                      </div>

                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-telecom-green/10 flex items-center justify-center text-telecom-green mb-3">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "دسته" : "Category"}
                        </h3>
                        <p className="text-lg font-bold text-telecom-green">{product.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "تجهیزات حرفه‌ای" : "Professional equipment"}
                        </p>
                      </div>

                      <div className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/20 transition-all duration-300 hover:shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-telecom-amber/10 flex items-center justify-center text-telecom-amber mb-3">
                          <Tag className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {isRtl ? "قیمت" : "Pricing"}
                        </h3>
                        <p className="text-lg font-bold text-telecom-amber">{isRtl ? "رقابتی" : "Competitive"}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isRtl ? "بهترین قیمت بازار" : "Best market price"}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <StickySidebar
                product={product}
                phoneNumber={"09123254266"}
                lang={lang}
                isRtl={isRtl}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <RelatedProducts products={related} lang={lang} isRtl={isRtl} isScaleModel={isScaleModel} />
        </ScrollReveal>
      </div>
    </div>
  );
}
