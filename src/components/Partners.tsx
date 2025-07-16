import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Canon", logo: "/assets/img/partners/Canon.png" },
    { name: "GFK", logo: "/assets/img/partners/GFK.png"},
    { name: "Airbnb", logo: "/assets/img/partners/Airbnb.png"},
    { name: "Dynata", logo: "/assets/img/partners/Dynata.png"},
    { name: "Evernote", logo: "/assets/img/partners/Evernote.png"},
    { name: "MTN", logo: "/assets/img/partners/MTN.png"},
    { name: "Skol", logo: "/assets/img/partners/Skol.png"},
    { name: "Square", logo: "/assets/img/partners/Square.png"},
    { name: "The World Bank", logo: "/assets/img/partners/The World Bank.png"},
    { name: "Transparency International", logo: "/assets/img/partners/Transparency International.png",},
    { name: "bill_gate", logo: "/assets/img/partners/bill_gate.png"},
    { name: "Imshealth", logo: "/assets/img/partners/Imshealth.png"},
  ];

  // Duplicate the array so the animation loops seamlessly
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="clients" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We collaborate with the world’s leading technology partners to bring you the best solutions and ensure your success.
          </p>
        </div>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            {marqueeItems.map((p, i) => (
              <div key={i} className="marquee-item group text-center">
                <div className="w-full h-20 bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <img
                    src={p.logo}
                    // alt={p.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {/* <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                  {p.name}
                </h3> */}
                {/* <p className="text-sm text-white">{p.description}</p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">786821+</div>
            <div className="text-white">Interviews conducted</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">34+</div>
            <div className="text-white">Regular Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">654+</div>
            <div className="text-white">Projects covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">549+</div>
            <div className="text-white">Cities & Villages covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
