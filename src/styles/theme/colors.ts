/**
 * Centralized color tokens.
 * Synced with @theme in globals.css — update both when changing colors.
 */
export const colors = {
  background: '#050505',
  surface: '#0F0F10',
  glass: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.08)',
  primary: '#FFFFFF',
  secondary: '#A1A1AA',
  accent: '#6C63FF',
  accentBlue: '#00E5FF',
  success: '#00FFAE',
  warning: '#FFB800',
  error: '#FF4D4F',
} as const

export type ThemeColors = typeof colors
