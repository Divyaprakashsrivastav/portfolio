import { motion } from 'framer-motion'
import { HiArrowDownTray } from 'react-icons/hi2'
import { RESUME_PATH, RESUME_DOWNLOAD_FILENAME } from '@/constants'
import { cn } from '@/utils'
import { MagneticWrapper } from './MagneticWrapper'

interface ResumeButtonProps {
  className?: string
}

export function ResumeButton({ className }: ResumeButtonProps) {
  return (
    <MagneticWrapper strength={0.15}>
      <motion.a
        href={RESUME_PATH}
        download={RESUME_DOWNLOAD_FILENAME}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume (PDF)"
        title="Download resume (PDF)"
        className={cn(
          'group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full px-4',
          'border border-border bg-glass text-sm font-medium text-primary',
          'transition-all duration-300',
          'hover:border-primary/25 hover:bg-primary/10 hover:shadow-glow-white',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
          className,
        )}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="relative z-10">Resume</span>
        <HiArrowDownTray
          className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
          aria-hidden
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </motion.a>
    </MagneticWrapper>
  )
}
