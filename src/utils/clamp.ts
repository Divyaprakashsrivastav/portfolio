/**
 * Generate a CSS clamp() value for fluid typography/spacing.
 * @example clamp(16, '2vw', 24) → 'clamp(16px, 2vw, 24px)'
 */
export function clamp(min: number, preferred: string, max: number, unit = 'px'): string {
  return `clamp(${min}${unit}, ${preferred}, ${max}${unit})`
}
