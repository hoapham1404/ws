'use client' // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h1>Global Error</h1>
        <pre>{error.message}</pre>
        <button onClick={reset}>Reset</button>
      </body>
    </html>
  )
}
