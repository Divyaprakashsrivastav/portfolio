import { ResumeButton } from './ResumeButton'
import { LetsTalkButton } from './LetsTalkButton'
import { ThemeToggle } from './ThemeToggle'

interface CTAButtonsProps {
  onLetsTalkClick?: () => void
  showThemeToggle?: boolean
}

export function CTAButtons({ onLetsTalkClick, showThemeToggle = true }: CTAButtonsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {showThemeToggle && <ThemeToggle className="hidden md:flex" />}
      <ResumeButton className="hidden sm:inline-flex" />
      <LetsTalkButton onClick={onLetsTalkClick} />
    </div>
  )
}
