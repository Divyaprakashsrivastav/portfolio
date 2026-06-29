import { motion } from 'framer-motion'
import { ZURAA_BRAND } from '@/constants/brand'
import { ZuraaLogo } from '@/components/brand'
import { MOTION_SPRING } from '@/animations/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface CompanyLogoProps {
  initials: string
  company: string
  brand?: 'zuraa'
  className?: string
}

export function CompanyLogo({ initials, company, brand, className }: CompanyLogoProps) {
  const reducedMotion = useReducedMotion()

  if (brand === 'zuraa') {
    return (
      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : {
                scale: 1.03,
                boxShadow: '0 0 28px rgba(124, 92, 252, 0.18)',
              }
        }
        transition={MOTION_SPRING.smooth}
        className={cn(
          'flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full',
          'border border-white/[0.1] bg-[rgba(14,14,17,0.7)] p-2 backdrop-blur-xl',
          'shadow-[0_12px_32px_rgba(0,0,0,0.35)]',
          className,
        )}
        aria-label={ZURAA_BRAND.alt}
      >
        <ZuraaLogo size="sm" imgClassName="max-h-full max-w-full" />
      </motion.div>
    )
  }

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
