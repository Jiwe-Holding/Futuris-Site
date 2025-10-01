import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/img/logo.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for corporate black header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes and scroll to top
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleNavClick = () => {
    // Scroll to top when clicking navigation links
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black shadow-lg border-b border-gray-800' 
        : 'bg-slate-800 lg:bg-transparent lg:backdrop-blur-none'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Corporate Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Futuris Logo" 
                className={`mr-3 rounded-lg transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-8' : 'h-10'
                }`} 
              />
            </div>
            <span className={`font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-white text-lg' 
                : 'text-white text-xl'
            }`}>
              Futuris
            </span>
          </Link>

          {/* Corporate Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-blue-600 bg-gray-100' : 'text-blue-400 bg-white/10')
                  : (isScrolled ? 'text-white hover:text-blue-600 hover:bg-gray-800' : 'text-white hover:text-gray-300')
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={handleNavClick}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/services' 
                  ? (isScrolled ? 'text-blue-600 bg-gray-100' : 'text-blue-400 bg-white/10')
                  : (isScrolled ? 'text-white hover:text-blue-600 hover:bg-gray-800' : 'text-white hover:text-gray-300')
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              onClick={handleNavClick}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/blog' 
                  ? (isScrolled ? 'text-blue-600 bg-gray-100' : 'text-blue-400 bg-white/10')
                  : (isScrolled ? 'text-white hover:text-blue-600 hover:bg-gray-800' : 'text-white hover:text-gray-300')
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              onClick={handleNavClick}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/about' 
                  ? (isScrolled ? 'text-blue-600 bg-gray-100' : 'text-blue-400 bg-white/10')
                  : (isScrolled ? 'text-white hover:text-blue-600 hover:bg-gray-800' : 'text-white hover:text-gray-300')
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={handleNavClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium ml-4"
            >
              Contact
            </Link>
          </nav>

          {/* Corporate Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled 
                ? 'text-white hover:text-blue-600 hover:bg-gray-800' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Corporate Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Corporate Overlay */}
            <div 
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Corporate Sliding Menu */}
            <div className="fixed top-0 left-0 h-full w-80 bg-black border-r border-gray-800 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                {/* Corporate Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <img src={logo} alt="Futuris Logo" className="h-10 mr-3 rounded-lg" />
                    <span className="text-xl font-bold text-white">Futuris</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Corporate Navigation Links */}
                <nav className="space-y-2">
                  <Link 
                    to="/" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`flex items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === '/' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-white hover:bg-gray-800 hover:text-blue-600'
                    }`}
                  >
                    <span className="font-medium">Home</span>
                    {location.pathname === '/' && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`flex items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === '/services' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-white hover:bg-gray-800 hover:text-blue-600'
                    }`}
                  >
                    <span className="font-medium">Services</span>
                    {location.pathname === '/services' && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                  <Link 
                    to="/blog" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`flex items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === '/blog' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-white hover:bg-gray-800 hover:text-blue-600'
                    }`}
                  >
                    <span className="font-medium">Blog</span>
                    {location.pathname === '/blog' && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`flex items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === '/about' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-white hover:bg-gray-800 hover:text-blue-600'
                    }`}
                  >
                    <span className="font-medium">About</span>
                    {location.pathname === '/about' && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`flex items-center py-4 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === '/contact' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-white hover:bg-gray-800 hover:text-blue-600'
                    }`}
                  >
                    <span className="font-medium">Contact</span>
                    {location.pathname === '/contact' && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                </nav>

                {/* Corporate Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-sm text-gray-400 text-center">
                      © 2024 Futuris. Excellence in Market Research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
