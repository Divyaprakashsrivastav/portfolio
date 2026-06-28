import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const containerVariants = cva('mx-auto w-full', {
  variants: {
    size: {
      narrow: 'max-w-[var(--container-narrow)] px-4 sm:px-6 md:px-8',
      default: 'max-w-[var(--container-default)] px-4 sm:px-6 md:px-8',
      wide: 'max-w-[var(--container-wide)] px-4 sm:px-6 md:px-8',
      full: 'max-w-full px-4 sm:px-6 md:px-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size }), className)} {...props} />
  ),
)

Container.displayName = 'Container'
export { containerVariants }
