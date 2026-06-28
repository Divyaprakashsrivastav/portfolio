import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_SPRING } from '@/animations/motion'

export const navItemTransition = {
  duration: MOTION_DURATION.normal,
  ease: MOTION_EASE,
}

export const navItemSpring = MOTION_SPRING.smooth

export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE } },
  open: { opacity: 1, transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE } },
}

export const mobileLinkVariants: Variants = {
  closed: { opacity: 0, y: 40 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: MOTION_DURATION.slower, ease: MOTION_EASE },
  }),
}

export const mobileOverlayVariants: Variants = {
  closed: { clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' },
  open: { clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' },
}

export const hamburgerVariants = {
  top: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  },
  middle: {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  },
  bottom: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  },
}
