import { motion } from 'framer-motion'
import { FEATURED_WORK } from './constants'
import { featuredFadeUp, featuredStagger } from './animations'

export function FeaturedIntro() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <motion.h2
        variants={featuredFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="font-display text-h1 font-bold leading-[1.06] tracking-[-0.03em] text-primary"
      >
        {FEATURED_WORK.title}
      </motion.h2>

      <motion.div
        variants={featuredStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-6 space-y-1"
      >
        {FEATURED_WORK.subtitle.map((line) => (
          <motion.p
            key={line}
            variants={featuredFadeUp}
            className="font-sans text-[15px] text-secondary md:text-base"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </header>
  )
}
