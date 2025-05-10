
import React from 'react';
import { ArrowRight, Clock, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PromotionsSection = () => {
  const promotions = [
    {
      title: "Morning Rush Deal",
      description: "Free deposit between 8–10 AM for all bank transactions. Save on fees when you come in early!",
      icon: <Clock size={24} />,
      color: "bg-rwanda-blue/10 text-rwanda-blue",
      label: "LIMITED TIME"
    },
    {
      title: "Big Send Bonus",
      description: "Get 1,000 RWF airtime for sending over 50,000 RWF through any of our money transfer services.",
      icon: <Gift size={24} />,
      color: "bg-rwanda-yellow/10 text-rwanda-yellow",
      label: "POPULAR"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Promotions & Offers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special deals and save money on your financial transactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {promotions.map((promo, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl border border-muted bg-gradient-to-br from-white to-muted/20 p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0">
                <div className="relative h-16 w-16 overflow-hidden">
                  <div className="absolute top-0 right-0 h-4 w-24 origin-bottom-left rotate-45 bg-rwanda-green text-[10px] font-medium leading-4 text-white text-center">
                    {promo.label}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <div className={`inline-flex items-center justify-center rounded-full p-2 mb-4 ${promo.color}`}>
                  {promo.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{promo.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{promo.description}</p>
                
                <a href="#promotions" className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                  Learn more about this offer
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="#promotions">
              View All Promotions
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
