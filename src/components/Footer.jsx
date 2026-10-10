import { INSTAGRAM, MAP_LINK, BOOK_LINK, AKAAI_STUDIO_LINK, ARYAN_KALWAR_LINK, PHONE_DISPLAY } from '../constants'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Highlights', '#highlights'],
    ['Experience', '#experience'],
    ['Event Details', '#details'],
    ['Venue', '#venue'],
    ['Instagram (@dandiya_beatss)', INSTAGRAM],
    ['Book on WhatsApp', BOOK_LINK],
    ['Google Maps Location', MAP_LINK],
  ]

  return (
    <footer className="bg-[#0E081D] border-t border-gold/25 pt-14 pb-24 md:pb-12 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple via-pink to-gold p-[1px]">
              <div className="w-full h-full rounded-full bg-[#160D2B] flex items-center justify-center">
                <Sparkles size={14} className="text-gold" />
              </div>
            </div>
            <span className="font-display font-black gold-text text-xl">NAVRATRI VIBES</span>
          </div>
          <p className="font-serif text-[#FF4F9A] text-sm tracking-wider font-bold">
            WITH DANDIYA BEATS 2026
          </p>
          <p className="text-xs sm:text-sm text-[#D8CDE7]/80 mt-3 max-w-sm leading-relaxed font-body">
            Organised by <strong className="text-gold">Elite Groups</strong>. Bringing the authentic spirit, vibrant colours, and royal grandeur of Navratri Dandiya Raas to Motihari, Bihar.
          </p>
          <p className="text-xs text-gold/90 mt-4 font-serif">
            WhatsApp Hotline: <span className="font-mono text-white">{PHONE_DISPLAY}</span>
          </p>
        </div>

        {/* Event Schedule & Venue */}
        <div className="md:col-span-4 text-xs sm:text-sm text-[#D8CDE7] leading-loose">
          <p className="font-serif font-bold text-gold text-sm tracking-wider mb-2">EVENT INFORMATION</p>
          <p className="font-medium text-[#FFF8F0]">📅 21 October 2026 (Wednesday)</p>
          <p>⏰ Gate Opens: 5:00 PM | Event: 6:00 PM onwards</p>
          <p className="text-gold mt-1 font-medium">📍 Ram Bhawan Ram Resort</p>
          <p className="text-[#D8CDE7]/80">NH-28, Motihari, East Champaran, Bihar</p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer quick links" className="md:col-span-3 text-xs sm:text-sm">
          <p className="font-serif font-bold text-gold text-sm tracking-wider mb-2">QUICK NAVIGATION</p>
          <ul className="space-y-2">
            {links.map(([l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-[#D8CDE7]/80 hover:text-gold transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D8CDE7]/70 max-w-7xl mx-auto">
        <p>© 2026 Elite Groups. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Crafted for Navratri Celebrations by</span>
          <a
            href={AKAAI_STUDIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline"
          >
            AKA AI Studio
          </a>
          <span>&</span>
          <a
            href={ARYAN_KALWAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline"
          >
            Aryan Kalwar
          </a>
        </p>
      </div>
    </footer>
  )
}
