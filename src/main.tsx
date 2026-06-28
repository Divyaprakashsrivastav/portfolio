import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/config/gsap'
import App from './App'
import '@/styles/globals.css'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error('Root element #root not found — check index.html')
}

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
