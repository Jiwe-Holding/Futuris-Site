import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Globe, Target, ArrowRight, TrendingUp } from 'lucide-react';

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Corporate Header */}
        <div 
          ref={(el) => sectionRefs.current['header'] = el}
          data-section="header"
          className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">About FUTURIS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Your Market Research Partner
            <span className="block text-blue-600">
              across 30 African markets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Delivering best‑in‑class data quality and insights through quantitative and qualitative methodologies.
          </p>
        </div>

        {/* Corporate Mission & History */}
        <div 
          ref={(el) => sectionRefs.current['mission'] = el}
          data-section="mission"
          className={`bg-white rounded-lg shadow-sm border border-gray-200 p-12 mb-16 transition-all duration-700 ${
            visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                Our Mission & Story
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2009, FUTURIS was born from the conviction that data-driven insights can revolutionize industry practices. We combine technical expertise, strategic vision and human-centric approach to deliver sustainable, high‑impact research.
                </p>
                <p>
                  Our multidisciplinary team of consultants, field agents and analysts works closely with clients at every step—from initial brief and proposal to fieldwork, quality control and final reporting—to ensure excellence and speed in every project.
                </p>
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold inline-flex items-center">
                Meet Our Team
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>

            {/* Corporate Illustration */}
            <div className="relative">
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="FUTURIS Team"
                  className="rounded-lg w-full"
                />
              </div>
              {/* Floating Stats */}
              <div className={`absolute -top-4 -right-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm transition-all duration-700 ${
                visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {statsCounters[0]}+
                  </div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
              </div>
              <div className={`absolute -bottom-4 -left-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm transition-all duration-700 delay-200 ${
                visibleSections.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {statsCounters[1]}+
                  </div>
                  <div className="text-sm text-gray-500">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Core Values */}
        <div 
          ref={(el) => sectionRefs.current['values'] = el}
          data-section="values"
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-black text-center mb-12 transition-all duration-700 ${
            visibleSections.includes('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-lg border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-md hover:border-blue-200 ${
                  counters[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-blue-100">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-black mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Team Stats */}
        <div 
          ref={(el) => sectionRefs.current['stats'] = el}
          data-section="stats"
          className={`bg-white rounded-lg shadow-sm border border-gray-200 p-12 transition-all duration-700 ${
            visibleSections.includes('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Team by the Numbers</h3>
            <p className="text-gray-600 text-lg">
              Our footprint and expertise in figures
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
                  {i < 2 ? 
                    `${statsCounters[i + 2]}${stat.number.includes('+') ? '+' : ''}` :
                    stat.number
                  }
                </div>
                <div className="text-gray-500 font-medium">
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
