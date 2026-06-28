import { motion } from 'framer-motion'
import type { EcosystemNode } from '../constants'
import { ORBIT_RADIUS } from '../constants'
import { nodeSpring } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/utils'

interface EcosystemNodeButtonProps {
  node: EcosystemNode
  size: number
  center: { x: number; y: number }
  isActive: boolean
  isHovered: boolean
  parallaxX: number
  parallaxY: number
  nodeIndex: number
  orbitRadius?: number
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

function polarToCartesian(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  }
}

export function EcosystemNodeButton({
  node,
  size,
  center,
  isActive,
  isHovered,
  parallaxX,
  parallaxY,
  nodeIndex,
  orbitRadius = ORBIT_RADIUS,
  onSelect,
  onHover,
}: EcosystemNodeButtonProps) {
  const reducedMotion = useReducedMotion()
  const isCoarsePointer = useMediaQuery('(pointer: coarse)')
  const radius = size * orbitRadius
  const pos = polarToCartesian(node.angle, radius, center.x, center.y)
  const nodeSize = Math.max(size * 0.11, isCoarsePointer ? 52 : 44)

  const offsetX = reducedMotion || isCoarsePointer ? 0 : parallaxX * (nodeIndex % 2 === 0 ? 6 : -6)
  const offsetY = reducedMotion || isCoarsePointer ? 0 : parallaxY * (nodeIndex % 2 === 0 ? -6 : 6)

  return (
    <motion.button
      type="button"
      aria-expanded={isActive}
      aria-controls="ecosystem-detail-panel"
      aria-label={`${node.label} technologies — ${isActive ? 'expanded' : 'click to explore'}`}
      title={`Explore ${node.label}`}
      onClick={() => onSelect(isActive ? '' : node.id)}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(node.id)}
      onBlur={() => onHover(null)}
      className={cn(
        'absolute z-[3] flex items-center justify-center rounded-full',
        'border bg-surface/90 backdrop-blur-md transition-colors duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
        isActive
          ? 'border-accent/40 text-primary shadow-[0_0_24px_rgba(124,92,252,0.12)]'
          : isHovered
            ? 'border-white/[0.16] text-primary'
            : 'border-white/[0.08] text-secondary hover:text-primary',
      )}
      style={{
        left: pos.x - nodeSize / 2,
        top: pos.y - nodeSize / 2,
        width: nodeSize,
        height: nodeSize,
        x: offsetX,
        y: offsetY,
      }}
      whileHover={reducedMotion ? undefined : { scale: 1.06 }}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      transition={nodeSpring}
      animate={
        isActive && !reducedMotion
          ? { boxShadow: '0 0 28px rgba(124, 92, 252, 0.15)' }
          : { boxShadow: '0 0 0 rgba(124, 92, 252, 0)' }
      }
    >
      <span className="px-1 text-center font-display text-[10px] font-semibold leading-tight tracking-[-0.01em] sm:text-xs md:text-sm">
        {node.label}
      </span>
    </motion.button>
  )
}
