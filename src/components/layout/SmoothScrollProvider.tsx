import { useEffect, useRef, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from '@/config/gsap'
import { LenisContext } from '@/context/LenisContext'

interface SmoothScrollProviderProps {
  children: ReactNode
}

/**
 * Premium smooth scroll via Lenis.
 * Tuned for cinematic feel — not overly fast.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const rafId = useRef<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let instance: Lenis

    try {
      instance = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.2,
      })
    } catch (error) {
      console.warn('[SmoothScrollProvider] Lenis failed to initialize — falling back to native scroll.', error)
      return
    }

    instance.on('scroll', () => ScrollTrigger.update())
    setLenis(instance)

    const raf = (time: number) => {
      instance.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId.current)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
