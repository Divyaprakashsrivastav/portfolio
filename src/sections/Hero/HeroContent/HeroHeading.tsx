import { motion } from 'framer-motion'
import { HERO, HERO_DELAYS } from '../constants'
import { heroTransition, heroWordChild, heroWordContainer } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function WordReveal({
  text,
  delay,
  className,
}: {
  text: string
  delay: number
  className?: string
}) {
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (reducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      variants={heroWordContainer}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={heroWordChild} className="inline-block">
          {word}
          {i < words.length - 1 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function HeroHeading() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="space-y-0">
      <h1 className="sr-only">
        {HERO.name.first} {HERO.name.last}
      </h1>

      <p className="font-display text-display font-bold leading-[1.08] tracking-[-0.03em] text-primary">
        <WordReveal
          text={HERO.name.first}
          delay={reducedMotion ? 0 : HERO_DELAYS.heading}
        />
      </p>

      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={heroTransition(HERO_DELAYS.heading + 0.12)}
        className="font-display text-display font-bold leading-[1.08] tracking-[-0.03em] text-primary"
      >
        <WordReveal
          text={HERO.name.last}
          delay={reducedMotion ? 0 : HERO_DELAYS.heading + 0.08}
        />
      </motion.p>
    </div>
  )
}
