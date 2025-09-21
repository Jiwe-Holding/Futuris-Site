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
      features: ["Custom Workshops", "Insight Dashboards", "Strategic Roadmaps"],
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
              className={`group bg-white rounded-lg border border-gray-200 p-8 transition-all duration-300 cursor-pointer ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              } ${
                hoveredCard === index 
                  ? 'shadow-lg border-blue-600 -translate-y-1' 
                  : 'hover:shadow-md hover:border-gray-300'
              }`}
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-10 h-10 ${index >= 4 ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}>
                  {service.number}
                </div>
              </div>

              {/* Icon and Title on same line */}
              <div className="flex items-center mb-4">
                {/* Minimalist Icon */}
                <div className={`w-12 h-12 ${index >= 4 ? 'bg-red-50' : 'bg-blue-50'} rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ${
                  hoveredCard === index ? `${index >= 4 ? 'bg-red-100' : 'bg-blue-100'} scale-105` : ''
                }`}>
                  <div className={`${index >= 4 ? 'text-red-600' : 'text-blue-600'}`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-black transition-colors duration-300 ${
                  hoveredCard === index ? `${index >= 4 ? 'text-red-600' : 'text-blue-600'}` : ''
                }`}>
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 ${index >= 4 ? 'bg-red-600' : 'bg-blue-600'} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Subtle CTA */}
              <button 
                onClick={() => navigate(`/services#service-${index + 1}`)}
                className={`flex items-center text-sm font-medium ${index >= 4 ? 'text-red-600' : 'text-blue-600'} transition-all duration-300 hover:cursor-pointer ${
                  hoveredCard === index 
                    ? 'opacity-100 translate-x-1' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300" />
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
                className={`group bg-white rounded-lg border border-gray-200 p-8 transition-all duration-300 cursor-pointer ${
                  visibleItems.includes(index + 4) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                } ${
                  hoveredCard === index + 4 
                    ? 'shadow-lg border-gray-600 -translate-y-1' 
                    : 'hover:shadow-md hover:border-gray-300'
                }`}
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                    hoveredCard === index + 4 ? 'scale-105' : ''
                  }`}>
                    {methodology.number}
                  </div>
                </div>

                {/* Icon and Title on same line */}
                <div className="flex items-center mb-4">
                  {/* Minimalist Icon */}
                  <div className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ${
                    hoveredCard === index + 4 ? 'bg-gray-100 scale-105' : ''
                  }`}>
                    <div className="text-gray-600">
                      {methodology.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-black transition-colors duration-300 ${
                    hoveredCard === index + 4 ? 'text-gray-600' : ''
                  }`}>
                    {methodology.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {methodology.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {methodology.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Subtle CTA */}
                <button 
                  onClick={() => navigate('/services')}
                  className={`flex items-center text-sm font-medium text-gray-600 transition-all duration-300 hover:cursor-pointer ${
                    hoveredCard === index + 4 
                      ? 'opacity-100 translate-x-1' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300" />
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
