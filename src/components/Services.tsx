import React, { useState, useEffect, useRef } from 'react';
import { Clipboard, CheckCircle, Lightbulb, Eye, Users, ArrowRight, ShoppingBag, Heart, UserCheck, BarChart2, MessageSquare, Star, Package, DollarSign, Search, Users2, TrendingUp, Layers, Crown } from 'lucide-react';
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
      title: "Insights & Intelligence",
      description: "Secret‑shopper studies to benchmark service levels and customer experience quality.",
      features: ["Scenario Design", "Field Execution", "Detailed Reporting"],
      color: "from-pink-500 to-pink-600"
    },
  ];

  const methodologies = [
    {
      number: "11",
      icon: <Users2 className="h-6 w-6" />,
      title: "Social Research",
      description: "Understanding social dynamics, cultural trends, and community behaviors to inform strategic decision-making and social impact initiatives.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
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
    },
    {
      number: "05",
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Usage & Attitude Study",
      description: "To understand a market and identify customer usage and customer attitude toward products and services.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "06",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Communication Research",
      description: "To identify effectiveness communication organization, also to know patterns of customer toward communication",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "07",
      icon: <Star className="h-6 w-6" />,
      title: "Brand Research",
      description: "To identify company brand health, and to know threats and opportunities from customer insight. Brand research assists with the creation, development and strengthening of brands.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "08",
      icon: <Package className="h-6 w-6" />,
      title: "Product Research",
      description: "To understand customer needs toward product. Product research useful for New product development, product improvement, test new features, test marketing, revitalizing a declining product etc.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "09",
      icon: <DollarSign className="h-6 w-6" />,
      title: "Pricing Research",
      description: "To measure acceptability toward product price and to determine the maximum price for new products.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "10",
      icon: <Search className="h-6 w-6" />,
      title: "Competitor Intelligence",
      description: "To gathering relevant information from the market, to analyzed, and for decision making in determining market opportunity, market penetration strategy & market development.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "12",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Market Sizing",
      description: "Comprehensive analysis to determine market volume, potential, and growth opportunities across different segments and regions.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "13",
      icon: <Layers className="h-6 w-6" />,
      title: "Segmentation",
      description: "Identifying and analyzing distinct customer groups to develop targeted strategies and personalized approaches for different market segments.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "14",
      icon: <Crown className="h-6 w-6" />,
      title: "Brand Archetype",
      description: "Defining brand personality and archetypal positioning to create authentic connections with target audiences and differentiate from competitors.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      number: "11",
      icon: <Users2 className="h-6 w-6" />,
      title: "Market Intelligence",
      description: "Understanding social dynamics, cultural trends, and community behaviors to inform strategic decision-making and social impact initiatives.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
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
              <span className="block text-blue-600">
                We Offer...
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              a comprehensive data collection, quality control, and analytics services
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Research Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Providing the best- in class research solution.....
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                ref={(el) => cardRefs.current[index + 4] = el}
                onMouseEnter={() => setHoveredCard(index + 4)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-gray-800 rounded-xl border border-gray-700 p-4 transition-all duration-300 cursor-pointer ${
                  visibleItems.includes(index + 4) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                } ${
                  hoveredCard === index + 4 
                    ? 'shadow-lg border-gray-500 -translate-y-1' 
                    : 'hover:shadow-md hover:border-gray-600'
                }`}
              >
                {/* Title and Learn More Link */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-white transition-colors duration-300 mb-2 ${
                    hoveredCard === index + 4 ? 'text-gray-100' : ''
                  }">
                    {methodology.title}
                  </h3>
                  <button 
                    onClick={() => {
                      navigate('/services');
                      setTimeout(() => {
                        const element = document.getElementById(`service-${index + 5}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="text-xs text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    Learn More →
                  </button>
                </div>
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
