import { PROFILE } from './profile'

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Ecosystem', href: '#ecosystem', id: 'ecosystem' },
  { label: 'Building', href: '#founder', id: 'founder' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: PROFILE.github.url,
    icon: 'github' as const,
    title: `GitHub — ${PROFILE.github.username}`,
  },
  {
    label: 'LinkedIn',
    href: PROFILE.linkedin.url,
    icon: 'linkedin' as const,
    title: `LinkedIn — ${PROFILE.fullName}`,
  },
  {
    label: 'Email',
    href: `mailto:${PROFILE.email}`,
    icon: 'email' as const,
    title: `Email — ${PROFILE.email}`,
  },
] as const

export const NAVBAR_OFFSET = -96

export const CONTACT_EMAIL = PROFILE.email
