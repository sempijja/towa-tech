
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

// These pages will be implemented later
const Products = () => <div>Products Page</div>;
const GreenBank = () => <div>Green Bank Page</div>;
const CarbonCalculator = () => <div>Carbon Calculator Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const queryClient = new QueryClient();

interface AppProps {
  basename?: string;
}

const App = ({ basename = '/' }: AppProps) => (
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

export default App;
