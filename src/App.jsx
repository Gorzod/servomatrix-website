import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Services from './components/Services'
import Sectors from './components/Sectors'
import Process from './components/Process'
import CTABand from './components/CTABand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from '@/components/ui/particles-bg'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <div className="hero-zone">
          <ParticlesBackground />
          <Hero />
          <Ticker />
        </div>
        <About />
        <Services />
        <Sectors />
        <Process />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
