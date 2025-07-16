
const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Partenaire Gold Microsoft"
    },
    {
      name: "AWS",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Advanced Technology Partner"
    },
    {
      name: "Google Cloud",
      logo: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Premier Partner"
    },
    {
      name: "Salesforce",
      logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Certified Partner"
    },
    {
      name: "IBM",
      logo: "https://images.pexels.com/photos/18139885/pexels-photo-18139885.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Business Partner"
    },
    {
      name: "Oracle",
      logo: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Gold Partner"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-orange-500">Partenaires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders technologiques mondiaux pour vous offrir 
            les meilleures solutions et garantir votre succès.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full h-20 bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">20+</div>
            <div className="text-gray-600">Partenaires technologiques</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
            <div className="text-gray-600">Support technique</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">99.9%</div>
            <div className="text-gray-600">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;