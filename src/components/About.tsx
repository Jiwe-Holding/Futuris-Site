import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Star, Handshake, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
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
      icon: <Star className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, upholding the highest quality standards.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work hand‑in‑hand with our clients to deliver optimal results.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace cutting‑edge technologies and methodologies to stay at the forefront.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We maintain transparency and fairness in all our engagements.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Liste des pays africains (triés par ordre alphabétique)
  const africanCountries = [
    "Angola", "Botswana", "Burkina-Faso", "Burundi", "CAR", "Cameroun", "Chad",
    "Comoros", "Congo B (ROC)", "DRC", "Egypt", "Ethiopia", "Ghana", "Ivory Coast",
    "Kenya", "Madagascar", "Mali", "Morocco", "Mozambique", "Niger", "Nigeria",
    "Rwanda", "Senegal", "South Africa", "Sudan", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
  ];

  // Animation des pays - affichage de tous les pays
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryIndex(prev => (prev + 1) % africanCountries.length);
    }, 2000); // Change toutes les 2 secondes

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6 leading-tight">
              We cover 29 African markets...
          </h2>
          
          {/* Liste animée des pays africains */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-medium text-gray-600">
              {africanCountries.map((country, index) => (
                <span 
                  key={country}
                  className={`px-3 py-1 rounded-full border shadow-sm transition-all duration-500 ease-in-out ${
                    index === currentCountryIndex 
                      ? 'bg-blue-600 text-white border-blue-600 scale-110 shadow-lg' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
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
              <h3 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
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
            </div>
          </div>
        </div>

        {/* Corporate Core Values */}
        <div 
          ref={(el) => sectionRefs.current['values'] = el}
          data-section="values"
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-blue-600 text-center mb-12 transition-all duration-700 ${
            visibleSections.includes('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      </div>
    </section>
  );
};

export default About;
