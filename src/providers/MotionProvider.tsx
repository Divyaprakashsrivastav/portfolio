import { type ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MotionProviderProps {
  children: ReactNode
}

/** Respects prefers-reduced-motion across all Framer Motion animations. */
export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>
      {children}
    </MotionConfig>
  )
}
