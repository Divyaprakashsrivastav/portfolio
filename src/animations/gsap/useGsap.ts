/**
 * Re-export @gsap/react hook with GSAP plugins pre-registered.
 * Usage: useGSAP(() => { gsap.to(...) }, { scope: ref })
 */
import { useGSAP } from '@gsap/react'
import '@/config/gsap'

export { useGSAP }
