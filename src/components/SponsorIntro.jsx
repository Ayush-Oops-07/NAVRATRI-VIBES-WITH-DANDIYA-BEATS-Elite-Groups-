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
      <div className="flex items-center justify-center gap-2 my-2.5 w-full opacity-80" aria-hidden="true">
        <span className={`h-px flex-1 bg-gradient-to-r ${gradientClass}`} />
        <span className={`${dotColor} text-[10px]`}>✦</span>
        <span className={`h-px flex-1 bg-gradient-to-l ${gradientClass}`} />
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center gap-2 my-2 sm:my-2.5 w-full overflow-hidden" aria-hidden="true">
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
        className={`${dotColor} text-[10px] sm:text-xs shrink-0 drop-shadow-[0_0_6px_currentColor]`}
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
          badge: 'bg-slate-800/90 text-slate-200 border border-slate-400/40',
        }
      case 'bronze':
        return {
          border: 'border-amber-600/50 group-hover:border-amber-500',
          bg: 'bg-gradient-to-b from-amber-950/80 via-[#1c0803]/90 to-[#0e0301]',
          text: 'text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700',
          glow: 'shadow-[0_0_25px_rgba(217,119,6,0.25)]',
          badge: 'bg-amber-950/90 text-amber-200 border border-amber-600/50',
        }
      case 'gold':
      default:
        return {
          border: 'border-gold/70 group-hover:border-gold',
          bg: 'bg-gradient-to-b from-[#3a0a14]/90 via-[#1f0409]/95 to-[#0d0103]',
          text: 'text-transparent bg-clip-text bg-gradient-to-b from-[#fff6dc] via-[#f5c04a] to-[#c8791a]',
          glow: 'shadow-[0_0_35px_rgba(245,192,74,0.35)]',
          badge: 'bg-[#2a070e]/95 text-gold border border-gold/50',
        }
    }
  }, [type])

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl border ${theme.border} ${theme.bg} ${theme.glow} flex flex-col items-center justify-center p-2.5 sm:p-3 transition-all duration-300 w-full h-full`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      
      {isPlaceholder ? (
        <div className="flex flex-col items-center justify-center gap-1">
          <Award size={isCenter ? 24 : 18} className={type === 'gold' ? 'text-gold animate-pulse' : type === 'silver' ? 'text-slate-200' : 'text-amber-400'} />
          <span className={`font-serif uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs font-bold ${theme.text}`}>
            YOUR LOGO HERE
          </span>
        </div>
      ) : (
        <span className={`font-display font-black tracking-wider ${theme.text} ${isCenter ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
          {name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}
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
  delay = 0.5,
  isReducedMotion = false,
}) => {
  const [imageError, setImageError] = useState(false)

  const styles = useMemo(() => {
    switch (variant) {
      case 'silver':
        return {
          cardBorder: 'border-slate-300/35 hover:border-slate-300/80',
          cardGlow: 'shadow-[0_0_35px_rgba(203,213,225,0.1)] hover:shadow-[0_0_50px_rgba(203,213,225,0.22)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-400',
          titleText: 'text-slate-100 group-hover:text-white',
          taglineText: 'text-slate-300/80',
          bgGlass: 'bg-gradient-to-b from-white/[0.08] via-slate-900/40 to-black/60',
          auraColor: 'rgba(203,213,225,0.14)',
          ctaBadge: 'bg-slate-800/80 text-slate-200 border-slate-400/40 group-hover:border-slate-300',
        }
      case 'bronze':
        return {
          cardBorder: 'border-amber-600/40 hover:border-amber-500/80',
          cardGlow: 'shadow-[0_0_35px_rgba(217,119,6,0.12)] hover:shadow-[0_0_50px_rgba(217,119,6,0.26)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600',
          titleText: 'text-amber-100 group-hover:text-amber-50',
          taglineText: 'text-amber-200/75',
          bgGlass: 'bg-gradient-to-b from-amber-500/[0.08] via-amber-950/40 to-black/60',
          auraColor: 'rgba(217,119,6,0.18)',
          ctaBadge: 'bg-amber-950/80 text-amber-200 border-amber-600/50 group-hover:border-amber-400',
        }
      case 'gold':
      default:
        return {
          cardBorder: 'border-gold/50 hover:border-gold',
          cardGlow: 'shadow-[0_0_60px_rgba(245,192,74,0.22)] hover:shadow-[0_0_80px_rgba(245,192,74,0.4)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-[#fff3c4] via-[#f5c04a] to-[#c8791a]',
          titleText: 'gold-text',
          taglineText: 'text-amber-100/90',
          bgGlass: 'bg-gradient-to-b from-[#f5c04a]/[0.15] via-[#2a070e]/50 to-[#0f0204]/85',
          auraColor: 'rgba(245,192,74,0.28)',
          ctaBadge: 'bg-[#2a070e]/90 text-gold border-gold/60 group-hover:border-gold',
        }
    }
  }, [variant])

  const CardWrapper = sponsor.link ? motion.a : motion.div
  const linkProps = sponsor.link
    ? {
        href: sponsor.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        title: `Book or Enquire: ${sponsor.name}`,
      }
    : {}

  // Motion variants
  const motionProps = isReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay },
      }
    : {
        initial: {
          opacity: 0,
          y: isCenter ? 25 : 18,
          scale: isCenter ? 0.92 : 0.96,
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        transition: {
          duration: isCenter ? 0.9 : 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      }

  return (
    <CardWrapper
      {...linkProps}
      {...motionProps}
      whileHover={sponsor.link ? { scale: isCenter ? 1.025 : 1.03, y: -3 } : {}}
      whileTap={sponsor.link ? { scale: 0.98 } : {}}
      className={`group relative flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border backdrop-blur-xl ${styles.cardBorder} ${styles.bgGlass} ${styles.cardGlow} transition-all duration-300 ${
        isCenter
          ? 'p-4 sm:p-6 md:p-7 w-full md:max-w-[380px] lg:max-w-[420px] z-20'
          : 'p-3.5 sm:p-4 md:p-5 w-full md:max-w-[280px] lg:max-w-[310px] z-10'
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
          className={`inline-block font-serif font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase ${
            styles.badgeText
          } ${isCenter ? 'text-xs sm:text-sm md:text-base' : 'text-[10px] sm:text-xs'}`}
        >
          {sponsor.category}
        </span>
        <MetallicDivider type={variant} delay={delay + 0.2} isReducedMotion={isReducedMotion} />
      </div>

      {/* Logo container */}
      <div
        className={`relative z-10 flex items-center justify-center my-2 sm:my-2.5 w-full ${
          isCenter ? 'h-16 sm:h-20 md:h-24 max-w-[220px]' : 'h-12 sm:h-14 md:h-16 max-w-[170px]'
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
                : 'drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            }`}
          />
        ) : (
          <LuxuryLogoEmblem name={sponsor.name} type={variant} isCenter={isCenter} />
        )}
      </div>

      {/* Sponsor Name & Tagline */}
      <div className="relative z-10 mt-1 flex flex-col items-center w-full">
        <h3
          className={`font-display font-black leading-snug tracking-wide transition-colors ${
            styles.titleText
          } ${isCenter ? 'text-base sm:text-xl md:text-2xl' : 'text-xs sm:text-sm md:text-base'}`}
        >
          {sponsor.name}
        </h3>

        {sponsor.tagline && (
          <p
            className={`mt-1 font-body font-medium ${styles.taglineText} ${
              isCenter ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'
            }`}
          >
            {sponsor.tagline}
          </p>
        )}

        {/* CTA Slot Reservation / WhatsApp Trigger */}
        {sponsor.link && (
          <div className="mt-3 flex items-center justify-center">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider border shadow-md transition-all duration-300 group-hover:scale-105 ${styles.ctaBadge}`}
            >
              <span>{sponsor.badgeText || 'Book This Slot'}</span>
              <ExternalLink size={11} aria-hidden="true" />
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
  const [timeLeft, setTimeLeft] = useState(sponsorConfig.duration || 20)

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

  const { presentedBy, poweredBy, coPoweredBy, whatsapp } = sponsorConfig

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
          className="fixed inset-0 z-[99999] flex flex-col justify-between items-center bg-[#070103] text-amber-100 overflow-y-auto overflow-x-hidden p-3.5 sm:p-5 md:p-7 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Official Sponsor Presentation & Slot Showcase"
        >
          {/* Layer 1: Background Ambient Radial Atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 45%, rgba(143,18,36,0.38) 0%, rgba(45,5,11,0.85) 55%, #070103 100%)',
            }}
            aria-hidden="true"
          />

          {/* Layer 2: Subtle Blurred Backdrop Filter */}
          <div className="absolute inset-0 backdrop-blur-[6px] pointer-events-none" aria-hidden="true" />

          {/* Layer 3: Cinematic Light Sweep (Phase 1) */}
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
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]"
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

          {/* Layer 5: Ambient Floating Sparkles / Dust */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  left: `${(i * 6.25 + 3) % 100}%`,
                  width: `${2 + (i % 3) * 2}px`,
                  height: `${2 + (i % 3) * 2}px`,
                  animationDuration: `${10 + (i % 5) * 3}s`,
                  animationDelay: `${-(i * 1.5)}s`,
                }}
              />
            ))}
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
              className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border border-gold/35 text-gold/80 hover:text-gold hover:border-gold shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              <X size={18} aria-hidden="true" />
            </motion.button>
          </header>

          {/* CENTER: Main Sponsors Composition */}
          <main className="relative z-20 w-full max-w-6xl my-auto py-3 sm:py-5 flex flex-col items-center">
            {/* Header / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center mb-4 sm:mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-gold/30 text-gold text-[10px] sm:text-xs tracking-[0.2em] mb-2 shadow-[0_0_15px_rgba(245,192,74,0.15)]">
                <Sparkles size={12} className="text-gold animate-pulse" />
                <span>SPONSORSHIP OPPORTUNITIES</span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-3xl md:text-4xl gold-text tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                CELEBRATION PARTNERS
              </h2>
              <p className="text-amber-100/70 text-xs sm:text-sm font-body max-w-md mx-auto mt-1">
                Promote your brand in front of 5000+ dandiya & festive attendees in Motihari
              </p>
            </motion.div>

            {/* Desktop Layout: Balanced 3-Column (Left: Powered By, Center: Presented By, Right: Co-Powered By) */}
            {/* Mobile Layout: Stacked (Top: Presented By, Bottom: Powered By & Co-Powered By grid) */}
            <div className="w-full">
              {/* DESKTOP (md and above) */}
              <div className="hidden md:flex items-center justify-center gap-4 lg:gap-7 w-full">
                {/* LEFT: POWERED BY */}
                <div className="flex-1 flex justify-end">
                  <SponsorCard
                    sponsor={poweredBy}
                    variant="silver"
                    isCenter={false}
                    delay={1.4}
                    isReducedMotion={isReducedMotion}
                  />
                </div>

                {/* CENTER: PRESENTED BY (Most Prominent) */}
                <div className="flex-initial flex justify-center">
                  <SponsorCard
                    sponsor={presentedBy}
                    variant="gold"
                    isCenter={true}
                    delay={0.7}
                    isReducedMotion={isReducedMotion}
                  />
                </div>

                {/* RIGHT: CO-POWERED BY */}
                <div className="flex-1 flex justify-start">
                  <SponsorCard
                    sponsor={coPoweredBy}
                    variant="bronze"
                    isCenter={false}
                    delay={1.6}
                    isReducedMotion={isReducedMotion}
                  />
                </div>
              </div>

              {/* MOBILE & TABLET (below md) */}
              <div className="flex md:hidden flex-col items-center gap-3.5 w-full max-w-lg mx-auto">
                {/* CENTER: PRESENTED BY (Top & Full Width) */}
                <SponsorCard
                  sponsor={presentedBy}
                  variant="gold"
                  isCenter={true}
                  delay={0.5}
                  isReducedMotion={isReducedMotion}
                />

                {/* SIDE PARTNERS: 2-Column Balanced Grid */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <SponsorCard
                    sponsor={poweredBy}
                    variant="silver"
                    isCenter={false}
                    delay={1.0}
                    isReducedMotion={isReducedMotion}
                  />
                  <SponsorCard
                    sponsor={coPoweredBy}
                    variant="bronze"
                    isCenter={false}
                    delay={1.2}
                    isReducedMotion={isReducedMotion}
                  />
                </div>
              </div>
            </div>
          </main>

          {/* BOTTOM BAR: WhatsApp & Auto-enter Countdown info */}
          <footer className="relative z-30 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-2.5 pb-1 border-t border-gold/15">
            {/* WhatsApp Sponsorship Action */}
            {whatsappHref ? (
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/50 hover:border-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all"
              >
                <MessageCircle size={16} className="text-emerald-400 shrink-0" />
                <span>{whatsapp.label || 'Book Your Sponsor Slot on WhatsApp'}</span>
              </motion.a>
            ) : (
              <div />
            )}

            {/* Skip / Enter prompt with live timer */}
            <motion.button
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-[11px] sm:text-xs text-amber-100/70 hover:text-gold transition-colors font-serif tracking-wider flex items-center gap-1.5 focus:outline-none"
            >
              <span>Entering event in <strong className="text-gold font-bold">{timeLeft}s</strong></span>
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
                duration: sponsorConfig.duration || 20,
                ease: 'linear',
              }}
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8f1224] via-[#f5c04a] to-[#8f1224] origin-left pointer-events-none opacity-80"
              aria-hidden="true"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
