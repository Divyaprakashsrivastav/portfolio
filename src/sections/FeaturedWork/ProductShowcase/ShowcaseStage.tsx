import type { ReactNode } from 'react'
import { cn } from '@/utils'

interface ShowcaseStageProps {
  accent: string
  glow: string
  children: ReactNode
  className?: string
}

export function ShowcaseStage({ accent, glow, children, className }: ShowcaseStageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/[0.08]',
        'aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3]',
        className,
      )}
    >
      {/* Mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 20%, ${accent}, transparent 55%),
            radial-gradient(ellipse 60% 50% at 85% 75%, ${glow}, transparent 50%),
            linear-gradient(160deg, #0a0a0e 0%, #12121a 45%, #08080c 100%)
          `,
        }}
        aria-hidden
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
        aria-hidden
      />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { top: '12%', left: '18%', size: 2 },
          { top: '28%', left: '72%', size: 1.5 },
          { top: '68%', left: '24%', size: 2 },
          { top: '78%', left: '82%', size: 1 },
          { top: '45%', left: '48%', size: 1.5 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/25"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Reflection floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden
      />

      <div className="relative h-full w-full p-4 sm:p-6 md:p-8">{children}</div>
    </div>
  )
}
