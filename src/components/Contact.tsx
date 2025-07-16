import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium text-gray-300">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Prêt à transformer
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              votre entreprise ?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discutons de vos projets et découvrons ensemble comment nous pouvons 
            vous accompagner vers le succès.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Parlons de votre projet
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Téléphone</div>
                  <div className="text-gray-300">+33 1 23 45 67 89</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Email</div>
                  <div className="text-gray-300">contact@futuris-group.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Adresse</div>
                  <div className="text-gray-300">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Horaires</div>
                  <div className="text-gray-300">
                    Lun - Ven: 9h00 - 18h00<br />
                    Sam: 9h00 - 12h00
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h4 className="text-xl font-semibold mb-3">Consultation gratuite</h4>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Planifiez un rendez-vous avec nos experts pour discuter de vos défis et opportunités.
              </p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/20">
                Planifier une consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;