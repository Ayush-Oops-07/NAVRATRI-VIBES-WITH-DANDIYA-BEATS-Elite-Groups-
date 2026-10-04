/**
 * Sponsor Configuration for Navratri Vibes with Dandiya Beats 2026
 * 
 * You can easily customize sponsor details, logo paths, links, 
 * WhatsApp enquiry number, and animation duration below.
 */

const PHONE = '917631690500'
const createEnquiryLink = (slot) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi, I want to book the "${slot}" sponsorship slot for Navratri Vibes 2026. Please share details & packages.`
  )}`

export const sponsorConfig = {
  // Total duration in seconds (20 seconds as requested)
  duration: 20,

  // WhatsApp Enquiry details
  whatsapp: {
    enabled: true,
    number: PHONE,
    message: 'Hi, I would like to sponsor Navratri Vibes 2026. Please share sponsorship packages.',
    label: 'Book Your Sponsor Slot on WhatsApp',
  },

  // Main Center Sponsor (Visual Focus - Title Sponsor)
  presentedBy: {
    category: 'PRESENTED BY',
    name: 'Your Brand / Business Name Here',
    tagline: '✨ Grand Title Sponsor Slot Available',
    // Path to logo image (e.g. '/sponsors/your-logo.png' or URL). Leave empty to show the premium "YOUR LOGO HERE" placeholder.
    logo: '',
    link: createEnquiryLink('PRESENTED BY - Title Sponsor'),
    accentColor: '#f5c04a', // Gold
    badgeText: 'Slot Available • Book Now',
    description: 'Your logo and brand name will be prominently highlighted here in front of thousands of attendees.',
  },

  // Left Side Sponsor (Powered By)
  poweredBy: {
    category: 'POWERED BY',
    name: 'Your Company / Brand Name',
    tagline: '⚡ Powered By Sponsor Slot Available',
    logo: '',
    link: createEnquiryLink('POWERED BY - Associate Sponsor'),
    accentColor: '#e2e8f0', // Silver
    badgeText: 'Slot Available • Book Now',
    description: 'Showcase your company logo and brand presence here.',
  },

  // Right Side Sponsor (Co-Powered By)
  coPoweredBy: {
    category: 'CO-POWERED BY',
    name: 'Your Business / Brand Name',
    tagline: '🌟 Co-Powered By Sponsor Slot Available',
    logo: '',
    link: createEnquiryLink('CO-POWERED BY - Co-Sponsor'),
    accentColor: '#d97706', // Bronze / Copper
    badgeText: 'Slot Available • Book Now',
    description: 'Showcase your company logo and partner identity here.',
  },
}
