import { motion } from 'framer-motion'
import { MOTION_SPRING } from '@/animations/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface CompanyLogoProps {
  initials: string
  company: string
  className?: string
}

/** Placeholder logo — swap `src` when brand assets are available */
export function CompanyLogo({ initials, company, className }: CompanyLogoProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={
        reducedMotion
          ? undefined
          : {
              rotate: 6,
              boxShadow: '0 0 28px rgba(124,92,252,0.18)',
            }
      }
      transition={MOTION_SPRING.smooth}
      className={cn(
        'flex h-16 w-16 shrink-0 items-center justify-center rounded-full',
        'border border-white/[0.1] bg-[rgba(14,14,17,0.7)] backdrop-blur-xl',
        'shadow-[0_12px_32px_rgba(0,0,0,0.35)]',
        className,
      )}
      aria-hidden
    >
      <span className="font-display text-xl font-bold tracking-tight text-primary">{initials}</span>
      <span className="sr-only">{company} logo</span>
    </motion.div>
  )
}
