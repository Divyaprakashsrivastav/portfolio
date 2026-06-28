import { type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { useLenisInstance } from '@/context/LenisContext'
import { scrollToSection } from '@/utils'
import { NAVBAR_OFFSET } from '@/constants'
import { navItemSpring, navItemTransition } from '@/animations/navbar'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface NavItemProps {
  label: string
  href: string
  id: string
  isActive: boolean
  onClick?: () => void
  className?: string
  size?: 'default' | 'large'
}

export function NavItem({
  label,
  href,
  id,
  isActive,
  onClick,
  className,
  size = 'default',
}: NavItemProps) {
  const lenis = useLenisInstance()
  const reducedMotion = useReducedMotion()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection(id, lenis, { offset: NAVBAR_OFFSET, duration: 1.2 })
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group relative flex items-center justify-center',
        size === 'large' ? 'px-2 py-3' : 'px-3 py-2',
        className,
      )}
    >
      {!isActive && !reducedMotion && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-primary/5"
          initial={{ opacity: 0, scale: 0.88 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={navItemSpring}
        />
      )}

      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full border border-primary/10 bg-primary/8"
          transition={navItemSpring}
        />
      )}

      <motion.span
        className={cn(
          'relative z-10 font-medium',
          size === 'large'
            ? 'text-4xl font-display font-semibold tracking-tight md:text-5xl'
            : 'text-sm tracking-tight',
          isActive ? 'text-primary' : 'text-secondary',
        )}
        animate={{ color: isActive ? 'var(--color-primary)' : undefined }}
        whileHover={reducedMotion ? undefined : { y: -1, color: 'var(--color-primary)' }}
        transition={navItemTransition}
      >
        {label}
      </motion.span>

      {isActive ? (
        <motion.span
          layoutId="nav-active-underline"
          aria-hidden
          className={cn(
            'absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-primary/60',
            size === 'large' ? 'w-12' : 'w-4/5',
          )}
          transition={navItemSpring}
        />
      ) : (
        <span
          aria-hidden
          className={cn(
            'absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-primary/40',
            'origin-center scale-x-0 transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            'group-hover:scale-x-100',
            size === 'large' && 'w-12',
          )}
        />
      )}
    </a>
  )
}
