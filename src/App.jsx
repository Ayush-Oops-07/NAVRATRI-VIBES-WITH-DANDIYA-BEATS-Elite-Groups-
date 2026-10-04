import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DurgaSection from './components/DurgaSection'
import AboutMotihari from './components/AboutMotihari'
import DandiyaSection from './components/DandiyaSection'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Organisers from './components/Organisers'
import EventPartners from './components/EventPartners'
import Venue from './components/Venue'
import Booking from './components/Booking'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SponsorIntro from './components/SponsorIntro'

export default function App() {
  return (
    <>
      <SponsorIntro />
      <Navbar />
      <main>
        <Hero />
        <DurgaSection />
        <AboutMotihari />
        <DandiyaSection />
        <Highlights />
        <Experience />
        <Organisers />
        <EventPartners />
        <Venue />
        <Booking />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
