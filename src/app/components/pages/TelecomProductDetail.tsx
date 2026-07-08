import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Phone,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  Home,
  Layers,
  Building2,
  X,
  ChevronRight,
  Ruler,
  Headphones,
  Ship,
  Factory,
  Store,
  MapPin,
  Clock,
  Tag,
  Zap,
  Wifi,
  Monitor,
  Mic,
  Globe,
  Shield,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useSite } from "../../lib/site-context";
import { getTelecomProductById, getRelatedTelecomProducts } from "../../lib/products";
import { CONTENT } from "../../content";
import { cn } from "../ui/utils";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useIsMobile } from "../ui/use-mobile";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import type { TelecomProduct } from "../../types";
import NotFound from "./NotFound";

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
          "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110",
          isRtl ? "right-4" : "left-4",
        )}
        aria-label="Previous image"
      >
        <ChevronRight className={cn("w-6 h-6", isRtl ? "" : "rotate-180")} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110",
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

function ImageZoom({
  src,
  alt,
  onImageClick,
}: {
  src: string;
  alt: string;
  onImageClick: () => void;
}) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState({ active: false, x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom({ active: true, x, y });
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    setZoom((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-white group cursor-pointer",
        !isMobile && "cursor-crosshair",
      )}
      onClick={onImageClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className={cn(
          "w-full h-full object-contain transition-transform duration-200 ease-out select-none",
          !isMobile && "lg:group-hover:scale-[2]",
        )}
        style={
          !isMobile && zoom.active
            ? { transformOrigin: `${zoom.x}% ${zoom.y}%` }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4">
        <Badge className="bg-card/90 backdrop-blur-sm text-accent border border-accent/20 text-xs px-3 py-1.5">
          <Tag className="w-3 h-3 mr-1 inline" />
          <span>{alt}</span>
        </Badge>
      </div>
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Click to expand
          </span>
        </div>
      )}
    </div>
  );
}

function ProductInfo({ product, isRtl, lang }: { product: TelecomProduct; isRtl: boolean; lang: string }) {
  const phoneNumber = "09123254266";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/^0/, "98")}?text=${encodeURIComponent(isRtl ? `سلام، درباره ${product.name} اطلاعات بیشتری می‌خواهم` : `Hi, I'd like more information about ${product.name}`)}`;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge
            variant="secondary"
            className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20"
          >
            {product.category}
          </Badge>
          <Badge
            variant="outline"
            className="text-xs px-3 py-1 bg-telecom-green/5 text-telecom-green border-telecom-green/20"
          >
            <CheckCircle className="w-3 h-3 mr-1" />
            {isRtl ? "موجود" : "In Stock"}
          </Badge>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          {product.name}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-card border border-border/60 rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-0.5">{isRtl ? "برند" : "Brand"}</p>
          <p className="font-semibold text-foreground text-sm">{product.brand}</p>
        </div>
        <div className="bg-card border border-border/60 rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-0.5">{isRtl ? "مدل" : "Model"}</p>
          <p className="font-semibold text-foreground text-sm font-mono">{product.model || "-"}</p>
        </div>
        <div className="bg-card border border-border/60 rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-0.5">{isRtl ? "دسته‌بندی" : "Category"}</p>
          <p className="font-semibold text-foreground text-sm">{product.category}</p>
        </div>
      </div>

      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
        {product.shortDescription || product.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97] flex-1"
        >
          <Phone className="w-4 h-4" />
          {isRtl ? "تماس برای قیمت" : "Call for Price"}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.97] flex-1"
        >
          <MessageCircle className="w-4 h-4" />
          {isRtl ? "استعلام از طریق واتساپ" : "Inquire via WhatsApp"}
        </a>
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
              <td className="px-5 py-3.5 font-semibold text-foreground/80 w-2/5 border-b border-border/40">
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

function FeaturesGrid({ features, isRtl }: { features: string[]; isRtl: boolean }) {
  if (!features || features.length === 0) return null;

  const featureIcons = [
    { icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Wifi, color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Monitor, color: "text-telecom-green", bg: "bg-telecom-green/10" },
    { icon: Mic, color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { icon: Shield, color: "text-telecom-amber", bg: "bg-telecom-amber/10" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {features.map((f, i) => {
        const Icon = featureIcons[i % featureIcons.length].icon;
        const colorClass = featureIcons[i % featureIcons.length].color;
        const bgClass = featureIcons[i % featureIcons.length].bg;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-card border border-border/60 rounded-xl p-4 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", bgClass)}>
                <Icon className={cn("w-5 h-5", colorClass)} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                  {f}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isRtl ? "قابلیت حرفه‌ای" : "Professional feature"}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function Description({ description, isRtl }: { description: string; isRtl: boolean }) {
  return (
    <div className="prose prose-sm max-w-none">
      <div className="bg-card border border-border/60 rounded-xl p-6 sm:p-8">
        <p className="text-foreground/80 leading-relaxed text-base sm:text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}

function ApplicationsSection({ applications, isRtl }: { applications: { icon: string; title: string; desc: string }[] | undefined; isRtl: boolean }) {
  if (!applications || applications.length === 0) return null;

  const appIcons = [Building2, Headphones, Ship, Factory, Store];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {applications.map((app, i) => {
        const Icon = appIcons[i % appIcons.length];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="bg-card border border-border/60 rounded-xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1.5">{app.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{app.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function RelatedProducts({
  products,
  isRtl,
}: {
  products: TelecomProduct[];
  isRtl: boolean;
}) {
  const navigate = useNavigate();

  if (products.length === 0) return null;

  return (
    <Carousel opts={{ align: "start", loop: false }}>
      <CarouselContent>
        {products.map((p) => (
          <CarouselItem
            key={p.id}
            className="basis-full sm:basis-1/2 lg:basis-1/4 pl-4 flex"
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(`/products/${p.id}`);
              }}
              className="group text-left w-full flex"
            >
              <div className="bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col w-full">
                <div className="relative h-44 bg-white overflow-hidden">
                  <img
                    loading="lazy"
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
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2 min-h-[40px]">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3 text-accent shrink-0" />
                    <span className="font-semibold">{p.brand}</span>
                  </div>
                  {p.shortDescription && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-auto">
                      {p.shortDescription}
                    </p>
                  )}
                </div>
              </div>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

function ContactSection({ isRtl }: { isRtl: boolean }) {
  const phoneNumber = "09123254266";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/^0/, "98")}`;

  return (
    <div className="bg-gradient-to-br from-accent/5 via-accent/10 to-telecom-green/5 border border-accent/20 rounded-2xl p-8 sm:p-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            {isRtl ? "نیاز به مشاوره دارید؟" : "Need a Consultation?"}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {isRtl
              ? "کارشناسان ما آماده پاسخگویی به سوالات شما و ارائه مشاوره رایگان هستند. برای اطلاع از قیمت محصولات و دریافت راهنمایی، با ما تماس بگیرید."
              : "Our experts are ready to answer your questions and provide free consultation. Contact us for pricing information and guidance."}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              {isRtl ? "تهران، ایران" : "Tehran, Iran"}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              {isRtl ? "۹ صبح تا ۶ عصر" : "9 AM - 6 PM"}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-accent" />
              {phoneNumber}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-telecom-green hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97] text-base"
          >
            <Phone className="w-5 h-5" />
            {isRtl ? "تماس فوری" : "Call Now"}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-telecom-green/30 hover:border-telecom-green text-telecom-green font-bold rounded-xl transition-all hover:bg-telecom-green/5 active:scale-[0.97] text-base"
          >
            <MessageCircle className="w-5 h-5" />
            {isRtl ? "پیام در واتساپ" : "Message on WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({
  productName,
  isRtl,
}: {
  productName: string;
  isRtl: boolean;
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
        onClick={() => navigate("/products")}
        className="hover:text-accent transition-colors"
      >
        {isRtl ? "محصولات" : "Products"}
      </button>
      <ChevronLeft className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
      <span className="text-foreground/60 font-medium truncate max-w-[200px]">
        {productName}
      </span>
    </nav>
  );
}

export default function TelecomProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, setLang, dark, setDark, phoneNumber } = useSite();
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isRtl = lang === "fa";
  const c = CONTENT[lang];

  const product = id ? getTelecomProductById(id, lang) : undefined;
  const related = product ? getRelatedTelecomProducts(product, lang) : [];

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handlePrevImage = useCallback(() => {
    if (!product) return;
    setSelectedThumb((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  }, [product]);

  const handleNextImage = useCallback(() => {
    if (!product) return;
    setSelectedThumb((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!id || !product) {
    return <NotFound />;
  }

  const applications = c.telecomProducts.applications;

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Breadcrumb productName={product.name} isRtl={isRtl} />

        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6 group"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-0.5 ${isRtl ? "rotate-180" : ""}`} />
          {isRtl ? "بازگشت" : "Back"}
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <ImageZoom
              src={product.images[selectedThumb]}
              alt={product.name}
              onImageClick={() => setLightboxOpen(true)}
            />

            <div className="w-full overflow-hidden">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin flex-nowrap scroll-smooth">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedThumb(i)}
                    className={cn(
                      "relative flex-none w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
                      selectedThumb === i
                        ? "border-accent ring-2 ring-accent/20 ring-offset-2 ring-offset-background"
                        : "border-border/60 hover:border-accent/40 opacity-70 hover:opacity-100",
                    )}
                  >
                    <img
                      loading="lazy"
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ProductInfo product={product} isRtl={isRtl} lang={lang} />
          </div>
        </div>

        <div className="space-y-14 lg:space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-accent" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {isRtl ? "مشخصات فنی" : "Technical Specifications"}
              </h2>
            </div>
            <SpecTable specifications={product.specifications} />
          </motion.section>

          {product.features && product.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-accent" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {isRtl ? "ویژگی‌ها" : "Features"}
                </h2>
              </div>
              <FeaturesGrid features={product.features} isRtl={isRtl} />
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Ruler className="w-5 h-5 text-accent" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {isRtl ? "توضیحات محصول" : "Product Description"}
              </h2>
            </div>
            <Description description={product.description} isRtl={isRtl} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-accent" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {isRtl ? "کاربردها" : "Applications"}
              </h2>
              <p className="text-sm text-muted-foreground ml-auto">
                {isRtl ? "مناسب برای" : "Ideal for"}
              </p>
            </div>
            <ApplicationsSection applications={applications} isRtl={isRtl} />
          </motion.section>

          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t border-border/40 pt-14"
            >
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {isRtl ? "محصولات مرتبط" : "Related Products"}
                </h2>
              </div>
              <RelatedProducts products={related} isRtl={isRtl} />
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactSection isRtl={isRtl} />
          </motion.section>
        </div>
      </main>

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
