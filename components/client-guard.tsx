'use client'

import { useEffect, useState } from 'react'

interface ClientGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * Client-side guard that handles hydration mismatches and runtime errors
 * Prevents client-side crashes from stale HTML/JS chunk mismatches
 */
export function ClientGuard({ children, fallback }: ClientGuardProps) {
  const [isHydrated, setIsHydrated] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Mark as hydrated after component mounts
    setIsHydrated(true)

    // Global error handler for unhandled promise rejections and errors
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      setHasError(true)

      // Prevent the default browser behavior
      event.preventDefault()
    }

    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error)
      setHasError(true)
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [])

  // Show fallback during hydration or on error
  if (!isHydrated || hasError) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return <>{children}</>
}
