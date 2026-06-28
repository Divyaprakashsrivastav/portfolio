/** Featured Work — case study data */

export interface CaseStudyBlocks {
  problem: string
  approach: string
  solution: string
  result: string
}

export interface ProjectHighlights {
  problem: string
  solution: string
  impact: string
}

export interface ProjectMetric {
  label: string
  value?: number
  suffix?: string
  display?: string
}

export interface FeaturedProject {
  id: string
  title: string
  category: string
  year: string
  description: string
  highlights: ProjectHighlights
  caseStudy: CaseStudyBlocks
  technologies: readonly string[]
  metrics: readonly ProjectMetric[]
  github?: string
  demo?: string
  visual: {
    gradient: string
    accent: string
    glow: string
    label: string
    personality: 'marketplace' | 'corporate' | 'healthcare' | 'creative' | 'data'
    desktopImage?: string
    mobileImage?: string
  }
}

export const FEATURED_WORK = {
  title: 'Featured Work',
  subtitle: ['Real problems.', 'Thoughtful solutions.', 'Built with modern engineering.'],
} as const

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    id: 'zuraa',
    title: 'Zuraa',
    category: 'Founder Project · Service Marketplace',
    year: '2026',
    description:
      'A two-sided marketplace connecting customers with trusted service providers — designed, built and led from zero.',
    highlights: {
      problem: 'Local services are fragmented and lack trust between customers and providers.',
      solution: 'A marketplace with clear discovery, booking flows and provider verification.',
      impact: 'Validating real demand while building a scalable product and operations foundation.',
    },
    caseStudy: {
      problem: 'Finding reliable services locally is slow, inconsistent and low on trust.',
      approach: 'Mapped both sides of the marketplace and architected for growth from day one.',
      solution: 'Full-stack platform with search, profiles, booking and admin tooling.',
      result: 'Live founder-led product with a clear path to marketplace scale.',
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Tailwind'],
    metrics: [
      { label: 'Codebase', value: 10000, suffix: '+' },
      { label: 'Stack', display: 'Full Stack' },
      { label: 'Product', display: 'AI Powered' },
      { label: 'Ship', display: 'Production Ready' },
    ],
    // TODO: Add Zuraa repository URL when the private repo is published
    demo: undefined,
    visual: {
      gradient: 'from-[#1a1033] via-[#2a1a5c] to-[#0a0a0c]',
      accent: 'rgba(124,92,252,0.45)',
      glow: 'rgba(124,92,252,0.12)',
      label: 'Provider Dashboard',
      personality: 'marketplace',
    },
  },
  {
    id: 'astrenox',
    title: 'Astrenox Corporate Website',
    category: 'Corporate Website',
    year: '2026',
    description:
      'A production corporate experience built for credibility, performance and search visibility.',
    highlights: {
      problem: 'The brand needed a fast, professional web presence that converts visitors.',
      solution: 'Next.js site with optimized performance, SEO and a refined design system.',
      impact: 'Production deployment with strong foundations for growth and content scale.',
    },
    caseStudy: {
      problem: 'Corporate sites often sacrifice speed and clarity for visual noise.',
      approach: 'Component-driven build with semantic structure and performance budgets.',
      solution: 'Responsive site with polished UI, SEO pipeline and deployment workflow.',
      result: 'Shipped corporate website ready for real business use.',
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SEO', 'Vercel'],
    metrics: [
      { label: 'Performance', display: 'Optimized' },
      { label: 'SEO', display: 'Production Ready' },
      { label: 'Delivery', display: 'Responsive' },
      { label: 'Stack', display: 'Next.js' },
    ],
    github: 'https://github.com/Divyaprakashsrivastav/astrenox-site',
    demo: 'https://astrenox-site.vercel.app',
    visual: {
      gradient: 'from-[#081220] via-[#0f2844] to-[#060608]',
      accent: 'rgba(77,168,255,0.38)',
      glow: 'rgba(77,168,255,0.1)',
      label: 'Homepage',
      personality: 'corporate',
    },
  },
  {
    id: 'telehealth',
    title: 'Telehealth Platform',
    category: 'Healthcare',
    year: '2025',
    description:
      'Virtual care and e-prescription workflows designed for patients and providers.',
    highlights: {
      problem: 'Care access is limited when every visit requires a physical clinic.',
      solution: 'Secure consultation flows with prescription management built in.',
      impact: 'Demonstrated end-to-end healthcare UX with real clinical use cases.',
    },
    caseStudy: {
      problem: 'Patients and doctors need digital tools that respect security and clarity.',
      approach: 'Role-based journeys with careful information hierarchy.',
      solution: 'Scheduling, consultation UI, e-prescriptions and provider dashboards.',
      result: 'Functional healthcare prototype ready for stakeholder demos.',
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'REST API', 'Tailwind'],
    metrics: [
      { label: 'API', display: 'Real-time API' },
      { label: 'Security', display: 'Role-based' },
      { label: 'Platform', display: 'Cross Platform' },
      { label: 'Domain', display: 'Healthcare' },
    ],
    github: 'https://github.com/Divyaprakashsrivastav/telehealth-and-e-prescription-',
    demo: 'https://telehealth-and-e-prescription.vercel.app',
    visual: {
      gradient: 'from-[#0a1a14] via-[#123528] to-[#060808]',
      accent: 'rgba(52,211,153,0.32)',
      glow: 'rgba(52,211,153,0.08)',
      label: 'Patient Portal',
      personality: 'healthcare',
    },
  },
  {
    id: 'ai-painter',
    title: 'AI Virtual Painter',
    category: 'Computer Vision',
    year: '2025',
    description:
      'Paint in the air — real-time hand tracking turns gestures into digital strokes.',
    highlights: {
      problem: 'Digital art tools often require hardware most people do not carry.',
      solution: 'Computer vision pipeline that maps hand gestures to canvas actions.',
      impact: 'Showcased real-time AI interaction with sub-second creative feedback.',
    },
    caseStudy: {
      problem: 'Gesture-based creation must feel immediate, not laggy or imprecise.',
      approach: 'OpenCV + MediaPipe landmarks fused with a lightweight render loop.',
      solution: 'Gesture drawing, color picking and smooth stroke interpolation.',
      result: 'Interactive demo proving creative AI engineering beyond chat interfaces.',
    },
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit', 'Computer Vision'],
    metrics: [
      { label: 'Core', display: 'AI Powered' },
      { label: 'Input', display: 'Hand Tracking' },
      { label: 'Latency', display: 'Real-time' },
      { label: 'Field', display: 'Computer Vision' },
    ],
    github: 'https://github.com/Divyaprakashsrivastav/ai-virtual-painter',
    demo: undefined,
    visual: {
      gradient: 'from-[#1a0824] via-[#3a1550] to-[#08060a]',
      accent: 'rgba(180,100,255,0.4)',
      glow: 'rgba(124,92,252,0.14)',
      label: 'Virtual Canvas',
      personality: 'creative',
    },
  },
  {
    id: 'weather',
    title: 'Weather Forecast Dashboard',
    category: 'Data Visualization',
    year: '2024',
    description:
      'Live weather data distilled into a calm, readable dashboard.',
    highlights: {
      problem: 'Most weather apps bury the forecast under ads and clutter.',
      solution: 'API-driven dashboard focused on clarity and at-a-glance insight.',
      impact: 'Clean data visualization with reliable real-time weather integration.',
    },
    caseStudy: {
      problem: 'Users need forecasts fast — not after navigating complex UI.',
      approach: 'Designed around a single data hierarchy with responsive breakpoints.',
      solution: 'Search, current conditions, extended forecast and location handling.',
      result: 'Polished dashboard demonstrating API craft and UI restraint.',
    },
    technologies: ['React', 'TypeScript', 'Weather API', 'Tailwind', 'REST API'],
    metrics: [
      { label: 'Data', display: 'Real-time API' },
      { label: 'UI', display: 'Dashboard' },
      { label: 'Layout', display: 'Responsive' },
      { label: 'Focus', display: 'Data Viz' },
    ],
    github: 'https://github.com/Divyaprakashsrivastav/weather-project',
    demo: 'https://weather-project-eksgqsvfysplhfignx5lvv.streamlit.app/',
    visual: {
      gradient: 'from-[#081018] via-[#142840] to-[#06080c]',
      accent: 'rgba(77,168,255,0.4)',
      glow: 'rgba(77,168,255,0.1)',
      label: 'Forecast View',
      personality: 'data',
    },
  },
] as const
