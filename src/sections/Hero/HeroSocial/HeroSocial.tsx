import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SOCIAL_LINKS } from '@/constants'
import { HERO_DELAYS } from '../constants'
import { heroFadeUp } from '../animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SocialIconLink } from '@/components/ui/SocialIconLink'
import { cn } from '@/utils'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiOutlineMail,
} as const

interface HeroSocialProps {
  variant?: 'inline' | 'fixed'
}

export function HeroSocial({ variant = 'inline' }: HeroSocialProps) {
  const reducedMotion = useReducedMotion()

  if (variant === 'fixed') {
    return (
      <motion.nav
        aria-label="Social links"
        variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.social)}
        initial="hidden"
        animate="visible"
        className="z-10 mx-auto mt-12 hidden w-full max-w-[var(--container-default)] items-center gap-3 px-4 sm:px-6 md:px-8 lg:absolute lg:bottom-12 lg:left-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:px-0 xl:left-8"
      >
        {SOCIAL_LINKS.map((link) => (
          <SocialLinkItem key={link.icon} link={link} reducedMotion={reducedMotion} />
        ))}
      </motion.nav>
    )
  }

  return (
    <motion.nav
      aria-label="Social links"
      variants={heroFadeUp(reducedMotion ? 0 : HERO_DELAYS.social)}
      initial="hidden"
      animate="visible"
      className="mt-8 flex items-center justify-center gap-3 lg:hidden"
    >
      {SOCIAL_LINKS.map((link) => (
        <SocialLinkItem key={link.icon} link={link} reducedMotion={reducedMotion} />
      ))}
    </motion.nav>
  )
}

function SocialLinkItem({
  link,
  reducedMotion,
}: {
  link: (typeof SOCIAL_LINKS)[number]
  reducedMotion: boolean
}) {
  const Icon = iconMap[link.icon]
  const isEmail = link.icon === 'email'

  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
    >
      <SocialIconLink
        href={link.href}
        label={`${link.label} — ${link.title}`}
        title={link.title}
        external={!isEmail}
        className={cn(
          'flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full',
          'border border-white/[0.08] text-secondary hover:text-primary',
          'active:scale-[0.96] active:opacity-80',
        )}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </SocialIconLink>
    </motion.div>
  )
}
