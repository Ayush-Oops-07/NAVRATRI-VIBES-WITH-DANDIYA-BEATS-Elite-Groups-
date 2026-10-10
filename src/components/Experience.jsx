import { CalendarDays, Clock, MapPin, Sparkles, Music, Users, Ticket } from 'lucide-react'
import { Reveal, Title, Btn } from './ui'
import { ADDRESS, MAP_LINK } from '../constants'
import { useBooking } from '../context/BookingContext'

const schedule = [
  {
    time: '5:00 PM',
    title: 'Gate Opens & Welcome',
    desc: 'Arrive early, collect your passes, explore the illuminated venue, and feel the festive anticipation.',
    icon: Sparkles,
  },
  {
    time: '6:00 PM',
    title: 'Event Starts & Kickoff',
    desc: 'Auspicious commencement, traditional Garba beats initiate the evening, and dancers step into the circle.',
    icon: Music,
  },
  {
    time: 'Evening Onwards',
    title: 'Non-Stop Dandiya Beats & Celebration',
    desc: 'Thunderous dhol rhythms, twirling lehengas, energetic Dandiya rounds, and joyous community dancing.',
    icon: Users,
  },
]

const details = [
  {
    icon: CalendarDays,
    label: 'DATE',
    value: '21 October 2026',
    sub: 'Wednesday • Festive Season',
    accent: '#FFD36A',
  },
  {
    icon: Clock,
    label: 'TIMING',
    value: 'Gate: 5:00 PM',
    sub: 'Event: 6:00 PM onwards',
    accent: '#FF4F9A',
  },
  {
    icon: MapPin,
    label: 'VENUE',
    value: 'Ram Bhawan Ram Resort',
    sub: 'NH-28, Motihari, Bihar',
    accent: '#00D2D3',
    link: MAP_LINK,
  },
]

export default function Experience() {
  const { openBooking } = useBooking()

  return (
    <section id="experience" className="section bg-gradient-to-b from-[#160D2B] via-[#25103F] to-[#160D2B] relative">
      <div className="relative max-w-7xl mx-auto z-10">
        <Title
          badge="FESTIVE EXPERIENCE"
          deva="उल्लास और डांडिया का उत्सव"
          sub="Step onto the grandest dance ground in Motihari and lose yourself in the magic of colourful lights, spinning skirts, and thunderous beats."
        >
          An Evening of Pure Celebration
        </Title>

        {/* Large Cinematic Visual Feature Block */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group mb-14">
            <img
              src="/images/experience-ground.jpg"
              alt="Panoramic view of Navratri Dandiya celebration ground with illuminated stage, colorful triangular bunting, fairy lights and dancing crowd"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#160D2B] via-[#160D2B]/30 to-transparent opacity-85" />

            {/* Bottom Content inside Visual Block */}
            <div className="absolute bottom-6 inset-x-6 sm:inset-x-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-pink/20 border border-pink/50 text-pink text-xs font-serif font-bold tracking-widest uppercase mb-2">
                  GRAND ARENA
                </span>
                <h3 className="font-display font-black gold-text text-2xl sm:text-3xl md:text-4xl leading-tight">
                  Feel The Vibrant Energy
                </h3>
                <p className="text-xs sm:text-sm text-[#D8CDE7] mt-1 line-clamp-2 sm:line-clamp-none font-body">
                  Hundreds of celebrants moving in unison to festive rhythms under twinkling canopies of fairy lights and festive bunting.
                </p>
              </div>
              <Btn onClick={openBooking} icon={Ticket} className="shrink-0 cursor-pointer">
                Reserve Your Spot
              </Btn>
            </div>
          </div>
        </Reveal>

        {/* Evening Schedule */}
        <div className="max-w-4xl mx-auto mt-12">
          <Reveal className="text-center mb-8">
            <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass">
              FESTIVAL TIMELINE
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl gold-text mt-3">
              How The Evening Unfolds
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {schedule.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.time} delay={i * 0.12}>
                  <div className="glass-card rounded-2xl p-6 h-full border border-gold/25 hover:border-gold/60 transition-all hover:-translate-y-1 relative group flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl glass border border-gold/40 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <p className="font-display font-black gold-text text-xl sm:text-2xl">
                        {item.time}
                      </p>
                      <h4 className="font-serif font-bold text-[#FFF8F0] mt-1.5 text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D8CDE7]/90 mt-2 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* SECTION 11: EVENT DETAILS (Anchored to #details) */}
        <div id="details" className="pt-20">
          <Reveal className="text-center mb-10">
            <span className="inline-block font-serif text-[11px] sm:text-xs tracking-[0.25em] text-gold uppercase px-4 py-1.5 rounded-full border border-gold/40 glass mb-3">
              OFFICIAL EVENT INFORMATION
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl gold-text">
              Event Details
            </h3>
            <p className="text-[#D8CDE7] text-sm mt-2 max-w-lg mx-auto">
              Clear, verified schedule and venue details for Navratri Vibes with Dandiya Beats 2026.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {details.map((d, i) => {
              const Icon = d.icon
              const CardContent = (
                <div className="glass-card rounded-3xl p-6 text-center h-full border border-gold/30 hover:border-gold/70 hover:shadow-[0_0_30px_rgba(255,211,106,0.25)] transition-all hover:-translate-y-1 duration-300 flex flex-col items-center justify-between">
                  <div className="w-full flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-2xl glass border flex items-center justify-center mb-3 shadow-md"
                      style={{ borderColor: `${d.accent}60`, color: d.accent }}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-serif font-bold tracking-widest text-gold/80 uppercase">
                      {d.label}
                    </span>
                    <h4 className="font-display font-black text-lg sm:text-xl text-[#FFF8F0] mt-1">
                      {d.value}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D8CDE7] mt-1 font-body">
                      {d.sub}
                    </p>
                  </div>
                </div>
              )

              return (
                <Reveal key={d.label} delay={i * 0.1}>
                  {d.link ? (
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
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
