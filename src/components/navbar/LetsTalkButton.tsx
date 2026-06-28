import { type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useLenisInstance } from '@/context/LenisContext'
import { scrollToSection } from '@/utils'
import { NAVBAR_OFFSET } from '@/constants'
import { cn } from '@/utils'
import { MagneticWrapper } from './MagneticWrapper'

interface LetsTalkButtonProps {
  className?: string
  onClick?: () => void
}

export function LetsTalkButton({ className, onClick }: LetsTalkButtonProps) {
  const lenis = useLenisInstance()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection('contact', lenis, { offset: NAVBAR_OFFSET, duration: 1.2 })
    onClick?.()
  }

  return (
    <MagneticWrapper strength={0.18}>
      <motion.a
        href="#contact"
        onClick={handleClick}
        title="Let's Talk — go to contact section"
        className={cn(
          'group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full px-5',
          'text-sm font-semibold text-primary',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className,
        )}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent to-accent-blue opacity-100 transition-opacity duration-300"
        />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-[#7b73ff] to-accent-blue opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"
        />
        <span className="relative z-10">Let&apos;s Talk</span>
        <HiArrowUpRight
          className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </motion.a>
    </MagneticWrapper>
  )
}
