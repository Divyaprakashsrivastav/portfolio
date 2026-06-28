import { Container } from '@/components/layout'
import { HeroMouseProvider } from './context/HeroMouseContext'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroButtons } from './HeroButtons'
import { HeroSocial } from './HeroSocial'
import { Portrait } from './Portrait'
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator'

export function Hero() {
  return (
    <HeroMouseProvider
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100dvh] items-center overflow-x-clip"
    >
      <HeroBackground />

      <Container className="relative z-10 w-full py-24 sm:py-28 md:py-36 lg:py-40">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_auto] lg:gap-24 xl:gap-28">
          {/* Text column — first on all breakpoints */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeroContent />
            <HeroButtons />
            <HeroSocial variant="inline" />
          </div>

          {/* Portrait — below text on mobile/tablet, right column on desktop */}
          <div className="mx-auto w-full max-w-[min(100%,420px)] md:max-w-[480px] lg:max-w-none lg:w-[min(40vw,540px)]">
            <Portrait />
          </div>
        </div>
      </Container>

      <HeroSocial variant="fixed" />
      <ScrollIndicator />
    </HeroMouseProvider>
  )
}
