import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/animations/motion'

const ease = MOTION_EASE

export const buildingStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const buildingFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slower, ease },
  },
}

export const buildingCard: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease },
  },
}
