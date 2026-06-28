import { gsap } from '@/config/gsap'

export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.8,
} as const

export function fadeInUp(target: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(target, { y: 60, opacity: 0, ...gsapDefaults, ...vars })
}

export function fadeInDown(target: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(target, { y: -60, opacity: 0, ...gsapDefaults, ...vars })
}

export function revealText(target: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(target, { y: '100%', opacity: 0, stagger: 0.04, ...gsapDefaults, ...vars })
}

export function blurReveal(target: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(target, { opacity: 0, filter: 'blur(12px)', ...gsapDefaults, ...vars })
}

export function parallax(target: gsap.DOMTarget, vars?: gsap.TweenVars) {
  return gsap.to(target, {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: { trigger: target, scrub: true },
    ...vars,
  })
}
