import React from 'react';

const Partners: React.FC = () => {
  // Ligne 1: 5 images (droite → gauche)
  const line1Partners = [
    { name: "Canon", logo: "/assets/img/partners/Canon.png" },
    { name: "GFK", logo: "/assets/img/partners/GFK.png"},
    { name: "Airbnb", logo: "/assets/img/partners/Airbnb.png"},
    { name: "Dynata", logo: "/assets/img/partners/Dynata.png"},
    { name: "Evernote", logo: "/assets/img/partners/Evernote.png"},
  ];

  // Ligne 2: 7 images (droite → gauche) - fusion ligne 2 et 3
  const line2Partners = [
    { name: "MTN", logo: "/assets/img/partners/MTN.png"},
    { name: "Skol", logo: "/assets/img/partners/Skol.png"},
    { name: "Square", logo: "/assets/img/partners/Square.png"},
    { name: "The World Bank", logo: "/assets/img/partners/The World Bank.png"},
    { name: "Transparency International", logo: "/assets/img/partners/Transparency International.png"},
    { name: "bill_gate", logo: "/assets/img/partners/bill_gate.png"},
    { name: "Imshealth", logo: "/assets/img/partners/Imshealth.png"},
  ];

  // Duplicate arrays for seamless animation
  const marqueeItems1 = [...line1Partners, ...line1Partners];
  const marqueeItems2 = [...line2Partners, ...line2Partners];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We collaborate with the world's leading organizations to deliver exceptional market research and data insights.
          </p>
        </div>

        {/* Two Centered Lines of Partners */}
        <div className="space-y-12 mb-16">
          {/* Ligne 1: 5 images (droite → gauche) */}
          <div className="marquee-right-to-left">
            <div className="marquee-content-rtl">
              {marqueeItems1.map((partner, i) => (
                <div key={i} className="marquee-item group text-center flex-shrink-0">
                  <div className="w-48 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 mx-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-4 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ligne 2: 7 images (gauche → droite) */}
          <div className="marquee-left-to-right">
            <div className="marquee-content-ltr">
              {marqueeItems2.map((partner, i) => (
                <div key={i} className="marquee-item group text-center flex-shrink-0">
                  <div className="w-48 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 mx-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-4 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">786,821+</div>
              <div className="text-gray-600 font-medium">Interviews conducted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">34+</div>
              <div className="text-gray-600 font-medium">Regular Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">654+</div>
              <div className="text-gray-600 font-medium">Projects covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">549+</div>
              <div className="text-gray-600 font-medium">Cities & Villages covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
