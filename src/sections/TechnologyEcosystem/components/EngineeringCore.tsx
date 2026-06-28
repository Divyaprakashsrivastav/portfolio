import { motion } from 'framer-motion'
import { ECOSYSTEM } from '../constants'
import { corePulse } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface EngineeringCoreProps {
  size: number
  center: { x: number; y: number }
  parallaxX: number
  parallaxY: number
  isActive: boolean
}

export function EngineeringCore({
  size,
  center,
  parallaxX,
  parallaxY,
  isActive,
}: EngineeringCoreProps) {
  const reducedMotion = useReducedMotion()
  const coreSize = size * 0.14

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-[2]"
      style={{
        left: center.x - coreSize / 2,
        top: center.y - coreSize / 2,
        width: coreSize,
        height: coreSize,
        x: reducedMotion ? 0 : parallaxX * 4,
        y: reducedMotion ? 0 : parallaxY * 4,
      }}
    >
      <motion.div
        variants={corePulse}
        animate={reducedMotion ? 'idle' : isActive ? 'active' : 'idle'}
        className="relative flex h-full w-full items-center justify-center"
      >
        <div
          className="absolute inset-0 rounded-full bg-accent/[0.06] blur-xl"
          style={{ transform: 'scale(1.8)' }}
        />
        <div className="absolute inset-[12%] rounded-full border border-accent/20 bg-surface/80 backdrop-blur-sm" />
        <div className="absolute inset-[28%] rounded-full bg-accent/[0.12]" />
        <span className="relative z-10 text-center font-mono text-[8px] uppercase leading-tight tracking-[0.14em] text-accent/90 sm:text-[9px]">
          {ECOSYSTEM.coreLabel.split(' ').map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  )
}
