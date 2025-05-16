
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BellIcon, Image, Printer, Phone, Banknote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import bankingImage from '/lovable-uploads/624304b7-e8a6-4706-9ee2-f666dd8db1a6.png';
import moneyTransferImage from '/lovable-uploads/342eb43b-64d4-4901-98a1-65054166a539.png';
import mobileMoneyImage from '/lovable-uploads/60ecafe9-656a-433f-9de2-4120f7133b39.png';

interface ServiceCardProps {
  icon?: React.ReactNode;
  imageUrl?: string;
  title: string;
  description: string;
  link: string;
  variant?: 'icon' | 'image';
  bannerClass?: string;
}

const ServiceCard = ({ icon, imageUrl,description, link, variant = 'icon', bannerClass }: ServiceCardProps) => {
  return (
    <Link to={link} className="block h-full">
      <Card className="service-card h-full overflow-hidden flex flex-col">
        
        <CardContent className={`${bannerClass ? 'p-4' : 'p-6'} flex flex-col h-full`}>
          {variant === 'icon' && icon && (
            <div className="mb-4 text-primary">
              {icon}
            </div>
          )}
          
          {variant === 'image' && imageUrl && (
            <div className="mb-4 w-full">
              <img 
                src={imageUrl} 
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          )}
          <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="flex items-center text-sm text-primary font-medium">
            <span>Learn more</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      variant: 'image',
      imageUrl: bankingImage,
      description: "Access banking services including deposits, withdrawals, and account opening for BK Yacu, BPR, Equity, and Ecobank.",
      link: "/services#",
      bannerClass: "banking-banner"
    },
    {
      variant: 'image',
      imageUrl: moneyTransferImage,
      title: "Money Transfers",
      description: "Send and receive money through Western Union, MoneyGram, RIA, M-Pesa, Airtel Money, and more.",
      link: "/services#transfers",
      bannerClass: "transfer-banner"
    },
    {
      variant: 'image',
      imageUrl: mobileMoneyImage,
      title: "Mobile Money",
      description: "Send and receive mobile money across Rwanda, Uganda, Kenya, Tanzania with MTN, Vodacom, Safaricom, and more.",
      link: "/services#mobile-money",
      bannerClass: "mobile-banner"
    },
    {
      icon: <BellIcon size={36} />,
      title: "Bill Payments",
      description: "Pay your REG, WASAC, RRA, and eFASHE bills quickly and efficiently without long queues.",
      link: "/services#bills"
    },
    {
      icon: <Phone size={36} />,
      title: "Airtime & Mobile Top-Up",
      description: "Purchase airtime and data bundles for all major telecom providers in Rwanda.",
      link: "/services#top-up"
    },
    {
      icon: <Printer size={36} />,
      title: "Printing Services",
      description: "Get documents printed, scanned, and photocopied at affordable rates.",
      link: "/services#printing"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IHOZA Financial Hub Ltd offers a comprehensive range of financial services tailored to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              link={service.link}
              variant={service.variant as 'icon' | 'image'}
              bannerClass={service.bannerClass}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
