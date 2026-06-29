import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface PhoneFrameProps {
  children: ReactNode
  side?: 'left' | 'right'
  className?: string
}

export function PhoneFrame({ children, side = 'right', className }: PhoneFrameProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        'absolute bottom-[6%] z-20 w-[26%] min-w-[72px] max-w-[108px] sm:max-w-[120px]',
        side === 'right' ? '-right-1 sm:-right-3 md:-right-4' : '-left-1 sm:-left-3 md:-left-4',
        className,
      )}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.35, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotate: side === 'right' ? 8 : -8 }}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      {...(reducedMotion
        ? {}
        : {
            transition: {
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              default: { delay: 0.35, duration: 0.65 },
            },
          })}
      whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02 }}
    >
      <div className="rounded-[1.1rem] border border-white/[0.14] bg-[#16161a] p-1 shadow-[0_20px_48px_rgba(0,0,0,0.5)] sm:rounded-[1.25rem] sm:p-1.5">
        <div className="overflow-hidden rounded-[0.9rem] border border-white/[0.06] sm:rounded-[1rem]">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
