import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <Integrations />
      <Partners />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;