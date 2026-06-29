import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ExperienceEntry } from '../constants'
import { EXPERIENCE_ICONS } from '../constants'
import {
  experienceFadeUp,
  experienceSlideIn,
  experienceStagger,
} from '../animations'
import { AchievementList, CompanyLogo } from '../components'
import { cn } from '@/utils'

interface ExperienceItemProps {
  entry: ExperienceEntry
  index: number
  isActive: boolean
  isLast: boolean
  onActive: (index: number) => void
}

export function ExperienceItem({
  entry,
  index,
  isActive,
  isLast,
  onActive,
}: ExperienceItemProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.35, margin: '-10% 0px -10% 0px' })
  const Icon = EXPERIENCE_ICONS[entry.icon]

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <motion.article
      ref={ref}
      tabIndex={0}
      aria-labelledby={`experience-${entry.id}-title`}
      className={cn(
        'relative flex flex-col justify-center outline-none',
        'min-h-0 py-10 sm:py-12',
        'rounded-2xl border border-white/[0.06] bg-surface/40 px-5 sm:px-6',
        'lg:min-h-[92vh] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-24',
        'focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background',
        !isLast && 'mb-6 lg:mb-0 lg:pb-20',
      )}
      initial={false}
    >
      {/* Mobile timeline spine */}
      <div
        className="absolute bottom-0 left-[3px] top-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:hidden"
        aria-hidden
      />

      {/* Mobile progress dot */}
      <div className="mb-6 flex items-center gap-3 lg:hidden" aria-hidden>
        <span
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-[400ms]',
            isActive ? 'bg-accent' : 'bg-white/20',
          )}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
          Chapter {index + 1}
        </span>
      </div>

      <motion.div
        variants={experienceStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative min-w-0"
      >
        <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <motion.div variants={experienceSlideIn} className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
            <CompanyLogo
              initials={entry.logoInitials}
              company={entry.company}
              brand={entry.brand}
            />
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-accent"
              aria-hidden
            >
              <Icon className="h-4 w-4" />
            </span>
          </motion.div>

          <div className="min-w-0 overflow-hidden">
            <motion.p
              variants={experienceFadeUp}
              className="font-mono text-xs tracking-[0.15em] text-accent"
            >
              {entry.period}
            </motion.p>

            <motion.h3
              id={`experience-${entry.id}-title`}
              variants={experienceFadeUp}
              className="mt-3 font-display text-[clamp(1.75rem,8vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-primary"
            >
              {entry.company}
            </motion.h3>

            <motion.p
              variants={experienceFadeUp}
              className="mt-3 font-sans text-base font-medium text-primary/90 md:text-lg lg:text-xl"
            >
              {entry.role}
            </motion.p>

            <motion.p
              variants={experienceFadeUp}
              className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.8] text-secondary md:mt-6 md:text-base"
            >
              {entry.description}
            </motion.p>

            <motion.p
              variants={experienceFadeUp}
              className="mt-6 break-words font-sans text-sm text-secondary"
            >
              {entry.highlights.join(' · ')}
            </motion.p>

            <motion.p
              variants={experienceFadeUp}
              className="mt-3 break-words font-mono text-xs text-secondary/80"
            >
              {entry.technologies.join(' · ')}
            </motion.p>

            <AchievementList items={entry.achievements} />
          </div>
        </div>
      </motion.div>

      {!isLast && (
        <motion.div
          variants={experienceFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="absolute bottom-0 left-0 right-0 hidden lg:block"
          aria-hidden
        >
          <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        </motion.div>
      )}
    </motion.article>
  )
}
