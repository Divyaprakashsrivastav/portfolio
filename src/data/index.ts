/** Content data types — populated when building sections */

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
  image: string
}

export interface Skill {
  name: string
  category: string
}
