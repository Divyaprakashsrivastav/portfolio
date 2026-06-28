import type Lenis from 'lenis'
import { createContext, useContext } from 'react'

const LenisContext = createContext<Lenis | null>(null)

/** Access the global Lenis instance for programmatic scrolling. */
export function useLenisInstance() {
  return useContext(LenisContext)
}

export { LenisContext }
