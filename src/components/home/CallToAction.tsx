
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Visit our shop or contact us today to experience fast, secure, and reliable financial services.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
            >
              <Link to="/contact">
                Visit Our Location
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
            >
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
