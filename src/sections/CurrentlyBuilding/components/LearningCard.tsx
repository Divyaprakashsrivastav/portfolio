import { LEARNING_TOPICS } from '../constants'
import { DashboardCard, CardLabel } from './DashboardCard'

export function LearningCard() {
  return (
    <DashboardCard delay={0.06}>
      <CardLabel>Currently Learning</CardLabel>
      <ul className="mt-4 space-y-2" role="list">
        {LEARNING_TOPICS.map((topic) => (
          <li key={topic} className="font-sans text-sm text-secondary">
            {topic}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
