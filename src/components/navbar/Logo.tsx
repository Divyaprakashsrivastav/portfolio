import { motion } from 'framer-motion'
import { PROFILE } from '@/constants'
import { cn } from '@/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <motion.a
      href="#home"
      aria-label={`${PROFILE.fullName} — Home`}
      title={`${PROFILE.fullName} — Home`}
      className={cn('group relative flex shrink-0 items-center', className)}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className={cn(
          'relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl',
          'border border-border bg-surface/80 font-display text-sm font-bold tracking-tight text-primary',
          'transition-shadow duration-300',
          'group-hover:shadow-glow-accent group-hover:border-accent/30',
        )}
      >
        <span className="relative z-10">DP</span>
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-blue/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </span>
    </motion.a>
  )
}
