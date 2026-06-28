import { memo } from 'react'

export const HeroBackground = memo(function HeroBackground() {
  return <div className="pointer-events-none absolute inset-0 bg-background" aria-hidden />
})
