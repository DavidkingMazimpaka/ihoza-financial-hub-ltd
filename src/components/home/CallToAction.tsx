
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Visit our shop or contact us today to experience fast, secure, and reliable financial services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">
                <span className="flex items-center justify-center">
                  Visit Our Location
                  <ArrowRight className="ml-2" size={18} />
                </span>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 w-full sm:w-auto"
              asChild
            >
              <Link to="/services">
                <span className="flex items-center justify-center">
                  Explore Our Services
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
