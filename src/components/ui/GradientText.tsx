import { type HTMLAttributes } from 'react'
import { cn } from '@/utils'

const gradients = {
  default: 'text-gradient',
  accent: 'text-gradient-accent',
  white: 'text-gradient',
} as const

export type GradientVariant = keyof typeof gradients

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3'
  variant?: GradientVariant
}

export function GradientText({
  as: Tag = 'span',
  variant = 'accent',
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <Tag className={cn(gradients[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
