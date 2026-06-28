import { PROFILE } from './profile'

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  /** Recipient — configure the same address in your EmailJS template */
  toEmail: PROFILE.email,
} as const

export function isEmailJsConfigured(): boolean {
  return Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey)
}
