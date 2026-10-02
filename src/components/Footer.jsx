import { INSTAGRAM, MAP_LINK, BOOK_LINK, AKAAI_STUDIO_LINK, ARYAN_KELWAR_LINK } from '../constants'
import { Diya } from './ui'

export default function Footer() {
  const links = [['Instagram', INSTAGRAM], ['WhatsApp', BOOK_LINK], ['Google Maps', MAP_LINK]]
  return (
    <footer className="bg-black border-t border-gold/30 pt-14 pb-24 md:pb-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <Diya className="w-10 mx-auto md:mx-0" />
          <p className="font-display font-black gold-text text-xl mt-3">NAVRATRI VIBES</p>
          <p className="font-serif text-gold">WITH DANDIYA BEATS 2026</p>
          <p className="text-sm text-amber-100/60 mt-3">Celebrating dance, music, culture and togetherness.</p>
        </div>
        <div className="text-sm text-amber-100/80 leading-loose">
          <p className="font-serif font-bold text-gold mb-1">Event</p>
          <p>21 October 2026</p>
          <p>Gate Opens: 5:00 PM | Event: 6:00 PM</p>
          <p>Ram Bhawan Ram Resort, NH-28, Motihari</p>
        </div>
        <nav aria-label="Footer quick links" className="text-sm">
          <p className="font-serif font-bold text-gold mb-1">Quick Links</p>
          <ul className="space-y-1">{links.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" className="text-amber-100/80 hover:text-gold">{l}</a></li>)}</ul>
        </nav>
      </div>
      <div className="border-t border-gold/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-100/60 max-w-6xl mx-auto">
        <p>© 2026 Elite Groups. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Developed by</span>
          <a href={AKAAI_STUDIO_LINK} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:underline">Akaai Studio</a>
          <span>&</span>
          <a href={ARYAN_KELWAR_LINK} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:underline">Aryan Kelwar</a>
        </p>
      </div>
    </footer>
  )
}

