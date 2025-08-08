import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomeCleaning from "./pages/HomeCleaning";
import OfficeCleaning from "./pages/OfficeCleaning";
import TermsAndConditions from "./pages/TermsAndConditions";
import { PixelTracker } from "@/components/PixelTracker";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SecurityHeaders } from "@/components/SecurityHeaders";
import { EnhancedTracking } from "@/components/EnhancedTracking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PixelTracker />
      <PerformanceMonitor />
      <SecurityHeaders />
      <BrowserRouter>
        <EnhancedTracking />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-cleaning" element={<HomeCleaning />} />
          <Route path="/office-cleaning" element={<OfficeCleaning />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
