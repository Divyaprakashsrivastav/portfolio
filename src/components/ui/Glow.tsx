import { type HTMLAttributes } from 'react'
import { cn } from '@/utils'

const colorMap = {
  accent: 'bg-accent/30',
  blue: 'bg-accent-blue/25',
  white: 'bg-primary/15',
  purple: 'bg-accent/20',
} as const

const sizeMap = {
  sm: 'h-32 w-32 blur-3xl',
  md: 'h-64 w-64 blur-[80px]',
  lg: 'h-96 w-96 blur-[100px]',
  xl: 'h-[32rem] w-[32rem] blur-[120px]',
} as const

export type GlowColor = keyof typeof colorMap
export type GlowSize = keyof typeof sizeMap

export interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  color?: GlowColor
  size?: GlowSize
  animated?: boolean
}

export function Glow({
  color = 'accent',
  size = 'md',
  animated = true,
  className,
  ...props
}: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full',
        colorMap[color],
        sizeMap[size],
        animated && 'animate-glow',
        className,
      )}
      {...props}
    />
  )
}
