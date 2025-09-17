import React, { useState, useEffect, useRef } from 'react';
import { Clipboard, CheckCircle, Lightbulb, Eye, BarChart2, Users, ArrowRight, Zap } from 'lucide-react';

const Services: React.FC = () => {
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
      title: "Fieldwork & Verification",
      description: "On‑the‑ground data collection, observation and verification across 30 African markets.",
      features: ["Face‑to‑Face Interviews", "Mall Intercepts", "CATI Stations"],
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Control",
      description: "Rigorous multi‑level checks to ensure data accuracy and reliability at every step.",
      features: ["Data Validation", "Supervisor Audits", "Real‑time Monitoring"],
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Intelligence & Training",
      description: "Bespoke consultancy, analytics and training programs to elevate your team’s capabilities.",
      features: ["Custom Workshops", "Insight Dashboards", "Strategic Roadmaps"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "04",
      icon: <Eye className="h-6 w-6" />,
      title: "Mystery Shopping",
      description: "Secret‑shopper studies to benchmark service levels and customer experience quality.",
      features: ["Scenario Design", "Field Execution", "Detailed Reporting"],
      color: "from-pink-500 to-pink-600"
    },
    {
      number: "05",
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Usage & Attitude Research",
      description: "Understanding customer usage patterns and attitudes to drive product and service innovation.",
      features: ["Panel Surveys", "Usage Tracking", "Attitudinal Analysis"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: "06",
      icon: <Users className="h-6 w-6" />,
      title: "Brand & Pricing Studies",
      description: "Evaluating brand health and price sensitivity to inform positioning and growth strategies.",
      features: ["Brand Health Tracking", "Price Testing", "Competitive Benchmarking"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group">
            <Zap className="h-4 w-4 text-blue-400 mr-2 group-hover:animate-pulse" />
            <span className="text-sm font-medium text-blue-300">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 animate-fadeInUp">
            Comprehensive Market Research
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              & Data Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
            Delivering end‑to‑end insights—from field data collection to strategic intelligence—to power your growth.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg transition-all duration-700 transform cursor-pointer ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${
                hoveredCard === index 
                  ? 'shadow-2xl shadow-blue-500/20 -translate-y-4 bg-white/15 border-blue-400/30 scale-105' 
                  : 'hover:shadow-2xl hover:-translate-y-2'
              }`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-3xl transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-10' : ''
              }`}></div>

              {/* Enhanced Number Badge */}
              <div className="absolute -top-4 -left-4 z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredCard === index ? 'scale-110 shadow-xl' : ''
                }`}>
                  <span className="text-white font-bold text-sm">{service.number}</span>
                </div>
              </div>

              {/* Pulsing Corner Indicator */}
              <div className="absolute -top-2 -right-2">
                <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full transition-all duration-300 ${
                  hoveredCard === index ? 'animate-ping' : 'opacity-0'
                }`}></div>
              </div>

              {/* Enhanced Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${
                hoveredCard === index ? 'scale-110 rotate-3 shadow-xl' : 'group-hover:scale-105'
              }`}>
                <div className="text-white transform transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Enhanced Content */}
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                hoveredCard === index ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
              }`}>
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                {service.description}
              </p>

              {/* Enhanced Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-center text-sm transition-all duration-300 delay-${i * 100} ${
                    hoveredCard === index ? 'text-gray-200 translate-x-1' : 'text-gray-400'
                  }`}>
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 transition-all duration-300 ${
                      hoveredCard === index ? 'scale-125 shadow-sm' : ''
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Interactive CTA */}
              <div className={`flex items-center text-sm font-medium transition-all duration-300 ${
                hoveredCard === index 
                  ? 'text-blue-400 opacity-100 translate-y-0' 
                  : 'text-transparent opacity-0 translate-y-2'
              }`}>
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${service.color} transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-20' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-semibold mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                View All Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <p className="text-sm text-gray-400">
              Discover how we can transform your business insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
