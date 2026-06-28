export type TextSegment = {
  char: string
  key: string
}

/**
 * Split text into segments for letter/word reveal animations.
 * Preserves spaces as non-breaking for layout stability.
 */
export function formatText(
  text: string,
  mode: 'letter' | 'word' = 'letter',
): TextSegment[] {
  if (mode === 'word') {
    return text.split(' ').map((word, i) => ({
      char: word,
      key: `word-${i}-${word}`,
    }))
  }

  return text.split('').map((char, i) => ({
    char: char === ' ' ? '\u00A0' : char,
    key: `char-${i}-${char}`,
  }))
}
