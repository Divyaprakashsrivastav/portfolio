import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/constants'

/**
 * Intersection Observer–based active section detection.
 * Highlights the nav item matching the section currently in view.
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(NAV_LINKS[0].id)

  useEffect(() => {
    const elements = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio)
        })

        let bestId = ''
        let bestRatio = 0

        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestRatio > 0 && bestId) setActiveId(bestId)
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
