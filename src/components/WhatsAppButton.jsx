import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { BOOK_LINK } from '../constants'

export default function WhatsAppButton() {
  const [tip, setTip] = useState(false)
  return (
    <div className="fixed right-4 bottom-4 z-40 flex items-center gap-3">
      <motion.span initial={false} animate={{ opacity: tip ? 1 : 0, x: tip ? 0 : 10 }} className="hidden sm:block glass rounded-full px-4 py-2 text-sm text-gold pointer-events-none">Enquire / Book Pass</motion.span>
      <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" aria-label="Enquire or book your pass on WhatsApp" title="Enquire / Book Pass"
        onMouseEnter={() => setTip(true)} onMouseLeave={() => setTip(false)} onFocus={() => setTip(true)} onBlur={() => setTip(false)}
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,.6)] hover:scale-110 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" aria-hidden="true" />
        <MessageCircle className="relative" size={28} aria-hidden="true" />
      </a>
    </div>
  )
}
