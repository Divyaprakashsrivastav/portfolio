import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from 'react-icons/hi2'
import type { ProjectHighlights } from '../constants'
import { featuredInfoBlock, featuredStagger } from '../animations'
import { cn } from '@/utils'

const BLOCKS: {
  key: keyof ProjectHighlights
  title: string
  icon: IconType
}[] = [
  { key: 'problem', title: 'Problem', icon: HiOutlineExclamationCircle },
  { key: 'solution', title: 'Solution', icon: HiOutlineBolt },
  { key: 'impact', title: 'Outcome', icon: HiOutlineCheckCircle },
]

interface InfoBlocksProps {
  highlights: ProjectHighlights
  projectId: string
  className?: string
}

export function InfoBlocks({ highlights, projectId, className }: InfoBlocksProps) {
  return (
    <motion.div
      id={`featured-${projectId}-case-study`}
      variants={featuredStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={cn('mt-12 space-y-0', className)}
      aria-label="Case study highlights"
    >
      {BLOCKS.map(({ key, title, icon: Icon }, index) => (
        <motion.div key={key} variants={featuredInfoBlock}>
          <div className="flex gap-4 py-5 sm:gap-5 sm:py-6">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent"
              aria-hidden
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
                {title}
              </h4>
              <p className="mt-2 font-sans text-sm leading-relaxed text-primary/90 md:text-[15px]">
                {highlights[key]}
              </p>
            </div>
          </div>
          {index < BLOCKS.length - 1 && (
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
