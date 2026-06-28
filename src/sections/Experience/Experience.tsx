import { Container, Section } from '@/components/layout'
import { ExperienceIntro } from './ExperienceIntro'
import { Timeline } from './Timeline'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      spacing="xl"
      aria-labelledby="experience-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <div className="relative z-10">
        <Container className="pb-8 md:pb-12">
          <ExperienceIntro />
        </Container>
        <Timeline />
      </div>

      <h2 id="experience-heading" className="sr-only">
        Engineering Journey
      </h2>
    </Section>
  )
}

export const Experience = ExperienceSection
