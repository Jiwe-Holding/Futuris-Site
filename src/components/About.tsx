import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Globe, Target, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);
  const [statsCounters, setStatsCounters] = useState([0, 0, 0, 0]);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId && !visibleSections.includes(sectionId)) {
              setVisibleSections(prev => [...prev, sectionId]);
              
              // Trigger counter animations
              if (sectionId === 'stats') {
                animateStatsCounters();
              }
              if (sectionId === 'values') {
                animateValuesCounters();
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  const animateStatsCounters = () => {
    const targets = [200, 15, 30, 3685];
    targets.forEach((target, index) => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setStatsCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setStatsCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }
      }, 16);
    });
  };

  const animateValuesCounters = () => {
    values.forEach((_, index) => {
      setTimeout(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = 1;
          return newCounters;
        });
      }, index * 200);
    });
  };
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Research",
      description: "In-depth exploration to uncover actionable insights.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Data collection",
      description: "Robust methodologies to gather reliable data.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Quality Control",
      description: "Rigorous checks to ensure data accuracy and integrity.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Analytics",
      description: "Advanced analysis to transform data into knowledge.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Intelligence",
      description: "Strategic intelligence for informed decision-making.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Insights",
      description: "Clear, actionable insights to drive your success.",
      color: "from-yellow-500 to-yellow-600"
    },
  ];

  const stats = [
    { number: "30+", label: "African Markets", target: 30 },
    { number: "3,685", label: "Field Agents", target: 3685 },
    { number: "76", label: "Supervisors", target: 76 },
    { number: "11", label: "Qualitative Moderators", target: 11 }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-64 right-24 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div 
          ref={(el) => sectionRefs.current['header'] = el}
          data-section="header"
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 text-sm font-medium text-gray-300 hover:border-blue-400/50 transition-all duration-300 group">
            <Sparkles className="h-4 w-4 text-blue-400 mr-2 group-hover:animate-pulse" />
            <span>About FUTURIS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Your Market Research Partner
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              across 30 African markets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering best‑in‑class data quality and insights through quantitative and qualitative methodologies.
          </p>
        </div>

        {/* Enhanced Mission & History */}
        <div 
          ref={(el) => sectionRefs.current['mission'] = el}
          data-section="mission"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 ${
            visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-400 mr-3" />
                Our Mission & Story
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="transform transition-all duration-700 hover:text-white">
                  Founded in 2009, FUTURIS was born from the conviction that data-driven insights can revolutionize industry practices. We combine technical expertise, strategic vision and human-centric approach to deliver sustainable, high‑impact research.
                </p>
                <p className="transform transition-all duration-700 hover:text-white">
                  Our multidisciplinary team of consultants, field agents and analysts works closely with clients at every step—from initial brief and proposal to fieldwork, quality control and final reporting—to ensure excellence and speed in every project.
                </p>
              </div>
            </div>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Meet Our Team</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Enhanced Illustration */}
          <div className="relative group">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="FUTURIS Team"
                className="rounded-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Enhanced Floating Stats */}
            <div className={`absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-700 ${
              visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {statsCounters[0]}+
                </div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
            </div>
            <div className={`absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-700 delay-300 ${
              visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {statsCounters[1]}+
                </div>
                <div className="text-sm text-gray-300">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Core Values */}
        <div 
          ref={(el) => sectionRefs.current['values'] = el}
          data-section="values"
          className="mb-24"
        >
          <h3 className={`text-3xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            visibleSections.includes('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className={`group text-center transition-all duration-700 transform ${
                  counters[i] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Team Stats */}
        <div 
          ref={(el) => sectionRefs.current['stats'] = el}
          data-section="stats"
          className={`bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl transition-all duration-1000 ${
            visibleSections.includes('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Team by the Numbers</h3>
            <p className="text-gray-300 text-lg">
              Our footprint and expertise in figures
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
                  {i < 2 ? 
                    `${statsCounters[i + 2]}${stat.number.includes('+') ? '+' : ''}` :
                    stat.number
                  }
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
