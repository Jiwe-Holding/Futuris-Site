import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import ChatWidget from '../components/ChatWidget';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Partners />
      <Testimonials />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;
