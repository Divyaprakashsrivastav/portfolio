import { PROFILE, SOCIAL_LINKS } from '@/constants'
import { Container } from '@/components/layout'
import { ZuraaBuildingBadge } from '@/components/brand'
import { SocialIconLink } from '@/components/ui/SocialIconLink'

export function Footer() {
  const github = SOCIAL_LINKS.find((l) => l.icon === 'github')!
  const linkedin = SOCIAL_LINKS.find((l) => l.icon === 'linkedin')!
  const email = SOCIAL_LINKS.find((l) => l.icon === 'email')!

  return (
    <footer className="border-t border-white/[0.06] bg-background py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold tracking-[-0.02em] text-primary md:text-xl">
              {PROFILE.fullName}
            </p>
            <ul className="mt-4 space-y-1.5">
              {PROFILE.titles.map((title) => (
                <li key={title} className="font-sans text-sm text-secondary">
                  {title}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center md:justify-start">
              <ZuraaBuildingBadge />
            </div>
          </div>

          <nav aria-label="Footer links" className="space-y-3 text-center md:text-left">
            <SocialIconLink
              href={email.href}
              label={`Email ${PROFILE.fullName}`}
              title={email.title}
              external={false}
              className="block break-all font-sans text-sm text-secondary hover:text-primary"
            >
              {PROFILE.email}
            </SocialIconLink>
            <SocialIconLink
              href={github.href}
              label={`GitHub profile of ${PROFILE.fullName}`}
              title={github.title}
              className="block break-all font-sans text-sm text-secondary hover:text-primary"
            >
              {PROFILE.github.url}
            </SocialIconLink>
            <SocialIconLink
              href={linkedin.href}
              label={`LinkedIn profile of ${PROFILE.fullName}`}
              title={linkedin.title}
              className="block break-all font-sans text-sm text-secondary hover:text-primary"
            >
              {PROFILE.linkedin.url}
            </SocialIconLink>
          </nav>
        </div>

        <p className="mt-12 text-center font-mono text-[11px] tracking-[0.12em] text-secondary/70 sm:mt-16 md:text-left">
          © {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
