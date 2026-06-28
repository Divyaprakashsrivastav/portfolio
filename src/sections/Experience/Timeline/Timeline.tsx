import { type ReactNode, useCallback, useState } from 'react'
import { Container } from '@/components/layout'
import { EXPERIENCES } from '../constants'
import { TimelineIndicator } from './TimelineIndicator'
import { ExperienceItem } from '../ExperienceItem'

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleActive = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <Container className="relative mt-12 sm:mt-16 md:mt-24 lg:mt-32">
      <div className="grid gap-8 lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        <TimelineIndicator activeIndex={activeIndex} />

        <div role="feed" aria-label="Experience chapters" className="relative">
          {EXPERIENCES.map((entry, index) => (
            <ExperienceItem
              key={entry.id}
              entry={entry}
              index={index}
              isActive={activeIndex === index}
              isLast={index === EXPERIENCES.length - 1}
              onActive={handleActive}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

/** Scrollable chapter list with progress indicator */
export function TimelineWithIntro({ intro }: { intro?: ReactNode }) {
  return (
    <>
      {intro}
      <Timeline />
    </>
  )
}
