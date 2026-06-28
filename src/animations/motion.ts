/** Global motion language — shared across Hero & Navbar */

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const

export const MOTION_DURATION = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  slower: 0.6,
} as const

export const MOTION_SPRING = {
  snappy: { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.85 },
  smooth: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.9 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 28, mass: 1 },
} as const

/** Scroll parallax multipliers (fraction of scrollY) */
export const SCROLL_PARALLAX = {
  background: 0.05,
  portrait: 0.1,
  profileCard: 0.15,
} as const

/** Portrait interaction limits */
export const PORTRAIT_TILT_DEG = 2

/** Shared section entrance */
export const sectionFade = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: MOTION_EASE },
  },
} as const
