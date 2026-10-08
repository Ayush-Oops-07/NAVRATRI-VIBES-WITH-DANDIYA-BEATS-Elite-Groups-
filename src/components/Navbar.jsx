import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Ticket } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

const links = [['Home', '#home'], ['About', '#about'], ['Highlights', '#highlights'], ['Experience', '#experience'], ['Event Details', '#details'], ['Venue', '#venue'], ['Enquiry', '#enquiry']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const handleOpenBooking = () => {
    setOpen(false)
    openBooking()
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-wine/80 backdrop-blur-xl border-b border-gold/25 shadow-lg' : 'bg-transparent'}`}>
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <a href="#home" className="font-display font-black gold-text text-lg md:text-xl">Navratri Vibes</a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-amber-100/90">
          {links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openBooking}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-serif font-bold bg-gradient-to-b from-[#ffe08a] to-[#c8791a] text-wine hover:scale-105 transition-transform cursor-pointer"
          >
            <Ticket size={16} aria-hidden="true" />Book Your Pass
          </button>
          <button className="lg:hidden text-gold p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="block">
                {open ? <X /> : <Menu />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden px-6 pb-6 flex flex-col gap-1">
            {links.map(([l, h], i) => (
              <motion.li key={h} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                <a href={h} onClick={() => setOpen(false)} className="block py-3 border-b border-gold/15 text-amber-100">{l}</a>
              </motion.li>
            ))}
            <li className="pt-4">
              <button
                type="button"
                onClick={handleOpenBooking}
                className="w-full block text-center rounded-full py-3 font-serif font-bold bg-gradient-to-b from-[#ffe08a] to-[#c8791a] text-wine cursor-pointer"
              >
                Book Your Pass
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
