
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import About from "./pages/About";
import GreenBank from "./pages/GreenBank";
import CarbonCalculator from "./pages/CarbonCalculator";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

// Create a ScrollToTop component to ensure pages start at the top
// This is a backup for older browsers that might not support the scrollRestoration API
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

interface AppProps {
  basename?: string;
}

const App = ({ basename = '/' }: AppProps) => {
  // Set scroll restoration to manual to prevent browser's default scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/green-bank" element={<GreenBank />} />
              <Route path="/calculator" element={<CarbonCalculator />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
