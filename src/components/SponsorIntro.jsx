import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, ExternalLink, Sparkles, Award, ChevronLeft, ChevronRight, Pause, Play, Grid, Eye } from 'lucide-react'
import { sponsorConfig } from '../config/sponsors'
import { trackSponsorPartnerClick, trackInstagramClick, trackWhatsAppClick } from '../utils/analytics'

// Helper component for elegant decorative lines with metallic gradients
const MetallicDivider = ({ type = 'gold', delay = 0.4, isReducedMotion = false }) => {
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
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-px flex-1 origin-right bg-gradient-to-r ${gradientClass}`}
      />
      <motion.span
        initial={{ scale: 0, opacity: 0, rotate: -45 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className={`${dotColor} text-[9px] sm:text-[11px] shrink-0 drop-shadow-[0_0_6px_currentColor]`}
      >
        ✦
      </motion.span>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
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
  delay = 0.2,
  isReducedMotion = false,
  isFeaturedSpotlight = false,
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
          bgGlass: 'bg-gradient-to-b from-white/[0.08] via-[#25103F]/85 to-[#0E081D]/95',
          auraColor: 'rgba(203,213,225,0.2)',
          ctaBadge: 'bg-[#25103F]/90 text-slate-200 border-slate-400/50 group-hover:border-slate-300',
        }
      case 'bronze':
        return {
          cardBorder: 'border-amber-500/50 hover:border-amber-400/80',
          cardGlow: 'shadow-[0_0_35px_rgba(255,138,54,0.18)] hover:shadow-[0_0_55px_rgba(255,138,54,0.35)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600',
          titleText: 'text-amber-100 group-hover:text-amber-50',
          taglineText: 'text-amber-200/85',
          bgGlass: 'bg-gradient-to-b from-[#4A154B]/60 via-[#25103F]/85 to-[#0E081D]/95',
          auraColor: 'rgba(255,138,54,0.25)',
          ctaBadge: 'bg-[#25103F]/90 text-amber-200 border-amber-500/50 group-hover:border-amber-400',
        }
      case 'valuable':
        return {
          cardBorder: 'border-gold/35 hover:border-gold/75',
          cardGlow: 'shadow-[0_0_25px_rgba(139,61,206,0.18)] hover:shadow-[0_0_40px_rgba(255,211,106,0.3)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-gold',
          titleText: 'text-amber-100 group-hover:text-white',
          taglineText: 'text-amber-200/80',
          bgGlass: 'bg-gradient-to-b from-[#3B1666]/55 via-[#25103F]/80 to-[#0E081D]/95',
          auraColor: 'rgba(139,61,206,0.22)',
          ctaBadge: 'bg-[#25103F]/90 text-gold border-gold/45 group-hover:border-gold',
        }
      case 'gold':
      default:
        return {
          cardBorder: 'border-gold/60 hover:border-gold',
          cardGlow: 'shadow-[0_0_50px_rgba(255,211,106,0.3)] hover:shadow-[0_0_75px_rgba(255,211,106,0.5)]',
          badgeText: 'text-transparent bg-clip-text bg-gradient-to-r from-[#fff3c4] via-[#f5c04a] to-[#c8791a]',
          titleText: 'gold-text',
          taglineText: 'text-amber-100/90',
          bgGlass: 'bg-gradient-to-b from-[#FFD36A]/[0.18] via-[#25103F]/85 to-[#0E081D]/95',
          auraColor: 'rgba(255,211,106,0.35)',
          ctaBadge: 'bg-[#25103F]/90 text-gold border-gold/60 group-hover:border-gold',
        }
    }
  }, [variant])

  const handleClick = () => {
    if (sponsor.link) {
      trackSponsorPartnerClick(sponsor.name, sponsor.category, sponsor.link)
      if (sponsor.link.includes('instagram.com')) {
        trackInstagramClick(sponsor.name, sponsor.link)
      }
    }
  }

  const CardWrapper = sponsor.link ? motion.a : motion.div
  const linkProps = sponsor.link
    ? {
        href: sponsor.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        title: `Visit Partner: ${sponsor.name}`,
        onClick: handleClick,
      }
    : {}

  return (
    <CardWrapper
      {...linkProps}
      whileHover={sponsor.link ? { scale: isFeaturedSpotlight ? 1.015 : 1.025, y: -2.5 } : {}}
      whileTap={sponsor.link ? { scale: 0.98 } : {}}
      className={`group relative flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border backdrop-blur-xl ${styles.cardBorder} ${styles.bgGlass} ${styles.cardGlow} transition-all duration-300 ${
        isFeaturedSpotlight
          ? 'p-5 sm:p-7 md:p-8 w-full max-w-lg md:max-w-xl shadow-[0_0_60px_rgba(245,192,74,0.35)]'
          : isCenter
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
            isFeaturedSpotlight
              ? 'text-xs sm:text-sm md:text-base'
              : isCenter
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
          delay={delay + 0.1}
          isReducedMotion={isReducedMotion}
        />
      </div>

      {/* Logo container */}
      <div
        className={`relative z-10 flex items-center justify-center my-2 sm:my-3 w-full ${
          isFeaturedSpotlight
            ? 'h-24 sm:h-32 md:h-36 max-w-[260px]'
            : isCenter
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
            className={`max-h-full max-w-full object-contain filter transition-transform duration-300 group-hover:scale-105 rounded-xl ${
              isFeaturedSpotlight || isCenter
                ? 'drop-shadow-[0_0_24px_rgba(245,192,74,0.45)]'
                : 'drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'
            }`}
          />
        ) : (
          <LuxuryLogoEmblem
            name={sponsor.name}
            type={variant === 'valuable' ? 'gold' : variant}
            isCenter={isCenter || isFeaturedSpotlight}
          />
        )}
      </div>

      {/* Sponsor Name, Tagline & Description/Location */}
      <div className="relative z-10 mt-1 flex flex-col items-center w-full">
        <h3
          className={`font-display font-black leading-snug tracking-wide transition-colors ${
            styles.titleText
          } ${
            isFeaturedSpotlight
              ? 'text-xl sm:text-2xl md:text-3xl'
              : isCenter
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
            className={`mt-1 font-body font-medium ${styles.taglineText} ${
              isFeaturedSpotlight
                ? 'text-xs sm:text-sm md:text-base'
                : isCenter
                ? 'text-xs sm:text-sm'
                : isCompact
                ? 'text-[9.5px] sm:text-[11px]'
                : 'text-[10px] sm:text-xs'
            }`}
          >
            {sponsor.tagline}
          </p>
        )}

        {(sponsor.description || sponsor.location) && (
          <p
            className={`mt-1.5 font-body text-amber-100/75 ${
              isFeaturedSpotlight
                ? 'text-xs sm:text-sm max-w-md'
                : isCenter
                ? 'text-[10.5px] sm:text-xs max-w-[280px] line-clamp-2'
                : isCompact
                ? 'text-[8.5px] sm:text-[9.5px] max-w-[200px] line-clamp-2'
                : 'text-[9.5px] sm:text-[10.5px] max-w-[240px] line-clamp-2'
            }`}
          >
            {sponsor.location ? sponsor.location : sponsor.description}
          </p>
        )}

        {/* CTA Instagram Link Badge */}
        {sponsor.link && (
          <div className={`flex items-center justify-center ${isFeaturedSpotlight ? 'mt-3 sm:mt-4' : isCompact ? 'mt-1.5' : 'mt-2'}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider border shadow-md transition-all duration-300 group-hover:scale-105 ${styles.ctaBadge}`}
            >
              <span>{sponsor.badgeText || 'Visit Official Partner'}</span>
              <ExternalLink size={12} aria-hidden="true" />
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
  
  // View mode: 'spotlight' (sequential 7s per sponsor) or 'grid' (all sponsors at once)
  const [viewMode, setViewMode] = useState('spotlight')
  
  // Timing configuration: exactly 7 seconds per sponsor intro
  const SPONSOR_DURATION = 7
  const [currentIndex, setCurrentIndex] = useState(0)
  const [secondsRemaining, setSecondsRemaining] = useState(SPONSOR_DURATION)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const { celebrationPartners = [], valuableSponsors = [], whatsapp } = sponsorConfig

  // All 7 sponsors ordered strategically (Grand Title Partner first, then Celebration Partners, then Valuable Sponsors)
  const allSponsors = useMemo(() => {
    const ramjee = celebrationPartners.find((p) => p.id === 'ramjee' || p.isCenter) || celebrationPartners[1]
    const keshri = celebrationPartners.find((p) => p.id === 'keshri') || celebrationPartners[0]
    const ganpati = celebrationPartners.find((p) => p.id === 'ganpati') || celebrationPartners[2]
    return [ramjee, keshri, ganpati, ...valuableSponsors].filter(Boolean)
  }, [celebrationPartners, valuableSponsors])

  const totalSponsors = allSponsors.length
  const currentSponsor = allSponsors[currentIndex] || allSponsors[0]

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

  // Next Sponsor in Sequence
  const nextSponsor = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev + 1 >= totalSponsors) {
        handleClose()
        return prev
      }
      return prev + 1
    })
    setSecondsRemaining(SPONSOR_DURATION)
  }, [totalSponsors, handleClose, SPONSOR_DURATION])

  // Previous Sponsor in Sequence
  const prevSponsor = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSponsors - 1))
    setSecondsRemaining(SPONSOR_DURATION)
  }, [totalSponsors, SPONSOR_DURATION])

  // Direct Sponsor Select
  const selectSponsor = useCallback((index) => {
    setCurrentIndex(index)
    setSecondsRemaining(SPONSOR_DURATION)
  }, [SPONSOR_DURATION])

  // 7-second countdown timer per sponsor introduction
  useEffect(() => {
    if (!isVisible || isExiting || isPaused || viewMode !== 'spotlight') return

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          nextSponsor()
          return SPONSOR_DURATION
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isVisible, isExiting, isPaused, viewMode, nextSponsor, SPONSOR_DURATION])

  // Keyboard navigation (Escape to close, Left/Right arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowRight') {
        nextSponsor()
      } else if (e.key === 'ArrowLeft') {
        prevSponsor()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose, nextSponsor, prevSponsor])

  if (!isVisible) return null

  const whatsappHref = whatsapp?.enabled
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message || '')}`
    : null

  const getVariant = (sponsor) => {
    if (sponsor.id === 'ramjee' || sponsor.isCenter) return 'gold'
    if (sponsor.id === 'keshri') return 'silver'
    if (sponsor.id === 'bahu') return 'bronze'
    if (sponsor.category?.includes('CELEBRATION')) return 'gold'
    return 'valuable'
  }

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

          {/* TOP BAR: Header, Timing Badge, View Mode Toggle & Close Button */}
          <header className="relative z-30 w-full max-w-6xl flex items-center justify-between pt-1 gap-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="font-serif tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs text-gold/90 uppercase font-medium">
                Navratri Vibes 2026 • Official Sponsors Showcase
              </span>
            </motion.div>

            {/* Controls: Mode Toggle & Close Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode((m) => (m === 'spotlight' ? 'grid' : 'spotlight'))}
                title={viewMode === 'spotlight' ? 'View All Sponsors' : 'Back to 7s Intro'}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-gold/40 text-gold text-xs font-serif hover:bg-gold/15 transition-all"
              >
                {viewMode === 'spotlight' ? (
                  <>
                    <Grid size={13} />
                    <span>View All</span>
                  </>
                ) : (
                  <>
                    <Eye size={13} />
                    <span>Spotlight (7s)</span>
                  </>
                )}
              </button>

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
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <main
            className="relative z-20 w-full max-w-6xl my-auto py-2 sm:py-3 flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full glass border border-gold/30 text-gold text-[10px] sm:text-xs tracking-[0.2em] mb-1 shadow-[0_0_15px_rgba(245,192,74,0.15)]">
                <Sparkles size={11} className="text-gold animate-pulse" />
                <span>OFFICIAL FESTIVAL SPONSORS & PARTNERS</span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl gold-text tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                {viewMode === 'spotlight' ? 'PROUD CELEBRATION SPONSORS' : 'ALL CELEBRATION PARTNERS & SPONSORS'}
              </h2>
            </motion.div>

            {/* VIEW 1: SEQUENTIAL 7-SECOND SPOTLIGHT PRESENTATION */}
            {viewMode === 'spotlight' && (
              <div className="w-full flex flex-col items-center">
                {/* Active Sponsor Presentation Carousel */}
                <div className="relative w-full max-w-xl flex items-center justify-center px-1 sm:px-4">
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={prevSponsor}
                    aria-label="Previous sponsor"
                    className="absolute -left-2 sm:-left-6 md:-left-12 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass border border-gold/40 text-gold hover:text-white hover:border-gold hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-lg focus:outline-none"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  {/* Active Featured Sponsor Card with Framer Motion AnimatePresence */}
                  <div className="w-full flex justify-center min-h-[380px] sm:min-h-[420px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSponsor.id || currentSponsor.name}
                        initial={{ opacity: 0, scale: 0.94, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -14 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center"
                      >
                        <SponsorCard
                          sponsor={currentSponsor}
                          variant={getVariant(currentSponsor)}
                          isCenter={true}
                          isFeaturedSpotlight={true}
                          isReducedMotion={isReducedMotion}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={nextSponsor}
                    aria-label="Next sponsor"
                    className="absolute -right-2 sm:-right-6 md:-right-12 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass border border-gold/40 text-gold hover:text-white hover:border-gold hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-lg focus:outline-none"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* 7-Second Live Indicator & Step Tracker */}
                <div className="w-full max-w-md mt-4 flex flex-col items-center gap-2">
                  {/* Step Pills / Dots */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {allSponsors.map((sp, idx) => {
                      const isActive = idx === currentIndex
                      return (
                        <button
                          key={sp.id || sp.name}
                          type="button"
                          onClick={() => selectSponsor(idx)}
                          title={`Show ${sp.name}`}
                          className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                            isActive
                              ? 'w-8 sm:w-10 bg-gradient-to-r from-gold via-amber-300 to-pink shadow-[0_0_12px_rgba(245,192,74,0.6)]'
                              : 'w-2 sm:w-2.5 bg-white/25 hover:bg-white/50'
                          }`}
                          aria-label={`Go to sponsor ${idx + 1}: ${sp.name}`}
                        />
                      )
                    })}
                  </div>

                  {/* 7-Second Countdown Tracker */}
                  <div className="flex items-center gap-2 text-xs text-amber-200/90 font-serif">
                    <button
                      type="button"
                      onClick={() => setIsPaused((p) => !p)}
                      className="inline-flex items-center gap-1 text-[11px] text-gold/80 hover:text-gold"
                    >
                      {isPaused ? <Play size={11} /> : <Pause size={11} />}
                      <span>{isPaused ? 'Paused' : 'Auto'}</span>
                    </button>
                    <span>•</span>
                    <span>
                      Sponsor <strong className="text-gold font-bold">{currentIndex + 1}</strong> of{' '}
                      <strong>{totalSponsors}</strong>
                    </span>
                    <span>•</span>
                    <span>
                      Next in <strong className="text-gold font-bold">{secondsRemaining}s</strong>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: FULL GRID OF ALL SPONSORS (Accessible & Complete) */}
            {viewMode === 'grid' && (
              <div className="w-full max-w-5xl">
                {/* Celebration Partners Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {celebrationPartners.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.id || sponsor.name}
                      sponsor={sponsor}
                      variant={getVariant(sponsor)}
                      isCenter={sponsor.isCenter}
                      isReducedMotion={isReducedMotion}
                    />
                  ))}
                </div>

                {/* Valuable Sponsors Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                  {valuableSponsors.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.id || sponsor.name}
                      sponsor={sponsor}
                      variant={getVariant(sponsor)}
                      isCompact={true}
                      isReducedMotion={isReducedMotion}
                    />
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* BOTTOM BAR: WhatsApp Sponsorship & Skip Button */}
          <footer className="relative z-30 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 pb-1 border-t border-gold/15">
            {/* WhatsApp Sponsorship Action */}
            {whatsappHref ? (
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('sponsor_intro')}
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

            {/* Skip / Enter prompt */}
            <motion.button
              onClick={handleClose}
              className="text-[11px] sm:text-xs text-amber-100/80 hover:text-gold transition-colors font-serif tracking-wider flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              <span>Explore Website Directly</span>
              <span className="text-gold font-bold">›</span>
              <span className="underline ml-1">Skip Intro</span>
            </motion.button>
          </footer>

          {/* Bottom Hairline 7-Second Progress Bar (Per Sponsor) */}
          {!isReducedMotion && viewMode === 'spotlight' && (
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/10 pointer-events-none">
              <motion.div
                key={`${currentIndex}-${isPaused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? undefined : 1 }}
                transition={{
                  duration: SPONSOR_DURATION,
                  ease: 'linear',
                }}
                className="h-full bg-gradient-to-r from-[#8B3DCE] via-[#FFD36A] to-[#FF4F9A] origin-left pointer-events-none opacity-90"
                aria-hidden="true"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
