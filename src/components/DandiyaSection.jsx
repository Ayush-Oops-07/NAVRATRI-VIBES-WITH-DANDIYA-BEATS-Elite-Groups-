import { motion } from 'framer-motion'
import { Users, Music, MapPin, Flame } from 'lucide-react'
import { Particles, Reveal, Title } from './ui'

const cards = [[Users, 'DANCE', 'Circles of colour, spinning skirts and sticks in perfect rhythm.'], [Music, 'MUSIC', 'Dhol, DJ and Garba beats that keep every step alive.'], [MapPin, 'MOTIHAARI VIBES', 'Our own city, our own people, one big festive family.'], [Flame, 'FESTIVE ENERGY', 'Lights, laughter and the warmth of Navratri night.']]

const Crossed = () => (
  <div className="relative h-56 md:h-72 w-56 md:w-72 mx-auto" aria-hidden="true">
    {[1, -1].map((s) => (
      <motion.div key={s} className="absolute left-1/2 top-2 h-full w-4 -ml-2 rounded-full bg-gradient-to-b from-[#ffe08a] via-[#c8791a] to-[#6b2f08] shadow-[0_0_25px_rgba(245,192,74,.6)]"
        initial={{ rotate: s * 40 }} animate={{ rotate: [s * 40, s * 22, s * 40] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
    ))}
    <motion.div className="absolute left-1/2 top-1/2 -ml-5 -mt-5 h-10 w-10 rounded-full bg-gold/60 blur-xl" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.4, repeat: Infinity }} />
  </div>
)

export default function DandiyaSection() {
  return (
    <section className="section crimson-bg">
      <Particles count={14} />
      <div className="relative max-w-6xl mx-auto">
        <Title sub="Dandiya brings people together through rhythm, colourful traditions, music and dance — one beat, one circle, endless energy.">Dandiya Beats. Endless Energy.</Title>
        <Reveal><Crossed /></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {cards.map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full text-center hover:shadow-[0_0_35px_rgba(245,192,74,.35)] transition-shadow">
                <I className="mx-auto text-gold mb-4" size={34} aria-hidden="true" />
                <h3 className="font-serif font-bold text-gold tracking-wider">{t}</h3>
                <p className="mt-3 text-sm text-amber-50/80 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
