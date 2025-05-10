
import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Trust",
      description: "We build lasting relationships with our customers by delivering on our promises and maintaining the highest standards of integrity."
    },
    {
      title: "Transparency",
      description: "Clear communication and honest practices are at the core of our operations, ensuring our customers always know what to expect."
    },
    {
      title: "Community Impact",
      description: "We're committed to making a positive difference in our community by providing accessible financial services for all."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we offer, continuously improving to exceed customer expectations."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About IHOZA Financial Hub</h1>
            <p className="text-xl text-white/90">
              Your trusted partner for comprehensive financial solutions in Rwanda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                IHOZA Financial Hub Ltd was founded with a clear vision - to create a one-stop shop for financial solutions that serve both local and cross-border customers with fast, secure, and reliable services.
              </p>
              <p className="mb-4 text-muted-foreground">
                Since our establishment, we've been committed to bridging financial gaps in our community, making essential services accessible to everyone, and helping our customers navigate their financial needs with ease.
              </p>
              <p className="text-muted-foreground">
                Our focus on trust, transparency, and community impact has made us a preferred financial services provider in Rwanda, continually evolving to meet the changing needs of our customers.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-[5px] border-white">
                <div className="absolute inset-0 bg-gradient-to-r from-rwanda-blue via-rwanda-yellow to-rwanda-green opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=800"
                  alt="IHOZA Financial Hub Story"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rwanda-green/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Our Values */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at IHOZA Financial Hub Ltd.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-muted shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 my-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Why Choose IHOZA</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer distinct advantages that set us apart from other financial service providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-rwanda-blue">🔄</div>
                <h3 className="text-lg font-bold mb-3">One-Stop Financial Hub</h3>
                <p className="text-muted-foreground">Access multiple financial services in one convenient location without the need to visit different providers.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-rwanda-yellow">⏱️</div>
                <h3 className="text-lg font-bold mb-3">Fast & Efficient Service</h3>
                <p className="text-muted-foreground">Quick processing times and efficient service delivery, saving you valuable time on your financial transactions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-rwanda-green">🤝</div>
                <h3 className="text-lg font-bold mb-3">Customer-Focused Approach</h3>
                <p className="text-muted-foreground">Personalized service that prioritizes your needs, with staff ready to assist and guide you through any process.</p>
              </div>
            </div>
          </div>

          {/* Compliance & Partners */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance & Partners</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We maintain the highest standards of regulatory compliance and partner with trusted institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg border border-muted shadow-sm">
                <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="shrink-0 mr-3 h-5 w-5 text-primary mt-0.5" />
                    <span>Registered with Rwanda Development Board (RDB)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="shrink-0 mr-3 h-5 w-5 text-primary mt-0.5" />
                    <span>Compliant with Rwanda Utilities Regulatory Authority (RURA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="shrink-0 mr-3 h-5 w-5 text-primary mt-0.5" />
                    <span>Adherent to National Bank of Rwanda (NBR) regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="shrink-0 mr-3 h-5 w-5 text-primary mt-0.5" />
                    <span>Regular compliance audits and updates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-muted shadow-sm">
                <h3 className="text-xl font-bold mb-4">Our Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">BK Yacu</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">BPR</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">Equity Bank</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">Ecobank</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">Western Union</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-md flex items-center justify-center h-20">
                    <span className="font-bold text-primary">MoneyGram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
