import { motion } from 'framer-motion'
import { Users, Music, Camera, Sparkles, Heart } from 'lucide-react'
import { Title } from './ui'

const items = [
  {
    icon: Users,
    title: 'Traditional Garba & Dandiya',
    desc: 'Step into the energetic dance circles and celebrate with traditional steps, synchronized beats, and twirling lehengas.',
    badge: 'FESTIVAL TRADITION',
    accent: '#FF4F9A',
  },
  {
    icon: Music,
    title: 'High-Energy Festive Beats',
    desc: 'Pulsating sound system and thunderous traditional dhol rhythms to keep the celebration energetic all evening.',
    badge: 'LIVE RHYTHM',
    accent: '#FFD36A',
  },
  {
    icon: Camera,
    title: 'Cinematic Photography & Moments',
    desc: 'Capture your royal festive attire and candid dancing moments in ultra high-definition photography.',
    badge: 'PRECIOUS MEMORIES',
    accent: '#00D2D3',
  },
  {
    icon: Sparkles,
    title: 'Royal Stage & Festive Ambiance',
    desc: 'Breathtaking festive lighting, colorful bunting, and decorated arena creating a magical Navratri night in Motihari.',
    badge: 'GRAND AMBIANCE',
    accent: '#FF8A36',
  },
  {
    icon: Heart,
    title: 'Community & Family Celebration',
    desc: 'A joyous, welcoming, and safe festive atmosphere designed for friends, families, youth, and celebration lovers.',
    badge: 'FAMILY FRIENDLY',
    accent: '#8B3DCE',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="section bg-[#160D2B] relative">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(139, 61, 206, 0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(255, 79, 154, 0.2), transparent 45%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <Title
          badge="EVENT HIGHLIGHTS"
          deva="उत्सव के मुख्य आकर्षण"
          sub="Everything that makes Navratri Vibes with Dandiya Beats 2026 the most awaited festive gathering in Motihari."
        >
          What Awaits You
        </Title>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={{ hide: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-gold/25 hover:border-gold/60 hover:shadow-[0_0_35px_rgba(255,211,106,0.25)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-12 h-12 rounded-2xl glass border flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"
                      style={{ borderColor: `${item.accent}60`, color: item.accent }}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-serif font-bold tracking-widest text-[#D8CDE7]/80 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-gold text-lg sm:text-xl group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#D8CDE7] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
