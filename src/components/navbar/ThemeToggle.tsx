import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

interface ThemeToggleProps {
  className?: string
}

/**
 * Theme toggle — visual shell only.
 * Architecture ready; switching not implemented yet.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, isToggleEnabled } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!isToggleEnabled}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-full',
        'border border-border bg-glass text-secondary',
        'transition-colors duration-200',
        'hover:border-primary/20 hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        'disabled:cursor-default disabled:opacity-60',
        className,
      )}
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="h-4 w-4" aria-hidden />
      ) : (
        <HiOutlineMoon className="h-4 w-4" aria-hidden />
      )}
    </button>
  )
}
