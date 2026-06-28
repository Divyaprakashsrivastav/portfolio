import type { ComponentType } from 'react'
import {
  HiBuildingOffice2,
  HiCodeBracket,
  HiCube,
} from 'react-icons/hi2'

export type ExperienceIcon = 'founder' | 'engineering' | 'design'

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: readonly string[]
  technologies: readonly string[]
  achievements: readonly string[]
  logoInitials: string
  icon: ExperienceIcon
}

export const EXPERIENCE = {
  eyebrow: 'Experience',
  title: 'Engineering Journey',
  intro:
    'Every opportunity helped me build better products, stronger engineering skills, and leadership experience.',
} as const

export const EXPERIENCES: readonly ExperienceEntry[] = [
  {
    id: 'zuraa',
    role: 'Founder & CEO',
    company: 'Zuraa',
    period: 'May 2026 – Present',
    description:
      'Leading product development, business strategy, recruitment and operations for a service marketplace startup.',
    highlights: ['Startup', 'Leadership', 'Product Strategy', 'Team Management', 'Technology', 'Business'],
    technologies: ['React', 'Next.js', 'Python', 'AI', 'Git', 'Team Leadership'],
    achievements: [
      'Built Zuraa from concept into a live service marketplace',
      'Defined product strategy, positioning and go-to-market direction',
      'Led recruitment and cross-functional team operations',
      'Owned business development and day-to-day startup operations',
    ],
    logoInitials: 'Z',
    icon: 'founder',
  },
  {
    id: 'astrenox',
    role: 'Software Development Engineer Intern',
    company: 'Astrenox Technologies',
    period: '2026 – Present',
    description:
      'Developing production-ready modern web applications with React and Next.js — focused on performance optimization, deployment, SEO and polished UI.',
    highlights: ['React', 'Next.js', 'Performance', 'Deployment', 'SEO', 'Modern UI'],
    technologies: ['React', 'Next.js', 'TypeScript', 'SEO', 'Git', 'Vercel'],
    achievements: [
      'Shipped production-grade web applications used in real workflows',
      'Optimized performance for faster loads and smoother interactions',
      'Implemented deployment pipelines and production best practices',
      'Delivered responsive, modern UI aligned with product standards',
    ],
    logoInitials: 'A',
    icon: 'engineering',
  },
  {
    id: 'kfcl',
    role: '3D Design Intern',
    company: 'KFCL',
    period: '2025',
    description:
      'Worked on the Intelligent Farming Drone — contributing to mechanical design, prototyping and agriculture technology systems.',
    highlights: ['Fusion 360', 'Mechanical Design', 'Agriculture Technology', 'Autonomous Systems'],
    technologies: ['Fusion 360', 'Mechanical Design', 'CAD', 'Autonomous Systems', 'Prototyping'],
    achievements: [
      'Designed drone components in Fusion 360 for field-ready hardware',
      'Supported mechanical design for autonomous agriculture systems',
      'Collaborated on intelligent farming technology R&D',
      'Translated engineering concepts into manufacturable 3D models',
    ],
    logoInitials: 'K',
    icon: 'design',
  },
] as const

export const EXPERIENCE_ICONS: Record<
  ExperienceIcon,
  ComponentType<{ className?: string }>
> = {
  founder: HiBuildingOffice2,
  engineering: HiCodeBracket,
  design: HiCube,
}
