import { GOALS_2026 } from '../constants'
import { DashboardCard, CardLabel } from './DashboardCard'

export function GoalsCard() {
  return (
    <DashboardCard delay={0.1}>
      <CardLabel>2026 Goals</CardLabel>
      <ul className="mt-4 space-y-2" role="list">
        {GOALS_2026.map((goal) => (
          <li key={goal} className="font-sans text-sm text-secondary">
            {goal}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
