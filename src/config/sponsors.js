/**
 * Sponsor Configuration for Navratri Vibes with Dandiya Beats 2026
 */
import {
  RAMJEE_PRASAD_INSTAGRAM,
  KESHRI_COLLECTION_INSTAGRAM,
  BAHU_BEGAM_INSTAGRAM,
  INSTAGRAM,
} from '../constants'

const PHONE = '917631690500'

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

  // Section A: Our Celebration Partners (3 partners, Ramjee Prasad in center)
  celebrationPartners: [
    {
      id: 'keshri',
      category: 'POWERED BY',
      name: 'Keshri Collection',
      tagline: '⚡ Powered By Partner',
      logo: '/Sponsors/keshri.jpeg',
      link: KESHRI_COLLECTION_INSTAGRAM,
      accentColor: '#e2e8f0', // Silver
      badgeText: 'Powered By Partner',
      description: 'Exclusive fashion & ethnic wear partner powering Navratri Vibes 2026.',
    },
    {
      id: 'ramjee',
      category: 'PRESENTED BY',
      name: 'Ramjee Prasad',
      tagline: '✨ Grand Title Partner',
      logo: '/Sponsors/ramji.jpeg',
      link: RAMJEE_PRASAD_INSTAGRAM,
      accentColor: '#f5c04a', // Gold
      badgeText: 'Official Title Partner',
      isCenter: true,
      description: 'Proud Title Partner presenting the grandest Dandiya celebration in Motihari.',
    },
    {
      id: 'ganpati',
      category: 'CELEBRATION PARTNER',
      name: 'Ganpati Traders',
      tagline: '🌟 Celebration Partner',
      logo: '/Sponsors/ganapti.jpeg',
      link: INSTAGRAM,
      accentColor: '#f5c04a',
      badgeText: 'Celebration Partner',
      description: 'Valued celebration partner bringing festive prosperity to Motihari.',
    },
  ],

  // Section B: Our Valuable Sponsors (4 sponsors in separate row)
  valuableSponsors: [
    {
      id: 'paperwings',
      category: 'VALUABLE SPONSOR',
      name: 'Paperwings Ventures',
      tagline: '🚀 Venture Partner',
      logo: '/Sponsors/paperwings.jpeg',
      link: INSTAGRAM,
      accentColor: '#00D2D3',
      badgeText: 'Official Sponsor',
      description: 'Empowering festive celebrations across East Champaran.',
    },
    {
      id: 'salon24',
      category: 'GROOMING PARTNER',
      name: 'SALON 24',
      tagline: 'Hair | Makeup | Beauty',
      logo: '/Sponsors/saloon.jpeg',
      link: INSTAGRAM,
      accentColor: '#FF4F9A',
      badgeText: 'Official Sponsor',
      description: 'Unisex Franchise Salon',
    },
    {
      id: 'kundal',
      category: 'HERITAGE SPONSOR',
      name: 'Kundal Prasad & Co.',
      tagline: 'Established Since 1917',
      location: 'Main Road, Motihari, East Champaran',
      logo: '/Sponsors/kundal.jpeg',
      link: INSTAGRAM,
      accentColor: '#FFD36A',
      badgeText: 'Official Sponsor',
      description: 'Since 1917 • Main Road, Motihari',
    },
    {
      id: 'bahu',
      category: 'CO-POWERED BY',
      name: 'Bahu Begam',
      tagline: '🌟 Co-Powered By Partner',
      logo: '/Sponsors/bahu.jpeg',
      link: BAHU_BEGAM_INSTAGRAM,
      accentColor: '#d97706', // Bronze / Copper
      badgeText: 'Co-Powered Partner',
      description: 'Celebrated traditional designer showroom co-powering the festivities.',
    },
  ],
}

