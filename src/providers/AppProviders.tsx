import { type ReactNode } from 'react'
import { MotionProvider } from './MotionProvider'
import { SmoothScrollProvider } from '@/components/layout'

interface AppProvidersProps {
  children: ReactNode
}

/** Composes all global providers for the application shell. */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </MotionProvider>
  )
}
