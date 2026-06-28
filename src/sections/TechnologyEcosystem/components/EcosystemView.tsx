import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ECOSYSTEM_NODES, ORBIT_RADIUS } from '../constants'
import { useEcosystemMouse } from '../hooks/useEcosystemMouse'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { EcosystemConnections } from './EcosystemConnections'
import { EcosystemParticles } from './EcosystemParticles'
import { EngineeringCore } from './EngineeringCore'
import { EcosystemNodeButton } from './EcosystemNodeButton'
import { NodeDetailPanel } from './NodeDetailPanel'

interface EcosystemViewProps {
  activeId: string | null
  onActiveChange: (id: string | null) => void
}

function resolveOrbitRadius(size: number): number {
  if (size < 360) return 0.28
  if (size < 480) return 0.32
  if (size < 560) return 0.35
  return ORBIT_RADIUS
}

export function EcosystemView({ activeId, onActiveChange }: EcosystemViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const mouse = useEcosystemMouse(containerRef)
  const isMobile = useMediaQuery('(max-width: 767px)')

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect
      setSize(Math.min(width, 640))
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const center = { x: size / 2, y: size / 2 }
  const orbitRadius = resolveOrbitRadius(size)
  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === activeId) ?? null

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeId) onActiveChange(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeId, onActiveChange])

  return (
    <div className="relative overflow-x-clip">
      <div
        ref={containerRef}
        className="relative mx-auto mt-12 w-full max-w-[min(100%,640px)] sm:mt-16 md:mt-24"
        style={{ aspectRatio: '1' }}
        role="application"
        aria-label="Interactive technology ecosystem map"
      >
        {size > 0 && (
          <>
            <EcosystemParticles
              width={size}
              height={size}
              mouseX={isMobile ? center.x : mouse.x}
              mouseY={isMobile ? center.y : mouse.y}
              density={isMobile ? 'low' : 'normal'}
            />

            <div className="absolute inset-0 mx-auto" style={{ width: size, height: size }}>
              <EcosystemConnections
                nodes={ECOSYSTEM_NODES}
                size={size}
                center={center}
                activeId={activeId}
                hoveredId={hoveredId}
                orbitRadius={orbitRadius}
              />

              <EngineeringCore
                size={size}
                center={center}
                parallaxX={isMobile ? 0 : mouse.normalizedX}
                parallaxY={isMobile ? 0 : mouse.normalizedY}
                isActive={Boolean(activeId)}
              />

              {ECOSYSTEM_NODES.map((node, index) => (
                <EcosystemNodeButton
                  key={node.id}
                  node={node}
                  size={size}
                  center={center}
                  isActive={activeId === node.id}
                  isHovered={hoveredId === node.id}
                  parallaxX={mouse.normalizedX}
                  parallaxY={mouse.normalizedY}
                  nodeIndex={index}
                  orbitRadius={orbitRadius}
                  onSelect={(id) => onActiveChange(id || null)}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeNode && (
          <NodeDetailPanel
            key={activeNode.id}
            node={activeNode}
            onClose={() => onActiveChange(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
