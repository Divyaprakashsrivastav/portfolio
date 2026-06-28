import { motion } from 'framer-motion'
import { HERO, HERO_DELAYS } from '../constants'
import { heroFadeUp } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { HeroHeading } from './HeroHeading'
import { HeroRotatingText } from './HeroRotatingText'
import { HeroDescription } from './HeroDescription'

export function HeroContent() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="max-w-xl lg:max-w-none">
      <motion.p
        variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.greeting)}
        initial="hidden"
        animate="visible"
        className="font-sans text-[15px] font-normal tracking-[0.01em] text-secondary"
      >
        {HERO.greeting}
      </motion.p>

      <div className="mt-5 md:mt-6">
        <HeroHeading />
      </div>

      <HeroRotatingText />
      <HeroDescription />
    </div>
  )
}
