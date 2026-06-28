import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import type { FeaturedProject } from '../constants'
import { featuredScaleIn } from '../animations'
import { cn } from '@/utils'

interface ProjectImageProps {
  project: FeaturedProject
}

export function ProjectImage({ project }: ProjectImageProps) {
  const { visual } = project

  return (
    <motion.div
      variants={featuredScaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto w-full"
    >
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-surface">
        {visual.desktopImage ? (
          <OptimizedImage
            src={visual.desktopImage}
            alt={`${project.title} screenshot`}
            className="aspect-[16/10] w-full object-cover"
          />
        ) : (
          <div
            className={cn('relative aspect-[16/10] bg-gradient-to-br', visual.gradient)}
            role="img"
            aria-label={`${project.title} preview`}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                {visual.label}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-white/90 md:text-2xl">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
