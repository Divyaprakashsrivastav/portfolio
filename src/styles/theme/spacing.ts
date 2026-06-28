export const spacing = {
  section: { sm: '4rem', md: '6rem', lg: '8rem', xl: '12rem' },
  container: { padding: '1.5rem', maxWidth: '1280px', wide: '1440px' },
  radius: { sm: '0.5rem', md: '0.75rem', lg: '1rem', xl: '1.5rem', full: '9999px' },
} as const

export type ThemeSpacing = typeof spacing
