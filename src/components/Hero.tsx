import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const integrations = [
    { name: "CATI & CAPI", logo: "/assets/img/services/CC.png" },
    { name: "Panel Surveys", logo: "/assets/img/services/PS.png" },
    { name: "Focus Groups", logo: "/assets/img/services/FG.png" },
    { name: "IDI Interviews", logo: "/assets/img/services/IDI.png" },
    { name: "Mystery Shopping", logo: "/assets/img/services/MS.png" },
    { name: "Consulting & Training", logo: "/assets/img/services/CT.png" }
  ];

  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "30+", label: "African Markets" },
    { icon: <Users className="h-5 w-5" />, value: "3,685", label: "Field Agents" },
    { icon: <Zap className="h-5 w-5" />, value: "76", label: "Supervisors" },
    { icon: <Shield className="h-5 w-5" />, value: "11", label: "Qualitative Moderators" }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
              <span className="text-sm font-medium text-white/90">Market Research</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionizing
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Industry Insights
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Delivering best‑in‑class data quality and actionable insights through quantitative and qualitative methodologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-2">
                <Play className="h-5 w-5" />
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content – Methodologies Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Our Methodologies</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {integrations.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-2 mx-auto">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="text-xs text-white/80 text-center font-medium">{item.name}</div>
                  </div>
                ))}
              </div>
              {/* Progress Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Active Markets</span>
                    <span>30+</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[30%] animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Field Coverage</span>
                    <span>3,685</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[60%] animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-xl animate-float">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float delay-1000">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -right-12 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-lg animate-float delay-2000">
              <div className="text-sm text-white font-semibold">76</div>
              <div className="text-xs text-white/60">Supervisors</div>
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
