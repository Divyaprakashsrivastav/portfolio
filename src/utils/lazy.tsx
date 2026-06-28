import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

type PreloadableComponent<T extends ComponentType<unknown>> = LazyExoticComponent<T> & {
  preload: () => Promise<{ default: T }>
}

/**
 * Lazy load with optional preload for route/section transitions.
 * Use for heavy sections (Three.js scenes, Lottie, etc.).
 */
export function lazyWithPreload<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
): PreloadableComponent<T> {
  const Component = lazy(factory) as PreloadableComponent<T>
  Component.preload = factory
  return Component
}
