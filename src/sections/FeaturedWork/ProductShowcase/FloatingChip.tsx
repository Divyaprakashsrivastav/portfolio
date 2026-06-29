import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface FloatingChipProps {
  label: string
  sublabel?: string
  className?: string
  delay?: number
}

export function FloatingChip({ label, sublabel, className, delay = 0 }: FloatingChipProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.5 + delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
      {...(reducedMotion
        ? {}
        : {
            transition: {
              y: { duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' },
            },
          })}
      className={cn(
        'absolute z-30 rounded-full border border-white/[0.1] bg-[rgba(14,14,17,0.88)] px-2.5 py-1.5 backdrop-blur-md sm:px-3 sm:py-2',
        'shadow-[0_8px_24px_rgba(0,0,0,0.35)]',
        className,
      )}
    >
      <p className="font-sans text-[9px] font-medium text-primary sm:text-[10px]">{label}</p>
      {sublabel && (
        <p className="font-mono text-[8px] text-accent sm:text-[9px]">{sublabel}</p>
      )}
    </motion.div>
  )
}
