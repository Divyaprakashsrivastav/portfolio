import { motion } from 'framer-motion'
import { experienceReveal } from '../animations'
import { cn } from '@/utils'

interface AchievementListProps {
  items: readonly string[]
  className?: string
}

export function AchievementList({ items, className }: AchievementListProps) {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.06, delayChildren: 0.15 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn('mt-10 space-y-3', className)}
      aria-label="Key achievements"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={experienceReveal}
          className="font-sans text-sm leading-relaxed text-secondary md:text-[15px]"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
