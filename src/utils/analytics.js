/**
 * Google Analytics 4 (GA4) Integration Utility
 * Configurable via NEXT_PUBLIC_GA_MEASUREMENT_ID or VITE_GA_MEASUREMENT_ID
 */

export const GA_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.VITE_GA_MEASUREMENT_ID || import.meta.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : undefined) ||
  (typeof process !== 'undefined' && process.env
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID
    : undefined) ||
  ''

let isInitialized = false

/**
 * Initialize GA4 tracking script if measurement ID is configured
 */
export function initGA() {
  if (typeof window === 'undefined' || isInitialized) return
  const id = GA_MEASUREMENT_ID

  if (!id) {
    // Development or measurement ID not yet set
    return
  }

  try {
    // Check if script already exists
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      document.head.appendChild(script)
    }

    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = window.gtag || gtag

    window.gtag('js', new Date())
    window.gtag('config', id, {
      send_page_view: false, // controlled manually to avoid duplicates
    })

    isInitialized = true
  } catch (err) {
    console.warn('[GA4] Initialization error:', err)
  }
}

/**
 * Send custom event to Google Analytics
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return

  const eventPayload = {
    ...params,
    page_location: window.location.href,
    timestamp: new Date().toISOString(),
  }

  if (typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventPayload)
  }
}

/**
 * Track Page View event
 */
export function trackPageView(page_path = window.location.pathname, page_title = document.title) {
  trackEvent('page_view', {
    page_path,
    page_title,
  })
}

/**
 * Track when user views or opens the Ticket Booking section or modal
 */
export function trackTicketSectionView(source = 'section') {
  trackEvent('ticket_section_view', {
    source,
    section_name: 'Reserve Your Pass',
  })
}

/**
 * Track click on a ticket pickup location
 */
export function trackTicketLocationClick(location_name, location_id = '') {
  trackEvent('ticket_location_click', {
    location_name,
    location_id,
    link_type: 'pickup_location_select',
  })
}

/**
 * Track click on Google Maps navigation links
 */
export function trackGoogleMapsClick(location_name, map_url) {
  trackEvent('google_maps_click', {
    location_name,
    map_url,
    link_type: 'google_maps_directions',
  })
}

/**
 * Track WhatsApp enquiry or booking click
 */
export function trackWhatsAppClick(source = 'general', extra = {}) {
  trackEvent('whatsapp_click', {
    source,
    link_type: 'whatsapp_enquiry',
    ...extra,
  })
}

/**
 * Track Instagram link clicks
 */
export function trackInstagramClick(partner_name, instagram_url) {
  trackEvent('instagram_click', {
    partner_name,
    instagram_url,
    link_type: 'instagram_profile',
  })
}

/**
 * Track Sponsor / Partner clicks
 */
export function trackSponsorPartnerClick(partner_name, category = '', link_url = '') {
  trackEvent('sponsor_partner_click', {
    partner_name,
    category,
    link_url,
    link_type: 'sponsor_showcase',
  })
}
