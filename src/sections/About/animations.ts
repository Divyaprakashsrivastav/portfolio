import type { Variants } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/animations/motion'

const ease = MOTION_EASE

export const aboutStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const aboutFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slower, ease },
  },
}

export const aboutFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.slow, ease },
  },
}

export const aboutSlideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_DURATION.slower, ease },
  },
}

export const aboutTimelineItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: MOTION_DURATION.slower, ease },
  },
}

export const aboutCardFloat: Variants = {
  animate: {
    y: [-3, 4, -3],
    transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const aboutLineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: MOTION_DURATION.slower + 0.2, ease },
  },
}
