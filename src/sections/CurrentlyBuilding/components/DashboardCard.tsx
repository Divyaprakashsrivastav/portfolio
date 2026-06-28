import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { buildingCard } from '../animations'
import { cn } from '@/utils'

interface DashboardCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function DashboardCard({ children, className, delay = 0 }: DashboardCardProps) {
  return (
    <motion.div
      variants={buildingCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={cn(
        'rounded-xl border border-white/[0.08] bg-surface p-5 md:p-6',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

interface CardLabelProps {
  children: ReactNode
}

export function CardLabel({ children }: CardLabelProps) {
  return (
    <h3 className="font-sans text-sm font-semibold text-primary md:text-[15px]">{children}</h3>
  )
}
