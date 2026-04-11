import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-medium tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-button-soft/50'

  const variants = {
    primary:
      'bg-button-soft text-white hover:bg-[#967d6d] border border-button-soft hover:border-[#967d6d]',
    secondary:
      'bg-transparent text-text-primary border border-border-soft hover:border-button-soft hover:text-button-soft',
    ghost:
      'bg-transparent text-text-secondary hover:text-button-soft underline underline-offset-4 decoration-border-soft hover:decoration-button-soft',
  }

  const sizes = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-sm px-7 py-3',
    lg: 'text-sm px-10 py-4',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
