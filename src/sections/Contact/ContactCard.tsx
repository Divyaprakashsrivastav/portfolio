import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import { PROFILE, SOCIAL_LINKS } from '@/constants'
import { SocialIconLink } from '@/components/ui/SocialIconLink'
import { cn } from '@/utils'

interface ContactCardProps {
  className?: string
}

const githubLink = SOCIAL_LINKS.find((l) => l.icon === 'github')!
const linkedinLink = SOCIAL_LINKS.find((l) => l.icon === 'linkedin')!
const emailLink = SOCIAL_LINKS.find((l) => l.icon === 'email')!

export function ContactCard({ className }: ContactCardProps) {
  return (
    <aside
      className={cn(
        'rounded-xl border border-white/[0.08] bg-surface p-6 md:p-8',
        className,
      )}
      aria-label="Contact information"
    >
      <p className="font-display text-xl font-bold tracking-[-0.02em] text-primary md:text-2xl">
        {PROFILE.fullName}
      </p>

      <ul className="mt-6 space-y-4">
        <li>
          <SocialIconLink
            href={emailLink.href}
            label={`Email ${PROFILE.fullName}`}
            title={emailLink.title}
            external={false}
            className="group flex h-auto w-full items-center gap-3 rounded-lg px-1 py-1 text-secondary hover:text-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08]">
              <HiOutlineMail className="h-4 w-4" aria-hidden />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-secondary/80">
                Email
              </span>
              <span className="block truncate font-sans text-sm text-primary">{PROFILE.email}</span>
            </span>
            <HiArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" aria-hidden />
          </SocialIconLink>
        </li>

        <li>
          <SocialIconLink
            href={githubLink.href}
            label={`GitHub profile of ${PROFILE.fullName}`}
            title={githubLink.title}
            className="group flex h-auto w-full items-center gap-3 rounded-lg px-1 py-1 text-secondary hover:text-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08]">
              <FaGithub className="h-4 w-4" aria-hidden />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-secondary/80">
                GitHub
              </span>
              <span className="block truncate font-sans text-sm text-primary">
                {PROFILE.github.username}
              </span>
            </span>
            <HiArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" aria-hidden />
          </SocialIconLink>
        </li>

        <li>
          <SocialIconLink
            href={linkedinLink.href}
            label={`LinkedIn profile of ${PROFILE.fullName}`}
            title={linkedinLink.title}
            className="group flex h-auto w-full items-center gap-3 rounded-lg px-1 py-1 text-secondary hover:text-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08]">
              <FaLinkedin className="h-4 w-4" aria-hidden />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-secondary/80">
                LinkedIn
              </span>
              <span className="block truncate font-sans text-sm text-primary">Connect on LinkedIn</span>
            </span>
            <HiArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" aria-hidden />
          </SocialIconLink>
        </li>
      </ul>
    </aside>
  )
}
