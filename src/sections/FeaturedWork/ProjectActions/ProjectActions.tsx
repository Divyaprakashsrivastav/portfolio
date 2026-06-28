import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { featuredSlide, featuredStagger } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface ProjectActionsProps {
  title: string
  github?: string
  demo?: string
  className?: string
}

const actionClass = cn(
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-medium',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
  'active:scale-[0.98] active:opacity-90',
  'sm:w-auto',
)

export function ProjectActions({ title, github, demo, className }: ProjectActionsProps) {
  const reducedMotion = useReducedMotion()
  const hasDemo = Boolean(demo)

  return (
    <motion.div
      variants={featuredStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('flex flex-col gap-3 sm:flex-row sm:flex-wrap', className)}
    >
      {hasDemo ? (
        <motion.a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          variants={featuredSlide}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`View live demo of ${title}`}
          title={`View live demo of ${title}`}
          className={cn(actionClass, 'bg-primary text-background')}
        >
          View Live
          <HiArrowTopRightOnSquare className="h-4 w-4" aria-hidden />
        </motion.a>
      ) : (
        <span
          role="button"
          aria-disabled="true"
          aria-label={`Live demo for ${title} — Coming Soon`}
          title="Coming Soon"
          tabIndex={-1}
          className={cn(
            actionClass,
            'cursor-not-allowed bg-primary/40 text-background/70',
          )}
        >
          View Live
          <HiArrowTopRightOnSquare className="h-4 w-4 opacity-60" aria-hidden />
        </span>
      )}

      {github ? (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          variants={featuredSlide}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`${title} on GitHub`}
          title={`${title} on GitHub`}
          className={cn(actionClass, 'border border-white/[0.12] text-primary')}
        >
          <FaGithub className="h-4 w-4 opacity-80" aria-hidden />
          GitHub
        </motion.a>
      ) : null}
    </motion.div>
  )
}
