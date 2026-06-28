import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

/**
 * Theme switch architecture — dark mode active, light mode prepared.
 * toggleTheme is a no-op until theme switching is implemented.
 */
export function useTheme() {
  const [theme] = useState<Theme>('dark')

  const toggleTheme = useCallback(() => {
    // Prepared for future light/dark toggle implementation
  }, [])

  const setTheme = useCallback((_next: Theme) => {
    // Prepared for future implementation
  }, [])

  return {
    theme,
    setTheme,
    toggleTheme,
    isToggleEnabled: false,
  }
}
