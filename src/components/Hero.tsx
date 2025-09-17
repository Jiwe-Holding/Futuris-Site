import { ArrowRight, Play, Shield, TrendingUp, Users, Zap, Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const rotatingTexts = [
    "Delivering best‑in‑class data quality and actionable insights",
    "Transforming data into strategic business intelligence",
    "Empowering decisions through advanced market research",
    "Your trusted partner for African market insights"
  ];


  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "30+", label: "African Markets" },
    { icon: <Users className="h-5 w-5" />, value: "3,685", label: "Field Agents" },
    { icon: <Zap className="h-5 w-5" />, value: "76", label: "Supervisors" },
    { icon: <Shield className="h-5 w-5" />, value: "11", label: "Qualitative Moderators" },
  ];

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
    // Animated counters
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = end;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 16);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-5 h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 pt-5 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl pt-5 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full text-white">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mt-32 sm:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center mb-6">
            <TrendingUp className="h-5 w-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-white/90 tracking-wide whitespace-nowrap">
              Research <span className="mx-2 text-blue-300">·</span> Data collection <span className="mx-2 text-blue-300">·</span> Quality Control <span className="mx-2 text-blue-300">·</span> Analytics <span className="mx-2 text-blue-300">·</span> Intelligence <span className="mx-2 text-blue-300">·</span> Insights
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-extrabold leading-tight mb-6 text-left">
            Futuris
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mb-10 text-left">
            Delivering best‑in‑class data quality and actionable insights through quantitative and qualitative methodologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-white/20 bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-medium flex items-center gap-2">
              <Play className="h-5 w-5" />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 mb-4 gap-6 max-w-4xl text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <img src="/assets/img/hero_bg.png" alt="Futuris Hero" className="max-w-[180px] sm:max-w-[250px] lg:max-w-[310px] xl:max-w-[350px] w-full h-auto rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

