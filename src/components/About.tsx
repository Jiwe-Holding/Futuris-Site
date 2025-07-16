import React from 'react';
import { Award, Users, Globe, Target, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, avec des standards de qualité élevés.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour des résultats optimaux.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodologies pour rester à la pointe.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Résultats",
      description: "Nous nous concentrons sur la création de valeur mesurable pour nos clients.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "35+", label: "Consultants experts" },
    { number: "8", label: "Domaines d'expertise" },
    { number: "120+", label: "Certifications" },
    { number: "98%", label: "Satisfaction client" }
  ];

  return (
    <section id="a-propos" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium text-gray-300">À propos de nous</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Votre partenaire de
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              confiance depuis 15 ans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous accompagnons les entreprises dans leur transformation 
            digitale et stratégique avec passion et expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Notre mission : transformer votre vision en réalité
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Fondé en 2009, Futuris Group est né de la conviction que la technologie 
                peut transformer positivement les entreprises. Nous combinons expertise 
                technique, vision stratégique et approche humaine pour créer des solutions 
                durables et performantes.
              </p>
              <p>
                Notre équipe multidisciplinaire de consultants, ingénieurs et experts 
                métier travaille main dans la main avec nos clients pour identifier 
                leurs défis, concevoir des solutions sur-mesure et les accompagner 
                dans leur mise en œuvre.
              </p>
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold">
              Découvrir notre équipe
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Image with floating elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-white/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Équipe Futuris Group"
                className="rounded-2xl w-full"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-300">Années d'expérience</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-300">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Nos valeurs fondamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
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
            <h3 className="text-3xl font-bold text-white mb-4">Notre équipe en chiffres</h3>
            <p className="text-gray-300 text-lg">
              Une équipe d'experts passionnés et expérimentés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
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