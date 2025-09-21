import { ArrowRight, Play, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "29", label: "African Markets" },
    { icon: <Users className="h-5 w-5" />, value: "3,685", label: "Field Agents" },
    { icon: <Zap className="h-5 w-5" />, value: "76", label: "Supervisors" },
    { icon: <Shield className="h-5 w-5" />, value: "11", label: "Qualitative Moderators" },
  ];

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
      <div className="relative z-10 max-w-7xl pt-5 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between h-full text-white">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mt-20 sm:mt-24 lg:mt-0">
          {/* Corporate Badge */}
          <div className="inline-flex items-center mb-4 sm:mb-6">
            <div className="flex items-center  rounded-full px-3 sm:px-4 py-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                <div className="hidden sm:block">
                  <div>Research <span className="mx-1 sm:mx-2 text-blue-600">·</span> Data collection <span className="mx-1 sm:mx-2 text-blue-600">·</span> Quality Control</div>
                  <div>Analytics <span className="mx-1 sm:mx-2 text-blue-600">·</span> Intelligence <span className="mx-1 sm:mx-2 text-blue-600">·</span> Insights</div>
                </div>
                <span className="sm:hidden">Research <span className="mx-1 text-blue-600">·</span> Data collection</span>
              </span>
            </div>
          </div>

          {/* Corporate Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-left">
            <span className="text-white">Futuris</span>
          </h1>

          {/* Corporate Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mb-6 sm:mb-8 lg:mb-10 text-left leading-relaxed">
            Delivering best‑in‑class data quality and actionable insights through quantitative and qualitative methodologies.
          </p>

          {/* Corporate Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/contact')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="group border border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/20 hover:border-white/50 transition-all font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              Learn More
            </button>
          </div>

          {/* Corporate Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 mb-4 gap-4 sm:gap-6 max-w-4xl text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-white scale-75 sm:scale-100">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 sm:mt-8 lg:mt-0">
          <img src="/assets/img/hero_bg.png" alt="Futuris Hero" className="max-w-[140px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[310px] xl:max-w-[350px] w-full h-auto rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

