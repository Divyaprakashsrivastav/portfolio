import { useEffect, useRef, useState } from 'react'

export interface TrailPoint {
  x: number
  y: number
  id: number
}

interface CursorTrailOptions {
  length?: number
  throttle?: number
}

/**
 * Collects throttled mouse positions for a future cursor trail effect.
 * Returns points array — rendering deferred to a future component.
 */
export function useCursorTrail(options: CursorTrailOptions = {}) {
  const { length = 12, throttle = 32 } = options
  const [points, setPoints] = useState<TrailPoint[]>([])
  const idRef = useRef(0)
  const lastRef = useRef(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastRef.current < throttle) return
      lastRef.current = now

      setPoints((prev) => {
        const next = [{ x: e.clientX, y: e.clientY, id: idRef.current++ }, ...prev]
        return next.slice(0, length)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [length, throttle])

  return points
}
