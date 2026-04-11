import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  variant?: 'line' | 'dots' | 'ornament'
}

export default function Divider({ className, variant = 'line' }: DividerProps) {
  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center justify-center gap-2 my-8', className)}>
        <span className="w-1 h-1 rounded-full bg-accent" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-1 h-1 rounded-full bg-accent" />
      </div>
    )
  }

  if (variant === 'ornament') {
    return (
      <div className={cn('flex items-center justify-center gap-4 my-10', className)}>
        <div className="h-px w-16 bg-border-soft" />
        <span className="text-accent text-xs tracking-widest">✦</span>
        <div className="h-px w-16 bg-border-soft" />
      </div>
    )
  }

  return (
    <div className={cn('w-12 h-px bg-accent mx-auto my-6', className)} />
  )
}
