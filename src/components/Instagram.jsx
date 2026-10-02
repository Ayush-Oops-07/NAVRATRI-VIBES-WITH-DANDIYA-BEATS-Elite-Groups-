import { Instagram as IG } from 'lucide-react'
import { Btn, Reveal } from './ui'
import { INSTAGRAM } from '../constants'

export default function Instagram() {
  return (
    <section className="section bg-ink">
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-tr from-amber via-ruby to-[#8a2be2] flex items-center justify-center shadow-[0_0_40px_rgba(179,18,43,.6)]"><IG size={38} className="text-white" aria-hidden="true" /></div>
        <h2 className="font-display font-black gold-text text-3xl md:text-5xl mt-6">Follow The Vibes</h2>
        <p className="font-serif text-gold text-xl mt-3">@dandiya_beatss</p>
        <p className="text-amber-100/80 mt-4 max-w-md mx-auto">Follow us for event updates, behind-the-scenes moments and Navratri vibes.</p>
        <div className="mt-8"><Btn href={INSTAGRAM} icon={IG}>Follow on Instagram</Btn></div>
      </Reveal>
    </section>
  )
}
