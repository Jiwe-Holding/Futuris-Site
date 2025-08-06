import React from 'react';
import { Award, Users, Globe, Target, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
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
    { number: "30+", label: "African Markets" },
    { number: "3,685", label: "Field Agents" },
    { number: "76", label: "Supervisors" },
    { number: "11", label: "Qualitative Moderators" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 text-sm font-medium text-gray-300">
            About FUTURIS
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Market Research Partner
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              across 30 African markets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering best‑in‑class data quality and insights through quantitative and qualitative methodologies.
          </p>
        </div>

        {/* Mission & History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Our Mission & Story
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2009, FUTURIS was born from the conviction that data-driven insights can revolutionize industry practices. We combine technical expertise, strategic vision and human-centric approach to deliver sustainable, high‑impact research.
              </p>
              <p>
                Our multidisciplinary team of consultants, field agents and analysts works closely with clients at every step—from initial brief and proposal to fieldwork, quality control and final reporting—to ensure excellence and speed in every project.
              </p>
            </div>
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold">
              Meet Our Team
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="FUTURIS Team"
                className="rounded-2xl w-full"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-300">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="group text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Team by the Numbers</h3>
            <p className="text-gray-300 text-lg">
              Our footprint and expertise in figures
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
