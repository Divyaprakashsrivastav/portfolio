import { type ReactNode } from 'react'
import { useMagnetic } from '@/hooks/cursor/useMagnetic'
import { cn } from '@/utils'

interface MagneticWrapperProps {
  children: ReactNode
  className?: string
  strength?: number
  enabled?: boolean
}

/**
 * Thin magnetic wrapper — architecture for magnetic CTAs.
 * Applies subtle transform on mouse move; full polish deferred.
 */
export function MagneticWrapper({
  children,
  className,
  strength = 0.2,
  enabled = true,
}: MagneticWrapperProps) {
  const magnetic = useMagnetic<HTMLDivElement>({ strength })

  if (!enabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={magnetic.ref}
      className={cn('transition-transform duration-300 ease-out', className)}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
    >
      {children}
    </div>
  )
}
