import React from 'react';

const Partners: React.FC = () => {
  // Tous les partenaires disponibles
  const allPartners = [
    { name: "Africa", logo: "/assets/img/partners/africa.png" },
    { name: "Airbnb", logo: "/assets/img/partners/Airbnb.png" },
    { name: "Airtel", logo: "/assets/img/partners/airtel.png" },
    { name: "Bill Gates", logo: "/assets/img/partners/bill_gate.png" },
    { name: "Bracongo", logo: "/assets/img/partners/bracongo.png" },
    { name: "British", logo: "/assets/img/partners/british.png" },
    { name: "Canon", logo: "/assets/img/partners/Canon.png" },
    { name: "Coca Cola", logo: "/assets/img/partners/coca.png" },
    { name: "Dynata", logo: "/assets/img/partners/Dynata.png" },
    { name: "Emotion", logo: "/assets/img/partners/emotion.png" },
    { name: "Evernote", logo: "/assets/img/partners/Evernote.png" },
    { name: "Geopoll", logo: "/assets/img/partners/geopoll.png" },
    { name: "GFK", logo: "/assets/img/partners/GFK.png" },
    { name: "Imshealth", logo: "/assets/img/partners/Imshealth.png" },
    { name: "Ipsos", logo: "/assets/img/partners/ipsos.png" },
    { name: "Jika", logo: "/assets/img/partners/jika.png" },
    { name: "Kantar", logo: "/assets/img/partners/kantar.png" },
    { name: "Nielsen", logo: "/assets/img/partners/mielsen.png" },
    { name: "Milklink", logo: "/assets/img/partners/milklink.png" },
    { name: "Millward Brown", logo: "/assets/img/partners/millward.png" },
    { name: "MTN", logo: "/assets/img/partners/MTN.png" },
    { name: "Orange", logo: "/assets/img/partners/orange.png" },
    { name: "Skol", logo: "/assets/img/partners/Skol.png" },
    { name: "Square", logo: "/assets/img/partners/Square.png" },
    { name: "Techno", logo: "/assets/img/partners/techno.png" },
    { name: "The World Bank", logo: "/assets/img/partners/The World Bank.png" },
    { name: "Transparency International", logo: "/assets/img/partners/Transparency International.png" },
    { name: "Transparency", logo: "/assets/img/partners/transparency.png" },
    { name: "Vodacom", logo: "/assets/img/partners/Vodacom.png" }
  ];

  // Duplicate arrays for seamless animation
  const marqueeItems1 = [...allPartners, ...allPartners];
  const marqueeItems2 = [...allPartners, ...allPartners];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We collaborate with the world's leading organizations to deliver exceptional market research and data insights.
          </p>
        </div>

        {/* Two Centered Lines of Partners */}
        <div className="space-y-16 mb-16">
          {/* Ligne 1: Tous les logos (droite → gauche) */}
          <div className="marquee-right-to-left">
            <div className="marquee-content-rtl">
              {marqueeItems1.map((partner, i) => (
                <div key={i} className="marquee-item group text-center flex-shrink-0">
                  <div className="w-64 h-24 mx-6 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ligne 2: Tous les logos (gauche → droite) */}
          <div className="marquee-left-to-right">
            <div className="marquee-content-ltr">
              {marqueeItems2.map((partner, i) => (
                <div key={i} className="marquee-item group text-center flex-shrink-0">
                  <div className="w-64 h-24 mx-6 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
