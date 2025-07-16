import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">Futuris Group</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-white hover:text-gray-900 transition-colors font-medium">
              Accueil
            </a>
            <a href="#services" className="text-white hover:text-gray-900 transition-colors font-medium">
              Services
            </a>
            <a href="#expertise" className="text-white hover:text-gray-900 transition-colors font-medium">
              Expertise
            </a>
            <a href="#clients" className="text-white hover:text-gray-900 transition-colors font-medium">
              Clients
            </a>
            <a href="#a-propos" className="text-white hover:text-gray-900 transition-colors font-medium">
              À propos
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              <a href="#accueil" className="block text-white hover:text-gray-900 transition-colors">
                Accueil
              </a>
              <a href="#services" className="block text-white hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#expertise" className="block text-white hover:text-gray-900 transition-colors">
                Expertise
              </a>
              <a href="#clients" className="block text-white hover:text-gray-900 transition-colors">
                Clients
              </a>
              <a href="#a-propos" className="block text-white hover:text-gray-900 transition-colors">
                À propos
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;