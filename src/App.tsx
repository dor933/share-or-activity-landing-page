import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
