
import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowWeWorkSection = () => {
  const deliveryMethods = [
    {
      title: "Walk-In Service",
      description: "Visit our physical location for immediate assistance with any of our services.",
      icon: "👣"
    },
    {
      title: "WhatsApp Requests",
      description: "Send your service requests via WhatsApp for quick and convenient processing.",
      icon: "💬"
    },
    {
      title: "Aggregator Platforms",
      description: "Access our services through trusted platforms like Njira or Nala.",
      icon: "🔄"
    }
  ];
  
  const complianceItems = [
    "Registered with Rwanda Development Board (RDB)",
    "Compliant with Rwanda Utilities Regulatory Authority (RURA)",
    "Adherent to National Bank of Rwanda (NBR) regulations"
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've simplified our processes to provide you with seamless access to our financial services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-muted hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-3">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Commitment to Compliance</h3>
              <p className="mb-6 text-muted-foreground">
                At IHOZA Financial Hub, we pride ourselves on maintaining the highest standards of regulatory 
                compliance and transparency in all our operations.
              </p>
              
              <ul className="space-y-4">
                {complianceItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="shrink-0 mr-3 h-6 w-6 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                {/* Rwanda-colored gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rwanda-blue/20 via-rwanda-yellow/20 to-rwanda-green/20 z-10"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800" 
                  alt="Rwanda landscape" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
