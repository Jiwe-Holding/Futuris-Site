import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { ArrowRight, CheckCircle, Users, Clipboard, Lightbulb, Eye, BarChart2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Clipboard className="h-8 w-8" />,
      title: "Data Collection",
      description: "On‑the‑ground data collection, observation and verification across 30 African markets.",
      features: [
        "Face‑to‑Face Interviews (CAPI)",
        "CATI Stations/Interviews", 
        "Focus Groups",
        "In‑depth Interviews",
        "Central Location Test",
        "Computer Assisted Telephone Interview",
        "Mystery Shopping",
        "Intelligence data",
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Control",
      description: "Rigorous multi‑level checks to ensure data accuracy and reliability at every step.",
      features: [
        "Real‑time Monitoring",
        "Forensic Checks",
        "Supervisor Audits/ Physical Checks", 
        "DataBase Validation",
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Intelligence & Training",
      description: "Bespoke consultancy, analytics and training programs to elevate your team's capabilities.",
      features: [
        "Custom Workshops",
        "Insight Dashboards", 
        "Strategic Roadmaps"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Mystery Shopping",
      description: "Secret‑shopper studies to benchmark service levels and customer experience quality.",
      features: [
        "Scenario Design",
        "Field Execution", 
        "Detailed Reporting"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Usage & Attitude Research",
      description: "Understanding customer usage patterns and attitudes to drive product and service innovation.",
      features: [
        "Panel Surveys",
        "Usage Tracking", 
        "Attitudinal Analysis"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Brand & Pricing Studies",
      description: "Strategic brand positioning and pricing optimization for maximum market impact.",
      features: [
        "Brand Equity Analysis",
        "Price Sensitivity Studies", 
        "Market Positioning Research"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Corporate Hero with Image */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        {/* Corporate Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')"
          }}
        />
        {/* Corporate Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-sm font-medium text-white uppercase tracking-wide">Our Services</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive Market Research
            <span className="block text-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive market research solutions designed to deliver actionable insights across 30 African markets.
          </p>
        </div>
      </section>

      {/* Corporate Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Market Research?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss how our comprehensive services can help you achieve your business objectives.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Services;
