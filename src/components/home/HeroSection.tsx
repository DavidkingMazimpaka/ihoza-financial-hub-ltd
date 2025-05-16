
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

import overviewImage from '/lovable-uploads/9550159d-c43e-4226-a370-bd0f30373e62.png';

const HeroSection = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              IHOZA FINANCIAL HUB LTD
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 text-white/90">
              Just ask, order, or book any financial service.
            </p>
            <p className="mb-8 text-white/80 max-w-lg mx-auto lg:mx-0">
              We provide fast, secure and reliable financial solutions for both local and cross-border customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  <MessageSquare className="mr-2" size={20} />
                  <a href="https://wa.me/+250781499937" target="_blank" rel="noopener noreferrer">
                  Chat with Us on WhatsApp
                  </a>
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20 rounded-full px-8 w-full sm:w-auto"
                asChild
              >
                <a href="#services">
                  <span className="flex items-center justify-center">
                    See Our Services
                    <ArrowRight className="ml-2" size={18} />
                  </span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl"></div>
            <img 
              src={overviewImage} 
              alt="IHOZA Financial Services Overview" 
              className="relative w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
