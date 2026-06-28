import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/animations/motion'

const ease = MOTION_EASE

export const experienceStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const experienceFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slower + 0.1, ease },
  },
}

export const experienceSlideIn: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_DURATION.slower + 0.2, ease },
  },
}

export const experienceReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease },
  },
}

export const experienceChip: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.normal, ease },
  },
}

export const experienceIconPulse: Variants = {
  animate: {
    rotate: [0, 3, -2, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
}
