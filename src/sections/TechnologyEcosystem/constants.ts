/** Technology Ecosystem — node data */

export interface Technology {
  name: string
  projects: readonly string[]
  since?: string
  related?: readonly string[]
}

export interface EcosystemNode {
  id: string
  label: string
  /** Position angle in degrees (0 = right, 90 = bottom) */
  angle: number
  technologies: readonly Technology[]
}

export const ECOSYSTEM = {
  title: 'Technology Ecosystem',
  coreLabel: 'Engineering Core',
} as const

export const ECOSYSTEM_NODES: readonly EcosystemNode[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    angle: 270,
    technologies: [
      { name: 'React', projects: ['Zuraa', 'Astrenox', 'Telehealth'], since: '2023', related: ['Next.js', 'TypeScript'] },
      { name: 'Next.js', projects: ['Zuraa', 'Astrenox', 'Telehealth'], since: '2024', related: ['React', 'Vercel'] },
      { name: 'TypeScript', projects: ['Portfolio', 'Zuraa', 'Astrenox'], since: '2023', related: ['React'] },
      { name: 'Tailwind CSS', projects: ['Portfolio', 'All Web Products'], since: '2023', related: ['React'] },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    angle: 330,
    technologies: [
      { name: 'Node.js', projects: ['Zuraa', 'Telehealth'], since: '2023', related: ['Express', 'REST API'] },
      { name: 'Express', projects: ['Telehealth', 'Weather App'], since: '2023', related: ['Node.js'] },
      { name: 'Python', projects: ['AI Virtual Painter', 'Zuraa'], since: '2022', related: ['OpenCV', 'Streamlit'] },
      { name: 'REST API', projects: ['Telehealth', 'Weather App'], since: '2023', related: ['Node.js', 'Express'] },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    angle: 30,
    technologies: [
      { name: 'OpenCV', projects: ['AI Virtual Painter'], since: '2024', related: ['MediaPipe', 'Python'] },
      { name: 'MediaPipe', projects: ['AI Virtual Painter'], since: '2024', related: ['OpenCV'] },
      { name: 'Machine Learning', projects: ['Academic Projects', 'Zuraa Features'], since: '2023', related: ['Python'] },
      { name: 'Computer Vision', projects: ['AI Virtual Painter'], since: '2024', related: ['OpenCV', 'MediaPipe'] },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    angle: 150,
    technologies: [
      { name: 'MySQL', projects: ['Telehealth', 'Hospital Management'], since: '2023', related: ['SQL'] },
      { name: 'PostgreSQL', projects: ['Zuraa'], since: '2024', related: ['SQL'] },
      { name: 'MongoDB', projects: ['API Prototypes'], since: '2023', related: ['Node.js'] },
      { name: 'SQL', projects: ['Telehealth', 'Zuraa', 'Hospital Management'], since: '2022', related: ['MySQL'] },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    angle: 210,
    technologies: [
      { name: 'Git', projects: ['Every Project'], since: '2022', related: ['GitHub'] },
      { name: 'Vercel', projects: ['Astrenox', 'Portfolio', 'Telehealth'], since: '2023', related: ['Next.js'] },
      { name: 'Linux', projects: ['Dev Environments', 'Deployment'], since: '2022' },
      { name: 'Streamlit', projects: ['Weather Dashboard', 'AI Demos'], since: '2024', related: ['Python'] },
    ],
  },
] as const

/** Orbital radius as fraction of container min dimension */
export const ORBIT_RADIUS = 0.38
