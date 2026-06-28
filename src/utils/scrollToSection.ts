import type Lenis from 'lenis'

/**
 * Scroll to a section by element ID.
 * Uses Lenis when available for premium smooth scrolling.
 */
export function scrollToSection(
  id: string,
  lenis?: Lenis | null,
  options?: { offset?: number; duration?: number },
): void {
  const element = document.getElementById(id)
  if (!element) return

  const { offset = 0, duration = 1.2 } = options ?? {}

  if (lenis) {
    lenis.scrollTo(element, { offset, duration })
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: 'smooth' })
}
