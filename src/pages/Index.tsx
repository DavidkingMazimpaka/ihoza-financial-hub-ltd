
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import PromotionsSection from '@/components/home/PromotionsSection';
import ContactSection from '@/components/home/ContactSection';
import CallToAction from '@/components/home/CallToAction';
import PartnersSection from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <Layout>
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="how-we-work">
        <HowWeWorkSection />
      </div>
      <div id="promotions">
        <PromotionsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <CallToAction />
    </Layout>
  );
};

export default Index;
