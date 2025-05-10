
import React from 'react';
import { WhatsApp, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Reliable Financial Services For Everyone
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
                className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8"
              >
                <WhatsApp className="mr-2" size={20} />
                Contact Us on WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border-white/20 rounded-full px-8"
              >
                <Link to="/services">
                  See Our Services
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden">
              <div className="w-24 h-24 bg-rwanda-yellow rounded-full absolute -top-12 -right-12 opacity-50"></div>
              <div className="w-32 h-32 bg-rwanda-green rounded-full absolute -bottom-16 -left-16 opacity-50"></div>
              
              {/* Mock Financial App Interface */}
              <div className="bg-white rounded-xl shadow-xl p-5 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-primary text-lg">IHOZA Services</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock Service Tiles */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted p-4 rounded-lg animate-float">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">Bank Agent</div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg animate-float" style={{animationDelay: "0.2s"}}>
                    <div className="w-10 h-10 bg-rwanda-yellow/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-rwanda-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">Money Transfer</div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg animate-float" style={{animationDelay: "0.4s"}}>
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">Bill Payments</div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg animate-float" style={{animationDelay: "0.6s"}}>
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-800">Passport Photo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
