
import React from 'react';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IHOZA FINANCIAL HUB LTD</h3>
            <p className="mb-4 max-w-sm">
              A one-stop shop for financial solutions, serving both local and cross-border customers with fast, 
              secure, and reliable services.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/250728105080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Our Services</a></li>
              <li><a href="#partners" className="hover:underline">Partners</a></li>
              <li><a href="#how-we-work" className="hover:underline">How We Work</a></li>
              <li><a href="#promotions" className="hover:underline">Promotions</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Business Hours & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2 mb-4">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li>+250 728 105 080</li>
              <li>+250 795 591 014</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 mt-6 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} IHOZA FINANCIAL HUB LTD. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">"Powered by IHOZA – We facilitate our customers even online."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
