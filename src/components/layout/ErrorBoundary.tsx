import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

/** Catches render errors so the screen is not silently blank. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#050505',
            color: '#fff',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ color: '#ff4d4f', marginBottom: '1rem' }}>Something went wrong</h1>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: '#111',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #333',
              fontSize: '14px',
            }}
          >
            {this.state.error.message}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}
