import { useCallback, useState } from 'react'

export type CursorState = 'default' | 'pointer' | 'text' | 'hidden' | 'magnetic'

/**
 * Manages custom cursor visual state.
 * Wire this to a future Cursor component — no rendering here.
 */
export function useCursorState(initial: CursorState = 'default') {
  const [state, setState] = useState<CursorState>(initial)

  const setCursor = useCallback((next: CursorState) => setState(next), [])
  const resetCursor = useCallback(() => setState('default'), [])

  return { state, setCursor, resetCursor }
}
