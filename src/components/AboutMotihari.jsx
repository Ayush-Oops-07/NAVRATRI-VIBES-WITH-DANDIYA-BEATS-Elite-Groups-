import { MapPin } from 'lucide-react'
import { Reveal } from './ui'

export default function AboutMotihari() {
  return (
    <section className="relative py-14 px-5 bg-gradient-to-r from-crimson via-ruby to-crimson border-y border-gold/30">
      <Reveal className="max-w-3xl mx-auto text-center">
        <MapPin className="mx-auto text-gold mb-3" aria-hidden="true" />
        <h2 className="font-serif font-bold gold-text text-2xl md:text-3xl">Motihari, East Champaran</h2>
        <p className="mt-4 text-amber-50/90 leading-relaxed">Motihari, the historic city of East Champaran, comes alive during festive seasons with its vibrant culture, warm hospitality and community celebrations.</p>
      </Reveal>
    </section>
  )
}
