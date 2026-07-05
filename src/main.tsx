import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import { SiteProvider } from "./app/lib/site-context";
import App from "./app/App.tsx";
import NotFound from "./app/components/pages/NotFound.tsx";
import "./styles/index.css";

const ProductDetail = lazy(() => import("./app/components/pages/ProductDetail.tsx"));
const Products = lazy(() => import("./app/components/pages/Products.tsx"));
const InstallationMaintenance = lazy(() => import("./app/components/pages/InstallationMaintenance.tsx"));
const Training = lazy(() => import("./app/components/pages/Training.tsx"));
const ScaleModels = lazy(() => import("./app/components/pages/ScaleModels.tsx"));

const fallback = (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-spin w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full" />
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <SiteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Suspense fallback={fallback}><Products /></Suspense>} />
          <Route path="/products/:id" element={<Suspense fallback={fallback}><ProductDetail /></Suspense>} />
          <Route path="/installation-maintenance" element={<Suspense fallback={fallback}><InstallationMaintenance /></Suspense>} />
          <Route path="/training" element={<Suspense fallback={fallback}><Training /></Suspense>} />
          <Route path="/scale-models" element={<Suspense fallback={fallback}><ScaleModels /></Suspense>} />
          <Route path="/scale-models/:id" element={<Suspense fallback={fallback}><ProductDetail /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteProvider>
    </HashRouter>
  </StrictMode>,
);
