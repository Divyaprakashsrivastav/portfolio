import { type HTMLAttributes, forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const glassCardVariants = cva('relative overflow-hidden rounded-2xl transition-shadow duration-500', {
  variants: {
    variant: {
      default: 'glass',
      strong: 'glass-strong',
      subtle: 'bg-surface border border-border',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
})

export interface GlassCardProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    Pick<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof glassCardVariants> {
  hover?: boolean
  glow?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = true, glow = false, variant, padding, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      className={cn(
        glassCardVariants({ variant, padding }),
        hover && 'hover:shadow-lg',
        glow && 'glow-accent',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  ),
)

GlassCard.displayName = 'GlassCard'
export { glassCardVariants }
