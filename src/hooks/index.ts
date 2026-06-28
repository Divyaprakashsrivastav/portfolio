/**
 * Hook barrel — re-exports only.
 * Internal modules must NOT import from this file to avoid circular dependency races.
 */
export { useLenisInstance } from '@/context/LenisContext'
export { useMediaQuery } from './useMediaQuery'
export { useReducedMotion } from './useReducedMotion'
export { useNavbarScroll } from './useNavbarScroll'
export { useActiveSection } from './useActiveSection'
export { useScrollProgress } from './useScrollProgress'
export { useCountUp } from './useCountUp'
export { useTheme } from './useTheme'
export * from './cursor'
