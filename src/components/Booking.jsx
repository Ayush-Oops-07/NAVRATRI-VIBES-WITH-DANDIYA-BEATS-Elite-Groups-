import { motion } from 'framer-motion'
import { MessageCircle, Ticket, Sparkles, MapPin } from 'lucide-react'
import { Btn, Particles, Reveal, FestiveDandiyaIcon } from './ui'
import { ENQUIRE_LINK, PHONE_DISPLAY } from '../constants'
import { useBooking } from '../context/BookingContext'

export default function Booking() {
  const { openBooking } = useBooking()

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

      <Reveal className="relative max-w-4xl mx-auto text-center z-10">
        <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 md:p-16 border-2 border-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          {/* Subtle decorative top motif */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full glass border border-gold/50 flex items-center justify-center shadow-lg">
              <FestiveDandiyaIcon className="w-8 h-8" />
            </div>
          </div>

          <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass mb-4">
            RESERVE YOUR PASS
          </span>

          <h2 className="font-display font-black gold-text text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Feel the Beats?
          </h2>

          <p className="font-serif text-[#FFF8F0] text-base sm:text-lg mt-3">
            Join Motihari's grandest celebration of dance, music, and festival joy.
          </p>

          <p className="text-xs sm:text-sm text-[#D8CDE7] max-w-lg mx-auto mt-3 leading-relaxed font-body">
            Get your passes through our quick online request or reach out directly to the Elites Group team on WhatsApp.
          </p>

          {/* Pass Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-left max-w-2xl mx-auto">
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
                onClick={openBooking}
                icon={Ticket}
                className="w-full sm:w-auto text-base sm:text-lg !py-4 sm:!px-10 shadow-[0_0_35px_rgba(255,211,106,0.5)] cursor-pointer"
              >
                BOOK YOUR PASS
              </Btn>
            </motion.div>

            <Btn
              href={ENQUIRE_LINK}
              variant="glass"
              icon={MessageCircle}
              className="w-full sm:w-auto text-base sm:text-lg !py-4 sm:!px-8 border-pink/40 hover:border-pink text-[#FFF8F0]"
            >
              Enquire on WhatsApp
            </Btn>
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
                className="font-bold text-gold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex items-center gap-2 text-center sm:text-right">
              <MapPin size={15} className="text-pink shrink-0" />
              <span>2 Official Pass collection counters in Motihari</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
