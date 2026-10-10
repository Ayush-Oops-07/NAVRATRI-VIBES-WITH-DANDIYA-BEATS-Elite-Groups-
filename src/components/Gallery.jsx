import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Sparkles } from 'lucide-react'
import { Reveal, Title } from './ui'

const galleryItems = [
  {
    id: 1,
    src: '/images/experience-ground.jpg',
    title: 'The Grand Celebration Arena',
    subtitle: 'Under glittering fairy lights and festive bunting',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    height: 'h-72 sm:h-80 md:h-[460px]',
  },
  {
    id: 2,
    src: '/images/gallery-twirl.jpg',
    title: 'Twirling in Festive Splendor',
    subtitle: 'Vibrant mirror-work chaniya cholis and dancing spirits',
    span: 'col-span-1',
    height: 'h-64 sm:h-72 md:h-[220px]',
  },
  {
    id: 3,
    src: '/images/gallery-sticks.jpg',
    title: 'Rhythm of Dandiya Sticks',
    subtitle: 'Traditional wooden sticks with colourful tassels',
    span: 'col-span-1',
    height: 'h-64 sm:h-72 md:h-[220px]',
  },
  {
    id: 4,
    src: '/images/about-dandiya.jpg',
    title: 'Grace & Traditional Beats',
    subtitle: 'Celebrating the divine energy with music and laughter',
    span: 'col-span-1',
    height: 'h-64 sm:h-72 md:h-[220px]',
  },
  {
    id: 5,
    src: '/images/hero-dancers.jpg',
    title: 'Joyful Circles of Garba',
    subtitle: 'Friends and families coming together in Motihari',
    span: 'col-span-1',
    height: 'h-64 sm:h-72 md:h-[220px]',
  },
]

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  // ESC key listener for lightbox
  useEffect(() => {
    if (!activeImage) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage])

  return (
    <section id="gallery" className="section bg-[#160D2B] relative">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(255, 79, 154, 0.22), transparent 50%), radial-gradient(circle at 20% 70%, rgba(139, 61, 206, 0.25), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Title
          badge="FESTIVE MOMENTS"
          deva="यादगार पल एवं उत्सव की झलकियां"
          sub="Glimpses of the vibrant colors, rhythmic dance moves, traditional costumes, and joyous celebrations."
        >
          Festival Visual Gallery
        </Title>

        {/* Asymmetrical Editorial / Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.08}
              className={`${item.span} group relative cursor-pointer`}
            >
              <div
                onClick={() => setActiveImage(item)}
                className={`relative w-full ${item.height} rounded-3xl overflow-hidden border border-gold/30 hover:border-gold shadow-lg group-hover:shadow-[0_0_35px_rgba(255,211,106,0.35)] transition-all duration-500`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#160D2B]/90 via-[#160D2B]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Zoom Icon on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ZoomIn size={16} />
                </div>

                {/* Caption / Title */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl glass-card border border-gold/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif font-bold text-gold text-xs sm:text-sm flex items-center gap-1.5">
                    <Sparkles size={13} className="text-pink shrink-0" />
                    <span>{item.title}</span>
                  </p>
                  <p className="text-[11px] text-[#D8CDE7] mt-0.5 line-clamp-1 font-body">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center z-10"
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
                className="absolute -top-12 right-0 text-white hover:text-gold p-2 glass rounded-full transition-colors focus:outline-none"
              >
                <X size={24} />
              </button>

              <div className="rounded-3xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-[#160D2B] w-full">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full max-h-[72vh] object-contain mx-auto"
                />
                <div className="p-4 sm:p-5 bg-[#25103F]/90 border-t border-gold/25 text-center">
                  <h4 className="font-display font-black gold-text text-lg sm:text-xl">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D8CDE7] mt-1 font-body">
                    {activeImage.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
