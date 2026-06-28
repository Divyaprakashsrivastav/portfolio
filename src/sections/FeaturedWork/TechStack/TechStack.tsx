import { motion } from 'framer-motion'
import { featuredFadeUp } from '../animations'

interface TechStackProps {
  technologies: readonly string[]
  className?: string
}

export function TechStack({ technologies, className }: TechStackProps) {
  return (
    <motion.div variants={featuredFadeUp} className={className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">Stack</p>
      <p className="mt-2 font-sans text-sm text-secondary">{technologies.join(' · ')}</p>
    </motion.div>
  )
}
