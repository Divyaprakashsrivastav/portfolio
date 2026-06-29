import { motion } from 'framer-motion'
import { ZuraaLogo } from '@/components/brand'
import type { FeaturedProject } from '../constants'
import { featuredContentStagger, featuredFadeUp } from '../animations'
import { ProductShowcase } from '../ProductShowcase'
import { TechStack } from '../TechStack'
import { ProjectActions } from '../ProjectActions'
import { InfoBlocks } from '../InfoBlocks'
import { cn } from '@/utils'

interface ProjectShowcaseProps {
  project: FeaturedProject
  index: number
  isLast: boolean
}

export function ProjectShowcase({ project, index, isLast }: ProjectShowcaseProps) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      tabIndex={0}
      aria-labelledby={`featured-${project.id}-title`}
      className={cn(
        'relative flex flex-col justify-center py-16 sm:py-20 md:py-24 lg:min-h-[100dvh] lg:py-32',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30',
        !isLast && 'border-b border-white/[0.06]',
      )}
    >
      <div
        className={cn(
          'grid items-center gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28',
          reversed && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <ProductShowcase project={project} />

        <motion.div
          variants={featuredContentStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="min-w-0"
        >
          <motion.div variants={featuredFadeUp}>
            <p className="font-mono text-xs text-secondary">{project.year}</p>
            <p className="mt-2 font-sans text-sm text-secondary">{project.category}</p>
            <h3
              id={`featured-${project.id}-title`}
              className="mt-4 flex items-center gap-3 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.06] tracking-[-0.03em] text-primary"
            >
              {project.id === 'zuraa' && <ZuraaLogo size="md" glass animate />}
              {project.title}
            </h3>
            <p className="mt-6 max-w-lg font-sans text-[15px] leading-[1.8] text-secondary md:text-base">
              {project.description}
            </p>
          </motion.div>

          <InfoBlocks highlights={project.highlights} projectId={project.id} />

          <motion.div variants={featuredFadeUp} className="mt-10">
            <TechStack technologies={project.technologies} />
          </motion.div>

          <ProjectActions
            projectId={project.id}
            title={project.title}
            github={project.github}
            demo={project.demo}
          />
        </motion.div>
      </div>
    </motion.article>
  )
}
