import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

export default function WhatsAppButton() {
  const [tip, setTip] = useState(false)
  const { openBooking } = useBooking()

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex items-center gap-2.5">
      <motion.span
        initial={false}
        animate={{ opacity: tip ? 1 : 0, x: tip ? 0 : 8 }}
        className="hidden sm:block glass-card rounded-full px-3.5 py-1.5 text-xs text-gold font-medium border border-gold/40 shadow-lg pointer-events-none"
      >
        Book Pass on WhatsApp
      </motion.span>
      <button
        type="button"
        onClick={openBooking}
        aria-label="Book your pass on WhatsApp"
        title="Book Your Pass"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        onFocus={() => setTip(true)}
        onBlur={() => setTip(false)}
        className="relative h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,.55)] hover:shadow-[0_0_35px_rgba(37,211,102,.8)] border-2 border-white/30 hover:scale-108 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
          aria-hidden="true"
        />
        <MessageCircle className="relative" size={26} aria-hidden="true" />
      </button>
    </div>
  )
}
