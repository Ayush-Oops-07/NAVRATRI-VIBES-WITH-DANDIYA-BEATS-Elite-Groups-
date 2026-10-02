import { motion, useScroll, useTransform } from 'framer-motion'
import { CalendarDays, Clock, MapPin, ChevronDown, MessageCircle, Ticket } from 'lucide-react'
import { Btn, Mandala, Particles, Diya } from './ui'
import { BOOK_LINK, ENQUIRE_LINK, ADDRESS, MAP_LINK } from '../constants'

export const DurgaEyes = ({ className = '' }) => (
  <svg viewBox="0 0 220 90" className={className} role="img" aria-label="Maa Durga eyes motif">
    <defs><radialGradient id="iris"><stop offset="0" stopColor="#1a0306" /><stop offset=".55" stopColor="#3b0a10" /><stop offset="1" stopColor="#7a0c1a" /></radialGradient></defs>
    {[0, 1].map((i) => (
      <g key={i} transform={i ? 'translate(220 0) scale(-1 1)' : ''}>
        <path d="M8 52 Q55 8 100 44 Q55 62 8 52Z" fill="#fff6dc" stroke="#f5c04a" strokeWidth="3" />
        <circle cx="58" cy="40" r="15" fill="url(#iris)" /><circle cx="53" cy="35" r="3.5" fill="#fff" />
        <path d="M2 54 Q55 0 108 42" fill="none" stroke="#f5c04a" strokeWidth="2.5" />
      </g>
    ))}
    <circle cx="110" cy="14" r="5" fill="#ff3b2e" stroke="#f5c04a" strokeWidth="1.5" />
  </svg>
)

const Stick = ({ rot, delay }) => (
  <motion.div className="absolute left-1/2 top-1/2 h-72 md:h-[26rem] w-3 -ml-1.5 -mt-36 md:-mt-52 rounded-full bg-gradient-to-b from-[#ffe08a] via-[#c8791a] to-[#7a3b0a] shadow-[0_0_18px_rgba(245,192,74,.5)]"
    initial={{ rotate: rot - 12 }} animate={{ rotate: [rot - 12, rot + 6, rot - 12] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }} />
)

export default function Hero() {
  const { scrollY } = useScroll()
  const yMandala = useTransform(scrollY, [0, 600], [0, 120])
  const chips = [
    [CalendarDays, '21 OCTOBER 2026'],
    [Clock, 'Gate Open: 5:00 PM | Event: 6:00 PM'],
    [MapPin, 'Ram Bhawan Ram Resort, NH-28, Motihari']
  ]
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center crimson-bg overflow-hidden pt-28 pb-20 px-4">
      <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 15% 25%, rgba(255,154,46,.35), transparent 22%), radial-gradient(circle at 85% 20%, rgba(255,200,80,.3), transparent 20%), radial-gradient(circle at 50% 100%, rgba(255,122,24,.35), transparent 40%)' }} />
      <motion.div style={{ y: yMandala }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Mandala className="spin-slow w-[140vw] max-w-[1100px] text-gold/20" />
      </motion.div>
      <div className="hidden md:block absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true"><Stick rot={32} delay={0} /><Stick rot={-32} delay={1.5} /></div>
      <Particles />
      <Diya className="absolute left-4 bottom-10 w-12 md:w-20 opacity-90" /><Diya className="absolute right-4 bottom-10 w-12 md:w-20 opacity-90" />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs sm:text-sm text-gold font-medium border border-gold/40 hover:border-gold hover:scale-105 transition-all mb-4 shadow-[0_0_20px_rgba(245,192,74,0.25)]"
        >
          <MapPin size={15} className="text-gold shrink-0 animate-pulse" />
          <span>📍 {ADDRESS}</span>
        </motion.a>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <DurgaEyes className="w-36 sm:w-48 md:w-56 mx-auto drop-shadow-[0_0_25px_rgba(245,192,74,.6)]" />
        </motion.div>
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="inline-block mt-4 glass rounded-full px-5 py-1.5 text-[11px] sm:text-xs tracking-[0.25em] text-gold">THE ULTIMATE NAVRATRI CELEBRATION</motion.span>
        <h1 className="mt-5">
          <motion.span initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.5, duration: 1 }}
            className="block font-display font-black gold-text text-[2.6rem] leading-[1.05] sm:text-6xl md:text-8xl drop-shadow-[0_6px_30px_rgba(0,0,0,.5)]">NAVRATRI VIBES</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="block font-serif text-gold text-sm sm:text-xl tracking-[0.5em] my-3">— WITH —</motion.span>
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }}
            className="block font-display font-black text-white text-3xl sm:text-5xl md:text-7xl leading-tight drop-shadow-[0_0_25px_rgba(255,154,46,.6)]">DANDIYA BEATS</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="block font-display font-black gold-text text-4xl md:text-6xl mt-2">2026</motion.span>
        </h1>
        <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="mt-8 flex flex-wrap justify-center gap-3">
          {chips.map(([I, t]) => <li key={t} className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium"><I size={16} className="text-gold" aria-hidden="true" />{t}</li>)}
        </motion.ul>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
          <Btn href={BOOK_LINK} icon={Ticket}>BOOK YOUR PASS</Btn>
          <Btn href={ENQUIRE_LINK} variant="glass" icon={MessageCircle}>ENQUIRE ON WHATSAPP</Btn>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gold">
        <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="block"><ChevronDown size={30} /></motion.span>
      </a>
    </section>
  )
}
