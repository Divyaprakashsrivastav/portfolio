import { type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare, HiDocumentText } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { featuredActionsStagger, featuredSlide } from '../animations'
import { useLenisInstance } from '@/context/LenisContext'
import { scrollToSection } from '@/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface ProjectActionsProps {
  projectId: string
  title: string
  github?: string
  demo?: string
  className?: string
}

const baseBtn = cn(
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-medium',
  'transition-all duration-300',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
  'active:scale-[0.98]',
)

export function ProjectActions({ projectId, title, github, demo, className }: ProjectActionsProps) {
  const reducedMotion = useReducedMotion()
  const lenis = useLenisInstance()
  const hasDemo = Boolean(demo)

  const handleCaseStudy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const el = document.getElementById(`featured-${projectId}-case-study`)
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      return
    }
    scrollToSection('projects', lenis, { offset: -96, duration: 1 })
  }

  const hoverGlow = reducedMotion
    ? undefined
    : {
        y: -2,
        boxShadow: '0 8px 28px rgba(124, 92, 252, 0.18)',
      }

  return (
    <motion.div
      variants={featuredActionsStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3', className)}
    >
      {hasDemo ? (
        <motion.a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          variants={featuredSlide}
          whileHover={hoverGlow}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`View live demo of ${title}`}
          title={`View live demo of ${title}`}
          className={cn(baseBtn, 'bg-primary text-background hover:opacity-95')}
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
          className={cn(baseBtn, 'cursor-not-allowed bg-primary/40 text-background/70')}
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
          whileHover={hoverGlow}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`${title} on GitHub`}
          title={`${title} on GitHub`}
          className={cn(
            baseBtn,
            'border border-white/[0.12] text-primary hover:border-white/[0.2] hover:bg-white/[0.03]',
          )}
        >
          <FaGithub className="h-4 w-4 opacity-80" aria-hidden />
          GitHub
        </motion.a>
      ) : (
        <span
          role="button"
          aria-disabled="true"
          aria-label={`GitHub for ${title} — Coming Soon`}
          title="Coming Soon"
          tabIndex={-1}
          className={cn(
            baseBtn,
            'cursor-not-allowed border border-white/[0.06] text-secondary/50',
          )}
        >
          <FaGithub className="h-4 w-4 opacity-40" aria-hidden />
          GitHub
        </span>
      )}

      <motion.button
        type="button"
        onClick={handleCaseStudy}
        variants={featuredSlide}
        whileHover={hoverGlow}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        aria-label={`View case study for ${title}`}
        title="View case study"
        className={cn(
          baseBtn,
          'border border-white/[0.12] text-primary hover:border-accent/30 hover:bg-accent/[0.06]',
        )}
      >
        <HiDocumentText className="h-4 w-4 opacity-80" aria-hidden />
        Case Study
      </motion.button>
    </motion.div>
  )
}
