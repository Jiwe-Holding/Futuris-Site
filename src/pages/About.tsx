import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import WorldMap from '../components/WorldMap';
import HeroCarousel from '../components/HeroCarousel';
import { ArrowRight, Users, Globe, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  ];

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
    { number: "29+", label: "African Markets" },
    { number: "3,685", label: "Field Agents" },
    { number: "76", label: "Supervisors" },
    { number: "11", label: "Qualitative Moderators" }
  ];

  const offices = [
    {
      name: "South Africa",
      code: "ZA",
      city: "Bryanston, Johannesburg",
      address: "57th Sloane Street, Bryanston, 2191",
      coordinates: { lat: -26.0789, lng: 28.0457 },
      isHeadquarters: true,
      established: "2009"
    },
    {
      name: "Central African Republic",
      code: "CF",
      city: "Bangui",
      address: "Central Business District",
      coordinates: { lat: 4.3947, lng: 18.5582 },
      isHeadquarters: false,
      established: "2015"
    },
    {
      name: "Democratic Republic of Congo",
      code: "CD",
      city: "Kinshasa",
      address: "Gombe District",
      coordinates: { lat: -4.4419, lng: 15.3163 },
      isHeadquarters: false,
      established: "2012"
    },
    {
      name: "Republic of Congo",
      code: "CG",
      city: "Brazzaville",
      address: "Centre-ville",
      coordinates: { lat: -4.2634, lng: 15.1429 },
      isHeadquarters: false,
      established: "2018"
    },
    {
      name: "Chad",
      code: "TD",
      city: "N'Djamena",
      address: "Quartier des Affaires",
      coordinates: { lat: 12.1348, lng: 15.0557 },
      isHeadquarters: false,
      established: "2020"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroCarousel
        images={heroImages}
        badge="About FUTURIS"
        title="Your Market Research Partner"
        titleHighlight="Across 29 African Markets"
        description="Your trusted market research partner across 29 African markets, delivering excellence since 2009."
      />

      {/* Corporate Mission & Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                Our Mission & Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold inline-flex items-center gap-2">
                Meet Our Team
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="FUTURIS Team"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Numbers that reflect our commitment to excellence and growth across Africa.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Offices Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Global Presence</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Our Offices Across
              <span className="block text-blue-600">Central & Southern Africa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Strategically positioned across 5 countries to serve 29+ African markets with local expertise and global standards.
            </p>
          </div>

          <WorldMap offices={offices} />
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default About;
