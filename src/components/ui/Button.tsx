import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2',
    'rounded-full font-medium tracking-tight transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-background hover:bg-primary/90 shadow-glow-white',
        secondary: 'bg-transparent text-primary border border-border hover:border-primary/30 hover:bg-glass',
        ghost: 'bg-transparent text-secondary hover:text-primary hover:bg-glass',
        accent: 'bg-accent text-primary hover:brightness-110 glow-accent',
        outline: 'bg-transparent text-primary border border-accent/40 hover:border-accent hover:glow-accent',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    Pick<ComponentPropsWithoutRef<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
    </motion.button>
  ),
)

Button.displayName = 'Button'
export { buttonVariants }
