import { useMemo } from 'react'
import type { EcosystemNode } from '../constants'
import { ORBIT_RADIUS } from '../constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface EcosystemConnectionsProps {
  nodes: readonly EcosystemNode[]
  size: number
  center: { x: number; y: number }
  activeId: string | null
  hoveredId: string | null
  orbitRadius?: number
}

function polarToCartesian(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  }
}

export function EcosystemConnections({
  nodes,
  size,
  center,
  activeId,
  hoveredId,
  orbitRadius = ORBIT_RADIUS,
}: EcosystemConnectionsProps) {
  const reducedMotion = useReducedMotion()
  const radius = size * orbitRadius

  const lines = useMemo(
    () =>
      nodes.map((node) => {
        const end = polarToCartesian(node.angle, radius, center.x, center.y)
        return { id: node.id, x1: center.x, y1: center.y, x2: end.x, y2: end.y }
      }),
    [nodes, radius, center.x, center.y],
  )

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
      viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(124,92,252,0.35)" />
          <stop offset="100%" stopColor="rgba(124,92,252,0.08)" />
        </linearGradient>
      </defs>

      {lines.map((line) => {
        const isActive = line.id === activeId || line.id === hoveredId
        return (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={isActive ? 'rgba(124,92,252,0.45)' : 'url(#line-gradient)'}
            strokeWidth={isActive ? 1.5 : 1}
            strokeDasharray={reducedMotion ? undefined : '6 8'}
            className={reducedMotion ? undefined : 'ecosystem-line'}
          />
        )
      })}
    </svg>
  )
}
