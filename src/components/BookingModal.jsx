import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, MessageCircle, Ticket, MapPin, Plus, Minus, User, Phone } from 'lucide-react'
import { useBooking } from '../context/BookingContext'
import { LOCATIONS } from '../config/locations'
import { Btn, Diya } from './ui'

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [passes, setPasses] = useState(1)
  const [selectedLocationId, setSelectedLocationId] = useState(LOCATIONS[0]?.id || '')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedLocationName, setSubmittedLocationName] = useState('')
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('')

  const nameInputRef = useRef(null)
  const modalRef = useRef(null)

  // Reset form when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setName('')
      setPhone('')
      setPasses(1)
      setSelectedLocationId(LOCATIONS[0]?.id || '')
      setErrors({})
      setSubmitted(false)
      setSubmittedLocationName('')
      setLastWhatsAppUrl('')

      // Body scroll lock
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // Focus first input
      const timer = setTimeout(() => {
        nameInputRef.current?.focus()
      }, 100)

      return () => {
        document.body.style.overflow = originalOverflow
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeBooking()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeBooking])

  const validate = () => {
    const errs = {}
    const trimmedName = name.trim()
    if (!trimmedName) {
      errs.name = 'Please enter your name'
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters'
    }

    const cleanPhone = phone.replace(/\D/g, '')
    if (!cleanPhone) {
      errs.phone = 'Please enter your phone number'
    } else if (cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number'
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number'
    }

    if (!passes || passes < 1 || passes > 10) {
      errs.passes = 'Please select between 1 and 10 passes'
    }

    if (!selectedLocationId) {
      errs.location = 'Please select a pickup location'
    }

    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) nameInputRef.current?.focus()
      return
    }

    const selectedLoc = LOCATIONS.find((loc) => loc.id === selectedLocationId) || LOCATIONS[0]
    const cleanPhone = phone.replace(/\D/g, '')

    // Message format (exact):
    // Navratri Vibes 2026 - Pass Booking
    // Naam: <name>
    // Phone: <phone>
    // Pass: <count>
    // Location: <location name>
    const message = `Navratri Vibes 2026 - Pass Booking\nNaam: ${name.trim()}\nPhone: ${cleanPhone}\nPass: ${passes}\nLocation: ${selectedLoc.name}`
    const targetPhone = selectedLoc.whatsapp.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`

    setLastWhatsAppUrl(whatsappUrl)
    setSubmittedLocationName(selectedLoc.name)
    setSubmitted(true)

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handlePhoneChange = (e) => {
    const raw = e.target.value
    // Allow digits only, max 10
    const digits = raw.replace(/\D/g, '').slice(0, 10)
    setPhone(digits)
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }))
    }
  }

  const handleLocationSelect = (id) => {
    setSelectedLocationId(id)
    if (errors.location) {
      setErrors((prev) => ({ ...prev, location: undefined }))
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          role="presentation"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeBooking}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg my-auto rounded-3xl bg-gradient-to-b from-[#25103F] via-[#160D2B] to-[#0E081D] border border-gold/40 shadow-[0_0_50px_rgba(255,211,106,0.25)] p-5 sm:p-7 text-[#FFF8F0] max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeBooking}
              className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-gold/80 hover:text-gold hover:bg-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Close booking modal"
            >
              <X size={22} aria-hidden="true" />
            </button>

            {/* Modal Header */}
            <div className="text-center pr-8 sm:pr-0 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Diya className="w-8 h-6" />
                <span className="font-display font-black text-xs tracking-widest gold-text">
                  NAVRATRI VIBES 2026
                </span>
                <Diya className="w-8 h-6" />
              </div>
              <h2
                id="booking-modal-title"
                className="font-display font-black text-2xl sm:text-3xl gold-text"
              >
                {submitted ? 'Booking Initiated' : 'Book Your Pass'}
              </h2>
              <p className="text-xs sm:text-sm text-amber-100/70 mt-1">
                {submitted
                  ? 'Your pass request has been created'
                  : 'Fill the form to send your pass request on WhatsApp'}
              </p>
            </div>

            {/* Success State */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-4 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-gold/20 to-amber-500/10 border border-gold text-gold shadow-[0_0_25px_rgba(245,192,74,0.35)]">
                  <CheckCircle2 size={36} aria-hidden="true" />
                </div>

                <div className="glass rounded-2xl p-5 sm:p-6 text-left border border-gold/30 space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed text-amber-100 font-medium">
                    Message ready on WhatsApp. Our team will reply with the time to visit{' '}
                    <span className="text-gold font-bold">{submittedLocationName}</span>. Payment and your physical ticket are collected at the location.
                  </p>
                  <div className="pt-3 border-t border-gold/20 text-xs text-amber-100/70 flex items-center gap-2">
                    <Ticket size={16} className="text-gold shrink-0" aria-hidden="true" />
                    <span>Selected: {passes} {passes === 1 ? 'Pass' : 'Passes'} • Pickup at {submittedLocationName}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-serif font-bold text-sm bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white hover:brightness-110 transition-all min-h-[44px] shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      Open WhatsApp Again
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-serif font-bold text-sm bg-gradient-to-r from-[#FFD36A] via-[#FF9A2E] to-[#FF8A36] text-[#160D2B] hover:scale-[1.02] transition-transform min-h-[44px] shadow-[0_0_25px_rgba(255,211,106,0.4)]"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* 1. Name Field */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block font-serif text-sm font-semibold text-gold mb-1.5"
                  >
                    Full Name <span className="text-amber-300">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gold/60">
                      <User size={18} aria-hidden="true" />
                    </span>
                    <input
                      ref={nameInputRef}
                      id="booking-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Enter your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'booking-name-error' : undefined}
                      className={`w-full bg-black/40 border ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gold/30'
                      } rounded-xl pl-10 pr-4 py-3 text-base text-amber-100 placeholder:text-amber-100/30 focus:border-gold focus:ring-2 focus:ring-gold/60 focus:outline-none transition-all min-h-[44px]`}
                    />
                  </div>
                  {errors.name && (
                    <p id="booking-name-error" className="text-rose-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <span>•</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Phone Number Field */}
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block font-serif text-sm font-semibold text-gold mb-1.5"
                  >
                    Phone Number <span className="text-amber-300">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 rounded-l-xl bg-gold/15 border border-r-0 border-gold/30 text-gold text-sm font-semibold select-none min-h-[44px]">
                      +91
                    </span>
                    <div className="relative flex-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gold/60">
                        <Phone size={17} aria-hidden="true" />
                      </span>
                      <input
                        id="booking-phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                        className={`w-full bg-black/40 border ${
                          errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-gold/30'
                        } rounded-r-xl pl-9 pr-4 py-3 text-base text-amber-100 placeholder:text-amber-100/30 focus:border-gold focus:ring-2 focus:ring-gold/60 focus:outline-none transition-all min-h-[44px]`}
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p id="booking-phone-error" className="text-rose-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <span>•</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Number of Passes Stepper */}
                <div>
                  <label
                    id="booking-passes-label"
                    className="block font-serif text-sm font-semibold text-gold mb-1.5"
                  >
                    Number of Passes <span className="text-amber-300">*</span>
                  </label>
                  <div className="flex items-center justify-between bg-black/40 border border-gold/30 rounded-xl p-2 min-h-[44px]">
                    <div className="flex items-center gap-2 pl-3">
                      <Ticket size={20} className="text-gold" aria-hidden="true" />
                      <span className="text-sm font-medium text-amber-100">
                        {passes} {passes === 1 ? 'Pass' : 'Passes'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2" role="group" aria-labelledby="booking-passes-label">
                      <button
                        type="button"
                        onClick={() => setPasses((p) => Math.max(1, p - 1))}
                        disabled={passes <= 1}
                        aria-label="Decrease pass count"
                        className="w-11 h-11 rounded-lg bg-gold/15 hover:bg-gold/25 active:scale-95 text-gold flex items-center justify-center border border-gold/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Minus size={18} aria-hidden="true" />
                      </button>
                      <span
                        className="w-9 text-center font-display font-black text-lg text-gold select-none"
                        aria-live="polite"
                      >
                        {passes}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPasses((p) => Math.min(10, p + 1))}
                        disabled={passes >= 10}
                        aria-label="Increase pass count"
                        className="w-11 h-11 rounded-lg bg-gold/15 hover:bg-gold/25 active:scale-95 text-gold flex items-center justify-center border border-gold/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Plus size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {errors.passes && (
                    <p className="text-rose-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <span>•</span> {errors.passes}
                    </p>
                  )}
                </div>

                {/* 4. Pickup Location Cards */}
                <div>
                  <label
                    id="booking-location-label"
                    className="block font-serif text-sm font-semibold text-gold mb-2"
                  >
                    Select Pickup Location <span className="text-amber-300">*</span>
                  </label>
                  <div
                    role="radiogroup"
                    aria-labelledby="booking-location-label"
                    className="space-y-2.5"
                  >
                    {LOCATIONS.map((loc) => {
                      const isSelected = selectedLocationId === loc.id
                      return (
                        <button
                          key={loc.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleLocationSelect(loc.id)}
                          className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 min-h-[44px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                            isSelected
                              ? 'bg-gradient-to-r from-gold/25 via-amber-500/15 to-transparent border-2 border-gold shadow-[0_0_20px_rgba(245,192,74,0.3)]'
                              : 'bg-black/30 border border-gold/20 hover:border-gold/50 hover:bg-gold/5'
                          }`}
                        >
                          <div className="pt-0.5 shrink-0">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'border-gold bg-gold text-wine shadow-[0_0_10px_rgba(245,192,74,0.6)]'
                                  : 'border-gold/40 bg-black/40'
                              }`}
                            >
                              {isSelected && <div className="w-2 h-2 rounded-full bg-wine" />}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`font-serif text-sm font-bold leading-snug ${
                                isSelected ? 'text-gold' : 'text-amber-100'
                              }`}
                            >
                              {loc.name}
                            </p>
                            <p className="text-xs text-amber-100/70 mt-0.5 flex items-center gap-1 leading-normal">
                              <MapPin size={12} className="text-gold/70 shrink-0" aria-hidden="true" />
                              <span className="truncate">{loc.address}</span>
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  {errors.location && (
                    <p className="text-rose-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <span>•</span> {errors.location}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Btn
                    type="submit"
                    icon={MessageCircle}
                    className="w-full text-base sm:text-lg !py-4 shadow-[0_0_30px_rgba(245,192,74,.4)] min-h-[44px]"
                  >
                    Send on WhatsApp
                  </Btn>
                  <p className="text-[11px] text-center text-amber-100/60 mt-2.5">
                    Opens WhatsApp with your pre-filled booking details
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
