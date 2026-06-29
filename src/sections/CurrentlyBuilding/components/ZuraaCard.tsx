import { ZURAA_STATUS } from '../constants'
import { ZuraaLogo } from '@/components/brand'
import { DashboardCard, CardLabel } from './DashboardCard'

export function ZuraaCard() {
  return (
    <DashboardCard className="sm:col-span-2">
      <div className="flex items-center gap-3">
        <ZuraaLogo size="sm" glass animate />
        <CardLabel>{ZURAA_STATUS.name}</CardLabel>
      </div>
      <p className="mt-2 font-sans text-sm text-secondary">{ZURAA_STATUS.role}</p>
      <p className="mt-4 font-mono text-xs text-secondary">
        Status · {ZURAA_STATUS.status}
      </p>
    </DashboardCard>
  )
}
