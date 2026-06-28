import { Container, Section } from '@/components/layout'
import { AboutIntro } from './AboutIntro'
import { AboutTimeline } from './AboutTimeline'

export function About() {
  return (
    <Section
      id="about"
      spacing="xl"
      aria-labelledby="about-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <Container className="max-w-3xl">
        <AboutIntro />
        <AboutTimeline />
      </Container>

      <h2 id="about-heading" className="sr-only">
        Beyond The Resume
      </h2>
    </Section>
  )
}
