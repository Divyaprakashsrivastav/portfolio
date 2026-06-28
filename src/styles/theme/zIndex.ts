export const zIndex = {
  behind: -1,
  base: 0,
  raised: 1,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  cursor: 60,
  toast: 70,
} as const

export type ThemeZIndex = typeof zIndex
