import { motion } from 'framer-motion'
import type { ProjectMetric } from '../constants'
import { featuredFadeUp } from '../animations'
import { useCountUp } from '@/hooks/useCountUp'
import { cn } from '@/utils'

function MetricItem({ metric }: { metric: ProjectMetric }) {
  const hasCount = metric.value !== undefined
  const { ref, value } = useCountUp(metric.value ?? 0, { duration: 1.2, amount: 0.25 })

  return (
    <motion.div
      variants={featuredFadeUp}
      whileHover={{ y: -3 }}
      className={cn(
        'rounded-xl border border-white/[0.07] bg-[rgba(14,14,17,0.5)] px-4 py-3.5 backdrop-blur-md',
        'shadow-[0_8px_24px_rgba(0,0,0,0.22)]',
      )}
    >
      <div ref={hasCount ? ref : undefined}>
        <p className="font-display text-lg font-bold tracking-[-0.02em] text-primary md:text-xl">
          {hasCount ? (
            <>
              <span aria-hidden>
                {value.toLocaleString()}
                {metric.suffix}
              </span>
              <span className="sr-only">
                {metric.value}
                {metric.suffix} {metric.label}
              </span>
            </>
          ) : (
            metric.display
          )}
        </p>
        <p className="mt-0.5 font-sans text-[10px] font-medium uppercase tracking-wide text-secondary md:text-xs">
          {metric.label}
        </p>
      </div>
    </motion.div>
  )
}

interface MetricGridProps {
  metrics: readonly ProjectMetric[]
  className?: string
}

export function MetricGrid({ metrics, className }: MetricGridProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn('grid grid-cols-2 gap-3', className)}
      role="list"
      aria-label="Project metrics"
    >
      {metrics.map((metric) => (
        <div key={metric.label} role="listitem">
          <MetricItem metric={metric} />
        </div>
      ))}
    </motion.div>
  )
}
