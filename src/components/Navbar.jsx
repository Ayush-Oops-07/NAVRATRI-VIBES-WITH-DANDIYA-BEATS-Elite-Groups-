import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Ticket, Sparkles } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Highlights', '#highlights'],
  ['Experience', '#experience'],
  ['Event Details', '#details'],
  ['Venue', '#venue'],
  ['Enquiry', '#enquiry'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const handleOpenBooking = () => {
    setOpen(false)
    openBooking()
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#160D2B]/90 backdrop-blur-xl border-b border-gold/25 shadow-[0_10px_30px_rgba(14,8,29,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20"
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple via-pink to-gold flex items-center justify-center p-[1px] shadow-[0_0_20px_rgba(255,211,106,0.35)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#160D2B] flex items-center justify-center">
              <Sparkles size={18} className="text-gold animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black gold-text text-lg sm:text-xl tracking-wider leading-none">
              NAVRATRI VIBES
            </span>
            <span className="text-[10px] sm:text-[11px] font-serif font-bold text-[#D8CDE7] tracking-[0.25em] mt-0.5">
              DANDIYA BEATS 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#D8CDE7]">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-gold transition-colors duration-200 relative py-1 focus:outline-none focus:text-gold group"
              >
                <span>{label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink to-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openBooking}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-serif font-bold bg-gradient-to-r from-[#FFD36A] via-[#FF9A2E] to-[#FF8A36] text-[#160D2B] hover:shadow-[0_0_25px_rgba(255,211,106,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
          >
            <Ticket size={16} aria-hidden="true" />
            <span>Book Your Pass</span>
          </button>

          <button
            className="lg:hidden text-gold p-2 rounded-xl glass hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'm'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#160D2B]/95 backdrop-blur-2xl border-b border-gold/25 px-6 pb-6 pt-2 shadow-2xl"
          >
            <ul className="flex flex-col divide-y divide-gold/10">
              {links.map(([label, href], i) => (
                <motion.li
                  key={href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium text-[#FFF8F0] hover:text-gold transition-colors"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 border-none">
                <button
                  type="button"
                  onClick={handleOpenBooking}
                  className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-serif font-bold text-sm bg-gradient-to-r from-[#FFD36A] via-[#FF9A2E] to-[#FF8A36] text-[#160D2B] shadow-[0_0_25px_rgba(255,211,106,0.4)] cursor-pointer"
                >
                  <Ticket size={16} />
                  <span>Book Your Pass</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
