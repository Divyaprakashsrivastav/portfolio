import { motion } from 'framer-motion'
import { HERO, HERO_DELAYS } from '../constants'
import { heroFadeUp } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroDescription() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.p
      variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.description)}
      initial="hidden"
      animate="visible"
      className="mt-8 max-w-md text-[15px] leading-[1.75] text-secondary md:mt-10 md:text-base md:leading-[1.8]"
    >
      {HERO.description}
    </motion.p>
  )
}
