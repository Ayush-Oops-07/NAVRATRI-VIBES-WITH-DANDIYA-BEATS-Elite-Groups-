/**
 * Sponsor Configuration for Navratri Vibes with Dandiya Beats 2026
 */
import {
  RAMJEE_PRASAD_INSTAGRAM,
  KESHRI_COLLECTION_INSTAGRAM,
  BAHU_BEGAM_INSTAGRAM,
} from '../constants'

const PHONE = '917295049990'

export const sponsorConfig = {
  // Total duration in seconds for intro popup
  duration: 15,

  // WhatsApp Enquiry details
  whatsapp: {
    enabled: true,
    number: PHONE,
    message: 'Hi, I would like to sponsor / partner with Navratri Vibes 2026.',
    label: 'Enquire for Brand Partnerships',
  },

  // Main Center Sponsor (Visual Focus - Title Sponsor)
  presentedBy: {
    category: 'PRESENTED BY',
    name: 'Ramjee Prasad',
    tagline: '✨ Grand Title Partner',
    logo: '/Sponsors/ramji.jpeg',
    link: RAMJEE_PRASAD_INSTAGRAM,
    accentColor: '#f5c04a', // Gold
    badgeText: 'Official Title Partner',
    description: 'Proud Title Partner presenting the grandest Dandiya celebration in Motihari.',
  },

  // Left Side Sponsor (Powered By)
  poweredBy: {
    category: 'POWERED BY',
    name: 'Keshri Collection',
    tagline: '⚡ Powered By Partner',
    logo: '/Sponsors/keshri.jpeg',
    link: KESHRI_COLLECTION_INSTAGRAM,
    accentColor: '#e2e8f0', // Silver
    badgeText: 'Powered By Partner',
    description: 'Exclusive fashion & ethnic wear partner powering Navratri Vibes 2026.',
  },

  // Right Side Sponsor (Co-Powered By)
  coPoweredBy: {
    category: 'CO-POWERED BY',
    name: 'Bahu Begam',
    tagline: '🌟 Co-Powered By Partner',
    logo: '/Sponsors/bahu.jpeg',
    link: BAHU_BEGAM_INSTAGRAM,
    accentColor: '#d97706', // Bronze / Copper
    badgeText: 'Co-Powered By Partner',
    description: 'Celebrated traditional designer showroom co-powering the festivities.',
  },
}
