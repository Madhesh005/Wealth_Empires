import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Blogs", href: "/blogs" },
  ];

  const services = [
    { name: "Incorporation", href: "#services" },
    { name: "Accounting & Bookkeeping", href: "#services" },
    { name: "GST Compliance", href: "#services" },
    { name: "Trademark & Licensing", href: "#services" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-wealth-blue">
              <span className="text-wealth-gold">Wealth</span> Empires
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="nav-item relative">
              <button
                className="text-wealth-slate hover:text-wealth-gold font-medium flex items-center space-x-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`nav-dropdown absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 p-4 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : ""
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-wealth-slate hover:text-wealth-gold hover:bg-wealth-light-cream rounded"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-wealth-gold"
                    : "text-wealth-slate hover:text-wealth-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button
              asChild
              className="bg-wealth-gold hover:bg-wealth-amber text-white font-medium"
            >
              <a
                href="https://api.whatsapp.com/send?phone=919884521264"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-wealth-slate hover:text-wealth-gold"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium text-wealth-blue px-4">Services</p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-6 py-2 text-sm text-wealth-slate hover:text-wealth-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 font-medium ${
                    location === item.href
                      ? "text-wealth-gold"
                      : "text-wealth-slate hover:text-wealth-gold"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4">
                <Button
                  asChild
                  className="w-full bg-wealth-gold hover:bg-wealth-amber text-white"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=919884521264"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
