import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const testimonials = [
    {
      name: "",
      company: "GfK",
      via: "Twitter",
      rating: 5,
      role: "Senior Leader",
      // image: "/images/person2.jpg",
      text: "“Fast, flexible and easy to work with. FUTURIS provided us with valuable inputs in survey development, research and insights—ahead of schedule. We look forward to working with them in the future.”"
    },
    {
      name: "",
      company: "Transparency International",
      via: null,
      rating: 4,
      role: "",
      // image: "/images/person3.jpg",
      text: "“We partner with FUTURIS time and time again because they are creative in project design, rigorous in project execution, and always responsive to our needs. In the end, they deliver as promised, and more.”"
    },
    {
      name: "Operations Leader",
      company: "Dynata",
      via: "Twitter",
      rating: 5,
      role: "",
      // image: "/images/person2.jpg",
      text: "“FUTURIS has worked professionally at all times with very competitive costs, enabling clear presentation of the results to identify key trends and areas for growth and improvement of Customer Services team now and in the future.”"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 text-sm font-medium text-gray-300">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Client satisfaction is our top priority. Read their stories about working with us and the results they achieved.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <blockquote className="text-xl lg:text-2xl text-gray-200 text-center mb-8 leading-relaxed font-medium">
                      “{t.text}”
                    </blockquote>

                    {/* Stars */}
                    <div className="flex items-center justify-center mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      {/* <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-2xl object-cover mr-4"
                      /> */}
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg">{t.name}</div>
                        <div className="text-gray-300">{t.role}</div>
                        <div className="text-blue-600 font-medium">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-300 hover:text-blue-400"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide
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
