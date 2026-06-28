export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
  md: '0 4px 16px rgba(0, 0, 0, 0.5)',
  lg: '0 8px 32px rgba(0, 0, 0, 0.6)',
  xl: '0 16px 64px rgba(0, 0, 0, 0.7)',
  glowAccent: '0 0 40px rgba(108, 99, 255, 0.35)',
  glowBlue: '0 0 40px rgba(0, 229, 255, 0.3)',
  glowWhite: '0 0 32px rgba(255, 255, 255, 0.12)',
  inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
} as const

export type ThemeShadows = typeof shadows
