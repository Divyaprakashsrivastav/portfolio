import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Section } from '@/components/layout'
import { ECOSYSTEM } from './constants'
import { ecosystemFade } from './animations'
import { EcosystemView } from './components/EcosystemView'

export function TechnologyEcosystemSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <Section
      id="ecosystem"
      spacing="xl"
      aria-labelledby="ecosystem-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <Container>
        <motion.h2
          id="ecosystem-heading"
          variants={ecosystemFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-primary"
        >
          {ECOSYSTEM.title}
        </motion.h2>

        <motion.p
          variants={ecosystemFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.06 }}
          className="mx-auto mt-5 max-w-md text-center font-mono text-xs tracking-[0.14em] text-secondary"
        >
          Click a node to explore
        </motion.p>

        <EcosystemView activeId={activeId} onActiveChange={setActiveId} />
      </Container>
    </Section>
  )
}

export const TechnologyEcosystem = TechnologyEcosystemSection
