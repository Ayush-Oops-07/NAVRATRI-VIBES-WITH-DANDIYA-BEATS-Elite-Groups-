import { motion } from 'framer-motion'
import { MessageCircle, Ticket, Sparkles, MapPin, Navigation } from 'lucide-react'
import { Btn, Particles, Reveal, FestiveDandiyaIcon } from './ui'
import { ENQUIRE_LINK, PHONE_DISPLAY } from '../constants'
import { useBooking } from '../context/BookingContext'
import { LOCATIONS } from '../config/locations'
import {
  trackTicketSectionView,
  trackGoogleMapsClick,
  trackWhatsAppClick,
  trackTicketLocationClick,
} from '../utils/analytics'

export default function Booking() {
  const { openBooking } = useBooking()

  const handleOpenBooking = () => {
    trackTicketSectionView('booking_button')
    openBooking()
  }

  return (
    <section
      id="enquiry"
      className="section bg-gradient-to-b from-[#160D2B] via-[#25103F] to-[#160D2B] relative"
    >
      <Particles count={18} />

      {/* Radiant ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 79, 154, 0.2) 0%, rgba(139, 61, 206, 0.25) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Reveal className="relative max-w-5xl mx-auto text-center z-10">
        <div className="glass-card rounded-[2.5rem] p-6 sm:p-10 md:p-14 border-2 border-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          {/* Subtle decorative top motif */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full glass border border-gold/50 flex items-center justify-center shadow-lg">
              <FestiveDandiyaIcon className="w-8 h-8" />
            </div>
          </div>

          <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass mb-3">
            RESERVE YOUR PASS
          </span>

          <h2 className="font-display font-black gold-text text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Feel the Beats?
          </h2>

          <p className="font-serif text-[#FFF8F0] text-base sm:text-lg mt-2">
            Join Motihari's grandest celebration of dance, music, and festival joy.
          </p>

          <p className="text-xs sm:text-sm text-[#D8CDE7] max-w-xl mx-auto mt-2 leading-relaxed font-body">
            Get your passes through our quick online request or reach out directly to the Elites Group team on WhatsApp.
          </p>

          {/* 🎟️ OFFICIAL CELEBRATION PARTNERS & SPONSORS PASS ANNOUNCEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-7 p-4 sm:p-6 rounded-2xl glass-card border border-gold/50 bg-gradient-to-r from-[#FFD36A]/10 via-[#3B1666]/70 to-[#FF4F9A]/15 shadow-[0_0_30px_rgba(255,211,106,0.18)] text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-gold/15 to-transparent rounded-full pointer-events-none" />
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gold/20 border border-gold/60 flex items-center justify-center shrink-0 shadow-md">
                <Ticket className="text-gold w-6 h-6 animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-serif uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold/20 border border-gold/40 text-gold font-bold">
                    Official Announcement
                  </span>
                  <span className="text-xs text-amber-200/80 font-serif">Passes Available Now</span>
                </div>
                <h3 className="font-display font-black text-gold text-base sm:text-lg tracking-wide mt-1.5 flex items-center gap-2">
                  <span>🎟️ Get Your Dandiya Night Passes Now!</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#FFF8F0] font-body leading-relaxed">
                  Passes are available at all our official celebration partners' and sponsors' locations. You can conveniently collect your passes from any of our partner outlets.
                </p>
                <p className="mt-1.5 text-xs text-amber-200 font-serif font-semibold">
                  Don't wait until the last moment—get your passes today and get ready to celebrate!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pass Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-left max-w-2xl mx-auto">
            {/* Couple Pass */}
            <div className="rounded-2xl p-4 sm:p-5 border border-gold/40 bg-gradient-to-b from-[#3B1666]/70 to-[#160D2B]/90 shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-amber-200 text-base sm:text-lg flex items-center gap-1.5">
                    👫 Couple Pass
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-gold/40 text-gold bg-gold/10 font-serif font-bold">
                    ₹499 Only
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gold font-bold">
                  🎟️ ₹499/- (1 Male & 1 Female)
                </p>
                <p className="text-[11px] text-[#D8CDE7]/80 mt-1 leading-snug">
                  Strictly valid for 1 Male and 1 Female entry.
                </p>
              </div>
            </div>

            {/* Family Pass */}
            <div className="rounded-2xl p-4 sm:p-5 border border-pink/50 bg-gradient-to-b from-[#4A154B]/70 to-[#160D2B]/90 shadow-[0_8px_25px_rgba(255,79,154,0.2)] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink to-gold text-base sm:text-lg flex items-center gap-1.5">
                    ✨ Family Pass
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-pink/50 text-[#FFD36A] bg-pink/20 font-serif font-bold">
                    ₹999 Only
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gold font-bold">
                  🎟️ ₹999/- for 5 Members
                </p>
                <p className="text-[11px] text-amber-100/90 mt-1 leading-snug">
                  👩 Minimum 2 Females + 👨 Maximum 3 Males
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Btn
                onClick={handleOpenBooking}
                icon={Ticket}
                className="w-full sm:w-auto text-base sm:text-lg !py-4 sm:!px-10 shadow-[0_0_35px_rgba(255,211,106,0.5)] cursor-pointer"
              >
                BOOK YOUR PASS
              </Btn>
            </motion.div>

            <Btn
              href={ENQUIRE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('booking_section')}
              variant="glass"
              icon={MessageCircle}
              className="w-full sm:w-auto text-base sm:text-lg !py-4 sm:!px-8 border-pink/40 hover:border-pink text-[#FFF8F0]"
            >
              Enquire on WhatsApp
            </Btn>
          </div>

          {/* 📍 OFFICIAL TICKET COLLECTION LOCATIONS IN MOTIHARI */}
          <div className="mt-12 pt-8 border-t border-gold/20 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="font-serif text-[10px] sm:text-xs tracking-[0.25em] text-gold uppercase font-bold">
                  DIRECT PICKUP POINTS
                </span>
                <h3 className="font-display font-black gold-text text-xl sm:text-2xl mt-0.5">
                  Ticket Collection Locations in Motihari
                </h3>
                <p className="text-xs text-[#D8CDE7] mt-1 font-body">
                  Collect your authentic Dandiya Night passes directly from any of these official counters:
                </p>
              </div>
              <span className="inline-block text-xs text-amber-200/90 font-serif px-3 py-1 rounded-full glass border border-gold/30 shrink-0">
                📍 3 Verified Official Counters
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="glass-card rounded-2xl p-5 border border-gold/35 hover:border-gold/75 bg-gradient-to-b from-[#3B1666]/55 via-[#25103F]/80 to-[#160D2B]/90 shadow-lg hover:shadow-[0_0_25px_rgba(255,211,106,0.25)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-[10px] font-serif font-bold uppercase tracking-wider">
                        <span>📍</span>
                        <span>Pass Collection Point</span>
                      </span>
                    </div>

                    {/* Prominent Shop Name */}
                    <h4 className="font-display font-black text-gold text-base sm:text-lg leading-snug group-hover:text-amber-200 transition-colors">
                      {loc.name}
                    </h4>

                    {/* Complete Address */}
                    <p className="mt-2 text-xs sm:text-sm text-[#D8CDE7] leading-relaxed font-body">
                      {loc.address}
                    </p>
                  </div>

                  {/* Professional Google Maps Location Button with map-pin icon */}
                  <div className="mt-5 pt-3.5 border-t border-gold/15 flex flex-col gap-2">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open Google Maps location for ${loc.name}`}
                      onClick={() => {
                        trackGoogleMapsClick(loc.name, loc.mapUrl)
                        trackTicketLocationClick(loc.name, loc.id)
                      }}
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-wine bg-gradient-to-r from-[#ffe08a] via-gold to-[#c8791a] hover:opacity-95 shadow-[0_0_15px_rgba(245,192,74,0.3)] transition-all duration-300 group-hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <MapPin size={14} className="text-wine shrink-0 animate-bounce" />
                      <span>Google Maps Location</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        trackTicketLocationClick(loc.name, loc.id)
                        openBooking()
                      }}
                      className="inline-flex items-center justify-center gap-1 text-[11px] text-amber-300 hover:text-gold transition-colors font-serif underline py-1"
                    >
                      <span>Book for Pickup Here →</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details & Pickup Notice */}
          <div className="mt-10 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CDE7]">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp Hotline:</span>
              <a
                href={ENQUIRE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('booking_hotline')}
                className="font-bold text-gold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-2 text-center sm:text-right">
              <MapPin size={15} className="text-pink shrink-0" />
              <span>3 Official Pass collection counters in Motihari</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
