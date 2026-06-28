import { PROFILE, SEO, SITE_URL } from './profile'

export const APP = {
  name: PROFILE.fullName,
  author: PROFILE.fullName,
  description: SEO.description,
  url: SITE_URL,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    cinematic: 1.2,
  },
  ease: {
    smooth: [0.25, 0.1, 0.25, 1] as const,
    expo: [0.16, 1, 0.3, 1] as const,
    spring: [0.34, 1.56, 0.64, 1] as const,
  },
} as const
