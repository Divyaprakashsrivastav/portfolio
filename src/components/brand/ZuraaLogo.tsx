import { motion } from 'framer-motion'
import { ZURAA_BRAND } from '@/constants/brand'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

const SIZES = {
  xs: 'h-5 w-auto max-w-[28px]',
  sm: 'h-7 w-auto max-w-[40px]',
  md: 'h-10 w-auto max-w-[56px]',
  lg: 'h-14 w-auto max-w-[80px]',
  xl: 'h-20 w-auto max-w-[120px]',
  mockup: 'h-3.5 w-auto max-w-[20px] sm:h-4 sm:max-w-[24px]',
  mockupNav: 'h-2.5 w-auto max-w-[14px] sm:h-3 sm:max-w-[18px]',
  splash: 'h-10 w-auto max-w-[48px] sm:max-w-[56px]',
} as const

export type ZuraaLogoSize = keyof typeof SIZES

interface ZuraaLogoProps {
  size?: ZuraaLogoSize
  glass?: boolean
  animate?: boolean
  className?: string
  imgClassName?: string
}

export function ZuraaLogo({
  size = 'md',
  glass = false,
  animate = false,
  className,
  imgClassName,
}: ZuraaLogoProps) {
  const reducedMotion = useReducedMotion()

  const image = (
    <picture>
      <source srcSet={ZURAA_BRAND.logo.webp} type="image/webp" />
      <img
        src={ZURAA_BRAND.logo.png}
        alt={ZURAA_BRAND.alt}
        width={375}
        height={552}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={cn('object-contain object-center', SIZES[size], imgClassName)}
      />
    </picture>
  )

  const content = glass ? (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl border border-white/[0.1]',
        'bg-[rgba(14,14,17,0.55)] p-2 backdrop-blur-xl',
        'shadow-[0_8px_24px_rgba(0,0,0,0.35)]',
        size === 'xs' && 'rounded-lg p-1',
        size === 'sm' && 'p-1.5',
        size === 'lg' && 'p-2.5',
        size === 'xl' && 'rounded-2xl p-3',
      )}
    >
      {image}
    </span>
  ) : (
    image
  )

  if (!animate || reducedMotion) {
    return (
      <span className={cn('inline-flex shrink-0 items-center', className)}>{content}</span>
    )
  }

  return (
    <motion.span
      className={cn('inline-flex shrink-0 items-center', className)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(124, 92, 252, 0.12)' }}
    >
      {content}
    </motion.span>
  )
}
