'use client'

import { useEffect, useState } from 'react'
import { motion, type MotionProps } from 'framer-motion'

/**
 * SafeMotion — a wrapper around framer-motion's motion.div
 * that ensures content is always visible on Safari/iOS.
 * 
 * Problem: Safari's IntersectionObserver sometimes fails to trigger
 * framer-motion's whileInView, leaving content stuck at opacity:0.
 * 
 * Solution: After mount, if the element hasn't animated within 1.5s,
 * force it visible via CSS. Also uses `amount: 0` for more aggressive
 * viewport detection.
 */

type SafeMotionProps = MotionProps & {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SafeMotionDiv({ children, className, style, ...motionProps }: SafeMotionProps) {
  const [forceVisible, setForceVisible] = useState(false)

  useEffect(() => {
    // Fallback: if animation hasn't triggered after 2s, force visible
    const timer = setTimeout(() => {
      setForceVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Patch viewport config for better Safari compat
  const patchedViewport = motionProps.viewport 
    ? { ...motionProps.viewport, amount: 0 as const }
    : undefined

  return (
    <motion.div
      {...motionProps}
      viewport={patchedViewport}
      className={className}
      style={{
        ...style,
        // If forced visible, override opacity and transform
        ...(forceVisible ? { opacity: 1, transform: 'none' } : {}),
      }}
    >
      {children}
    </motion.div>
  )
}
