import { useEffect, useState } from 'react'

export interface MousePosition {
  x: number
  y: number
}

/**
 * Tracks normalized mouse position.
 * Foundation for custom cursor, spotlight, and magnetic effects.
 */
export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return position
}
