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
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Mini Hero */}
      <section className="pt-32 pb-32 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg')",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive market research solutions designed to deliver actionable insights across 30 African markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Market Research?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our comprehensive services can help you achieve your business objectives.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold flex items-center gap-2 mx-auto">
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
