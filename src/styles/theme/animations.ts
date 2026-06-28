export const animations = {
  duration: { fast: '150ms', normal: '300ms', slow: '500ms', cinematic: '800ms' },
  ease: {
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

export type ThemeAnimations = typeof animations
