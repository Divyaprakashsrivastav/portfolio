import { Container, Section } from '@/components/layout'
import { FEATURED_PROJECTS, FEATURED_WORK } from './constants'
import { FeaturedIntro } from './FeaturedIntro'
import { ProjectShowcase } from './ProjectShowcase'

export function FeaturedWorkSection() {
  return (
    <Section
      id="projects"
      spacing="xl"
      aria-labelledby="featured-work-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <Container>
        <FeaturedIntro />

        <div role="feed" aria-label="Featured work" className="mt-20 md:mt-28">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
              isLast={index === FEATURED_PROJECTS.length - 1}
            />
          ))}
        </div>
      </Container>

      <h2 id="featured-work-heading" className="sr-only">
        {FEATURED_WORK.title}
      </h2>
    </Section>
  )
}

export const FeaturedWork = FeaturedWorkSection
