import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'center' | 'start'
  className?: string
}

export default function SectionTitle({ label, title, subtitle, align = 'center', className }: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-start', className)}>
      {label && (
        <span className="block text-xs tracking-widest uppercase text-text-secondary font-sans mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-snug font-light">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary font-sans font-light leading-relaxed max-w-xl mx-auto text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
