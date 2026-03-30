import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  badge?: string
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  badge,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {badge && (
        <span className="inline-block bg-[#2D8B3A]/10 text-[#2D8B3A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#4A5A4A] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
