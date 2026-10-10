import { useMemo } from 'react'
import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, y = 28, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const Title = ({ children, sub, deva, badge }) => (
  <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
    {badge && (
      <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass shadow-[0_0_15px_rgba(255,211,106,0.15)] mb-3">
        {badge}
      </span>
    )}
    {deva && <p className="font-deva text-gold/90 text-lg md:text-xl mb-2">{deva}</p>}
    <h2 className="font-display font-black gold-text text-3xl sm:text-4xl md:text-5xl leading-tight">
      {children}
    </h2>
    <div className="flex items-center justify-center gap-3 mt-4" aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <span className="text-gold text-xs">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent via-gold to-transparent" />
    </div>
    {sub && <p className="mt-4 text-[#D8CDE7] leading-relaxed text-sm md:text-base">{sub}</p>}
  </Reveal>
)

export const FestiveBunting = ({ className = '' }) => {
  const flags = [
    '#FF4F9A', '#FFD36A', '#8B3DCE', '#FF8A36', '#00D2D3',
    '#FF4F9A', '#FFD36A', '#FF8A36', '#8B3DCE', '#FF4F9A',
    '#FFD36A', '#00D2D3', '#FF8A36', '#8B3DCE', '#FF4F9A',
    '#FFD36A', '#FF8A36', '#8B3DCE', '#00D2D3', '#FF4F9A',
    '#FFD36A', '#8B3DCE', '#FF8A36', '#FF4F9A', '#FFD36A'
  ]

  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        className="w-full h-8 sm:h-12 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 8 Q 150 18 300 8 T 600 8 T 900 8 T 1200 8"
          fill="none"
          stroke="#FFD36A"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        {flags.map((color, i) => {
          const x = i * 48 + 12
          const curveY = 8 + Math.sin((i / (flags.length - 1)) * Math.PI * 4) * 3
          return (
            <polygon
              key={i}
              points={`${x},${curveY} ${x + 24},${curveY} ${x + 12},${curveY + 28}`}
              fill={color}
              opacity="0.88"
            />
          )
        })}
      </svg>
    </div>
  )
}

export const FestiveDandiyaIcon = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    {/* Crossed sticks */}
    <rect x="8" y="29" width="48" height="6" rx="3" transform="rotate(-35 32 32)" fill="url(#stickGrad1)" stroke="#FFD36A" strokeWidth="1" />
    <rect x="8" y="29" width="48" height="6" rx="3" transform="rotate(35 32 32)" fill="url(#stickGrad2)" stroke="#FF8A36" strokeWidth="1" />
    {/* Tassels */}
    <circle cx="12" cy="18" r="3.5" fill="#FF4F9A" />
    <circle cx="52" cy="18" r="3.5" fill="#FFD36A" />
    <defs>
      <linearGradient id="stickGrad1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF4F9A" />
        <stop offset="50%" stopColor="#FFD36A" />
        <stop offset="100%" stopColor="#8B3DCE" />
      </linearGradient>
      <linearGradient id="stickGrad2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF8A36" />
        <stop offset="50%" stopColor="#FFD36A" />
        <stop offset="100%" stopColor="#FF4F9A" />
      </linearGradient>
    </defs>
  </svg>
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
    left: Math.random() * 100,
    size: 3 + Math.random() * 5,
    dur: 10 + Math.random() * 12,
    delay: -Math.random() * 18,
    key: i,
  })), [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.key}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export const Diya = ({ className = '' }) => (
  <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
    <path className="flame" d="M32 2c6 8 8 13 4 18-2 2-6 2-8 0-4-5-2-10 4-18z" fill="#FF8A36" />
    <path className="flame" d="M32 10c3 4 3 7 1 9-1 1-3 1-4 0-2-2-1-5 3-9z" fill="#FFF3C4" />
    <path d="M4 26h56c0 12-12 20-28 20S4 38 4 26z" fill="#C8791A" stroke="#FFD36A" strokeWidth="1.5" />
  </svg>
)

export const Btn = ({
  href,
  onClick,
  children,
  variant = 'gold',
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const styles =
    variant === 'gold'
      ? 'bg-gradient-to-r from-[#FFD36A] via-[#FF9A2E] to-[#FF8A36] text-[#160D2B] font-extrabold shadow-[0_0_25px_rgba(255,211,106,0.45)] hover:shadow-[0_0_35px_rgba(255,138,54,0.6)] border border-[#FFF8F0]/30'
      : 'glass text-[#FFF8F0] hover:text-gold border border-[#FFD36A]/40 hover:border-[#FF4F9A] hover:bg-[#8B3DCE]/25 shadow-lg'

  if (href) {
    const ext = href.startsWith('http')
    return (
      <motion.a
        href={href}
        {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-serif font-bold tracking-wide text-sm sm:text-base transition-all duration-300 ${styles} ${className}`}
        {...props}
      >
        {Icon && <Icon size={18} aria-hidden="true" />}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.04, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-serif font-bold tracking-wide text-sm sm:text-base transition-all duration-300 ${styles} ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </motion.button>
  )
}
