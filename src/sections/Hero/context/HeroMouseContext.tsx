import {
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import {
  type MotionValue,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_SPRING } from '@/animations/motion'

const SPRING = MOTION_SPRING.gentle

interface HeroMouseContextValue {
  smoothX: MotionValue<number>
  smoothY: MotionValue<number>
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  reducedMotion: boolean
}

const HeroMouseContext = createContext<HeroMouseContextValue | null>(null)

export function useHeroMouse(): HeroMouseContextValue {
  const ctx = useContext(HeroMouseContext)
  if (!ctx) {
    throw new Error('useHeroMouse must be used within HeroMouseProvider')
  }
  return ctx
}

interface HeroMouseProviderProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
}

/** Single mouse listener + spring motion values for the entire Hero */
export function HeroMouseProvider({
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: HeroMouseProviderProps) {
  const reducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const smoothX = useSpring(mouseX, SPRING)
  const smoothY = useSpring(mouseY, SPRING)
  const smoothPointerX = useSpring(pointerX, SPRING)
  const smoothPointerY = useSpring(pointerY, SPRING)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    onMouseMove?.(e)
    if (reducedMotion) return

    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    pointerX.set(e.clientX - rect.left)
    pointerY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    onMouseLeave?.(e)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <HeroMouseContext.Provider
      value={{
        smoothX,
        smoothY,
        pointerX: smoothPointerX,
        pointerY: smoothPointerY,
        reducedMotion,
      }}
    >
      <section onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} {...props}>
        {children}
      </section>
    </HeroMouseContext.Provider>
  )
}
