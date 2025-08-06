import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/assets/img/logo.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Futuris Logo" className="h-10 mr-3 rounded" />
            <span className="text-xl font-bold text-white">Futuris</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-900 transition-colors font-medium">
              Services
            </a>
            <a href="#blog" className="block text-white hover:text-gray-200 transition-colors">
                Blog
            </a>
            <a href="#clients" className="text-white hover:text-gray-900 transition-colors font-medium">
              Clients
            </a>
            <a href="#about" className="text-white hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="block text-white hover:text-gray-200 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              <a href="#home" className="block text-white hover:text-gray-200 transition-colors">
                Home
              </a>
              <a href="#services" className="block text-white hover:text-gray-200 transition-colors">
                Services
              </a>
              <a href="#blog" className="block text-white hover:text-gray-200 transition-colors">
                Blog
              </a>
              <a href="#clients" className="block text-white hover:text-gray-200 transition-colors">
                Clients
              </a>
              <a href="#about" className="block text-white hover:text-gray-200 transition-colors">
                About
              </a>
              <a href="#contact" className="block text-white hover:text-gray-200 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
