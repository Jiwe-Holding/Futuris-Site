import React, { useState, useEffect } from 'react';
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

  // Auto-scroll every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Corporate Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 leading-tight">
            What Our
            <span className="block text-blue-600">
              Clients Say
            </span>
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Client satisfaction is our top priority. Read their stories about working with us and the results they achieved.
          </p> */}
        </div>

        {/* Corporate Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-xl p-10 border border-gray-200 shadow-lg">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Quote className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Text */}
                    <blockquote className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                      {t.text}
                    </blockquote>

                    {/* Stars */}
                    <div className="flex items-center justify-center mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-blue-600 fill-current" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="text-center">
                      <div className="font-semibold text-blue-600 text-lg mb-2">{t.name || 'Client'}</div>
                      <div className="text-gray-600 text-sm mb-1">{t.role}</div>
                      <div className="text-blue-600 font-medium text-base">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Controls */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={prevSlide}
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
