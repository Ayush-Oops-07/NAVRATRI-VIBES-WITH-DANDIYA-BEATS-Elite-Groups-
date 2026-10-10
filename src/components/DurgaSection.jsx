import { motion } from 'framer-motion'
import { Sparkles, Users, Music, Heart } from 'lucide-react'
import { Reveal, Btn } from './ui'
import { useBooking } from '../context/BookingContext'

export default function DurgaSection() {
  const { openBooking } = useBooking()

  return (
    <section id="about" className="section bg-[#160D2B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(139, 61, 206, 0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 40%, rgba(255, 79, 154, 0.18) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Festival Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-pink via-purple to-gold opacity-40 blur-xl" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[0_20px_45px_rgba(0,0,0,0.6)] group">
                  <img
                    src="/images/about-dandiya.jpg"
                    alt="Traditional Dandiya dancers in royal purple and pink embroidered lehenga choli striking sticks"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160D2B] via-transparent to-transparent opacity-60" />

                  {/* Floating celebration tag */}
                  <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 border border-gold/30">
                    <p className="font-serif font-bold text-gold text-sm flex items-center gap-2">
                      <Sparkles size={16} className="text-pink animate-pulse" />
                      <span>Rhythm • Energy • Togetherness</span>
                    </p>
                    <p className="text-xs text-[#D8CDE7] mt-1">
                      Experience the authentic charm of traditional Navratri Dandiya Raas in Motihari
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Engaging Storytelling & Features */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass shadow-[0_0_15px_rgba(255,211,106,0.15)] mb-3">
                ABOUT THE CELEBRATION
              </span>
              <p className="font-deva text-gold/90 text-lg md:text-xl font-medium">
                उमंग, उत्साह और डांडिया की धुनें
              </p>
              <h2 className="font-display font-black gold-text text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
                A Grand Night of Garba & Dandiya
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[#D8CDE7] text-sm sm:text-base leading-relaxed mt-5 font-body">
                Navratri is India's most vibrant festival of rhythm, devotion, and community joy.
                It is that magical time of the year when the rhythmic clatter of decorated Dandiya sticks,
                twirling colourful lehengas, festive beats, and warm fairy lights bring people of all ages
                together in an unbroken circle of dance.
              </p>
              <p className="text-[#D8CDE7]/90 text-sm sm:text-base leading-relaxed mt-4 font-body">
                Organised by <strong className="text-gold font-serif">Elite Groups</strong> at the scenic
                <strong className="text-[#FFF8F0]"> Ram Bhawan Ram Resort in Motihari</strong>,
                Navratri Vibes with Dandiya Beats 2026 is designed to celebrate this rich cultural heritage
                with authentic traditional dance, exhilarating music, festive ambiance, and unforgettable memories with your loved ones.
              </p>
            </Reveal>

            {/* 3 Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <Reveal delay={0.25}>
                <div className="glass-card rounded-2xl p-4 border border-gold/25 hover:border-gold/60 transition-all hover:-translate-y-1">
                  <Users className="text-pink mb-2" size={24} />
                  <h3 className="font-serif font-bold text-[#FFF8F0] text-sm">Garba Circles</h3>
                  <p className="text-xs text-[#D8CDE7]/80 mt-1">
                    Classic step sequences and spinning circles for everyone to enjoy.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="glass-card rounded-2xl p-4 border border-gold/25 hover:border-gold/60 transition-all hover:-translate-y-1">
                  <Music className="text-gold mb-2" size={24} />
                  <h3 className="font-serif font-bold text-[#FFF8F0] text-sm">Dandiya Beats</h3>
                  <p className="text-xs text-[#D8CDE7]/80 mt-1">
                    High-energy traditional rhythm and festive tunes all evening.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="glass-card rounded-2xl p-4 border border-gold/25 hover:border-gold/60 transition-all hover:-translate-y-1">
                  <Heart className="text-orange mb-2" size={24} />
                  <h3 className="font-serif font-bold text-[#FFF8F0] text-sm">Pure Joy</h3>
                  <p className="text-xs text-[#D8CDE7]/80 mt-1">
                    A safe, celebratory family atmosphere welcoming everyone in Motihari.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.55}>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Btn onClick={openBooking} className="cursor-pointer">
                  Join The Celebration
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
