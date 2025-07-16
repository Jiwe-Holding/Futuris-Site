import React from 'react';
import { Clipboard, CheckCircle, Lightbulb, Eye, BarChart2, Users } from 'lucide-react';

const Services: React.FC = () => {
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
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full border border-blue-500/30 mb-6">
            <span className="text-sm font-medium text-blue-300">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive Market Research
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Data Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering end‑to‑end insights—from field data collection to strategic intelligence—to power your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-sm">{service.number}</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
