import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DurgaSection from './components/DurgaSection'
import AboutMotihari from './components/AboutMotihari'
import DandiyaSection from './components/DandiyaSection'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Organisers from './components/Organisers'
import EventPartners from './components/EventPartners'
import Venue from './components/Venue'
import Booking from './components/Booking'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SponsorIntro from './components/SponsorIntro'
import BookingModal from './components/BookingModal'
import { BookingProvider } from './context/BookingContext'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <BookingProvider>
      <Analytics />
      <SponsorIntro />
      <Navbar />
      <main>
        <Hero />
        <DurgaSection />
        <AboutMotihari />
        <DandiyaSection />
        <Highlights />
        <Experience />
        <Gallery />
        <Organisers />
        <EventPartners />
        <Venue />
        <Booking />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingModal />
      <Analytics />
    </BookingProvider>
  )
}
