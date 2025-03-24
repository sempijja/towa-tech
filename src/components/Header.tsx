import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            Towa Uchafu na Nusu
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/products" 
              className={({ isActive }) => cn(
                "font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-600" : "text-gray-700"
              )}
            >
              Products
            </NavLink>
            <NavLink 
              to="/green-bank" 
              className={({ isActive }) => cn(
                "font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-600" : "text-gray-700"
              )}
            >
              Green Bank
            </NavLink>
            <NavLink 
              to="/calculator" 
              className={({ isActive }) => cn(
                "font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-600" : "text-gray-700"
              )}
            >
              Carbon Calculator
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => cn(
                "font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-600" : "text-gray-700"
              )}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/green-bank-registration" 
              className={({ isActive }) => cn(
                "font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-600" : "text-gray-700"
              )}
            >
              Register as Wastepreneur
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden md:flex bg-green-600 hover:bg-green-700"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <NavLink 
                to="/products" 
                className={({ isActive }) => cn(
                  "py-2 font-medium transition-colors hover:text-green-600",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/green-bank" 
                className={({ isActive }) => cn(
                  "py-2 font-medium transition-colors hover:text-green-600",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Green Bank
              </NavLink>
              <NavLink 
                to="/calculator" 
                className={({ isActive }) => cn(
                  "py-2 font-medium transition-colors hover:text-green-600",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Carbon Calculator
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => cn(
                  "py-2 font-medium transition-colors hover:text-green-600",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/green-bank-registration" 
                className={({ isActive }) => cn(
                  "py-2 font-medium transition-colors hover:text-green-600",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Register as Wastepreneur
              </NavLink>
              <NavLink 
                to="/contact" 
                className="py-2 font-medium text-white bg-green-600 hover:bg-green-700 rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
