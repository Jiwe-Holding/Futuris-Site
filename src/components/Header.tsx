import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/img/logo.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:bg-white/10 lg:backdrop-blur-md md:bg-slate-800 sm:bg-slate-800 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Futuris Logo" className="h-10 mr-3 rounded" />
            <span className="text-xl font-bold text-white">Futuris</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                location.pathname === '/' ? 'text-blue-400' : 'text-white hover:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors font-medium ${
                location.pathname === '/services' ? 'text-blue-400' : 'text-white hover:text-gray-300'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors font-medium ${
                location.pathname === '/blog' ? 'text-blue-400' : 'text-white hover:text-gray-300'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                location.pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-gray-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                location.pathname === '/contact' ? 'text-blue-400' : 'text-white hover:text-gray-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Left Side Sliding Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Sliding Menu */}
            <div className="fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:text-gray-300"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Logo */}
                <div className="flex items-center mb-8">
                  <img src={logo} alt="Futuris Logo" className="h-10 mr-3 rounded" />
                  <span className="text-xl font-bold text-white">Futuris</span>
                </div>
                
                {/* Navigation Links */}
                <nav className="space-y-4">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === '/' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === '/services' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/blog" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === '/blog' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === '/about' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === '/contact' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
