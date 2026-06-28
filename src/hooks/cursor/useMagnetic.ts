import { useCallback, useRef, type MouseEventHandler, type RefObject } from 'react'

interface MagneticOptions {
  strength?: number
}

interface MagneticResult<T extends HTMLElement> {
  ref: RefObject<T | null>
  onMouseMove: MouseEventHandler<T>
  onMouseLeave: MouseEventHandler<T>
}

/**
 * Returns a ref and mouse handlers for magnetic button behavior.
 * Apply transform in a future wrapper component — logic only here.
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(
  options: MagneticOptions = {},
): MagneticResult<T> {
  const { strength = 0.35 } = options
  const ref = useRef<T>(null)

  const handleMouseMove: MouseEventHandler<T> = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength],
  )

  const handleMouseLeave: MouseEventHandler<T> = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }, [])

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
