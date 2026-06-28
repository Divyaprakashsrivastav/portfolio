import { ZURAA_STATUS } from '../constants'
import { DashboardCard, CardLabel } from './DashboardCard'

export function ZuraaCard() {
  return (
    <DashboardCard className="sm:col-span-2">
      <CardLabel>{ZURAA_STATUS.name}</CardLabel>
      <p className="mt-2 font-sans text-sm text-secondary">{ZURAA_STATUS.role}</p>
      <p className="mt-4 font-mono text-xs text-secondary">
        Status · {ZURAA_STATUS.status}
      </p>
    </DashboardCard>
  )
}
