import { useState, useCallback } from 'react'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NavbarShell } from './NavbarShell'
import { NavGlow } from './NavGlow'
import { Logo } from './Logo'
import { DesktopNav } from './DesktopNav'
import { CTAButtons } from './CTAButtons'
import { MenuButton } from './MenuButton'
import { MobileNav } from './MobileNav'

export function Navbar() {
  const { isScrolled } = useNavbarScroll()
  const activeId = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), [])

  return (
    <>
      <NavGlow />
      <NavbarShell isScrolled={isScrolled}>
        <Logo />

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="pointer-events-auto">
            <DesktopNav activeId={activeId} />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <div className="hidden lg:flex">
            <CTAButtons />
          </div>
          <MenuButton isOpen={mobileOpen} onClick={toggleMobile} />
        </div>
      </NavbarShell>

      <MobileNav isOpen={mobileOpen} activeId={activeId} onClose={closeMobile} />
    </>
  )
}
