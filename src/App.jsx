import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx'; 
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative bg-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-blue-600 opacity-20 blur-3xl animate-gradient-xy" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />  
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
