import { motion, useTransform } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useScrollY } from '@/hooks/useScrollY'
import { heroFadeUp } from '../animations'
import { HERO_DELAYS } from '../constants'

export function ScrollIndicator() {
  const reducedMotion = useReducedMotion()
  const scrollY = useScrollY()
  const opacity = useTransform(scrollY, [0, 120], [1, 0])
  const y = useTransform(scrollY, [0, 120], [0, 12])

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight * 0.55, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <motion.div
      style={{ opacity, y }}
      variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.scroll)}
      initial="hidden"
      animate="visible"
      className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8"
    >
      <motion.button
        type="button"
        onClick={handleScroll}
        aria-label="Scroll to explore"
        className="pointer-events-auto flex flex-col items-center gap-2 rounded-full px-3 py-2 text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          <HiChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </motion.div>
  )
}
