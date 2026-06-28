/**
 * GSAP global configuration.
 * Registers plugins once — import this before any GSAP usage.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
})

export { gsap, ScrollTrigger }
