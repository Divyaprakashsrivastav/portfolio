/** Skip to main content — accessibility landmark */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-primary focus:opacity-100 focus:shadow-lg"
    >
      Skip to main content
    </a>
  )
}
