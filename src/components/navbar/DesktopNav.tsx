import { NAV_LINKS } from '@/constants'
import { NavItem } from './NavItem'

interface DesktopNavProps {
  activeId: string
}

export function DesktopNav({ activeId }: DesktopNavProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-0.5">
      {NAV_LINKS.map((link) => (
        <NavItem
          key={link.id}
          label={link.label}
          href={link.href}
          id={link.id}
          isActive={activeId === link.id}
        />
      ))}
    </nav>
  )
}
