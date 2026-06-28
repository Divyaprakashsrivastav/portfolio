import { useNavbarScroll } from './useNavbarScroll'

/**
 * Returns normalized scroll progress (0–1) for the progress bar.
 */
export function useScrollProgress() {
  const { progress } = useNavbarScroll()
  return progress
}
