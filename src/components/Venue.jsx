import { Navigation, MapPin, Clock, CalendarDays, Sparkles } from 'lucide-react'
import { Btn, Reveal, Title } from './ui'
import { MAP_EMBED, MAP_LINK, ADDRESS } from '../constants'

export default function Venue() {
  return (
    <section id="venue" className="section bg-gradient-to-b from-[#160D2B] via-[#25103F] to-[#160D2B] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <Title
          badge="EVENT LOCATION"
          deva="स्थान एवं मार्ग दर्शन"
          sub="Easily accessible and beautifully equipped venue on the main highway in Motihari."
        >
          Celebrate With Us
        </Title>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Venue Info Card */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-7 h-full flex flex-col justify-between border border-gold/35 shadow-xl hover:border-gold/60 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl glass border border-gold/40 flex items-center justify-center text-gold mb-4 shadow-md">
                  <MapPin size={24} className="text-pink animate-pulse" aria-hidden="true" />
                </div>
                <h3 className="font-display font-black gold-text text-2xl sm:text-3xl leading-snug">
                  Ram Bhawan Ram Resort
                </h3>
                <p className="text-[#D8CDE7] mt-2 font-medium text-sm sm:text-base font-body">
                  NH-28, Motihari, Bihar
                </p>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#FFF8F0]/90">
                  <li className="flex items-start gap-3">
                    <CalendarDays size={18} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span>21 October 2026, Wednesday</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-pink shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Gate Opens: 5:00 PM | Event: 6:00 PM onwards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles size={18} className="text-amber shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Spacious open celebration grounds with festival stage</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/20">
                <Btn href={MAP_LINK} icon={Navigation} className="w-full sm:w-auto">
                  Get Directions
                </Btn>
              </div>
            </div>
          </Reveal>

          {/* Google Maps Embed */}
          <Reveal className="lg:col-span-3" delay={0.15}>
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[0_15px_45px_rgba(0,0,0,0.6)] h-80 sm:h-96 lg:h-full min-h-[20rem] relative group">
              <iframe
                title="Map showing Ram Bhawan Ram Resort, Motihari"
                src={MAP_EMBED}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 glass rounded-full px-3.5 py-1.5 pointer-events-none border border-gold/30">
                <span className="text-[11px] font-serif font-bold text-gold">📍 {ADDRESS}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
