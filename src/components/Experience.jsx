import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Reveal, Title, Diya } from './ui'

const steps = [
  ['5:00 PM', 'Gate Opens', 'Arrive early, collect your dandiya sticks, explore stalls, and soak up the festive lights.'],
  ['6:00 PM', 'Event Starts & Welcome', 'Auspicious kickoff with traditional Garba & Dandiya beats.'],
  ['6:30 PM', 'Garba & Dandiya Warm-up', 'Learn the steps, join the circle, and find your rhythm.'],
  ['7:00 PM', 'Live Music & Dandiya Beats', 'High-energy live music and non-stop festive dance.'],
  ['8:30 PM', 'Peak Celebration', 'The loudest, brightest, and most electric hour of the night.'],
  ['10:00 PM', 'Event Wrap-up', 'Final beats, photo sessions, and memorable goodbyes.']
]
const details = [
  [CalendarDays, 'Date', '21 October 2026', 'Wednesday'],
  [Clock, 'Time', 'Gate: 5 PM | Event: 6 PM', '5:00 PM – 10:00 PM'],
  [MapPin, 'Venue', 'Ram Bhawan Ram Resort', 'NH-28, Motihari, Bihar']
]

export default function Experience() {
  return (
    <section id="experience" className="section crimson-bg">
      <div className="relative max-w-4xl mx-auto">
        <Title>An Evening Full of Celebration</Title>
        <ol className="relative border-l-2 border-gold/40 ml-4 md:ml-0 md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-gold/40">
          {steps.map(([time, t, d], i) => (
            <li key={time} className={`relative pl-8 md:pl-0 pb-10 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'}`}>
              <span className={`absolute -left-[9px] md:left-auto top-2 h-4 w-4 rounded-full bg-gold shadow-[0_0_18px_#f5c04a] ${i % 2 ? 'md:-left-[9px]' : 'md:-right-[9px]'}`} />
              <Reveal y={20}>
                <div className="glass rounded-2xl p-5">
                  <p className="font-display font-black gold-text text-2xl">{time}</p>
                  <h3 className="font-serif font-bold text-amber-50 mt-1">{t}</h3>
                  <p className="text-sm text-amber-100/70 mt-1">{d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div id="details" className="grid md:grid-cols-3 gap-5 mt-10">
          {details.map(([I, l, v, s], i) => (
            <Reveal key={l} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center h-full relative">
                {i === 0 && <Diya className="absolute -top-5 left-1/2 -translate-x-1/2 w-9" />}
                <I className="mx-auto text-gold mb-3" aria-hidden="true" />
                <p className="text-xs text-amber-100/60 tracking-widest">{l}</p>
                <p className="font-serif font-bold text-gold text-lg mt-1">{v}</p>
                <p className="text-sm text-amber-100/70">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
