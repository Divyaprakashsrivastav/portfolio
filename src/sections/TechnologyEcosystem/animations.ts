import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_SPRING } from '@/animations/motion'

export const ecosystemFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE },
  },
}

export const corePulse: Variants = {
  idle: { scale: 1 },
  active: {
    scale: [1, 1.04, 1],
    transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const nodeSpring = MOTION_SPRING.smooth

export const panelVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: MOTION_EASE },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: { duration: 0.25, ease: MOTION_EASE },
  },
}

export const techChipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: MOTION_EASE },
  }),
}
