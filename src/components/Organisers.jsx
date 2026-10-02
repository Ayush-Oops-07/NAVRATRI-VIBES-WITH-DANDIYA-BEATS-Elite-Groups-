import { Reveal } from './ui'
import { ARYAN_KELWAR_LINK } from '../constants'

const partners = [
  ['Aryan Kelwar', 'Key Organiser', ARYAN_KELWAR_LINK],
  ['Shree Kalash', 'Family Wear Showroom, Main Road Motihari', ''],
  ['New Ashoka Dresses', "Men's, Kids & Ladies Wear, Main Road", ''],
  ['Neha Hosiery', 'Neha Apparels, Main Road Motihari', ''],
  ['Pramod Medical', 'Branded Healthcare Products', ''],
  ['Ujjawal Jaiswal', 'Organiser', ''],
  ['Shreshth Jaiswal', 'Organiser', ''],
]

export default function Organisers() {
  return (
    <section className="section bg-ink">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <p className="font-serif text-gold/80 tracking-[0.3em] text-sm">PRESENTED BY</p>
          <h2 className="font-display font-black gold-text text-4xl md:text-6xl mt-3">ELITE GROUPS</h2>
          <p className="mt-4 text-amber-100/70">With our valued partners and well-wishers</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {partners.map(([n, s, link], i) => {
            const CardContent = (
              <div className="glass rounded-2xl p-5 text-center h-full hover:border-gold/70 transition-all hover:scale-[1.02] cursor-default">
                <div className="mx-auto h-14 w-14 rounded-full border border-gold/60 flex items-center justify-center font-display font-black gold-text text-lg shadow-[0_0_15px_rgba(245,192,74,0.2)]" aria-hidden="true">
                  {n.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-serif font-bold text-gold mt-3 text-sm md:text-base flex items-center justify-center gap-1">
                  {n}
                </h3>
                {s && <p className="text-xs text-amber-100/60 mt-1">{s}</p>}
                {link && (
                  <span className="inline-block mt-2 text-[11px] text-gold/80 hover:text-gold underline">
                    View Profile
                  </span>
                )}
              </div>
            )

            return (
              <Reveal key={n} delay={i * 0.06}>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

