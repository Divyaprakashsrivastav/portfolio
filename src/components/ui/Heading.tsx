import { createElement, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const headingVariants = cva('font-display text-balance', {
  variants: {
    variant: {
      display: 'text-display font-bold tracking-tighter leading-[1.05]',
      h1: 'text-h1 font-bold tracking-tight leading-[1.1]',
      h2: 'text-h2 font-semibold tracking-tight leading-[1.15]',
      h3: 'text-h3 font-semibold tracking-snug leading-[1.2]',
      bodyLg: 'font-sans text-body-lg font-normal tracking-normal text-secondary leading-relaxed',
      body: 'font-sans text-body font-normal tracking-normal text-secondary leading-relaxed',
      caption: 'font-mono text-caption font-medium tracking-wide uppercase text-secondary',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
})

const defaultTags = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyLg: 'p',
  body: 'p',
  caption: 'span',
} as const

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
export type HeadingVariant = NonNullable<VariantProps<typeof headingVariants>['variant']>

export interface HeadingProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag
  gradient?: boolean
}

export function Heading({
  as,
  variant = 'h2',
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const tag = as ?? defaultTags[variant ?? 'h2']

  return createElement(
    tag,
    {
      className: cn(
        headingVariants({ variant }),
        gradient && 'text-gradient',
        className,
      ),
      ...props,
    },
    children,
  )
}

export { headingVariants }
