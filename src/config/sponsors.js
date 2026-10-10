/**
 * Sponsor Configuration for Navratri Vibes with Dandiya Beats 2026
 */
import {
  RAMJEE_PRASAD_INSTAGRAM,
  KESHRI_COLLECTION_INSTAGRAM,
  BAHU_BEGAM_INSTAGRAM,
  INSTAGRAM,
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

  // Section A: Our Celebration Partners (3 partners, Ramjee Prasad in center)
  celebrationPartners: [
    {
      id: 'keshri',
      category: 'CELEBRATION PARTNER',
      name: 'Keshri Collection',
      tagline: '✨ Ethnic Wear Partner',
      logo: '/Sponsors/keshri.jpeg',
      link: KESHRI_COLLECTION_INSTAGRAM,
      accentColor: '#e2e8f0', // Silver
      badgeText: 'Celebration Partner',
      description: 'Exclusive fashion & ethnic wear partner for Navratri Vibes 2026.',
    },
    {
      id: 'ramjee',
      category: 'TITLE PARTNER',
      name: 'Ramjee Prasad',
      tagline: '✨ Grand Title Partner',
      logo: '/Sponsors/ramji.jpeg',
      link: RAMJEE_PRASAD_INSTAGRAM,
      accentColor: '#f5c04a', // Gold
      badgeText: 'Official Title Partner',
      isCenter: true,
      description: 'Proud Title Partner for the grandest Dandiya celebration in Motihari.',
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
      category: 'DESIGNER PARTNER',
      name: 'Bahu Begam',
      tagline: '🌟 Designer Wear Partner',
      logo: '/Sponsors/bahu.jpeg',
      link: BAHU_BEGAM_INSTAGRAM,
      accentColor: '#d97706', // Bronze / Copper
      badgeText: 'Official Sponsor',
      description: 'Celebrated traditional designer showroom for the festivities.',
    },
  ],
}

