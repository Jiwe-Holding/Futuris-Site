import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { ArrowRight, CheckCircle, Users, Target, Shield, TrendingUp, Globe, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fieldwork & Verification",
      description: "Comprehensive data collection across 30 African markets with rigorous verification processes.",
      features: [
        "Multi-channel data collection (CATI, CAPI, Online)",
        "Real-time quality monitoring",
        "Local field agent networks",
        "Cross-cultural research expertise"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Control",
      description: "Advanced quality assurance protocols ensuring data integrity and reliability.",
      features: [
        "Automated data validation",
        "Multi-level verification checks",
        "Statistical quality metrics",
        "ISO 20252 compliance"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics & Intelligence",
      description: "Transform raw data into actionable business intelligence and strategic insights.",
      features: [
        "Advanced statistical analysis",
        "Predictive modeling",
        "Market trend analysis",
        "Competitive intelligence"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mystery Shopping",
      description: "Comprehensive mystery shopping programs to evaluate customer experience and service quality.",
      features: [
        "Multi-location coverage",
        "Detailed performance reports",
        "Competitor benchmarking",
        "Actionable recommendations"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Usage & Attitude Research",
      description: "Deep understanding of consumer behavior, preferences, and market dynamics.",
      features: [
        "Consumer segmentation",
        "Brand perception studies",
        "Purchase decision analysis",
        "Market opportunity assessment"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Brand & Pricing Studies",
      description: "Strategic brand positioning and pricing optimization for maximum market impact.",
      features: [
        "Brand equity measurement",
        "Price sensitivity analysis",
        "Market positioning studies",
        "ROI optimization"
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
