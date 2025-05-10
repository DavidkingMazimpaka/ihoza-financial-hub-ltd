
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">
            IHOZA <span className="text-accent">FINANCIAL HUB</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#home" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#about" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-primary">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                        href="#services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Our Services
                        </div>
                        <p className="text-sm leading-tight text-white/80">
                          Fast, secure and reliable financial solutions for both local and cross-border customers
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Banking</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Banking services, accounts and transfers
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Money Transfer</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Local and international money transfers
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Mobile Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Mobile money and digital payments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#partners" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                Partners
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#how-we-work" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                How We Work
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#promotions" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                Promotions
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#contact" 
                className={navigationMenuTriggerStyle() + " hover:text-primary"}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Phone size={16} />
            <span className="hidden lg:inline">Call Us</span>
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
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown - Animated */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-background transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="container-custom py-8 space-y-6 flex flex-col h-[calc(100vh-64px)] overflow-auto">
          <nav className="flex flex-col space-y-5 text-lg">
            <a 
              href="#home" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Services
            </a>
            <a 
              href="#partners" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Partners
            </a>
            <a 
              href="#how-we-work" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              How We Work
            </a>
            <a 
              href="#promotions" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Promotions
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-between border-b border-border pb-2 hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </nav>
          
          <div className="mt-auto">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                <Phone size={18} />
                Call Us
              </Button>
              <Button className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <MessageSquare size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
