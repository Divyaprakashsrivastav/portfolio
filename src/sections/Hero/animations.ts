import type { Transition, Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_SPRING } from '@/animations/motion'

export const heroTransition = (delay = 0): Transition => ({
  duration: MOTION_DURATION.slower,
  delay,
  ease: MOTION_EASE,
})

export const heroFadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: heroTransition(delay),
  },
})

export const heroSlideUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...heroTransition(delay), duration: MOTION_DURATION.slow },
  },
})

export const heroFadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.slower + 0.2, delay, ease: MOTION_EASE },
  },
})

export const heroWordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

export const heroWordChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE },
  },
}

export const heroRotateText: Variants = {
  enter: { opacity: 0, y: 8 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
  },
}

export const heroFloat: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const heroFloatCard: Variants = {
  animate: {
    y: [-4, 5, -4],
    transition: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
  },
}

export const heroBreathe: Variants = {
  animate: {
    scale: [1, 1.006, 1],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
}

export { MOTION_SPRING }
