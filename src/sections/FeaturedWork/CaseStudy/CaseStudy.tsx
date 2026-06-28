import { motion } from 'framer-motion'
import type { CaseStudyBlocks } from '../constants'
import { featuredReveal, featuredStagger } from '../animations'
import { cn } from '@/utils'

const BLOCKS: { key: keyof CaseStudyBlocks; label: string }[] = [
  { key: 'problem', label: 'The Problem' },
  { key: 'approach', label: 'The Approach' },
  { key: 'solution', label: 'The Solution' },
  { key: 'result', label: 'The Result' },
]

interface CaseStudyProps {
  content: CaseStudyBlocks
  className?: string
}

export function CaseStudy({ content, className }: CaseStudyProps) {
  return (
    <motion.div
      variants={featuredStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={cn('grid gap-5 sm:grid-cols-2', className)}
      aria-label="Case study"
    >
      {BLOCKS.map(({ key, label }) => (
        <motion.div key={key} variants={featuredReveal}>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{label}</h4>
          <p className="mt-2 font-sans text-sm leading-relaxed text-secondary md:text-[15px]">
            {content[key]}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
