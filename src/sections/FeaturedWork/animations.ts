import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/animations/motion'

const ease = MOTION_EASE

export const featuredStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

export const featuredFadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slower + 0.1, ease },
  },
}

export const featuredScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: MOTION_DURATION.slower + 0.2, ease },
  },
}

export const featuredSlide: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease },
  },
}

export const featuredReveal = featuredSlide

export const featuredChip: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: MOTION_DURATION.normal, ease },
  },
}
