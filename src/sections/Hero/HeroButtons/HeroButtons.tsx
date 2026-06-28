import { type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight, HiArrowDownTray } from 'react-icons/hi2'
import { useLenisInstance } from '@/context/LenisContext'
import { scrollToSection } from '@/utils'
import { NAVBAR_OFFSET, RESUME_DOWNLOAD_FILENAME, RESUME_PATH } from '@/constants'
import { HERO_DELAYS } from '../constants'
import { heroSlideUp } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

const buttonClass = cn(
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-8',
  'text-[15px] font-semibold transition-opacity',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
  'active:scale-[0.98] active:opacity-90',
  'sm:w-auto',
)

export function HeroButtons() {
  const reducedMotion = useReducedMotion()
  const lenis = useLenisInstance()

  const handleProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection('projects', lenis, { offset: NAVBAR_OFFSET, duration: 1.2 })
  }

  return (
    <motion.div
      variants={heroSlideUp(reducedMotion ? 0 : HERO_DELAYS.buttons)}
      initial="hidden"
      animate="visible"
      className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-12 lg:max-w-none"
    >
      <motion.a
        href="#projects"
        onClick={handleProjects}
        whileHover={reducedMotion ? undefined : { opacity: 0.92 }}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        className={cn(buttonClass, 'bg-primary text-background')}
      >
        View Projects
        <HiArrowUpRight className="h-4 w-4 opacity-80" aria-hidden />
      </motion.a>

      <motion.a
        href={RESUME_PATH}
        download={RESUME_DOWNLOAD_FILENAME}
        aria-label="Download resume (PDF)"
        whileHover={reducedMotion ? undefined : { opacity: 0.9 }}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        className={cn(
          buttonClass,
          'border border-white/[0.12] font-medium text-primary',
        )}
      >
        Download Resume
        <HiArrowDownTray className="h-4 w-4 opacity-70" aria-hidden />
      </motion.a>
    </motion.div>
  )
}
