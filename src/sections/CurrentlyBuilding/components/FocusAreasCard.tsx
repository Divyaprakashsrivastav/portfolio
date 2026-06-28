import { FOCUS_AREAS } from '../constants'
import { DashboardCard, CardLabel } from './DashboardCard'

export function FocusAreasCard() {
  return (
    <DashboardCard delay={0.14} className="sm:col-span-2 lg:col-span-1">
      <CardLabel>Focus</CardLabel>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" role="list">
        {FOCUS_AREAS.map((area) => (
          <li key={area} className="font-sans text-sm text-secondary">
            {area}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
