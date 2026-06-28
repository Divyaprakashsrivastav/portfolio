import { motion } from 'framer-motion'
import type { EcosystemNode } from '../constants'
import { panelVariants, techChipVariants } from '../animations'
import { cn } from '@/utils'

interface NodeDetailPanelProps {
  node: EcosystemNode | null
  onClose: () => void
}

export function NodeDetailPanel({ node, onClose }: NodeDetailPanelProps) {
  if (!node) return null

  return (
    <motion.div
      id="ecosystem-detail-panel"
      role="region"
      aria-label={`${node.label} ecosystem details`}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative mx-auto mt-8 w-full max-w-2xl px-2 sm:mt-8 sm:px-0"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-surface/95 p-6 backdrop-blur-xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Node</p>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.03em] text-primary md:text-3xl">
              {node.label}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            title="Close"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-[0.96]"
          >
            ×
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {node.technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              custom={i}
              variants={techChipVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                'rounded-xl border border-white/[0.06] bg-background/60 p-4',
                'transition-colors duration-300 hover:border-white/[0.12]',
              )}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display text-base font-semibold text-primary">{tech.name}</span>
                {tech.since && (
                  <span className="font-mono text-[10px] text-secondary/70">{tech.since}+</span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {tech.projects.map((project) => (
                  <span
                    key={project}
                    className="rounded-full border border-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-secondary"
                  >
                    {project}
                  </span>
                ))}
              </div>

              {tech.related && tech.related.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-secondary/60">
                    →
                  </span>
                  {tech.related.map((rel) => (
                    <span
                      key={rel}
                      className="font-sans text-[11px] text-accent/80"
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
