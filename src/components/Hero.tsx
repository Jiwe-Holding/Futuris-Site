import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const integrations = [
    {
      name: "Microsoft",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Partenaire Gold Microsoft",
      category: "Cloud & Productivité"
    },
    {
      name: "AWS",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Advanced Technology Partner",
      category: "Infrastructure Cloud"
    },
    {
      name: "Google Cloud",
      logo: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Premier Partner",
      category: "Intelligence Artificielle"
    },
    {
      name: "Salesforce",
      logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Certified Partner",
      category: "CRM & Ventes"
    },
    {
      name: "IBM",
      logo: "https://images.pexels.com/photos/18139885/pexels-photo-18139885.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Business Partner",
      category: "Enterprise Solutions"
    },
    {
      name: "Oracle",
      logo: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      description: "Gold Partner",
      category: "Base de données"
    }
  ];

  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "200+", label: "Projets réalisés" },
    { icon: <Users className="h-5 w-5" />, value: "50+", label: "Clients satisfaits" },
    { icon: <Zap className="h-5 w-5" />, value: "15+", label: "Années d'expérience" },
    { icon: <Shield className="h-5 w-5" />, value: "99.9%", label: "Disponibilité" }
  ];

  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">Transformation Digitale</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Accélérez votre
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                croissance digitale
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nous accompagnons les entreprises dans leur transformation numérique avec des solutions innovantes et sur-mesure. Expertise, performance et résultats garantis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2">
                Commencer maintenant
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                Voir la démo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Partenaires Technologiques</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Integrations Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="group bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-2 mx-auto">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="text-xs text-white/80 text-center font-medium">
                      {integration.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Intégrations actives</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[85%] animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Performance</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[92%] animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-xl animate-float">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float delay-1000">
              <Zap className="h-6 w-6 text-white" />
            </div>

            <div className="absolute top-1/2 -right-12 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-lg animate-float delay-2000">
              <div className="text-sm text-white font-semibold">+24%</div>
              <div className="text-xs text-white/60">Croissance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;