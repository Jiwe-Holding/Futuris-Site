import React from 'react';

const Integrations = () => {
  const integrations = [
    {
      name: "Microsoft",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Partenaire Gold Microsoft",
      category: "Cloud & Productivité"
    },
    {
      name: "AWS",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Advanced Technology Partner",
      category: "Infrastructure Cloud"
    },
    {
      name: "Google Cloud",
      logo: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Premier Partner",
      category: "Intelligence Artificielle"
    },
    {
      name: "Salesforce",
      logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Certified Partner",
      category: "CRM & Ventes"
    },
    {
      name: "IBM",
      logo: "https://images.pexels.com/photos/18139885/pexels-photo-18139885.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Business Partner",
      category: "Enterprise Solutions"
    },
    {
      name: "Oracle",
      logo: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Gold Partner",
      category: "Base de données"
    },
    {
      name: "SAP",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Certified Partner",
      category: "ERP & Gestion"
    },
    {
      name: "Adobe",
      logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Solution Partner",
      category: "Design & Marketing"
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Partenaires Technologiques</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Intégrations avec les
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              leaders du marché
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec les plus grandes entreprises technologiques 
            pour vous offrir les meilleures solutions.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {integration.name}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{integration.category}</p>
              <p className="text-xs text-gray-300">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-300 text-sm">Partenaires technologiques</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-300 text-sm">Support technique</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-300 text-sm">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;