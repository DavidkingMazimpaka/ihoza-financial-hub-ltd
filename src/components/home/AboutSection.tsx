
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">About IHOZA Financial Hub</h2>
            
            <p className="mb-4 text-muted-foreground">
              IHOZA Financial Hub Ltd is a one-stop shop for financial solutions. We serve both local
              and cross-border customers with fast, secure, and reliable services.
            </p>
            
            <p className="mb-6 text-muted-foreground">
              Our focus is on trust, transparency, and community impact. We believe in providing accessible
              financial services that make a difference in people's lives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Daily Transactions</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Banking Partners</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image with Rwanda Colors Border */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-[5px] border-white">
                <div className="absolute inset-0 bg-gradient-to-r from-rwanda-blue via-rwanda-yellow to-rwanda-green opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800"
                  alt="IHOZA Financial Hub Office"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-rwanda-yellow/20 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-rwanda-blue/20 rounded-full blur-xl"></div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-10 right-10 bg-white rounded-lg p-4 shadow-xl border border-muted w-48">
                <div className="font-bold text-lg mb-1">RWF 10M+</div>
                <div className="text-sm text-muted-foreground">Daily Transaction Volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
