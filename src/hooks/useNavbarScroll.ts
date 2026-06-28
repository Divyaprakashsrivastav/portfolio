import { useEffect, useState } from 'react'
import { useLenisInstance } from '@/context/LenisContext'

interface NavbarScrollState {
  scrollY: number
  isScrolled: boolean
  progress: number
}

/**
 * Tracks scroll position for navbar morphing.
 * Syncs with Lenis when available for buttery-smooth updates.
 */
export function useNavbarScroll(threshold = 24): NavbarScrollState {
  const lenis = useLenisInstance()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (lenis) {
      const onScroll = ({ scroll }: { scroll: number }) => setScrollY(scroll)
      setScrollY(lenis.scroll)
      const unsubscribe = lenis.on('scroll', onScroll)
      return unsubscribe
    }

    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lenis])

  const docHeight = typeof document !== 'undefined'
    ? document.documentElement.scrollHeight - window.innerHeight
    : 1

  const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0

  return {
    scrollY,
    isScrolled: scrollY > threshold,
    progress,
  }
}
