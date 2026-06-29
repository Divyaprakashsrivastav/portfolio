import { motion } from 'framer-motion'
import { featuredChip, featuredFadeUp, featuredStagger } from '../animations'
import { getTechIcon, getTechInitial } from './techIcons'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface TechStackProps {
  technologies: readonly string[]
  className?: string
}

export function TechStack({ technologies, className }: TechStackProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div variants={featuredFadeUp} className={className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">Stack</p>
      <motion.ul
        variants={featuredStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 flex flex-wrap gap-2"
        aria-label="Technology stack"
      >
        {technologies.map((tech) => {
          const Icon = getTechIcon(tech)
          return (
            <motion.li
              key={tech}
              variants={featuredChip}
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -2,
                      boxShadow: '0 0 20px rgba(124, 92, 252, 0.15)',
                      borderColor: 'rgba(124, 92, 252, 0.35)',
                    }
              }
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border border-white/[0.08]',
                'bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm',
                'transition-colors duration-300',
              )}
            >
              {Icon ? (
                <Icon className="h-3.5 w-3.5 text-secondary" aria-hidden />
              ) : (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/[0.06] font-mono text-[8px] text-secondary">
                  {getTechInitial(tech)}
                </span>
              )}
              <span className="font-sans text-xs text-primary/90">{tech}</span>
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  )
}
