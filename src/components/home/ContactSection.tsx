
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, WhatsApp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need assistance? We're here to help with all your financial service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-muted">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Phone</h4>
                  <p className="text-muted-foreground mb-1">+250 728 105 080</p>
                  <p className="text-muted-foreground">+250 795 591 014</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Email</h4>
                  <p className="text-muted-foreground">info@ihozafinancial.rw</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Address</h4>
                  <p className="text-muted-foreground">Kigali, Rwanda</p>
                  <p className="text-muted-foreground">Business hours: Mon-Fri 8AM-6PM, Sat 9AM-5PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                <WhatsApp className="mr-2" size={18} />
                Chat with Us on WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-muted h-full">
              <div className="relative overflow-hidden rounded-lg h-full min-h-[300px]">
                {/* This is a placeholder for the Google Map embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41051872461!2d30.03390269449372!3d-1.9441077483539164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411c0117!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1714888409400!5m2!1sen!2sus"
                  className="w-full h-full absolute inset-0 border-0"
                  allowFullScreen
                  loading="lazy"
                  title="IHOZA Financial Hub Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="/contact">
              View Full Contact Information
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
