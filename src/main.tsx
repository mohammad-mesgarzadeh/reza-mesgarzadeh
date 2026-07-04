import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import { SiteProvider } from "./app/lib/site-context";
import App from "./app/App.tsx";
import NotFound from "./app/components/pages/NotFound.tsx";
import "./styles/index.css";

const ProductDetail = lazy(() => import("./app/components/pages/ProductDetail.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <SiteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/tower-models/:id"
            element={
              <Suspense
                fallback={
                  <div className="min-h-screen bg-background flex items-center justify-center">
                    <div className="animate-spin w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full" />
                  </div>
                }
              >
                <ProductDetail />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteProvider>
    </HashRouter>
  </StrictMode>,
);
