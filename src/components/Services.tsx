import React from 'react';
import { TrendingUp, Zap, Database, Shield, Users, Lightbulb, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: "01",
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Conseil Stratégique",
      description: "Développement de stratégies sur-mesure pour optimiser votre performance et anticiper les défis futurs.",
      features: ["Analyse concurrentielle", "Stratégie digitale", "Optimisation des processus"],
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: <Zap className="h-6 w-6" />,
      title: "Transformation Digitale",
      description: "Accompagnement complet dans votre mutation numérique pour une entreprise plus agile et performante.",
      features: ["Digitalisation des processus", "Solutions cloud", "Automatisation"],
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: <Database className="h-6 w-6" />,
      title: "Data & Analytics",
      description: "Exploitation intelligente de vos données pour des décisions éclairées et une croissance durable.",
      features: ["Business Intelligence", "Machine Learning", "Tableaux de bord"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "04",
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersécurité",
      description: "Protection avancée de vos actifs numériques avec des solutions de sécurité robustes et évolutives.",
      features: ["Audit de sécurité", "Protection des données", "Formation équipes"],
      color: "from-red-500 to-red-600"
    },
    {
      number: "05",
      icon: <Users className="h-6 w-6" />,
      title: "Change Management",
      description: "Conduite du changement personnalisée pour une adoption réussie de vos nouvelles solutions.",
      features: ["Formation utilisateurs", "Gestion des résistances", "Communication interne"],
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "06",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation & R&D",
      description: "Développement de solutions innovantes et recherche de nouvelles opportunités technologiques.",
      features: ["Veille technologique", "POC/MVP", "Partenariats stratégiques"],
      color: "from-pink-500 to-pink-600"
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
            <span className="text-sm font-medium text-blue-300">Nos Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Une gamme complète de
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              solutions expertes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous accompagnons votre transformation et maximisons votre potentiel 
            de croissance avec des services sur-mesure.
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
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="flex items-center text-blue-400 font-semibold hover:text-purple-400 transition-colors group-hover:gap-3 gap-2">
                En savoir plus
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
            Découvrir tous nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;