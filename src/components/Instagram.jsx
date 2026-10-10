import { Instagram as IG, Sparkles } from 'lucide-react'
import { Btn, Reveal } from './ui'
import { INSTAGRAM } from '../constants'

export default function Instagram() {
  return (
    <section className="section bg-[#160D2B] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 79, 154, 0.25) 0%, rgba(139, 61, 206, 0.2) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Reveal className="relative max-w-3xl mx-auto text-center z-10">
        <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-tr from-[#FF8A36] via-[#FF4F9A] to-[#8B3DCE] p-[2px] shadow-[0_0_40px_rgba(255,79,154,0.45)]">
          <div className="w-full h-full rounded-[22px] bg-[#160D2B] flex items-center justify-center">
            <IG size={36} className="text-white" aria-hidden="true" />
          </div>
        </div>

        <span className="inline-block mt-6 font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1 rounded-full border border-gold/40 glass">
          CONNECT ON SOCIAL
        </span>

        <h2 className="font-display font-black gold-text text-3xl md:text-5xl mt-3">
          Follow The Vibes
        </h2>
        <p className="font-serif text-[#FF4F9A] text-lg sm:text-2xl mt-2 font-bold tracking-wider">
          @dandiya_beatss
        </p>
        <p className="text-[#D8CDE7] mt-3 max-w-md mx-auto text-xs sm:text-sm leading-relaxed font-body">
          Follow our official handle for event announcements, dress code inspiration, dancer reels, and exclusive updates.
        </p>

        <div className="mt-8 flex justify-center">
          <Btn href={INSTAGRAM} icon={IG} className="cursor-pointer">
            Follow on Instagram
          </Btn>
        </div>
      </Reveal>
    </section>
  )
}
