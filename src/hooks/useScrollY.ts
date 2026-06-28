import { useEffect } from 'react'
import { useMotionValue, type MotionValue } from 'framer-motion'
import { useLenisInstance } from '@/context/LenisContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Scroll position as a motion value — synced with Lenis when available */
export function useScrollY(): MotionValue<number> {
  const lenis = useLenisInstance()
  const reducedMotion = useReducedMotion()
  const scrollY = useMotionValue(0)

  useEffect(() => {
    if (lenis) {
      const onScroll = ({ scroll }: { scroll: number }) => scrollY.set(scroll)
      scrollY.set(lenis.scroll)
      return lenis.on('scroll', onScroll)
    }

    const onScroll = () => scrollY.set(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lenis, scrollY])

  useEffect(() => {
    if (reducedMotion) scrollY.set(0)
  }, [reducedMotion, scrollY])

  return scrollY
}
