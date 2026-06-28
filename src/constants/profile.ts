/** Personal & contact information — single source of truth */

export const PROFILE = {
  fullName: 'Divya Prakash Srivastav',
  email: 'restdivya123@gmail.com',
  github: {
    url: 'https://github.com/Divyaprakashsrivastav',
    username: 'Divyaprakashsrivastav',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/divya-srivastav-8aa929243',
  },
  titles: ['AI Engineer', 'Full Stack Developer', 'Founder @ Zuraa'] as const,
} as const

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://divyaprakashsrivastav.vercel.app'

export const SEO = {
  title: 'Divya Prakash Srivastav | AI Engineer | Full Stack Developer | Founder of Zuraa',
  description:
    'Portfolio of Divya Prakash Srivastav showcasing AI projects, software engineering, startup journey, and full-stack development experience.',
  ogImage: `${SITE_URL}/og-image.png`,
  twitterHandle: '@divyaprakash',
} as const
