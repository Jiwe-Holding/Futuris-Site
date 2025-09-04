import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Users, Globe, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, upholding the highest quality standards.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work hand‑in‑hand with our clients to deliver optimal results.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace cutting‑edge technologies and methodologies to stay at the forefront.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Integrity",
      description: "We maintain transparency and fairness in all our engagements.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "30+", label: "African Markets" },
    { number: "3,685", label: "Field Agents" },
    { number: "76", label: "Supervisors" },
    { number: "11", label: "Qualitative Moderators" }
  ];


  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Mini Hero */}
      <section className="pt-32 pb-32 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">FUTURIS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted market research partner across 30 African markets, delivering excellence since 2009.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Mission & Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2009, FUTURIS was born from the conviction that data-driven insights can revolutionize industry practices. We combine technical expertise, strategic vision and human-centric approach to deliver sustainable, high‑impact research.
                </p>
                <p>
                  Our multidisciplinary team of consultants, field agents and analysts works closely with clients at every step—from initial brief and proposal to fieldwork, quality control and final reporting—to ensure excellence and speed in every project.
                </p>
                <p>
                  Today, we're proud to be the go-to research partner for leading organizations across Africa, helping them make informed decisions that drive growth and innovation.
                </p>
              </div>
              <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold">
                Meet Our Team
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="FUTURIS Team"
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and growth across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
