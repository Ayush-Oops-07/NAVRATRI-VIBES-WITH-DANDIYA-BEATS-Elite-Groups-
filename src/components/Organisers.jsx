import { Reveal } from './ui'
import {
  ARYAN_KALWAR_LINK,
  UJWAL_JAISWAL_LINK,
  SHRESHTH_JAISWAL_LINK,
  NEHA_HOSIERY_LINK,
} from '../constants'

// Core Organising Committee (Top Row: Ujjawal Jaiswal -> Aryan Kalwar -> Shreshth Jaiswal)
const organisers = [
  {
    name: 'Ujjawal Jaiswal',
    role: 'Founder',
    link: UJWAL_JAISWAL_LINK,
    photo: '/team_members/ujwal.jpeg',
    alt: 'Ujwal Jaiswal - Elites Group Founder',
  },
  {
    name: 'Aryan Kalwar',
    role: 'Key Organiser',
    link: ARYAN_KALWAR_LINK,
    photo: '/team_members/Aryan_kalwar.png',
    alt: 'Aryan Kalwar - Elites Group Member',
  },
  {
    name: 'Shreshth Jaiswal',
    role: 'Organiser',
    link: SHRESHTH_JAISWAL_LINK,
    photo: '/team_members/shreshte.jpeg',
    alt: 'Shreshth Jaiswal - Elites Group Member',
  },
]

// Valued Partners & Well-Wishers (Bottom Section: Equal Spacing)
const partners = [
  {
    name: 'Shree Kalash',
    desc: 'Family Wear Showroom, Main Road Motihari',
    link: '',
    photo: '',
  },
  {
    name: 'New Ashoka Dresses',
    desc: "Men's, Kids & Ladies Wear, Main Road",
    link: '',
    photo: '',
  },
  {
    name: 'Neha Hosiery',
    desc: 'Neha Apparels, Main Road Motihari',
    link: NEHA_HOSIERY_LINK,
    photo: '/team_members/neha.jpg',
  },
  {
    name: 'Pramod Medical',
    desc: 'Branded Healthcare Products',
    link: '',
    photo: '',
  },
]

export default function Organisers() {
  return (
    <section className="section bg-[#160D2B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255, 211, 106, 0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Section Header */}
        <Reveal className="text-center">
          <p className="font-serif text-gold/80 tracking-[0.3em] text-xs sm:text-sm uppercase">ORGANISED BY</p>
          <h2 className="font-display font-black gold-text text-4xl sm:text-5xl md:text-6xl mt-2">
            ELITE GROUPS
          </h2>
          <p className="mt-3 text-[#D8CDE7] text-sm sm:text-base max-w-xl mx-auto font-body">
            Organised by dedicated visionaries bringing royal Dandiya celebration to Motihari
          </p>
        </Reveal>

        {/* TOP ROW: Core Organisers (Ujjawal Jaiswal -> Aryan Kalwar -> Shreshth Jaiswal) */}
        <div className="mt-10 sm:mt-12">
          <Reveal className="text-center mb-6">
            <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1 rounded-full border border-gold/40 glass shadow-[0_0_15px_rgba(255,211,106,0.15)]">
              ORGANISED BY
            </span>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto">
            {organisers.map((person, i) => {
              const CardContent = (
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 text-center h-full border border-gold/40 hover:border-gold transition-all duration-300 hover:scale-[1.03] cursor-default flex flex-col items-center justify-between shadow-[0_0_30px_rgba(255,211,106,0.12)] hover:shadow-[0_0_45px_rgba(255,211,106,0.25)] bg-gradient-to-b from-[#3B1666]/60 via-[#25103F]/75 to-[#160D2B]/90 group">
                  <div className="w-full flex flex-col items-center">
                    {/* Photo / Emblem */}
                    <div
                      className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-gold/80 overflow-hidden flex items-center justify-center font-display font-black gold-text text-xl shadow-[0_0_25px_rgba(255,211,106,0.35)] bg-[#25103F] group-hover:scale-105 transition-transform duration-300"
                    >
                      {person.photo ? (
                        <img
                          src={person.photo}
                          alt={person.alt || `${person.name} - Elites Group Member`}
                          className="h-full w-full object-cover object-top hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      ) : (
                        <span>
                          {person.name
                            .split(' ')
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="font-display font-black text-gold mt-4 text-base sm:text-lg flex items-center justify-center gap-1 group-hover:text-amber-200 transition-colors">
                      {person.name}
                    </h3>

                    {/* Role Badge */}
                    <span className="inline-block mt-1 text-xs font-serif font-medium text-amber-200/80 px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/30">
                      {person.role}
                    </span>
                  </div>

                  {person.link && (
                    <span className="inline-block mt-4 text-xs text-gold/90 group-hover:text-gold underline font-serif font-medium">
                      View Profile →
                    </span>
                  )}
                </div>
              )

              return (
                <Reveal key={person.name} delay={i * 0.1}>
                  {person.link ? (
                    <a href={person.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
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

        {/* BOTTOM SECTION: Valued Partners (Equal Spacing) */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-gold/20">
          <Reveal className="text-center mb-8">
            <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-amber-200/80 uppercase">
              VALUED PARTNERS & WELL-WISHERS
            </span>
            <p className="text-xs text-amber-100/60 mt-1">Supporting the celebration with pride</p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {partners.map((partner, i) => {
              const CardContent = (
                <div className="glass-card rounded-2xl p-5 text-center h-full border border-gold/25 hover:border-gold/60 transition-all duration-300 hover:scale-[1.02] cursor-default flex flex-col items-center justify-between shadow-lg group">
                  <div className="w-full flex flex-col items-center">
                    {/* Emblem / Logo */}
                    <div
                      className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-gold/60 overflow-hidden flex items-center justify-center font-display font-black text-gold text-base shadow-[0_0_15px_rgba(255,211,106,0.2)] bg-[#25103F] group-hover:scale-105 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {partner.photo ? (
                        <img
                          src={partner.photo}
                          alt={`${partner.name} logo`}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      ) : (
                        <span>
                          {partner.name
                            .split(' ')
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-amber-100 mt-3 text-sm sm:text-base group-hover:text-gold transition-colors">
                      {partner.name}
                    </h4>
                    {partner.desc && (
                      <p className="text-xs text-amber-100/60 mt-1 leading-relaxed">
                        {partner.desc}
                      </p>
                    )}
                  </div>

                  {partner.link && (
                    <span className="inline-block mt-3 text-[11px] text-gold/90 group-hover:text-gold underline font-serif font-medium">
                      Instagram →
                    </span>
                  )}
                </div>
              )

              return (
                <Reveal key={partner.name} delay={0.15 + i * 0.05}>
                  {partner.link ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full group"
                    >
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
      </div>
    </section>
  )
}

