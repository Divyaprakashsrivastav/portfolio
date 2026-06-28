import { lazy, Suspense } from 'react'
import { AppProviders } from '@/providers'
import { SkipLink, Footer, SeoHead } from '@/components/layout'
import { Navbar, ScrollProgressBar } from '@/components/navbar'
import {
  Hero,
  About,
  Experience,
  FeaturedWorkSection,
  CurrentlyBuildingSection,
  ContactSection,
} from '@/sections'

const TechnologyEcosystemSection = lazy(() =>
  import('@/sections/TechnologyEcosystem').then((m) => ({
    default: m.TechnologyEcosystemSection,
  })),
)

function App() {
  return (
    <AppProviders>
      <SeoHead />
      <SkipLink />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="relative overflow-x-clip bg-background text-primary">
        <Hero />
        <About />
        <Experience />
        <FeaturedWorkSection />
        <CurrentlyBuildingSection />
        <Suspense fallback={<div className="min-h-[50vh] border-t border-white/[0.06]" aria-hidden />}>
          <TechnologyEcosystemSection />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </AppProviders>
  )
}

export default App
