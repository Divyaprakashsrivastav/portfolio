import { useScrollProgress } from '@/hooks/useScrollProgress'

interface ScrollProgressBarProps {
  className?: string
}

/**
 * Thin scroll progress indicator at the top of the viewport.
 * Prepared component — wire up when sections are added.
 */
export function ScrollProgressBar({ className }: ScrollProgressBarProps) {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-border${className ? ` ${className}` : ''}`}
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-accent to-accent-blue transition-transform duration-150 ease-out will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
