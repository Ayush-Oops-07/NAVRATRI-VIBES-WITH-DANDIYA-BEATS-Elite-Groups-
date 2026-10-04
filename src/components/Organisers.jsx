import { Reveal } from './ui'
import { ARYAN_KALWAR_LINK } from '../constants'

const partners = [
  ['Aryan Kalwar', 'Key Organiser', ARYAN_KALWAR_LINK, '/team_members/Aryan_kalwar.png'],
  ['Shree Kalash', 'Family Wear Showroom, Main Road Motihari', '', ''],
  ['New Ashoka Dresses', "Men's, Kids & Ladies Wear, Main Road", '', ''],
  ['Neha Hosiery', 'Neha Apparels, Main Road Motihari', '', ''],
  ['Pramod Medical', 'Branded Healthcare Products', '', ''],
  ['Ujjawal Jaiswal', 'Organiser', '', ''],
  ['Shreshth Jaiswal', 'Organiser', '', ''],
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
          {partners.map(([n, s, link, photo], i) => {
            const CardContent = (
              <div className="glass rounded-2xl p-5 text-center h-full hover:border-gold/70 transition-all hover:scale-[1.02] cursor-default flex flex-col items-center justify-between">
                <div className="w-full flex flex-col items-center">
                  <div className="mx-auto h-16 w-16 sm:h-18 sm:w-18 rounded-full border-2 border-gold/70 overflow-hidden flex items-center justify-center font-display font-black gold-text text-lg shadow-[0_0_20px_rgba(245,192,74,0.3)] bg-wine/60" aria-hidden="true">
                    {photo ? (
                      <img
                        src={photo}
                        alt={n}
                        className="h-full w-full object-cover object-top hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    ) : (
                      <span>{n.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-gold mt-3 text-sm md:text-base flex items-center justify-center gap-1">
                    {n}
                  </h3>
                  {s && <p className="text-xs text-amber-100/60 mt-1">{s}</p>}
                </div>
                {link && (
                  <span className="inline-block mt-3 text-[11px] text-gold/80 hover:text-gold underline font-medium">
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
