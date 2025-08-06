import { ArrowRight, Play, Shield, TrendingUp, Users, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const integrations = [
    { name: "CATI & CAPI", logo: "/assets/img/services/CC.png" },
    { name: "Panel Surveys", logo: "/assets/img/services/PS.png" },
    { name: "Focus Groups", logo: "/assets/img/services/FG.png" },
    { name: "IDI Interviews", logo: "/assets/img/services/IDI.png" },
    { name: "Mystery Shopping", logo: "/assets/img/services/MS.png" },
    { name: "Consulting & Training", logo: "/assets/img/services/CT.png" },
  ];

  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "30+", label: "African Markets" },
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
      <div className="relative z-10 max-w-7xl pt-5 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full text-white">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mt-32 sm:mt-0">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium">Market Research</span>
          </div> */}

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

