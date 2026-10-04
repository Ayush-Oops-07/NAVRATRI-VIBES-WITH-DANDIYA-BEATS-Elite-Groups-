import { Camera, Music, Sparkles, Instagram, Globe, ExternalLink } from 'lucide-react'
import { Reveal, Title } from './ui'
import {
  HIRA_JACK_INSTAGRAM,
  HIRA_JACK_WEBSITE,
  SHIVANI_SOUND_LINK,
  SHADIS_DOT_COM_LINK,
} from '../constants'

const partners = [
  {
    category: 'BEATS & SOUND',
    icon: Music,
    name: 'Shivani Sound',
    tagline: 'High-Energy Dandiya Beats Partner',
    description:
      'Pulsating sound system, thunderous traditional dhol rhythms, and non-stop festive beats to keep the celebration energetic all night long.',
    logo: null, // Icon emblem
    links: [
      { label: 'Instagram', url: SHIVANI_SOUND_LINK, icon: Instagram, primary: true },
    ],
  },
  {
    category: 'MOMENTS CAPTURED BY',
    icon: Camera,
    name: 'Hira Jack Photography',
    tagline: 'Official Photography & Cinematography Partner',
    description:
      'Capturing every divine festive emotion, candid dandiya whirls, and royal portraits in ultra high-definition 4K cinematic glory.',
    logo: '/events%20manage/hira%20jack%20logo.jpg',
    links: [
      { label: 'Instagram', url: HIRA_JACK_INSTAGRAM, icon: Instagram, primary: true },
      { label: 'Website', url: HIRA_JACK_WEBSITE, icon: Globe, primary: false },
    ],
  },
  {
    category: 'DECOR & AMBIANCE',
    icon: Sparkles,
    name: 'shadi.s.com',
    tagline: 'Grand Stage & Festive Decor Partner',
    description:
      'Royal Gujarati aesthetics, mesmerizing festive lighting, floral entrance arches, and a breathtaking Navratri celebration wonderland.',
    logo: null, // Icon emblem
    links: [
      { label: 'Instagram', url: SHADIS_DOT_COM_LINK, icon: Instagram, primary: true },
    ],
  },
]

export default function EventPartners() {
  return (
    <section id="partners" className="section crimson-bg relative">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(245,192,74,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <Title
          deva="उत्सव निर्माता एवं सहयोगी"
          sub="The masterminds crafting the sound, visuals, and grand atmosphere of Navratri Vibes 2026"
        >
          EXPERIENCE CREATORS
        </Title>

        {/* 3-Column Responsive Balanced Layout (All 3 equal & glowing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-10">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <Reveal key={partner.name} delay={index * 0.1}>
                <div className="glass rounded-3xl p-6 sm:p-7 text-center h-full flex flex-col justify-between border-2 border-gold/60 hover:border-gold shadow-[0_0_35px_rgba(245,192,74,0.22)] hover:shadow-[0_0_55px_rgba(245,192,74,0.4)] bg-gradient-to-b from-[#3a0a14]/65 via-[#1f0409]/75 to-[#0d0103]/90 transition-all duration-300 hover:scale-[1.03] group">
                  <div>
                    {/* Category Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/70 text-gold text-xs font-serif font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,192,74,0.25)]">
                      <Icon size={14} className="text-gold shrink-0" />
                      <span>{partner.category}</span>
                    </div>

                    {/* Logo Image / Icon Emblem */}
                    <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-gold/80 bg-black/60 p-2 flex items-center justify-center shadow-[0_0_25px_rgba(245,192,74,0.3)] group-hover:scale-105 transition-transform duration-300 mb-4 overflow-hidden">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain rounded-xl"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      ) : (
                        <Icon size={38} className="text-gold animate-pulse" />
                      )}
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="font-display font-black text-2xl sm:text-3xl gold-text transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-amber-200/90 text-xs sm:text-sm font-serif font-medium mt-1">
                      {partner.tagline}
                    </p>
                    <p className="text-amber-100/75 text-xs sm:text-sm leading-relaxed mt-3">
                      {partner.description}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 pt-4 border-t border-gold/20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {partner.links.map((link) => {
                      const LinkIcon = link.icon
                      if (link.primary) {
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine bg-gradient-to-r from-[#ffe08a] via-gold to-[#c8791a] hover:opacity-95 px-4 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(245,192,74,0.35)]"
                          >
                            <LinkIcon size={14} />
                            <span>{link.label}</span>
                          </a>
                        )
                      }
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-white glass hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-gold/50"
                        >
                          <LinkIcon size={14} />
                          <span>{link.label}</span>
                          <ExternalLink size={12} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
