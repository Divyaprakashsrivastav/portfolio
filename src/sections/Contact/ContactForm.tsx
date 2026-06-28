import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheck, HiExclamationCircle } from 'react-icons/hi2'
import { EMAILJS, isEmailJsConfigured } from '@/constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

interface FormFields {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!fields.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_PATTERN.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address'
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required'
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

export function ContactForm() {
  const reducedMotion = useReducedMotion()
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const configured = isEmailJsConfigured()

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const validation = validate(fields)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    if (!configured) {
      setStatus('error')
      setErrorMessage('Contact form is not configured yet. Please email directly.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: fields.name.trim(),
          from_email: fields.email.trim(),
          reply_to: fields.email.trim(),
          message: fields.message.trim(),
          to_email: EMAILJS.toEmail,
        },
        EMAILJS.publicKey,
      )
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email directly.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-surface px-6 py-14 text-center"
        role="status"
        aria-live="polite"
      >
        <motion.span
          initial={reducedMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent"
        >
          <HiCheck className="h-7 w-7" aria-hidden />
        </motion.span>
        <p className="mt-6 font-display text-xl font-semibold text-primary">Message sent</p>
        <p className="mt-2 max-w-xs font-sans text-sm text-secondary">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 font-sans text-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="font-sans text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => handleChange('name', e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={cn(
            'mt-2 w-full rounded-lg border bg-background px-4 py-3 font-sans text-sm text-primary',
            'placeholder:text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
            errors.name ? 'border-red-400/60' : 'border-white/[0.1]',
          )}
          placeholder="Your name"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              id="contact-name-error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 font-sans text-xs text-red-400"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="contact-email" className="font-sans text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={cn(
            'mt-2 w-full rounded-lg border bg-background px-4 py-3 font-sans text-sm text-primary',
            'placeholder:text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
            errors.email ? 'border-red-400/60' : 'border-white/[0.1]',
          )}
          placeholder="you@email.com"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              id="contact-email-error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 font-sans text-xs text-red-400"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="contact-message" className="font-sans text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(
            'mt-2 w-full resize-none rounded-lg border bg-background px-4 py-3 font-sans text-sm text-primary',
            'placeholder:text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
            errors.message ? 'border-red-400/60' : 'border-white/[0.1]',
          )}
          placeholder="Tell me about your project or opportunity..."
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              id="contact-message-error"
              role="alert"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 font-sans text-xs text-red-400"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {status === 'error' && errorMessage && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3"
          >
            <HiExclamationCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden />
            <p className="font-sans text-sm text-red-300">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-[15px] font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
