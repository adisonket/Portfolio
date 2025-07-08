import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer'


const App = () => {
  useEffect(() => {AOS.init({duration: 1000,once: true,})}, []);
  return (
    <div className="relative min-h-screen w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px] z-0"></div>
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
  )
}

export default App
