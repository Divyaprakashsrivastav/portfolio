import { motion, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useScrollY } from '@/hooks/useScrollY'
import { SCROLL_PARALLAX } from '@/animations/motion'
import { PortraitFrame } from './PortraitFrame'
import { ProfileCard } from './ProfileCard'

export function Portrait() {
  const reducedMotion = useReducedMotion()
  const scrollY = useScrollY()
  const portraitY = useTransform(scrollY, (v) => (reducedMotion ? 0 : v * SCROLL_PARALLAX.portrait))

  return (
    <motion.div style={{ y: portraitY }} className="relative mx-auto w-full">
      <div id="hero-3d-slot" className="pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="relative flex min-h-[320px] w-full items-center justify-center sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px]">
        <div className="relative w-full max-w-[min(100%,380px)] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px]">
          <PortraitFrame />
          <ProfileCard />
        </div>
      </div>
    </motion.div>
  )
}

export const HeroPortrait = Portrait
