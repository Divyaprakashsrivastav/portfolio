/** Hero section content — single source of truth */

export const HERO = {
  greeting: "Hello, I'm",
  name: {
    first: 'Divya Prakash',
    last: 'Srivastav',
  },
  roles: [
    'AI Engineer',
    'Software Developer',
    'Founder of Zuraa',
  ],
  description:
    'I design and build intelligent software — from full-stack systems to AI-powered products. Focused on clean architecture, precise interfaces, and shipping work that holds up in production.',
} as const

/** Staggered entrance delays (seconds) */
export const HERO_DELAYS = {
  background: 0,
  greeting: 0.2,
  heading: 0.35,
  subtitle: 0.55,
  description: 0.7,
  buttons: 0.85,
  social: 1.0,
  portrait: 0.45,
  scroll: 1.15,
} as const

export { MOTION_EASE as HERO_EASE } from '@/animations/motion'
