import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-neutral-900">
      <div className="absolute inset-0 
        bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500
        bg-[length:400%_400%]
        animate-gradient-xy
        opacity-30 blur-[120px] z-0"></div>

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
