import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

interface NavbarShellProps {
  children: ReactNode
  isScrolled: boolean
  className?: string
}

export function NavbarShell({ children, isScrolled, className }: NavbarShellProps) {
  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5',
        className,
      )}
      initial={false}
      animate={{ paddingTop: isScrolled ? 12 : 20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={cn(
          'relative w-full max-w-5xl rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          isScrolled ? 'scale-[0.98]' : 'scale-100',
        )}
      >
        {/* Backdrop layer — isolated from content to avoid Chromium paint bugs */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 rounded-full border shadow-lg transition-all duration-[450ms]',
            isScrolled
              ? 'border-white/12 bg-[rgba(15,15,16,0.55)] shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
              : 'border-white/10 bg-[rgba(15,15,16,0.42)] shadow-[0_4px_24px_rgba(0,0,0,0.35)]',
          )}
          style={{
            backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(160%)',
          }}
        />

        {/* Noise texture */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />

        {/* Content — must sit above backdrop, never share overflow/backdrop with blur */}
        <div className="relative z-10 flex h-14 min-h-[56px] items-center justify-between gap-3 px-2 sm:gap-4 sm:px-3 md:h-[3.75rem] md:px-4">
          {children}
        </div>
      </div>
    </motion.header>
  )
}
