import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { hamburgerVariants } from '@/animations/navbar'

interface MenuButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className={cn(
        'relative flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full lg:hidden',
        'border border-border bg-glass text-primary',
        'transition-colors duration-200 hover:border-primary/20',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
    >
      <span className="flex h-3.5 w-5 flex-col justify-between">
        <motion.span
          className="block h-0.5 w-full origin-center rounded-full bg-current"
          animate={isOpen ? 'open' : 'closed'}
          variants={hamburgerVariants.top}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-current"
          animate={isOpen ? 'open' : 'closed'}
          variants={hamburgerVariants.middle}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="block h-0.5 w-full origin-center rounded-full bg-current"
          animate={isOpen ? 'open' : 'closed'}
          variants={hamburgerVariants.bottom}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
    </button>
  )
}
