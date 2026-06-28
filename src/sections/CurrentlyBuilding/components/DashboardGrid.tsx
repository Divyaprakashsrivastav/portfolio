import { motion } from 'framer-motion'
import { buildingStagger } from '../animations'
import { ZuraaCard } from './ZuraaCard'
import { LearningCard } from './LearningCard'
import { GoalsCard } from './GoalsCard'
import { FocusAreasCard } from './FocusAreasCard'

export function DashboardGrid() {
  return (
    <motion.div
      variants={buildingStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      role="region"
      aria-label="Current work dashboard"
    >
      <ZuraaCard />
      <LearningCard />
      <GoalsCard />
      <FocusAreasCard />
    </motion.div>
  )
}
