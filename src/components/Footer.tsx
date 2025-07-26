import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">FUTURIS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              FUTURIS is a market-research specialist on a mission to revolutionize industry practices by delivering best‑in‑class data quality and insights across 30 African markets.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/futuris-group" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/futuris_group" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-400 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/futuris-group" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white">Fieldwork & Verification</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Quality Control</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Intelligence & Training</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Mystery Shopping</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Usage & Attitude Research</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Brand & Pricing Studies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-sm">
                  57th Sloane Street<br/>
                  Bryanston, 2191<br/>
                  South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-sm">+27 76 152 5291</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-sm">contact@futuris.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <span>© 2025 FUTURIS. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/legal" className="hover:text-white">Legal Notice</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/cookies" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
