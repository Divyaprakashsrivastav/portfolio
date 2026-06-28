import { type ReactNode } from 'react'
import { cn } from '@/utils'

interface SocialIconLinkProps {
  href: string
  label: string
  title: string
  external?: boolean
  children: ReactNode
  className?: string
}

export function SocialIconLink({
  href,
  label,
  title,
  external = true,
  children,
  className,
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={title}
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'transition-colors hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
        className,
      )}
    >
      {children}
    </a>
  )
}
