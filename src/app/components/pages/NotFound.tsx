import { ArrowLeft, TowerControl } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useSite } from "../../lib/site-context";
import { CONTENT } from "../../content";

export default function NotFound() {
  const { lang } = useSite();
  const navigate = useNavigate();
  const location = useLocation();
  const isRtl = lang === "fa";

  const c = CONTENT[lang];

  return (
    <div
      dir={c.dir}
      style={{ fontFamily: c.font }}
      className="min-h-screen bg-background text-foreground flex items-center justify-center px-4"
    >
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
          <TowerControl className="w-10 h-10 text-accent" />
        </div>

        <h1 className="text-7xl sm:text-8xl font-bold text-accent mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          {isRtl ? "محصول مورد نظر یافت نشد" : "Product Not Found"}
        </h2>

        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
          {isRtl
            ? "متأسفیم! صفحه یا محصول مورد نظر یافت نشد. ممکن است لینک اشتباه باشد یا این صفحه حذف شده باشد."
            : "Sorry! The page or product you're looking for was not found. The link may be incorrect or the page may have been removed."}
        </p>

        {location.pathname !== "/" && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.97]"
            >
              <ArrowLeft className={`w-4 h-4 ${isRtl ? "" : "rotate-180"}`} />
              {isRtl ? "بازگشت به صفحه اصلی" : "Back to Home"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
