import { motion } from 'framer-motion'
import { Mandala, Reveal } from './ui'
import { DurgaEyes } from './Hero'

export default function DurgaSection() {
  return (
    <section id="about" className="section bg-gradient-to-b from-ink via-wine to-ink">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Mandala className="spin-slow w-[700px] max-w-none text-gold/15" />
      </div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245,192,74,.14), transparent 55%)' }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <motion.div animate={{ filter: ['drop-shadow(0 0 8px rgba(245,192,74,.3))', 'drop-shadow(0 0 28px rgba(245,192,74,.8))', 'drop-shadow(0 0 8px rgba(245,192,74,.3))'] }} transition={{ duration: 4, repeat: Infinity }}>
            <DurgaEyes className="w-44 md:w-64 mx-auto" />
          </motion.div>
        </Reveal>
        <Reveal delay={0.15}><h2 className="font-deva font-extrabold gold-text text-4xl sm:text-5xl md:text-6xl mt-8 leading-tight">शक्ति • भक्ति • उत्सव</h2></Reveal>
        <Reveal delay={0.25}><p className="font-display text-gold text-lg md:text-2xl mt-4">Celebrate the Spirit of Navratri</p></Reveal>
        <Reveal delay={0.35}>
          <div className="glass rounded-3xl p-6 md:p-10 mt-10">
            <p className="text-amber-50/90 leading-loose md:text-lg">
              Navratri is a celebration of शक्ति, भक्ति and togetherness — a time when communities come together to honour the divine energy of Maa Durga through music, dance, devotion and joy. Nine nights of light, colour and rhythm, shared with family and friends.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
