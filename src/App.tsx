import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound";

const Index = lazy(() => import("./pages/Index"));

const HomeLoading = () => (
  <main className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl backdrop-blur">
      <div className="grid place-items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <h2 className="text-xl font-bold tracking-tight">Loading portfolio</h2>
        <p className="text-sm text-slate-300">Please wait a moment.</p>
        <div className="h-2 w-full rounded-full bg-slate-700">
          <div className="h-2 w-1/3 animate-[progress_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary to-cyan-400" />
        </div>
      </div>
    </div>
  </main>
);

import SpaceBackground from "./components/portfolio/SpaceBackground";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <SpaceBackground />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeLoading />}>
              <Index />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
