import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurReveal,
} from '@/animations'
import { cn } from '@/utils'

type RevealVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'blurReveal'

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurReveal,
}

export interface RevealProps {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

/** Scroll-triggered reveal wrapper. Respects reduced motion via MotionConfig. */
export function Reveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
