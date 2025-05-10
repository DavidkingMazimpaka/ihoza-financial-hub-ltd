
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
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <HowWeWorkSection />
      <PromotionsSection />
      <ContactSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
