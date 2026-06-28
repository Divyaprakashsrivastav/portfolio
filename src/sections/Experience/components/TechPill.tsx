import { motion } from 'framer-motion'
import { experienceChip } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface TechPillProps {
  label: string
  className?: string
}

export function TechPill({ label, className }: TechPillProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.li
      variants={experienceChip}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -2, borderColor: 'rgba(124,92,252,0.35)', scale: 1.02 }
      }
      className={cn(
        'inline-flex rounded-full border border-white/[0.08] bg-[rgba(14,14,17,0.55)]',
        'px-3.5 py-1.5 font-sans text-xs font-medium text-secondary backdrop-blur-md',
        'transition-colors duration-[250ms] hover:text-primary',
        className,
      )}
    >
      {label}
    </motion.li>
  )
}
