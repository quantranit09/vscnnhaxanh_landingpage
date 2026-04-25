'use client'

import dynamic from 'next/dynamic'

// ssr: false is only allowed inside Client Components
const FloatingCTA = dynamic(
  () => import('./FloatingCTA').then(m => ({ default: m.FloatingCTA })),
  { ssr: false }
)

export function ClientFloatingCTA() {
  return <FloatingCTA />
}
