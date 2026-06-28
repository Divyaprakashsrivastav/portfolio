import { motion } from 'framer-motion'
import { ABOUT } from './constants'
import { aboutFadeUp, aboutStagger } from './animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AboutIntro() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="mx-auto w-full max-w-lg lg:max-w-none">
      <motion.p
        variants={aboutFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
      >
        {ABOUT.eyebrow}
      </motion.p>

      <motion.h2
        variants={aboutFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: reducedMotion ? 0 : 0.08 }}
        className="mt-4 font-display text-h1 font-bold leading-[1.08] tracking-[-0.03em] text-primary"
      >
        {ABOUT.title}
      </motion.h2>

      <motion.div
        variants={aboutStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 space-y-3 md:mt-10"
        role="list"
        aria-label="My story"
      >
        {ABOUT.story.map((line, i) => (
          <motion.p
            key={line}
            variants={aboutFadeUp}
            role="listitem"
            className={
              i === 1
                ? 'font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] text-primary'
                : 'font-sans text-[15px] leading-[1.75] text-secondary md:text-base'
            }
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}
