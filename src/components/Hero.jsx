import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin, MessageCircle, Ticket, Sparkles, ChevronDown } from 'lucide-react'
import { Btn, Particles, FestiveBunting } from './ui'
import { ENQUIRE_LINK, ADDRESS, MAP_LINK } from '../constants'
import { useBooking } from '../context/BookingContext'

export default function Hero() {
  const { openBooking } = useBooking()

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 80% 20%, rgba(255, 79, 154, 0.22) 0%, transparent 45%), radial-gradient(circle at 15% 75%, rgba(139, 61, 206, 0.32) 0%, transparent 50%), radial-gradient(circle at 50% 10%, rgba(255, 138, 54, 0.16) 0%, transparent 40%), linear-gradient(180deg, #160D2B 0%, #25103F 50%, #160D2B 100%)',
      }}
    >
      {/* Festive Triangular Bunting along top */}
      <div className="absolute top-16 sm:top-20 inset-x-0 z-20">
        <FestiveBunting />
      </div>

      {/* Ambient background lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 ambient-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 211, 106, 0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Golden bokeh particles */}
      <Particles count={24} />

      {/* Main Container: 2-Column Festival Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-6 sm:pt-8">
        {/* LEFT COLUMN: Event Branding, Venue, Timing, CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Organizer / Event Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-gold font-medium border border-gold/40 shadow-[0_0_20px_rgba(255,211,106,0.2)] mb-4"
          >
            <Sparkles size={14} className="text-pink animate-pulse" />
            <span className="tracking-widest uppercase font-serif text-[11px] sm:text-xs">
              ELITE GROUPS PRESENTS
            </span>
            <span className="text-gold/40">•</span>
            <span className="text-[#FFF8F0] hidden sm:inline">DANDIYA NIGHT 2026</span>
          </motion.div>

          {/* Main Event Heading */}
          <h1 className="w-full tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block font-display font-black gold-text text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              NAVRATRI VIBES
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 my-2 sm:my-3"
            >
              <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="font-serif text-[#FFD36A] text-xs sm:text-base tracking-[0.45em] uppercase font-bold">
                WITH
              </span>
              <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/70" />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block font-display font-black text-[#FFF8F0] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] drop-shadow-[0_0_30px_rgba(255,79,154,0.5)]"
            >
              DANDIYA BEATS <span className="gold-text">2026</span>
            </motion.span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-4 text-[#D8CDE7] text-sm sm:text-base max-w-xl leading-relaxed"
          >
            Immerse yourself in Motihari's grandest celebration of colourful Garba dance,
            electric Dandiya beats, traditional lehengas, and joyful festival lights!
          </motion.p>

          {/* Event Schedule & Venue Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start w-full"
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FFF8F0] border border-gold/30">
              <CalendarDays size={16} className="text-gold shrink-0" aria-hidden="true" />
              <span className="font-semibold text-gold">21 October 2026</span>
            </div>

            <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FFF8F0] border border-gold/30">
              <Clock size={16} className="text-pink shrink-0" aria-hidden="true" />
              <span>Gate: 5:00 PM | Event: 6:00 PM onwards</span>
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D8CDE7] hover:text-gold border border-gold/25 hover:border-gold transition-colors"
            >
              <MapPin size={16} className="text-amber shrink-0 animate-pulse" aria-hidden="true" />
              <span>{ADDRESS}</span>
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center"
          >
            <Btn
              onClick={openBooking}
              icon={Ticket}
              className="text-base sm:text-lg !py-4 sm:!px-8 shadow-[0_0_30px_rgba(255,211,106,0.5)] cursor-pointer"
            >
              BOOK YOUR PASS
            </Btn>

            <Btn
              href={ENQUIRE_LINK}
              variant="glass"
              icon={MessageCircle}
              className="text-base sm:text-lg !py-4 sm:!px-7 border-pink/40 hover:border-pink text-[#FFF8F0] hover:text-gold shadow-md"
            >
              ENQUIRE ON WHATSAPP
            </Btn>
          </motion.div>

          {/* Quick Features Micro-tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-6 flex items-center gap-4 text-xs text-[#D8CDE7]/80 justify-center lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              Traditional Garba & Dandiya
            </span>
            <span>•</span>
            <span>High-Energy Sound & Lights</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Family Celebration</span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Cinematic Dancer Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple via-pink to-gold opacity-50 blur-2xl -z-10" />

          {/* Frame Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
            {/* Dancer Image */}
            <img
              src="/images/hero-dancers.jpg"
              alt="Joyful traditional Garba dancers celebrating Navratri Dandiya Night in colorful lehengas"
              className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />

            {/* Gradient Overlays for Readability & Cinematic Glamour */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#160D2B] via-transparent to-black/25 opacity-80" />

            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 glass rounded-full px-3.5 py-1.5 flex items-center gap-2 border border-gold/40 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-pink animate-pulse" />
              <span className="text-[11px] sm:text-xs font-serif font-bold text-gold tracking-wider">
                MOTIHARI DANDIYA UTSAV
              </span>
            </div>

            {/* Bottom Card Overlay */}
            <div className="absolute bottom-4 inset-x-4 glass-card rounded-2xl p-4 border border-gold/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-gold text-sm sm:text-base">
                    Ram Bhawan Ram Resort
                  </p>
                  <p className="text-xs text-[#D8CDE7] mt-0.5">
                    NH-28, Motihari • 21 Oct 2026, 6:00 PM onwards
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openBooking}
                  className="rounded-full px-3 py-1.5 text-xs font-serif font-bold bg-gradient-to-r from-gold to-orange text-[#160D2B] hover:scale-105 transition-transform cursor-pointer shrink-0"
                >
                  Book Pass
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold/80 hover:text-gold transition-colors z-20"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-[10px] uppercase font-serif tracking-widest text-[#D8CDE7]/80"
        >
          <span>Explore</span>
          <ChevronDown size={20} className="text-gold" />
        </motion.span>
      </a>
    </section>
  )
}
