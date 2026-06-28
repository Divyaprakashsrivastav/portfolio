/**
 * Typography scale — Display through Caption.
 * Font families are loaded via index.html (Satoshi, Inter, JetBrains Mono).
 */
export const typography = {
  fontFamily: {
    display: '"Satoshi", "Inter", system-ui, sans-serif',
    sans: '"Inter", system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  scale: {
    display: { size: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.05', weight: '700', tracking: '-0.03em' },
    h1: { size: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', weight: '700', tracking: '-0.025em' },
    h2: { size: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', weight: '600', tracking: '-0.02em' },
    h3: { size: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2', weight: '600', tracking: '-0.015em' },
    bodyLg: { size: '1.125rem', lineHeight: '1.7', weight: '400', tracking: '0' },
    body: { size: '1rem', lineHeight: '1.65', weight: '400', tracking: '0' },
    caption: { size: '0.8125rem', lineHeight: '1.5', weight: '500', tracking: '0.02em' },
  },
} as const

export type ThemeTypography = typeof typography
