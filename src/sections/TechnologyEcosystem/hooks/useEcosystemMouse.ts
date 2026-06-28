import { useCallback, useEffect, useState, type RefObject } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useEcosystemMouse(containerRef: RefObject<HTMLElement | null>) {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const normalizedX = (x / rect.width - 0.5) * 2
      const normalizedY = (y / rect.height - 0.5) * 2

      setMouse({ x, y, normalizedX, normalizedY })
    },
    [containerRef],
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    el.addEventListener('mousemove', handleMove, { passive: true })
    return () => el.removeEventListener('mousemove', handleMove)
  }, [containerRef, handleMove])

  return mouse
}
