import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, ExternalLink, Sparkles, Award } from 'lucide-react'
import { sponsorConfig } from '../config/sponsors'

// Helper component for elegant decorative lines with metallic gradients
const MetallicDivider = ({ type = 'gold', delay = 0.8, isReducedMotion = false }) => {
  const gradientClass = useMemo(() => {
    switch (type) {
      case 'silver':
        return 'from-transparent via-slate-300 to-transparent'
      case 'bronze':
        return 'from-transparent via-amber-600 to-transparent'
      case 'gold':
      default:
        return 'from-transparent via-[#f5c04a] to-transparent'
    }
  }, [type])

  const dotColor = useMemo(() => {
    switch (type) {
      case 'silver':
        return 'text-slate-300'
      case 'bronze':
        return 'text-amber-500'
      case 'gold':
      default:
        return 'text-gold'
    }
  }, [type])

  if (isReducedMotion) {
    return (
      <div className="flex items-center justify-center gap-2 my-1.5 w-full opacity-80" aria-hidden="true">
        <span className={`h-px flex-1 bg-gradient-to-r ${gradientClass}`} />
        <span className={`${dotColor} text-[10px]`}>✦</span>
        <span className={`h-px flex-1 bg-gradient-to-l ${gradientClass}`} />
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center gap-1.5 my-1 sm:my-1.5 w-full overflow-hidden" aria-hidden="true">
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px flex-1 origin-right bg-gradient-to-r ${gradientClass}`}
      />
      <motion.span
        initial={{ scale: 0, opacity: 0, rotate: -45 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className={`${dotColor} text-[9px] sm:text-[11px] shrink-0 drop-shadow-[0_0_6px_currentColor]`}
      >
        ✦
      </motion.span>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px flex-1 origin-left bg-gradient-to-l ${gradientClass}`}
      />
    </div>
  )
}

// Fallback luxury emblem when no image logo is supplied
const LuxuryLogoEmblem = ({ name, type = 'gold', isCenter = false }) => {
  const isPlaceholder = !name || name.toLowerCase().includes('your') || name.toLowerCase().includes('brand') || name.toLowerCase().includes('business') || name.toLowerCase().includes('company')

  const theme = useMemo(() => {
    switch (type) {
      case 'silver':
        return {
          border: 'border-slate-300/50 group-hover:border-slate-200',
          bg: 'bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950',
          text: 'text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400',
          glow: 'shadow-[0_0_25px_rgba(203,213,225,0.2)]',
        }
      case 'bronze':
        return {
          border: 'border-amber-600/50 group-hover:border-amber-500',
          bg: 'bg-gradient-to-b from-[#4A154B]/80 via-[#25103F]/90 to-[#0E081D]',
          text: 'text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700',
          glow: 'shadow-[0_0_25px_rgba(217,119,6,0.25)]',
        }
      case 'gold':
      default:
        return {
          border: 'border-gold/70 group-hover:border-gold',
          bg: 'bg-gradient-to-b from-[#3B1666]/90 via-[#25103F]/95 to-[#0E081D]',
          text: 'text-transparent bg-clip-text bg-gradient-to-b from-[#fff6dc] via-[#f5c04a] to-[#c8791a]',
          glow: 'shadow-[0_0_35px_rgba(245,192,74,0.35)]',
        }
    }
  }, [type])

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl border ${theme.border} ${theme.bg} ${theme.glow} flex flex-col items-center justify-center p-2 sm:p-2.5 transition-all duration-300 w-full h-full`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {isPlaceholder ? (
        <div className="flex flex-col items-center justify-center gap-1">
          <Award size={isCenter ? 22 : 16} className={type === 'gold' ? 'text-gold animate-pulse' : type === 'silver' ? 'text-slate-200' : 'text-amber-400'} />
          <span className={`font-serif uppercase tracking-widest text-[8px] sm:text-[9px] font-bold ${theme.text}`}>
            YOUR LOGO HERE
          </span>
        </div>
      ) : (
        <span className={`font-display font-black tracking-wider ${theme.text} ${isCenter ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'}`}>
          {name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()}
        </span>
      )}
    </div>
  )
}

// Sponsor Showcase Card
const SponsorCard = ({
  sponsor,
  variant = 'gold',
  isCenter = false,
  isCompact = false,
  delay = 0.5,
  isReducedMotion = false,
}) => {
  const [imageError, setImageError] = useState(false)

  const styles = useMemo(() => {
    switch (variant) {
      case 'silver':
        return {
          cardBorder: 'border-slate-300/40 hover:border-slate-300/80',
          cardGlow: 'shadow-[0_0_35px_rgba(203,213,225,0.14)] hover:shadow-[0_0_55px_rgba(203,213,225,0.28)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-400',
          titleText: 'text-slate-100 group-hover:text-white',
          taglineText: 'text-slate-300/85',
          bgGlass: 'bg-gradient-to-b from-white/[0.08] via-[#25103F]/75 to-[#0E081D]/90',
          auraColor: 'rgba(203,213,225,0.16)',
          ctaBadge: 'bg-[#25103F]/90 text-slate-200 border-slate-400/50 group-hover:border-slate-300',
        }
      case 'bronze':
        return {
          cardBorder: 'border-amber-500/50 hover:border-amber-400/80',
          cardGlow: 'shadow-[0_0_35px_rgba(255,138,54,0.18)] hover:shadow-[0_0_55px_rgba(255,138,54,0.35)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600',
          titleText: 'text-amber-100 group-hover:text-amber-50',
          taglineText: 'text-amber-200/85',
          bgGlass: 'bg-gradient-to-b from-[#4A154B]/60 via-[#25103F]/80 to-[#0E081D]/90',
          auraColor: 'rgba(255,138,54,0.22)',
          ctaBadge: 'bg-[#25103F]/90 text-amber-200 border-amber-500/50 group-hover:border-amber-400',
        }
      case 'valuable':
        return {
          cardBorder: 'border-gold/35 hover:border-gold/75',
          cardGlow: 'shadow-[0_0_25px_rgba(139,61,206,0.18)] hover:shadow-[0_0_40px_rgba(255,211,106,0.3)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-gold',
          titleText: 'text-amber-100 group-hover:text-white',
          taglineText: 'text-amber-200/80',
          bgGlass: 'bg-gradient-to-b from-[#3B1666]/55 via-[#25103F]/75 to-[#0E081D]/90',
          auraColor: 'rgba(139,61,206,0.22)',
          ctaBadge: 'bg-[#25103F]/90 text-gold border-gold/45 group-hover:border-gold',
        }
      case 'gold':
      default:
        return {
          cardBorder: 'border-gold/60 hover:border-gold',
          cardGlow: 'shadow-[0_0_50px_rgba(255,211,106,0.25)] hover:shadow-[0_0_75px_rgba(255,211,106,0.45)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-[#fff3c4] via-[#f5c04a] to-[#c8791a]',
          titleText: 'gold-text',
          taglineText: 'text-amber-100/90',
          bgGlass: 'bg-gradient-to-b from-[#FFD36A]/[0.16] via-[#25103F]/80 to-[#0E081D]/90',
          auraColor: 'rgba(255,211,106,0.3)',
          ctaBadge: 'bg-[#25103F]/90 text-gold border-gold/60 group-hover:border-gold',
        }
    }
  }, [variant])

  const CardWrapper = sponsor.link ? motion.a : motion.div
  const linkProps = sponsor.link
    ? {
        href: sponsor.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        title: `Visit Partner: ${sponsor.name}`,
      }
    : {}

  // Motion variants
  const motionProps = isReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay },
      }
    : {
        initial: {
          opacity: 0,
          y: isCenter ? 25 : 16,
          scale: isCenter ? 0.93 : 0.96,
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        transition: {
          duration: isCenter ? 0.85 : 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      }

  return (
    <CardWrapper
      {...linkProps}
      {...motionProps}
      whileHover={sponsor.link ? { scale: isCenter ? 1.025 : 1.03, y: -2.5 } : {}}
      whileTap={sponsor.link ? { scale: 0.98 } : {}}
      className={`group relative flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border backdrop-blur-xl ${styles.cardBorder} ${styles.bgGlass} ${styles.cardGlow} transition-all duration-300 ${
        isCenter
          ? 'p-3.5 sm:p-5 md:p-6 w-full md:max-w-[340px] lg:max-w-[380px] z-20'
          : isCompact
          ? 'p-2.5 sm:p-3 md:p-3.5 w-full z-10'
          : 'p-3 sm:p-4 md:p-4.5 w-full md:max-w-[260px] lg:max-w-[290px] z-10'
      }`}
    >
      {/* Background radial highlight glow */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${styles.auraColor} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Category Badge Header */}
      <div className="relative z-10 mb-1 w-full">
        <span
          className={`inline-block font-serif font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase ${
            styles.badgeText
          } ${
            isCenter
              ? 'text-xs sm:text-sm'
              : isCompact
              ? 'text-[8.5px] sm:text-[9.5px]'
              : 'text-[9.5px] sm:text-xs'
          }`}
        >
          {sponsor.category}
        </span>
        <MetallicDivider
          type={variant === 'valuable' ? 'gold' : variant}
          delay={delay + 0.15}
          isReducedMotion={isReducedMotion}
        />
      </div>

      {/* Logo container */}
      <div
        className={`relative z-10 flex items-center justify-center my-1.5 sm:my-2 w-full ${
          isCenter
            ? 'h-15 sm:h-18 md:h-22 max-w-[210px]'
            : isCompact
            ? 'h-10 sm:h-12 md:h-14 max-w-[135px] sm:max-w-[160px]'
            : 'h-12 sm:h-14 md:h-16 max-w-[170px]'
        }`}
      >
        {sponsor.logo && !imageError ? (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            onError={() => setImageError(true)}
            className={`max-h-full max-w-full object-contain filter transition-transform duration-300 group-hover:scale-105 ${
              isCenter
                ? 'drop-shadow-[0_0_20px_rgba(245,192,74,0.4)]'
                : 'drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'
            }`}
          />
        ) : (
          <LuxuryLogoEmblem
            name={sponsor.name}
            type={variant === 'valuable' ? 'gold' : variant}
            isCenter={isCenter}
          />
        )}
      </div>

      {/* Sponsor Name, Tagline & Description/Location */}
      <div className="relative z-10 mt-1 flex flex-col items-center w-full">
        <h3
          className={`font-display font-black leading-snug tracking-wide transition-colors ${
            styles.titleText
          } ${
            isCenter
              ? 'text-base sm:text-lg md:text-xl'
              : isCompact
              ? 'text-xs sm:text-sm'
              : 'text-xs sm:text-sm md:text-base'
          }`}
        >
          {sponsor.name}
        </h3>

        {sponsor.tagline && (
          <p
            className={`mt-0.5 font-body font-medium ${styles.taglineText} ${
              isCenter ? 'text-xs sm:text-sm' : isCompact ? 'text-[9.5px] sm:text-[11px]' : 'text-[10px] sm:text-xs'
            }`}
          >
            {sponsor.tagline}
          </p>
        )}

        {(sponsor.description || sponsor.location) && (
          <p
            className={`mt-0.5 font-body text-amber-100/70 line-clamp-2 ${
              isCenter
                ? 'text-[10.5px] sm:text-xs max-w-[280px]'
                : isCompact
                ? 'text-[8.5px] sm:text-[9.5px] max-w-[200px]'
                : 'text-[9.5px] sm:text-[10.5px] max-w-[240px]'
            }`}
          >
            {sponsor.location ? sponsor.location : sponsor.description}
          </p>
        )}

        {/* CTA Instagram Link Badge */}
        {sponsor.link && (
          <div className={`flex items-center justify-center ${isCompact ? 'mt-1.5' : 'mt-2'}`}>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8.5px] sm:text-[9.5px] md:text-xs font-semibold tracking-wider border shadow-md transition-all duration-300 group-hover:scale-105 ${styles.ctaBadge}`}
            >
              <span>{sponsor.badgeText || 'Visit Partner'}</span>
              <ExternalLink size={10} aria-hidden="true" />
            </span>
          </div>
        )}
      </div>
    </CardWrapper>
  )
}

export default function SponsorIntro() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [timeLeft, setTimeLeft] = useState(sponsorConfig.duration || 15)

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setIsReducedMotion(mediaQuery.matches)

      const handleChange = (e) => setIsReducedMotion(e.matches)
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [])

  // Close handler with graceful transition
  const handleClose = useCallback(() => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 600)
  }, [isExiting])

  // Countdown second-by-second tracker
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          handleClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [handleClose])

  // Close on ESC keyboard key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose])

  if (!isVisible) return null

  const { celebrationPartners = [], valuableSponsors = [], whatsapp } = sponsorConfig

  // Section A: 3 Partners (Ramjee Prasad in the center)
  const keshriPartner = celebrationPartners.find((p) => p.id === 'keshri') || celebrationPartners[0]
  const ramjeePartner =
    celebrationPartners.find((p) => p.id === 'ramjee' || p.isCenter) || celebrationPartners[1]
  const ganpatiPartner = celebrationPartners.find((p) => p.id === 'ganpati') || celebrationPartners[2]

  const whatsappHref = whatsapp?.enabled
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message || '')}`
    : null

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="sponsor-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: isReducedMotion ? 1 : 1.02,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between items-center bg-[#0E081D] text-amber-100 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Official Sponsor Presentation & Celebration Partners Showcase"
        >
          {/* Layer 1: Background Ambient Radial Atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 45%, rgba(139,61,206,0.38) 0%, rgba(37,16,63,0.85) 55%, #0E081D 100%)',
            }}
            aria-hidden="true"
          />

          {/* Layer 2: Subtle Blurred Backdrop Filter */}
          <div className="absolute inset-0 backdrop-blur-[6px] pointer-events-none" aria-hidden="true" />

          {/* Layer 3: Cinematic Light Sweep */}
          {!isReducedMotion && (
            <motion.div
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '180%', opacity: [0, 0.45, 0] }}
              transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold/15 to-transparent skew-x-[-25deg] pointer-events-none"
              aria-hidden="true"
            />
          )}

          {/* Layer 4: Delicate Background Festive Motifs */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-[120vw] max-w-[900px] text-gold animate-[spinSlow_140s_linear_infinite]"
              fill="none"
              stroke="currentColor"
              strokeWidth=".5"
            >
              {[...Array(16)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="100"
                  cy="46"
                  rx="9"
                  ry="30"
                  transform={`rotate(${i * 22.5} 100 100)`}
                />
              ))}
              {[94, 72, 46, 22].map((r, i) => (
                <circle key={r} cx="100" cy="100" r={r} strokeDasharray={i % 2 ? '2 3' : ''} />
              ))}
            </svg>
          </div>

          {/* TOP BAR: Event Badge & Close Button */}
          <header className="relative z-30 w-full max-w-6xl flex items-center justify-between pt-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="font-serif tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs text-gold/80 uppercase font-medium">
                Navratri Vibes 2026 • Official Sponsors & Partners
              </span>
            </motion.div>

            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(245,192,74,0.18)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close sponsor intro"
              className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full glass border border-gold/35 text-gold/80 hover:text-gold hover:border-gold shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              <X size={17} aria-hidden="true" />
            </motion.button>
          </header>

          {/* CENTER: Main Sponsors Composition */}
          <main className="relative z-20 w-full max-w-6xl my-auto py-2 sm:py-3 flex flex-col items-center">
            {/* Header / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center mb-2 sm:mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full glass border border-gold/30 text-gold text-[10px] sm:text-xs tracking-[0.2em] mb-1 shadow-[0_0_15px_rgba(245,192,74,0.15)]">
                <Sparkles size={11} className="text-gold animate-pulse" />
                <span>OFFICIAL FESTIVAL SPONSORSHIP</span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl gold-text tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                OUR CELEBRATION PARTNERS
              </h2>
            </motion.div>

            {/* SECTION A: 3 Partners (Desktop: 1 row, Center: Ramjee Prasad) */}
            <div className="w-full max-w-5xl">
              {/* DESKTOP (md and above) */}
              <div className="hidden md:flex items-center justify-center gap-3 lg:gap-5 w-full">
                {/* 1. Left Partner: Keshri Collection */}
                <div className="flex-1 flex justify-end">
                  <SponsorCard
                    sponsor={keshriPartner}
                    variant="silver"
                    isCenter={false}
                    delay={0.5}
                    isReducedMotion={isReducedMotion}
                  />
                </div>

                {/* 2. Center Partner: Ramjee Prasad (Primary / Most Prominent) */}
                <div className="flex-initial flex justify-center">
                  <SponsorCard
                    sponsor={ramjeePartner}
                    variant="gold"
                    isCenter={true}
                    delay={0.3}
                    isReducedMotion={isReducedMotion}
                  />
                </div>

                {/* 3. Right Partner: Ganpati Traders */}
                <div className="flex-1 flex justify-start">
                  <SponsorCard
                    sponsor={ganpatiPartner}
                    variant="gold"
                    isCenter={false}
                    delay={0.6}
                    isReducedMotion={isReducedMotion}
                  />
                </div>
              </div>

              {/* MOBILE & TABLET (below md) */}
              <div className="flex md:hidden flex-col items-center gap-2.5 w-full max-w-lg mx-auto">
                {/* Primary Partner on top */}
                <SponsorCard
                  sponsor={ramjeePartner}
                  variant="gold"
                  isCenter={true}
                  delay={0.3}
                  isReducedMotion={isReducedMotion}
                />
                {/* Other two side-by-side */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  <SponsorCard
                    sponsor={keshriPartner}
                    variant="silver"
                    isCenter={false}
                    delay={0.5}
                    isReducedMotion={isReducedMotion}
                  />
                  <SponsorCard
                    sponsor={ganpatiPartner}
                    variant="gold"
                    isCenter={false}
                    delay={0.6}
                    isReducedMotion={isReducedMotion}
                  />
                </div>
              </div>
            </div>

            {/* SUBTLE GOLDEN DIVIDER */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative w-full max-w-4xl my-3 sm:my-4 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="mx-2.5 px-3 py-0.5 rounded-full glass border border-gold/30 bg-[#25103F]/90 shadow-[0_0_15px_rgba(255,211,106,0.18)] flex items-center gap-1.5">
                <Sparkles size={11} className="text-gold" />
                <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.25em] text-gold uppercase font-bold">
                  OUR VALUABLE SPONSORS
                </span>
                <Sparkles size={11} className="text-gold" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-transparent" />
            </motion.div>

            {/* SECTION B: 4 Valuable Sponsors (Desktop: 1 row of 4 cards, Mobile: 2x2 grid) */}
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full">
                {valuableSponsors.map((sponsor, index) => {
                  const variant = sponsor.id === 'bahu' ? 'bronze' : 'valuable'
                  return (
                    <SponsorCard
                      key={sponsor.id || sponsor.name}
                      sponsor={sponsor}
                      variant={variant}
                      isCenter={false}
                      isCompact={true}
                      delay={0.8 + index * 0.1}
                      isReducedMotion={isReducedMotion}
                    />
                  )
                })}
              </div>
            </div>
          </main>

          {/* BOTTOM BAR: WhatsApp & Auto-enter Countdown info */}
          <footer className="relative z-30 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 pb-1 border-t border-gold/15">
            {/* WhatsApp Sponsorship Action */}
            {whatsappHref ? (
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass border border-emerald-500/50 hover:border-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all"
              >
                <MessageCircle size={15} className="text-emerald-400 shrink-0" />
                <span>{whatsapp.label || 'Enquire for Brand Partnerships'}</span>
              </motion.a>
            ) : (
              <div />
            )}

            {/* Skip / Enter prompt with live timer */}
            <motion.button
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-[11px] sm:text-xs text-amber-100/70 hover:text-gold transition-colors font-serif tracking-wider flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              <span>
                Entering event in <strong className="text-gold font-bold">{timeLeft}s</strong>
              </span>
              <span className="text-gold font-bold">›</span>
              <span className="underline ml-1">Skip Intro</span>
            </motion.button>
          </footer>

          {/* Bottom Countdown Hairline Progress Bar */}
          {!isReducedMotion && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: sponsorConfig.duration || 15,
                ease: 'linear',
              }}
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8B3DCE] via-[#FFD36A] to-[#8B3DCE] origin-left pointer-events-none opacity-80"
              aria-hidden="true"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
