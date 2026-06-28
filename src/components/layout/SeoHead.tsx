import { useEffect } from 'react'
import { APP, PROFILE, SEO, SITE_URL } from '@/constants'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.fullName,
  url: SITE_URL,
  email: PROFILE.email,
  jobTitle: PROFILE.titles[0],
  sameAs: [PROFILE.github.url, PROFILE.linkedin.url],
  description: SEO.description,
}

export function SeoHead() {
  useEffect(() => {
    document.title = SEO.title

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', SEO.description)
    setMeta('author', PROFILE.fullName)

    setMeta('og:title', SEO.title, true)
    setMeta('og:description', SEO.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', SITE_URL, true)
    setMeta('og:image', SEO.ogImage, true)
    setMeta('og:site_name', PROFILE.fullName, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', SEO.title)
    setMeta('twitter:description', SEO.description)
    setMeta('twitter:image', SEO.ogImage)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = SITE_URL

    let jsonLd = document.getElementById('structured-data') as HTMLScriptElement | null
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.id = 'structured-data'
      jsonLd.type = 'application/ld+json'
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(structuredData)
  }, [])

  return null
}

export { APP, SEO }
