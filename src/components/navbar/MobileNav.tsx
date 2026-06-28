import { useEffect, useRef, type TouchEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants'
import { mobileMenuVariants, mobileLinkVariants, mobileOverlayVariants } from '@/animations/navbar'
import { NavItem } from './NavItem'
import { CTAButtons } from './CTAButtons'
import { cn } from '@/utils'

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiOutlineMail,
} as const

interface MobileNavProps {
  isOpen: boolean
  activeId: string
  onClose: () => void
}

export function MobileNav({ isOpen, activeId, onClose }: MobileNavProps) {
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!isOpen) return

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    if (deltaY > 72) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 lg:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.div
            className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
            variants={mobileOverlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
          />

          <div
            className="relative flex h-full flex-col items-center justify-between px-6 py-10 sm:px-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center gap-2">
              <nav aria-label="Mobile primary navigation" className="flex flex-col items-center gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.id}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <NavItem
                      label={link.label}
                      href={link.href}
                      id={link.id}
                      isActive={activeId === link.id}
                      onClick={onClose}
                      size="large"
                    />
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              className="flex w-full max-w-md flex-col items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <CTAButtons onLetsTalkClick={onClose} showThemeToggle />

              <div className="flex items-center gap-4 sm:gap-6">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.icon]
                  return (
                    <a
                      key={social.icon}
                      href={social.href}
                      target={social.icon === 'email' ? undefined : '_blank'}
                      rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
                      aria-label={social.label}
                      title={social.title}
                      className={cn(
                        'flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full',
                        'border border-border text-secondary transition-all duration-200',
                        'hover:border-primary/25 hover:text-primary hover:bg-glass',
                        'active:scale-[0.96] active:opacity-80',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
