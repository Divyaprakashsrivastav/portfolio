import { motion } from 'framer-motion'
import { CURRENTLY_BUILDING } from './constants'
import { buildingFadeUp } from './animations'

export function BuildingIntro() {
  return (
    <div className="max-w-md lg:sticky lg:top-32 lg:pt-4">
      <motion.p
        variants={buildingFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary"
      >
        Right now
      </motion.p>

      <motion.h2
        variants={buildingFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.05 }}
        className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-primary"
      >
        {CURRENTLY_BUILDING.title}
      </motion.h2>

      <motion.p
        variants={buildingFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1 }}
        className="mt-8 font-sans text-[15px] leading-[1.8] text-secondary md:text-base md:leading-[1.85]"
      >
        {CURRENTLY_BUILDING.description}
      </motion.p>
    </div>
  )
}
