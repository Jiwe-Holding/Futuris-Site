import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import HeroCarousel from '../components/HeroCarousel';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    companyType: '',
    subject: '',
    message: ''
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: integrate with your email/API
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      companyType: '',
      subject: '',
      message: ''
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+27761525291';
  };

  const heroImages = [
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroCarousel
        images={heroImages}
        badge="Get in Touch"
        title="Ready to Transform"
        titleHighlight="Your Business?"
        description="Ready to start your next market research project? Let's discuss how we can help you achieve your objectives."
      />

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you navigate the complexities of African markets. Reach out to us for a consultation or to discuss your research needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg mb-1">Phone</div>
                    <div className="text-gray-600">+27 76 152 5291</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg mb-1">Email</div>
                    <div className="text-gray-600">contact@futuris.com</div>
                    <div className="text-gray-600">info@futuris.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg mb-1">Address</div>
                    <div className="text-gray-600">
                      57th Sloane Street, Bryanston<br/>
                      2191, South Africa
                    </div>
                    <div className="text-gray-600 mt-2">
                      Kinshasa Office<br/>
                      Democratic Republic of Congo
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg mb-1">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</div>
                    <div className="text-gray-600">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                      <option value="">Select your country</option>
                      <option value="ZA">South Africa</option>
                      <option value="CD">Democratic Republic of Congo</option>
                      <option value="CG">Republic of Congo</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CM">Cameroon</option>
                      <option value="GA">Gabon</option>
                      <option value="AO">Angola</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                      <option value="BW">Botswana</option>
                      <option value="NA">Namibia</option>
                      <option value="MW">Malawi</option>
                      <option value="MZ">Mozambique</option>
                      <option value="TZ">Tanzania</option>
                      <option value="KE">Kenya</option>
                      <option value="UG">Uganda</option>
                      <option value="RW">Rwanda</option>
                      <option value="BI">Burundi</option>
                      <option value="ET">Ethiopia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="companyType" className="block text-gray-700 font-medium mb-2">Company Type *</label>
                    <select
                      id="companyType"
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                      <option value="">Select company type</option>
                      <option value="multinational">Multinational Corporation</option>
                      <option value="large-enterprise">Large Enterprise</option>
                      <option value="medium-enterprise">Medium Enterprise</option>
                      <option value="small-business">Small Business</option>
                      <option value="startup">Startup</option>
                      <option value="ngo">NGO / Non-Profit</option>
                      <option value="government">Government Agency</option>
                      <option value="research-institution">Research Institution</option>
                      <option value="consulting">Consulting Firm</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="quote">Request a Quote</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-300"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Find Us in Bryanston</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Bryanston office serves as our headquarters for African market research operations.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8!2d28.0457!3d-26.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x5d9b8b8b8b8b8b8b!2sSloane%20St%2C%20Bryanston%2C%20Sandton%2C%202191%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FUTURIS Office Location - 57th Sloane Street, Bryanston, South Africa"
              className="rounded-lg"
            />
          </div>
          
          {/* Address Details */}
          <div className="mt-8 text-center">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 inline-block">
              <h3 className="font-semibold text-black mb-2">Headquarters</h3>
              <p className="text-gray-600">
                57th Sloane Street, Bryanston<br/>
                2191, South Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Ready to Start Your Research Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get in touch with our team of experts and let's discuss how we can help you achieve your market research goals.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Contact;
