import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HERO, HERO_DELAYS } from '../constants'
import { heroFadeUp, heroRotateText } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ROTATE_INTERVAL = 4500

export function HeroRotatingText() {
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO.roles.length)
    }, ROTATE_INTERVAL)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  const role = HERO.roles[index]

  return (
    <motion.div
      variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.subtitle)}
      initial="hidden"
      animate="visible"
      className="relative mt-6 h-7 overflow-hidden md:mt-7"
      aria-live="polite"
      aria-atomic="true"
    >
      {reducedMotion ? (
        <p className="font-sans text-base font-medium text-secondary md:text-lg">{role}</p>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={role}
            variants={heroRotateText}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 font-sans text-base font-medium text-secondary md:text-lg"
          >
            {role}
          </motion.p>
        </AnimatePresence>
      )}
    </motion.div>
  )
}
