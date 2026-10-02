import { useMemo } from 'react'
import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, y = 28, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
    {children}
  </motion.div>
)

export const Title = ({ children, sub, deva }) => (
  <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
    {deva && <p className="font-deva text-gold text-xl md:text-2xl mb-3">{deva}</p>}
    <h2 className="font-display font-black gold-text text-3xl sm:text-4xl md:text-5xl leading-tight">{children}</h2>
    <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" /><span className="text-gold">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
    {sub && <p className="mt-5 text-amber-100/80 leading-relaxed">{sub}</p>}
  </Reveal>
)

export const Mandala = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth=".6" aria-hidden="true">
    {[...Array(16)].map((_, i) => <ellipse key={i} cx="100" cy="46" rx="9" ry="30" transform={`rotate(${i * 22.5} 100 100)`} />)}
    {[...Array(12)].map((_, i) => <path key={'p' + i} d="M100 14 L107 38 L100 31 L93 38Z" transform={`rotate(${i * 30} 100 100)`} />)}
    {[94, 72, 46, 22].map((r, i) => <circle key={r} cx="100" cy="100" r={r} strokeDasharray={i % 2 ? '2 3' : ''} />)}
  </svg>
)

export const Particles = ({ count = 26 }) => {
  const items = useMemo(() => [...Array(count)].map((_, i) => ({
    left: Math.random() * 100, size: 3 + Math.random() * 6, dur: 9 + Math.random() * 14, delay: -Math.random() * 20, key: i,
  })), [count])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((p) => <span key={p.key} className="particle" style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }} />)}
    </div>
  )
}

export const Diya = ({ className = '' }) => (
  <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
    <path className="flame" d="M32 2c6 8 8 13 4 18-2 2-6 2-8 0-4-5-2-10 4-18z" fill="#ffb02e" />
    <path className="flame" d="M32 10c3 4 3 7 1 9-1 1-3 1-4 0-2-2-1-5 3-9z" fill="#fff3c4" />
    <path d="M4 26h56c0 12-12 20-28 20S4 38 4 26z" fill="#c8791a" stroke="#f5c04a" strokeWidth="1.5" />
  </svg>
)

export const Btn = ({ href, children, variant = 'gold', className = '', icon: Icon }) => {
  const ext = href.startsWith('http')
  const styles = variant === 'gold'
    ? 'bg-gradient-to-b from-[#ffe08a] via-gold to-[#c8791a] text-wine shadow-[0_0_30px_rgba(245,192,74,.45)]'
    : 'glass text-gold hover:bg-white/10'
  return (
    <motion.a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-serif font-bold tracking-wide text-sm sm:text-base ${styles} ${className}`}>
      {Icon && <Icon size={18} aria-hidden="true" />}{children}
    </motion.a>
  )
}
