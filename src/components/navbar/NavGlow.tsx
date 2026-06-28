import { useMousePosition } from '@/hooks/cursor/useMousePosition'

interface NavGlowProps {
  className?: string
}

/**
 * Subtle mouse-following glow behind the navbar.
 * Only visible in the top viewport region.
 */
export function NavGlow({ className }: NavGlowProps) {
  const { x, y } = useMousePosition()

  if (y > 240) return null

  const opacity = Math.max(0, 1 - y / 240)

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-32 overflow-hidden${className ? ` ${className}` : ''}`}
      style={{ opacity }}
    >
      <div
        className="absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[80px] transition-transform duration-500 ease-out will-change-transform"
        style={{ left: x, top: Math.min(y, 80) }}
      />
      <div
        className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/10 blur-[60px] transition-transform duration-700 ease-out will-change-transform"
        style={{ left: x + 40, top: Math.min(y + 20, 100) }}
      />
    </div>
  )
}
