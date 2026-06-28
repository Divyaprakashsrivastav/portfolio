import { motion } from 'framer-motion'
import { EXPERIENCE } from './constants'
import { experienceFadeUp } from './animations'

export function ExperienceIntro() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <motion.p
        variants={experienceFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
      >
        {EXPERIENCE.eyebrow}
      </motion.p>

      <motion.h2
        variants={experienceFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.06 }}
        className="mt-4 font-display text-h1 font-bold leading-[1.08] tracking-[-0.03em] text-primary"
      >
        {EXPERIENCE.title}
      </motion.h2>

      <motion.p
        variants={experienceFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.12 }}
        className="mx-auto mt-6 max-w-xl font-sans text-[15px] leading-[1.75] text-secondary md:text-base"
      >
        {EXPERIENCE.intro}
      </motion.p>
    </header>
  )
}
