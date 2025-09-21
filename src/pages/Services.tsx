import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { ArrowRight, CheckCircle, Users, Clipboard, Lightbulb, Eye, BarChart2, ShoppingBag, Heart, UserCheck, MessageSquare, Star, Package, DollarSign, Search, Users2, TrendingUp, Layers, Crown } from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();
  
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
        "DataBase Validation"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Data Analytics",
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
      title: "Insights & Strategic",
      description: "Secret‑shopper studies to benchmark service levels and customer experience quality.",
      features: [
        "Scenario Design",
        "Field Execution", 
        "Detailed Reporting"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  const methods = [
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
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Mystery Shopping",
      description: "To provide from Customer Experiences - Mystery shopping help organizations to measure their service level",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "To find out what customers think about your organizations and also help organizations measure their customer's expectation.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Employee Satisfaction",
      description: "To find out what employee's expectation. Describe whether employees are happy, contended and fulfilling their desires and needs at work.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Usage & Attitude Study",
      description: "To understand a market and identify customer usage and customer attitude toward products and services.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Communication Research",
      description: "To identify effectiveness communication organization, also to know patterns of customer toward communication",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Brand Research",
      description: "To identify company brand health, and to know threats and opportunities from customer insight. Brand research assists with the creation, development and strengthening of brands.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Product Research",
      description: "To understand customer needs toward product. Product research useful for New product development, product improvement, test new features, test marketing, revitalizing a declining product etc.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Pricing Research",
      description: "To measure acceptability toward product price and to determine the maximum price for new products.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Competitor Intelligence",
      description: "To gathering relevant information from the market, to analyzed, and for decision making in determining market opportunity, market penetration strategy & market development.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Social Research",
      description: "Understanding social dynamics, cultural trends, and community behaviors to inform strategic decision-making and social impact initiatives.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Sizing",
      description: "Comprehensive analysis to determine market volume, potential, and growth opportunities across different segments and regions.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Segmentation",
      description: "Identifying and analyzing distinct customer groups to develop targeted strategies and personalized approaches for different market segments.",
      features: [],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Brand Archetype",
      description: "Defining brand personality and archetypal positioning to create authentic connections with target audiences and differentiate from competitors.",
      features: [],
      color: "from-gray-500 to-gray-600"
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} id={`service-${index + 1}`} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md hover:border-blue-200 transition-all duration-300">
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

      {/* Research Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {methods.map((method, index) => (
              <div key={index} id={`service-${index + 5}`} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <ul className="space-y-3">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
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
          <button 
            onClick={() => navigate('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold inline-flex items-center gap-2"
          >
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
