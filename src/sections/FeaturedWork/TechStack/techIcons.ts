import type { IconType } from 'react-icons'
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { HiOutlineBolt } from 'react-icons/hi2'

const TECH_ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Tailwind: SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  'Git & GitHub': SiGit,
  Vercel: SiVercel,
  OpenCV: SiOpencv,
  Streamlit: SiStreamlit,
  'REST API': TbApi,
  'Weather API': TbApi,
  SEO: HiOutlineBolt,
  'Computer Vision': SiOpencv,
  'Machine Learning': SiPython,
  SQL: SiMysql,
  'MediaPipe': SiPython,
}

export function getTechIcon(name: string): IconType | null {
  return TECH_ICON_MAP[name] ?? null
}

export function getTechInitial(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase()
}
