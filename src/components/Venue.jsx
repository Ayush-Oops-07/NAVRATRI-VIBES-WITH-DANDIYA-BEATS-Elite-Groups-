import { Navigation, MapPin, Clock, CalendarDays } from 'lucide-react'
import { Btn, Reveal, Title } from './ui'
import { MAP_EMBED, MAP_LINK } from '../constants'

export default function Venue() {
  return (
    <section id="venue" className="section crimson-bg">
      <div className="max-w-6xl mx-auto">
        <Title>Celebrate With Us</Title>
        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-3xl p-7 h-full flex flex-col">
              <MapPin className="text-gold" aria-hidden="true" />
              <h3 className="font-display font-black gold-text text-2xl mt-3">Ram Bhawan Ram Resort</h3>
              <p className="text-amber-100/80 mt-2">NH-28, Motihari, Bihar</p>
              <ul className="mt-6 space-y-3 text-sm text-amber-50/90">
                <li className="flex gap-3"><CalendarDays size={18} className="text-gold shrink-0" aria-hidden="true" />21 October 2026, Wednesday</li>
                <li className="flex gap-3"><Clock size={18} className="text-gold shrink-0" aria-hidden="true" />Gate Opens: 5:00 PM | Event Starts: 6:00 PM</li>
              </ul>
              <div className="mt-8"><Btn href={MAP_LINK} icon={Navigation} className="w-full sm:w-auto">Get Directions</Btn></div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.15}>
            <div className="rounded-3xl overflow-hidden border border-gold/40 shadow-[0_0_40px_rgba(245,192,74,.2)] h-72 sm:h-96 lg:h-full min-h-[18rem]">
              <iframe title="Map showing Ram Bhawan Ram Resort, Motihari" src={MAP_EMBED} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
