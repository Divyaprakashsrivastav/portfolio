import { motion, useTransform } from 'framer-motion'
import portraitWebp from '@/assets/images/divya-portrait.webp'
import portraitPng from '@/assets/images/divya-portrait.png'
import { PORTRAIT, IMG_DIMENSIONS } from '../constants'
import { HERO_DELAYS } from '../../constants'
import { heroTransition } from '../../animations'
import { PORTRAIT_TILT_DEG } from '@/animations/motion'
import { useHeroMouse } from '../../context/HeroMouseContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PortraitFrame() {
  const reducedMotion = useReducedMotion()
  const { smoothX, smoothY } = useHeroMouse()

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [PORTRAIT_TILT_DEG * 0.5, -PORTRAIT_TILT_DEG * 0.5])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-PORTRAIT_TILT_DEG * 0.5, PORTRAIT_TILT_DEG * 0.5])

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={heroTransition(HERO_DELAYS.portrait)}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformPerspective: 1200,
      }}
      className="relative z-[4] mx-auto w-full"
    >
      <div className="relative mx-auto aspect-[3/4] w-full max-w-[500px]">
        <picture className="absolute bottom-0 left-1/2 block h-[108%] w-[105%] -translate-x-1/2">
          <source srcSet={portraitWebp} type="image/webp" />
          <img
            src={portraitPng}
            alt={PORTRAIT.alt}
            width={IMG_DIMENSIONS.width}
            height={IMG_DIMENSIONS.height}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
          />
        </picture>
      </div>
    </motion.div>
  )
}
