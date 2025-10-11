'use client'

import React from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">An unexpected error occurred.</p>
            {process.env.NODE_ENV === 'development' && (
              <pre className="mt-2 p-3 bg-muted rounded-md text-xs overflow-auto text-left">
                {error?.message}
              </pre>
            )}
            <div className="space-x-3">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors"
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
