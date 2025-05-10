
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">
            IHOZA <span className="text-accent">FINANCIAL HUB</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/promotions" className="text-sm font-medium hover:text-primary transition-colors">
            Promotions
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Phone size={16} />
            <span className="hidden md:inline">Call Us</span>
          </Button>
          <Button size="sm" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container-custom py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/promotions" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Promotions
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-3 pt-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs">
                <Phone size={14} />
                Call Us
              </Button>
              <Button size="sm" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs">
                <MessageSquare size={14} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
