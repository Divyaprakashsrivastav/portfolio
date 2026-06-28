import { motion } from 'framer-motion'
import { Container, Section } from '@/components/layout'
import { sectionFade } from '@/animations/motion'
import { ContactCard } from './ContactCard'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <Section
      id="contact"
      spacing="xl"
      aria-labelledby="contact-heading"
      className="border-t border-white/[0.06] bg-background"
    >
      <Container>
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="text-center lg:text-left">
            <motion.h2
              id="contact-heading"
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-primary"
            >
              Let&apos;s build something meaningful.
            </motion.h2>

            <motion.p
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.06 }}
              className="mx-auto mt-6 max-w-lg font-sans text-[15px] leading-[1.8] text-secondary md:mx-0 md:text-base lg:mx-0"
            >
              Open to internships, collaborations and conversations about products, engineering and startups.
            </motion.p>

            <motion.div
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.12 }}
              className="mt-12"
            >
              <ContactCard />
            </motion.div>
          </div>

          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export const Contact = ContactSection
