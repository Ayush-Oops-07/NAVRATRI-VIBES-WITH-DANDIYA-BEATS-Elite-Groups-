import { useState } from 'react'
import { motion } from 'framer-motion'
import { AKAAI_STUDIO_LINK } from '../constants'

export default function AkaAiFloating() {
  const [tip, setTip] = useState(false)

  return (
    <div className="fixed right-5 sm:right-7 bottom-20 sm:bottom-23 z-40 flex items-center gap-2">
      {/* Tooltip for desktop */}
      <motion.span
        initial={false}
        animate={{ opacity: tip ? 1 : 0, x: tip ? 0 : 6 }}
        className="hidden sm:block glass-card rounded-full px-3 py-1 text-[11px] text-[#FFD36A] font-medium border border-gold/40 shadow-lg pointer-events-none whitespace-nowrap"
      >
        AKA AI Studio
      </motion.span>

      {/* Floating Rotating Logo Circle */}
      <a
        href={AKAAI_STUDIO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit AKA AI Studio (akaaistudio.in)"
        title="AKA AI Studio"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        onFocus={() => setTip(true)}
        onBlur={() => setTip(false)}
        className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8B3DCE] via-[#FF4F9A] to-[#FFD36A] shadow-[0_0_18px_rgba(139,61,206,0.4)] hover:shadow-[0_0_25px_rgba(255,211,106,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold flex items-center justify-center shrink-0"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          className="w-full h-full rounded-full overflow-hidden bg-[#0E081D] flex items-center justify-center"
        >
          <img
            src="/logo/akaaistudio.jpeg"
            alt="AKA AI Studio Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </a>
    </div>
  )
}
