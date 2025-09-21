import React, { useState, useEffect, useRef } from 'react';
import { Clipboard, CheckCircle, Lightbulb, Eye, Users, ArrowRight, ShoppingBag, Heart, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);
  const services = [
    {
      number: "01",
      icon: <Clipboard className="h-6 w-6" />,
      title: "Data Collection",
      description: "On‑the‑ground data collection, observation and verification across 30 African markets.",
      features: ["Face‑to‑Face Interviews (CAPI)", "CATI Stations/Interviews", "Focus Groups", "In‑depth Interviews"],
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Control",
      description: "Rigorous multi‑level checks to ensure data accuracy and reliability at every step.",
      features: [ "Real‑time Monitoring",
        "Forensic Checks",
        "Supervisor Audits/ Physical Checks", 
        "DataBase Validation",],
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Bespoke consultancy, analytics and training programs to elevate your team's capabilities.",
      features: ["Custom Workshops", "Insight Dashboards", "Strategic Roadmaps", "Data Visualization"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "04",
      icon: <Eye className="h-6 w-6" />,
      title: "Insights & Strategic",
      description: "Secret‑shopper studies to benchmark service levels and customer experience quality.",
      features: ["Scenario Design", "Field Execution", "Detailed Reporting"],
      color: "from-pink-500 to-pink-600"
    },
  ];

  const methodologies = [
    {
      number: "01",
      icon: <Users className="h-6 w-6" />,
      title: "Brand & Pricing Studies",
      description: "Evaluating brand health and price sensitivity to inform positioning and growth strategies.",
      features: ["Brand Health Tracking", "Price Testing", "Competitive Benchmarking"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "02",
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Mystery Shopping",
      description: "To provide from Customer Experiences - Mystery shopping help organizations to measure their service level",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "03",
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Satisfaction",
      description: "To find out what customers think about your organizations and also help organizations measure their customer's expectation.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "04",
      icon: <UserCheck className="h-6 w-6" />,
      title: "Employee Satisfaction",
      description: "To find out what employee's expectation. Describe whether employees are happy, contended and fulfilling their desires and needs at work.",
      features: [],
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Core Services
              <span className="block text-blue-600">
                & Data Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive data collection, quality control, and analytics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 p-8 transition-all duration-500 cursor-pointer ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              } ${
                hoveredCard === index 
                  ? 'shadow-2xl border-blue-400 -translate-y-2 scale-105' 
                  : 'hover:shadow-lg hover:border-blue-300'
              }`}
            >
              {/* Icon with gradient background */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100'
                }`}>
                  <div className="text-white text-2xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title centered */}
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-blue-700 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features with checkmarks */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-blue-800">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={() => navigate(`/services#service-${index + 1}`)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        </div>

        {/* Methodologies Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Research Methods</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Research Methods
              <span className="block text-gray-600">
                & Specialized Studies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specialized research methodologies to understand market dynamics and consumer behavior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                ref={(el) => cardRefs.current[index + 4] = el}
                onMouseEnter={() => setHoveredCard(index + 4)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-gray-50 rounded-none border-l-4 border-gray-400 p-6 transition-all duration-500 cursor-pointer ${
                  visibleItems.includes(index + 4) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                } ${
                  hoveredCard === index + 4 
                    ? 'border-l-gray-600 -translate-y-1 shadow-lg bg-white' 
                    : 'hover:border-l-gray-500 hover:bg-gray-100'
                }`}
              >
                {/* Minimalist header with icon and title */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 bg-gray-200 rounded-none flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index + 4 ? 'bg-gray-300 scale-110' : ''
                  }`}>
                    <div className="text-gray-700">
                      {methodology.icon}
                    </div>
                  </div>
                  <div className={`w-6 h-6 border-2 border-gray-300 rounded-full transition-all duration-300 ${
                    hoveredCard === index + 4 ? 'border-gray-500 bg-gray-400' : ''
                  }`}></div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-light text-gray-800 mb-3 leading-tight">
                  {methodology.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {methodology.description}
                </p>

                {/* Minimalist divider */}
                <div className="w-full h-px bg-gray-300 mb-4"></div>

                {/* Subtle CTA */}
                <button 
                  onClick={() => navigate('/services')}
                  className={`group/btn flex items-center text-xs font-light text-gray-500 hover:text-gray-800 transition-all duration-300 ${
                    hoveredCard === index + 4 
                      ? 'opacity-100' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <span>EXPLORE</span>
                  <ArrowRight className="h-3 w-3 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/services')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold inline-flex items-center"
          >
            View All Services
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Discover how we can transform your business insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
