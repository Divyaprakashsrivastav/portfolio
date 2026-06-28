import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const sectionVariants = cva('relative w-full overflow-x-clip', {
  variants: {
    spacing: {
      sm: 'py-12 md:py-section-sm',
      md: 'py-16 md:py-section-md',
      lg: 'py-20 md:py-section-lg',
      xl: 'py-16 sm:py-20 md:py-28 lg:py-section-xl',
    },
    fullHeight: {
      true: 'min-h-screen',
      false: '',
    },
  },
  defaultVariants: {
    spacing: 'lg',
    fullHeight: false,
  },
})

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, fullHeight, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ spacing, fullHeight }), className)}
      {...props}
    >
      {children}
    </section>
  ),
)

Section.displayName = 'Section'
export { sectionVariants }
