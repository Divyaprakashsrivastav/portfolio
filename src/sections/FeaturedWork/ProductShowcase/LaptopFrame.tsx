import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface LaptopFrameProps {
  children: ReactNode
  className?: string
  /** Optional favicon shown in the laptop bezel (e.g. Zuraa project preview) */
  siteFavicon?: string
}

export function LaptopFrame({ children, className, siteFavicon }: LaptopFrameProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn('relative mx-auto w-full max-w-[92%] sm:max-w-[88%]', className)}
      whileHover={reducedMotion ? undefined : { rotateX: 2, rotateY: -2, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
    >
      <div
        className="relative rounded-xl border border-white/[0.12] bg-[#16161a] p-1.5 shadow-[0_32px_80px_rgba(0,0,0,0.55)] sm:rounded-2xl sm:p-2"
        style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(124,92,252,0.06)' }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-black/50 sm:w-14" aria-hidden />
        <div className="overflow-hidden rounded-lg border border-white/[0.06] sm:rounded-xl">
          {siteFavicon && (
            <div
              className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#121216] px-2 py-1 sm:px-2.5 sm:py-1.5"
              aria-hidden
            >
              <img
                src={siteFavicon}
                alt=""
                className="h-2 w-2 rounded-sm object-contain sm:h-2.5 sm:w-2.5"
              />
              <span className="font-mono text-[6px] text-white/35 sm:text-[7px]">zuraa.app</span>
            </div>
          )}
          {children}
        </div>
        <div className="mx-auto mt-1 h-1.5 w-[94%] rounded-b-lg bg-[#2c2c30] sm:mt-1.5 sm:h-2 sm:rounded-b-xl" aria-hidden />
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
        aria-hidden
      />
    </motion.div>
  )
}
