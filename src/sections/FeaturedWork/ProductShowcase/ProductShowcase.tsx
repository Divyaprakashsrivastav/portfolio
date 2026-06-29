import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { ZURAA_BRAND } from '@/constants/brand'
import { ZuraaLogo, FounderProjectBadge } from '@/components/brand'
import type { FeaturedProject } from '../constants'
import { featuredLaptopIn, featuredStageIn } from '../animations'
import { ShowcaseStage } from './ShowcaseStage'
import { LaptopFrame } from './LaptopFrame'
import { PhoneFrame } from './PhoneFrame'
import { FloatingChip } from './FloatingChip'
import { getDesktopMockup, getFloatingChips, getMobileMockup } from './mockups'

interface ProductShowcaseProps {
  project: FeaturedProject
}

export function ProductShowcase({ project }: ProductShowcaseProps) {
  const { visual } = project
  const chips = getFloatingChips(project)
  const hasRealScreenshot = Boolean(visual.desktopImage)
  const isZuraa = project.id === 'zuraa'

  if (hasRealScreenshot) {
    return (
      <motion.div
        variants={featuredStageIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto w-full"
      >
        <ShowcaseStage accent={visual.accent} glow={visual.glow}>
          <motion.div variants={featuredLaptopIn} className="flex h-full items-center">
            <LaptopFrame>
              <OptimizedImage
                src={visual.desktopImage!}
                alt={`${project.title} screenshot`}
                className="aspect-[16/10] w-full object-cover"
              />
            </LaptopFrame>
          </motion.div>
        </ShowcaseStage>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={featuredStageIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto w-full"
      role="img"
      aria-label={`${project.title} product preview`}
    >
      <ShowcaseStage accent={visual.accent} glow={visual.glow}>
        <motion.div
          variants={featuredLaptopIn}
          className="relative flex h-full items-center justify-center pt-2 sm:pt-4"
        >
          <LaptopFrame siteFavicon={isZuraa ? ZURAA_BRAND.favicon : undefined}>
            {getDesktopMockup(project)}
          </LaptopFrame>
          <PhoneFrame side={project.id === 'telehealth' ? 'left' : 'right'}>
            {getMobileMockup(project)}
          </PhoneFrame>
        </motion.div>

        {chips.map((chip, i) => (
          <FloatingChip
            key={chip.label}
            label={chip.label}
            sublabel={chip.sublabel}
            className={chip.className}
            delay={i * 0.08}
          />
        ))}

        {isZuraa && (
          <div className="absolute left-4 top-4 z-30 flex items-center gap-2 sm:left-5 sm:top-5">
            <ZuraaLogo size="sm" glass />
            <FounderProjectBadge />
          </div>
        )}
      </ShowcaseStage>
    </motion.div>
  )
}
