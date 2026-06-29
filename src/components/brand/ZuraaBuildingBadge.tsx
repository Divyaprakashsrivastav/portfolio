import { ZuraaLogo } from './ZuraaLogo'
import { cn } from '@/utils'

interface ZuraaBuildingBadgeProps {
  className?: string
}

export function ZuraaBuildingBadge({ className }: ZuraaBuildingBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/[0.08]',
        'bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm',
        className,
      )}
    >
      <ZuraaLogo size="xs" />
      <span className="font-mono text-[10px] tracking-[0.12em] text-secondary">
        Building Zuraa
      </span>
    </div>
  )
}
