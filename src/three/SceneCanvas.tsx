import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { cn } from '@/utils'

export interface SceneCanvasProps {
  children: ReactNode
  className?: string
}

/**
 * React Three Fiber canvas wrapper.
 * Lazy-load sections that use this via lazyWithPreload().
 */
export function SceneCanvas({ children, className }: SceneCanvasProps) {
  return (
    <div className={cn('absolute inset-0 -z-10', className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
