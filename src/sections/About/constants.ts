/** About section — single source of truth for copy & data */

export const ABOUT = {
  eyebrow: 'Who I Am',
  title: 'Beyond The Resume',
  story: [
    "I don't just build websites.",
    'I build products.',
    'I enjoy solving real-world problems using software, AI and design.',
    'Every project I build is focused on creating impact rather than simply completing assignments.',
  ],
} as const

export const ABOUT_TIMELINE = [
  {
    year: '2024',
    headline: 'Started B.Tech in Computer Science',
    detail: 'Specializing in AI & Data Science — laying the foundation for building intelligent systems.',
  },
  {
    year: '2025',
    headline: 'Built AI projects & competed nationally',
    detail:
      'Participated in Smart India Hackathon. Completed KFCL Internship. Turned ideas into working software.',
  },
  {
    year: '2026',
    headline: 'Founder & SDE Intern',
    detail:
      'Founded Zuraa. SDE Intern at Astrenox. Building modern web applications that ship with purpose.',
  },
] as const

export const ABOUT_IDENTITY = [
  {
    icon: 'graduation',
    label: 'Computer Science Student',
    description: 'AI & Data Science track',
  },
  {
    icon: 'ai',
    label: 'AI Enthusiast',
    description: 'LLMs, automation & intelligent products',
  },
  {
    icon: 'rocket',
    label: 'Startup Founder',
    description: 'Building Zuraa from the ground up',
  },
  {
    icon: 'code',
    label: 'Full Stack Developer',
    description: 'React, Node & production-grade systems',
  },
] as const

export const ABOUT_STATS = [
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Internships', value: 2 },
  { label: 'Leadership Roles', value: 3 },
  { label: 'Technologies', value: 18, suffix: '+' },
  { label: 'GitHub Repositories', value: 20, suffix: '+' },
] as const

export const ABOUT_ACHIEVEMENTS = [
  'Smart India Hackathon',
  'KFCL Intern',
  'Founder @ Zuraa',
  'Astrenox SDE',
] as const
