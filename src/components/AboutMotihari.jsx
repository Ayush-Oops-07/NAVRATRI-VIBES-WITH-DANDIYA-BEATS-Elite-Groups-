import { MapPin } from 'lucide-react'
import { Reveal } from './ui'

export default function AboutMotihari() {
  return (
    <section className="relative py-12 px-5 bg-gradient-to-r from-[#160D2B] via-[#25103F] to-[#160D2B] border-y border-gold/25 shadow-inner">
      <Reveal className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full glass border border-gold/40 text-gold mb-3 shadow-[0_0_15px_rgba(255,211,106,0.2)]">
          <MapPin size={20} aria-hidden="true" />
        </div>
        <h2 className="font-display font-black gold-text text-2xl md:text-3xl">Motihari, East Champaran</h2>
        <p className="mt-3 text-[#D8CDE7] leading-relaxed text-sm md:text-base">
          Motihari, the historic and vibrant heart of East Champaran, comes alive with cultural unity, traditional music, and joyous Dandiya celebrations this Navratri.
        </p>
      </Reveal>
    </section>
  )
}
