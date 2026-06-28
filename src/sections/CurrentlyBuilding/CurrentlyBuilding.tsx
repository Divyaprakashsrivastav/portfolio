import { Container, Section } from '@/components/layout'
import { BuildingIntro } from './BuildingIntro'
import { DashboardGrid } from './components'

export function CurrentlyBuildingSection() {
  return (
    <Section
      id="founder"
      spacing="xl"
      aria-labelledby="currently-building-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <Container>
        <div className="grid items-start gap-10 sm:gap-12 md:gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <BuildingIntro />
          <DashboardGrid />
        </div>
      </Container>

      <h2 id="currently-building-heading" className="sr-only">
        Currently Building
      </h2>
    </Section>
  )
}

export const CurrentlyBuilding = CurrentlyBuildingSection
