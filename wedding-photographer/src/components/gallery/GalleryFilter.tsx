'use client'

import { cn } from '@/lib/utils'

const categories = [
  { value: 'all', label: 'הכל' },
  { value: 'ceremony', label: 'חופה' },
  { value: 'moments', label: 'רגעים' },
  { value: 'portraits', label: 'פורטרטים' },
  { value: 'reception', label: 'אירוע' },
  { value: 'details', label: 'פרטים' },
]

interface GalleryFilterProps {
  active: string
  onChange: (value: string) => void
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {categories.map(cat => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            'font-sans text-xs tracking-wider px-5 py-2.5 border transition-all duration-200',
            active === cat.value
              ? 'border-button-soft bg-button-soft text-white'
              : 'border-border-soft text-text-secondary hover:border-button-soft hover:text-text-primary bg-transparent'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
