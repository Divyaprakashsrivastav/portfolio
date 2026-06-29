import type { FeaturedProject } from '../../constants'
import {
  CorporateDesktop,
  CorporateMobile,
  CreativeDesktop,
  CreativeMobile,
  HealthcareDesktop,
  HealthcareMobile,
  WeatherDesktop,
  WeatherMobile,
  ZuraaDesktop,
  ZuraaMobile,
} from './ProjectMockups'

export function getDesktopMockup(project: FeaturedProject) {
  switch (project.visual.personality) {
    case 'marketplace':
      return <ZuraaDesktop />
    case 'corporate':
      return <CorporateDesktop />
    case 'healthcare':
      return <HealthcareDesktop />
    case 'creative':
      return <CreativeDesktop />
    case 'data':
      return <WeatherDesktop />
    default:
      return <ZuraaDesktop />
  }
}

export function getMobileMockup(project: FeaturedProject) {
  switch (project.visual.personality) {
    case 'marketplace':
      return <ZuraaMobile />
    case 'corporate':
      return <CorporateMobile />
    case 'healthcare':
      return <HealthcareMobile />
    case 'creative':
      return <CreativeMobile />
    case 'data':
      return <WeatherMobile />
    default:
      return <ZuraaMobile />
  }
}

export function getFloatingChips(project: FeaturedProject) {
  switch (project.id) {
    case 'zuraa':
      return [
        { label: 'Booking Confirmed', sublabel: 'Just now', className: 'left-[4%] top-[8%]' },
        { label: '4.9 Rating', className: 'right-[6%] top-[14%]' },
        { label: 'New Provider', sublabel: '+12 today', className: 'left-[8%] bottom-[18%]' },
      ]
    case 'astrenox':
      return [
        { label: '99.9% Uptime', className: 'left-[5%] top-[10%]' },
        { label: 'SEO Ready', className: 'right-[5%] top-[12%]' },
      ]
    case 'telehealth':
      return [
        { label: 'Rx Sent', sublabel: 'E-Prescription', className: 'right-[4%] top-[10%]' },
        { label: 'Video Call', className: 'left-[6%] bottom-[20%]' },
      ]
    case 'ai-painter':
      return [
        { label: 'Hand Tracking', sublabel: 'Active', className: 'right-[5%] top-[12%]' },
        { label: 'Real-time', className: 'left-[5%] bottom-[22%]' },
      ]
    case 'weather':
      return [
        { label: 'Live Data', className: 'left-[5%] top-[10%]' },
        { label: '28°C Now', className: 'right-[4%] top-[14%]' },
      ]
    default:
      return []
  }
}
