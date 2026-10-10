import { motion } from 'framer-motion'
import { Users, Music, MapPin, Sparkles } from 'lucide-react'
import { Particles, Reveal, Title } from './ui'

const cards = [
  {
    icon: Users,
    title: 'GARBA CIRCLES',
    desc: 'Circles of colour, spinning skirts, and friends dancing in synchronized rhythm.',
    color: '#FF4F9A',
  },
  {
    icon: Music,
    title: 'DANDIYA BEATS',
    desc: 'Thunderous dhol rhythms and infectious festive melodies that keep every step alive.',
    color: '#FFD36A',
  },
  {
    icon: MapPin,
    title: 'MOTIHARI VIBES',
    desc: 'Our own historic city coming together as one big, joyful celebration family.',
    color: '#8B3DCE',
  },
  {
    icon: Sparkles,
    title: 'FESTIVE ENERGY',
    desc: 'Golden fairy lights, colourful lehengas, and the exhilarating warmth of Navratri night.',
    color: '#FF8A36',
  },
]

const CrossedSticks = () => (
  <div className="relative h-44 sm:h-52 w-44 sm:w-52 mx-auto my-4" aria-hidden="true">
    {[1, -1].map((s) => (
      <motion.div
        key={s}
        className="absolute left-1/2 top-2 h-full w-3.5 -ml-2 rounded-full shadow-[0_0_20px_rgba(255,211,106,0.6)]"
        style={{
          background:
            s === 1
              ? 'linear-gradient(to bottom, #FFD36A, #FF4F9A, #8B3DCE)'
              : 'linear-gradient(to bottom, #FF8A36, #FFD36A, #FF4F9A)',
        }}
        initial={{ rotate: s * 36 }}
        animate={{ rotate: [s * 36, s * 20, s * 36] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
    <motion.div
      className="absolute left-1/2 top-1/2 -ml-5 -mt-5 h-10 w-10 rounded-full bg-gold/50 blur-xl"
      animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.2, 0.9] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
  </div>
)

export default function DandiyaSection() {
  return (
    <section className="section bg-gradient-to-b from-[#160D2B] via-[#25103F] to-[#160D2B] relative">
      <Particles count={16} />
      <div className="relative max-w-6xl mx-auto z-10">
        <Title
          badge="RHYTHM & JOY"
          sub="Dandiya brings people together through rhythm, colourful traditions, music and dance — one beat, one circle, endless energy."
        >
          Dandiya Beats. Endless Energy.
        </Title>

        <Reveal>
          <CrossedSticks />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full text-center hover:border-gold/60 hover:shadow-[0_0_35px_rgba(255,211,106,0.25)] transition-all hover:-translate-y-1 duration-300 flex flex-col items-center justify-between">
                  <div>
                    <div
                      className="mx-auto w-12 h-12 rounded-xl glass border border-gold/40 flex items-center justify-center mb-4 shadow-md"
                      style={{ color: card.color }}
                    >
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-gold tracking-wider text-base">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#D8CDE7]/90 leading-relaxed font-body">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
