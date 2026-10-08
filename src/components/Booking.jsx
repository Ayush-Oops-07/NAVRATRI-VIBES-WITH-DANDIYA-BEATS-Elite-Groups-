import { motion } from 'framer-motion'
import { MessageCircle, Ticket } from 'lucide-react'
import { Btn, Mandala, Particles, Reveal } from './ui'
import { ENQUIRE_LINK, PHONE_DISPLAY } from '../constants'
import { useBooking } from '../context/BookingContext'

export default function Booking() {
  const { openBooking } = useBooking()

  return (
    <section id="enquiry" className="section bg-gradient-to-b from-ink via-crimson to-wine">
      <Particles count={20} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><Mandala className="spin-slow w-[600px] max-w-none text-gold/15" /></div>
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <div className="glass rounded-[2rem] p-8 md:p-14 shadow-[0_0_60px_rgba(245,192,74,.25)]">
          <h2 className="font-display font-black gold-text text-3xl sm:text-5xl leading-tight">Ready to Feel the Beats?</h2>
          <p className="font-serif text-amber-100 text-lg mt-4">Your Navratri night starts here.</p>
          <motion.div className="mt-9" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Btn onClick={openBooking} icon={Ticket} className="w-full sm:w-auto text-base sm:text-lg !py-4 sm:!px-10 cursor-pointer">BOOK YOUR PASS</Btn>
          </motion.div>
          <div className="mt-10 pt-8 border-t border-gold/25">
            <p className="text-amber-100/80">Have a question?</p>
            <div className="mt-3"><Btn href={ENQUIRE_LINK} variant="glass" icon={MessageCircle}>Enquire on WhatsApp</Btn></div>
            <p className="mt-4 text-sm text-gold/80">{PHONE_DISPLAY}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
