import { motion } from 'framer-motion'
import { PORTRAIT } from '../constants'
import { HERO_DELAYS } from '../../constants'
import { heroTransition } from '../../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LINES = [
  PORTRAIT.profile.role,
  PORTRAIT.profile.title,
  PORTRAIT.profile.location,
  PORTRAIT.profile.relocation,
] as const

export function ProfileCard() {
  const reducedMotion = useReducedMotion()
  const { profile } = PORTRAIT

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={heroTransition(HERO_DELAYS.portrait + 0.35)}
      className="absolute bottom-2 right-1/2 z-[6] w-[min(100%,240px)] translate-x-1/2 sm:right-0 sm:translate-x-0 sm:-right-2"
    >
      <div className="rounded-xl border border-white/[0.08] bg-surface p-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
          <span className="font-sans text-[13px] text-secondary">{profile.status}</span>
        </div>
        <div className="mt-4 space-y-2">
          {LINES.map((line) => (
            <p key={line} className="font-sans text-sm text-primary">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
