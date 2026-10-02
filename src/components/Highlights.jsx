import { motion } from 'framer-motion'
import { Users, Headphones, UtensilsCrossed, Camera, PartyPopper } from 'lucide-react'
import { Title } from './ui'

const items = [[Users, '💃', 'Traditional Dandiya Dance', 'Join the circle and dance to classic Garba and Dandiya rhythms.'], [Headphones, '🎧', 'Live DJ & Music', 'High-energy sets mixing Navratri favourites with festive beats.'], [UtensilsCrossed, '🍴', 'Food Stalls', 'Tasty festive bites and refreshments to enjoy between rounds.'], [Camera, '📸', 'Photo Booth & Memories', 'Capture your festive look in a beautifully lit photo corner.'], [PartyPopper, '🎉', 'Fun Activities & More', 'Games and surprises for friends, families and groups.']]

export default function Highlights() {
  return (
    <section id="highlights" className="section bg-ink">
      <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 20% 0%, rgba(179,18,43,.5), transparent 40%), radial-gradient(circle at 90% 100%, rgba(255,122,24,.25), transparent 40%)' }} />
      <div className="relative max-w-6xl mx-auto">
        <Title>What's Waiting For You</Title>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hide" whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ staggerChildren: 0.12 }}>
          {items.map(([I, emoji, t, d]) => (
            <motion.article key={t} variants={{ hide: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8 }}
              className="glass rounded-3xl p-7 group hover:shadow-[0_0_40px_rgba(245,192,74,.4)] hover:border-gold/70 transition-all">
              <div className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gold/30 to-amber/10 border border-gold/40 flex items-center justify-center"><I className="text-gold" aria-hidden="true" /></span>
                <span className="text-3xl" aria-hidden="true">{emoji}</span>
              </div>
              <h3 className="font-serif font-bold text-gold text-xl mt-5">{t}</h3>
              <p className="mt-2 text-sm text-amber-50/80 leading-relaxed">{d}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
