import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavSolid = isScrolled || !isHome || isMobileMenuOpen;

  const navClasses = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
    isNavSolid
      ? "bg-luxury-bg border-luxury-border py-4"
      : "bg-transparent border-transparent py-6",
  );

  return (
    <nav className={navClasses}>
      <div className="relative z-50 max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Navigation (Menu Toggle) */}
        <div className="flex items-center w-1/3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "flex items-center gap-3 text-[11px] tracking-[0.2em] font-medium uppercase transition-colors group",
              isNavSolid
                ? "text-luxury-dark hover:text-luxury-gold"
                : "text-white hover:text-luxury-gold",
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5 group-hover:scale-110 transition-transform" />
            )}
            <span className="hidden sm:block">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-1/3">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "text-3xl font-sans tracking-[0.2em] font-light uppercase transition-colors",
              isNavSolid ? "text-luxury-dark" : "text-white",
            )}
          >
            SOLENNE
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center justify-end w-1/3">
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "text-[11px] tracking-[0.2em] uppercase font-bold transition-colors",
              isNavSolid
                ? "text-luxury-dark hover:text-luxury-gold"
                : "text-white hover:text-luxury-gold",
            )}
          >
            ENQUIRE
          </Link>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 pt-24 pb-6 px-6 bg-luxury-bg z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/#experience"
            className="text-luxury-dark text-2xl font-serif italic hover:text-luxury-gold transition-colors"
          >
            Experience
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/#rooms"
            className="text-luxury-dark text-2xl font-serif italic hover:text-luxury-gold transition-colors"
          >
            Accommodations
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/services"
            className="text-luxury-dark text-2xl font-serif italic hover:text-luxury-gold transition-colors"
          >
            Services & Spa
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/contact"
            className="text-luxury-dark text-2xl font-serif italic hover:text-luxury-gold transition-colors"
          >
            Contact
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/booking"
            className="mt-12 bg-luxury-dark text-white hover:bg-luxury-gold transition-colors px-10 py-4 text-[11px] uppercase tracking-widest font-medium"
          >
            Reserve Your Stay
          </Link>
        </div>
      )}
    </nav>
  );
}
