import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ServicesSection from './components/sections/Services'
import Testimonials from './components/sections/Testimonial'
import FAQ from './components/sections/FAQ'
import Subjects from './components/sections/Subjects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <Subjects />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
