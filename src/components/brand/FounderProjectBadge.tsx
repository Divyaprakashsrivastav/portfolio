import { cn } from '@/utils'

interface FounderProjectBadgeProps {
  className?: string
}

export function FounderProjectBadge({ className }: FounderProjectBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/25 bg-accent/10',
        'px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent sm:text-[10px]',
        className,
      )}
    >
      Founder Project
    </span>
  )
}
