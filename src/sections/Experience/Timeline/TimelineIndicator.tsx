import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface TimelineIndicatorProps {
  activeIndex: number
  className?: string
}

export function TimelineIndicator({ activeIndex, className }: TimelineIndicatorProps) {
  const reducedMotion = useReducedMotion()
  const total = EXPERIENCES.length
  const progress = total > 1 ? activeIndex / (total - 1) : 1

  return (
    <nav aria-label="Experience progress" className={cn('relative hidden lg:block', className)}>
      <div className="sticky top-[38vh]">
        <div className="relative mx-auto h-[min(56vh,440px)] w-px">
          {/* Track */}
          <div className="absolute inset-0 bg-white/[0.08]" aria-hidden />

          {/* Growing progress line */}
          <motion.div
            className="absolute inset-0 origin-top bg-gradient-to-b from-accent via-accent/55 to-transparent"
            initial={false}
            animate={{ scaleY: reducedMotion ? 1 : Math.max(progress, 0.08) }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />

          {/* Nodes */}
          {EXPERIENCES.map((exp, i) => {
            const top = total > 1 ? `${(i / (total - 1)) * 100}%` : '50%'
            const isActive = i === activeIndex
            const isComplete = i < activeIndex

            return (
              <motion.span
                key={exp.id}
                className={cn(
                  'absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border',
                  isActive
                    ? 'border-accent bg-accent shadow-[0_0_18px_rgba(124,92,252,0.7)]'
                    : isComplete
                      ? 'border-accent/45 bg-accent/35'
                      : 'border-white/15 bg-[#0e0e11]',
                )}
                style={{ top }}
                animate={isActive && !reducedMotion ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 2.4, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
                aria-hidden
              />
            )
          })}
        </div>

        <ol className="sr-only">
          {EXPERIENCES.map((exp, i) => (
            <li key={exp.id} aria-current={i === activeIndex ? 'step' : undefined}>
              {exp.role} at {exp.company}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
