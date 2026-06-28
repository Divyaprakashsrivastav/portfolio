import { useEffect, useRef, useState, type RefObject } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface UseCountUpOptions {
  duration?: number
  amount?: number
}

/** Animates a number once when the element enters the viewport */
export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { duration = 1.2, amount = 0.35 } = options
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount })
  const reducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    if (reducedMotion) {
      setValue(target)
      return
    }

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, duration, reducedMotion])

  return { ref: ref as RefObject<HTMLDivElement>, value }
}
