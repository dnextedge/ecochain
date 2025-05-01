
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import SpotTrading from "./pages/SpotTrading";
import MarginTrading from "./pages/MarginTrading";
import FiatConversion from "./pages/FiatConversion";
import MarketOverview from "./pages/MarketOverview";
import P2PTrading from "./pages/P2PTrading";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/trade/spot" element={<SpotTrading />} />
              <Route path="/trade/spot/:symbol" element={<SpotTrading />} />
              <Route path="/trade/margin" element={<MarginTrading />} />
              <Route path="/trade/convert" element={<FiatConversion />} />
              <Route path="/trade/p2p" element={<P2PTrading />} />
              <Route path="/markets" element={<MarketOverview />} />
              <Route path="/markets/spot" element={<MarketOverview />} />
              <Route path="/markets/chains" element={<MarketOverview />} />
              <Route path="/markets/ecosystems" element={<MarketOverview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
