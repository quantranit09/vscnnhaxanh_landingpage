import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  target,
  rel,
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'

  const variants = {
    primary:
      'bg-[#2D8B3A] text-white hover:bg-[#1E6B2A] active:scale-95 shadow-md hover:shadow-lg focus:ring-[#2D8B3A]',
    secondary:
      'bg-[#5AB645] text-white hover:bg-[#2D8B3A] active:scale-95 shadow-md focus:ring-[#5AB645]',
    outline:
      'border-2 border-[#2D8B3A] text-[#2D8B3A] hover:bg-[#2D8B3A] hover:text-white active:scale-95 focus:ring-[#2D8B3A]',
    ghost:
      'text-[#2D8B3A] hover:bg-[#F5F7F5] active:scale-95 focus:ring-[#2D8B3A]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
