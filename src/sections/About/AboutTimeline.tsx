import { motion } from 'framer-motion'
import { ABOUT_TIMELINE } from './constants'
import { aboutLineGrow, aboutStagger, aboutTimelineItem } from './animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AboutTimeline() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={aboutStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative mt-14 md:mt-16"
      aria-label="Career timeline"
    >
      <motion.div
        variants={aboutLineGrow}
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
        aria-hidden
      />

      <ol className="space-y-10 md:space-y-12">
        {ABOUT_TIMELINE.map((item, index) => (
          <motion.li
            key={item.year}
            variants={aboutTimelineItem}
            className="relative pl-8"
          >
            <span
              className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center"
              aria-hidden
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(124,92,252,0.5)]"
                initial={reducedMotion ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300, damping: 22 }}
              />
            </span>

            <p className="font-mono text-xs tracking-[0.15em] text-accent">{item.year}</p>
            <h3 className="mt-1.5 font-display text-lg font-semibold tracking-[-0.02em] text-primary md:text-xl">
              {item.headline}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-secondary md:text-[15px]">
              {item.detail}
            </p>

            {index < ABOUT_TIMELINE.length - 1 && (
              <span
                className="mt-6 block text-center text-secondary/40 md:hidden"
                aria-hidden
              >
                ↓
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  )
}
