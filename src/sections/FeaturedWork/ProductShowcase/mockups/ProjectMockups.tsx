/** Desktop UI mockups — one per project personality */

import { ZuraaLogo } from '@/components/brand'

export function ZuraaDesktop() {
  return (
    <div className="aspect-[16/10] bg-[#0f0e14] p-2.5 text-[0px] sm:p-3">
      <div className="flex h-full flex-col gap-2 sm:gap-2.5">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <ZuraaLogo size="mockup" />
          </div>
          <div className="flex flex-1 items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1 sm:max-w-[55%]">
            <span className="text-[8px] text-white/35 sm:text-[9px]">Search services near you…</span>
          </div>
          <span className="hidden h-5 w-5 rounded-full bg-white/[0.06] sm:block" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1fr_0.85fr] gap-2 sm:gap-2.5">
          {/* Main */}
          <div className="flex min-w-0 flex-col gap-2">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
              {[
                { v: '2.4k', l: 'Bookings' },
                { v: '186', l: 'Providers' },
                { v: '4.9', l: 'Rating' },
              ].map((s) => (
                <div key={s.l} className="rounded-md border border-white/[0.06] bg-white/[0.03] p-1.5 sm:p-2">
                  <p className="font-display text-[10px] font-bold text-white sm:text-xs">{s.v}</p>
                  <p className="font-mono text-[7px] text-white/40 sm:text-[8px]">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="grid grid-cols-4 gap-1">
              {['Clean', 'Repair', 'Beauty', 'Tech'].map((c) => (
                <div key={c} className="rounded-md bg-accent/15 py-1.5 text-center sm:py-2">
                  <p className="font-sans text-[7px] font-medium text-accent sm:text-[8px]">{c}</p>
                </div>
              ))}
            </div>

            {/* Booking cards */}
            <div className="grid flex-1 grid-cols-2 gap-1.5 sm:gap-2">
              {[
                { t: 'Home Cleaning', p: '₹499', s: 'Confirmed' },
                { t: 'AC Repair', p: '₹799', s: 'Today 4pm' },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.03] p-1.5 sm:p-2"
                >
                  <div>
                    <p className="font-sans text-[8px] font-medium text-white sm:text-[9px]">{b.t}</p>
                    <p className="mt-0.5 font-mono text-[7px] text-white/45">{b.p}</p>
                  </div>
                  <span className="mt-1 w-fit rounded-full bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[6px] text-emerald-400 sm:text-[7px]">
                    {b.s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Provider panel */}
          <div className="flex flex-col gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-1.5 sm:gap-2 sm:p-2">
            <div className="flex items-center gap-1.5">
              <span className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-accent/60 to-accent-blue/40 sm:h-7 sm:w-7" />
              <div className="min-w-0">
                <p className="truncate font-sans text-[8px] font-semibold text-white sm:text-[9px]">Priya Sharma</p>
                <p className="font-mono text-[6px] text-white/40 sm:text-[7px]">Verified Provider</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[7px] text-amber-400 sm:text-[8px]">★ 4.9</span>
              <span className="font-mono text-[6px] text-white/35 sm:text-[7px]">· Delhi NCR</span>
            </div>
            <div className="mt-auto rounded-md bg-accent px-2 py-1 text-center sm:py-1.5">
              <span className="font-sans text-[7px] font-semibold text-white sm:text-[8px]">Book Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ZuraaMobile() {
  return (
    <div className="flex aspect-[9/19] flex-col bg-[#0f0e14] p-2">
      <div className="mx-auto mb-2 h-1 w-6 shrink-0 rounded-full bg-black/50" />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between px-0.5">
          <ZuraaLogo size="mockupNav" />
          <span className="h-3 w-3 rounded-full bg-white/[0.06]" aria-hidden />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 py-3">
          <ZuraaLogo size="splash" />
          <p className="font-mono text-[6px] tracking-[0.14em] text-white/35 sm:text-[7px]">
            Services, simplified
          </p>
        </div>
        <div className="mt-auto space-y-1.5">
          {['Cleaning · Confirmed', 'Plumber · 2pm'].map((b) => (
            <div key={b} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1.5">
              <p className="font-sans text-[7px] text-white/90">{b}</p>
            </div>
          ))}
          <div className="rounded-md bg-accent/90 py-1.5 text-center">
            <span className="font-sans text-[7px] font-semibold text-white">New Booking</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CorporateDesktop() {
  return (
    <div className="aspect-[16/10] bg-[#060d18] p-2.5 sm:p-3">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <span className="font-display text-[9px] font-bold tracking-wide text-white sm:text-[10px]">ASTRENOX</span>
          <div className="flex gap-2">
            {['Solutions', 'About', 'Contact'].map((n) => (
              <span key={n} className="font-sans text-[7px] text-white/50 sm:text-[8px]">{n}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center py-2">
          <p className="font-display text-[11px] font-bold leading-tight text-white sm:text-sm">
            Engineering the
            <br />
            <span className="text-[#4da8ff]">future of enterprise</span>
          </p>
          <p className="mt-1.5 max-w-[80%] font-sans text-[7px] leading-relaxed text-white/45 sm:text-[8px]">
            Trusted technology partner for scalable digital transformation.
          </p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-md bg-white px-2 py-1 font-sans text-[7px] font-semibold text-[#060d18] sm:text-[8px]">
              Get Started
            </span>
            <span className="rounded-md border border-white/20 px-2 py-1 font-sans text-[7px] text-white/80 sm:text-[8px]">
              Learn More
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 border-t border-white/[0.06] pt-2">
          {['99.9%', '50+', '24/7'].map((v, i) => (
            <div key={v} className="text-center">
              <p className="font-display text-[9px] font-bold text-[#4da8ff] sm:text-[10px]">{v}</p>
              <p className="font-mono text-[6px] text-white/35 sm:text-[7px]">
                {['Uptime', 'Clients', 'Support'][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CorporateMobile() {
  return (
    <div className="aspect-[9/19] bg-[#060d18] p-2">
      <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-black/50" />
      <p className="font-display text-[8px] font-bold text-[#4da8ff]">ASTRENOX</p>
      <p className="mt-2 font-sans text-[7px] leading-relaxed text-white/60">
        Enterprise solutions built for scale.
      </p>
    </div>
  )
}

export function HealthcareDesktop() {
  return (
    <div className="aspect-[16/10] bg-[#081210] p-2.5 sm:p-3">
      <div className="flex h-full gap-2">
        <div className="flex w-[28%] flex-col gap-1.5 border-r border-white/[0.06] pr-2">
          {['Dashboard', 'Patients', 'Rx', 'Schedule'].map((item, i) => (
            <span
              key={item}
              className={`rounded-md px-1.5 py-1 font-sans text-[7px] sm:text-[8px] ${
                i === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'text-white/40'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <p className="font-display text-[9px] font-bold text-white sm:text-[10px]">Patient Overview</p>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-1.5 sm:p-2">
              <p className="font-mono text-[7px] text-emerald-400/80 sm:text-[8px]">Next Visit</p>
              <p className="font-sans text-[8px] font-medium text-white sm:text-[9px]">Today, 3:00 PM</p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-1.5 sm:p-2">
              <p className="font-mono text-[7px] text-white/40 sm:text-[8px]">E-Prescription</p>
              <p className="font-sans text-[8px] text-white/80 sm:text-[9px]">Ready to send</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-emerald-500/30 sm:h-6 sm:w-6" />
              <div>
                <p className="font-sans text-[8px] font-medium text-white sm:text-[9px]">Dr. Mehta</p>
                <p className="font-mono text-[6px] text-white/40 sm:text-[7px]">Cardiology · Video Call</p>
              </div>
            </div>
            <div className="mt-2 h-8 rounded-md bg-emerald-500/15 sm:h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HealthcareMobile() {
  return (
    <div className="aspect-[9/19] bg-[#081210] p-2">
      <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-black/50" />
      <p className="font-sans text-[7px] text-emerald-400">Upcoming</p>
      <p className="mt-1 font-display text-[8px] font-bold text-white">Video Consult</p>
      <div className="mt-2 rounded-md bg-emerald-500/20 py-2 text-center">
        <span className="font-sans text-[7px] font-semibold text-emerald-300">Join Call</span>
      </div>
    </div>
  )
}

export function CreativeDesktop() {
  return (
    <div className="aspect-[16/10] bg-[#120818] p-2 sm:p-2.5">
      <div className="flex h-full gap-2">
        <div className="flex w-8 flex-col gap-1.5 sm:w-10">
          {['#7C5CFC', '#FF6B9D', '#4DA8FF', '#34D399'].map((c) => (
            <span key={c} className="h-3 w-3 rounded-full sm:h-4 sm:w-4" style={{ background: c }} />
          ))}
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a0610]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" aria-hidden>
            <path
              d="M20,80 Q60,20 100,60 T180,40"
              fill="none"
              stroke="rgba(124,92,252,0.7)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M30,90 Q80,50 120,70"
              fill="none"
              stroke="rgba(255,107,157,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-1.5 py-0.5 backdrop-blur-sm">
            <p className="font-mono text-[6px] text-white/60 sm:text-[7px]">Hand tracking active</p>
          </div>
        </div>
        <div className="hidden w-[22%] flex-col gap-1 sm:flex">
          <p className="font-mono text-[7px] text-white/40">Brush</p>
          <div className="flex-1 rounded-md border border-white/[0.06] bg-white/[0.03]" />
        </div>
      </div>
    </div>
  )
}

export function CreativeMobile() {
  return (
    <div className="aspect-[9/19] bg-[#120818] p-2">
      <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-black/50" />
      <div className="h-16 rounded-md border border-accent/30 bg-[#0a0610]">
        <svg className="h-full w-full" viewBox="0 0 60 64" aria-hidden>
          <path d="M8,48 Q30,16 52,32" fill="none" stroke="#7C5CFC" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

export function WeatherDesktop() {
  return (
    <div className="aspect-[16/10] bg-[#081018] p-2.5 sm:p-3">
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-display text-[9px] font-bold text-white sm:text-[10px]">Delhi, IN</p>
          <span className="font-mono text-[7px] text-white/40 sm:text-[8px]">Live</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-bold text-white sm:text-3xl">28°</span>
          <span className="font-sans text-[8px] text-white/50 sm:text-[9px]">Partly Cloudy</span>
        </div>
        <div className="grid flex-1 grid-cols-4 gap-1 content-end sm:gap-1.5">
          {[
            { d: 'Mon', t: '29°' },
            { d: 'Tue', t: '31°' },
            { d: 'Wed', t: '27°' },
            { d: 'Thu', t: '26°' },
          ].map((day) => (
            <div
              key={day.d}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-1.5 text-center sm:p-2"
            >
              <p className="font-mono text-[6px] text-white/40 sm:text-[7px]">{day.d}</p>
              <p className="font-display text-[9px] font-semibold text-[#4da8ff] sm:text-[10px]">{day.t}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[
            { l: 'Humidity', v: '62%' },
            { l: 'Wind', v: '12 km/h' },
            { l: 'UV', v: 'Moderate' },
          ].map((m) => (
            <div key={m.l} className="rounded-md bg-white/[0.04] px-1.5 py-1 sm:px-2">
              <p className="font-mono text-[6px] text-white/35 sm:text-[7px]">{m.l}</p>
              <p className="font-sans text-[7px] font-medium text-white/80 sm:text-[8px]">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function WeatherMobile() {
  return (
    <div className="aspect-[9/19] bg-[#081018] p-2">
      <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-black/50" />
      <p className="font-display text-xl font-bold text-white">28°</p>
      <p className="font-sans text-[7px] text-white/50">Delhi</p>
    </div>
  )
}
