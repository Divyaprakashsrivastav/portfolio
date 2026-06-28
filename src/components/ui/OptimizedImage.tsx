import { type ImgHTMLAttributes } from 'react'
import { cn } from '@/utils'

export interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Priority loading for above-the-fold images */
  priority?: boolean
  /** Aspect ratio wrapper — e.g. "16/9", "1/1" */
  aspect?: string
}

/**
 * Image component with lazy loading, async decode, and optional aspect ratio.
 * Strategy: native loading="lazy" + decoding="async" for performance.
 */
export function OptimizedImage({
  className,
  priority = false,
  aspect,
  alt = '',
  ...props
}: OptimizedImageProps) {
  const img = (
    <img
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('h-full w-full object-cover', className)}
      {...props}
    />
  )

  if (aspect) {
    return (
      <div className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
        {img}
      </div>
    )
  }

  return img
}
