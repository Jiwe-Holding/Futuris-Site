import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Générale",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Futuris Group a transformé notre approche digitale. Leur expertise et leur accompagnement ont été déterminants pour notre croissance. Une équipe exceptionnelle qui comprend vraiment les enjeux business."
    },
    {
      name: "Jean-Pierre Martin",
      role: "CTO",
      company: "InnovBank",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Un partenaire de confiance qui nous a accompagnés dans notre transformation digitale. Résultats dépassés, délais respectés et une collaboration exemplaire. Je recommande vivement."
    },
    {
      name: "Sophie Laurent",
      role: "Directrice Marketing",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "L'équipe Futuris a su comprendre nos besoins et nous proposer des solutions innovantes. Leur approche data-driven nous a permis d'optimiser nos performances de façon spectaculaire."
    },
    {
      name: "Alexandre Rousseau",
      role: "CEO",
      company: "LogiFlow",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Grâce à Futuris Group, nous avons pu moderniser notre infrastructure IT et améliorer significativement notre productivité. Un investissement qui s'est révélé très rentable."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium text-gray-300">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ce que disent nos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clients satisfaits
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages 
            sur notre collaboration et les résultats obtenus.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <blockquote className="text-xl lg:text-2xl text-gray-200 text-center mb-8 leading-relaxed font-medium">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover mr-4"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-gray-300">{testimonial.role}</div>
                        <div className="text-blue-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-300 hover:text-blue-400"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-300 hover:text-blue-400"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;