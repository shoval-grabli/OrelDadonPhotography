'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import type { GalleryImage } from '@/types'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex]
  const total = images.length

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total)
  }, [currentIndex, total, onNavigate])

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total)
  }, [currentIndex, total, onNavigate])

  useEffect(() => {
    document.body.classList.add('lightbox-open')
    return () => document.body.classList.remove('lightbox-open')
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      // In RTL: ArrowLeft = next, ArrowRight = prev (mirrors reading direction)
      if (e.key === 'ArrowLeft') goNext()
      if (e.key === 'ArrowRight') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, goNext, goPrev])

  // Touch swipe
  let touchStartX = 0
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX
    if (delta < -50) goNext()
    if (delta > 50) goPrev()
  }

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-text-primary/96 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        className="absolute top-5 start-5 text-white/70 hover:text-white transition-colors z-10 p-2"
        onClick={onClose}
        aria-label="סגור"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <span className="absolute top-6 end-6 text-white/50 text-xs font-sans z-10">
        {currentIndex + 1} / {total}
      </span>

      {/* Image */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-auto px-16 flex items-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority
          />
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 inset-x-0 text-center" onClick={e => e.stopPropagation()}>
        <p className="text-white/70 text-xs font-sans">
          {current.coupleNames} · {current.location} · {current.year}
        </p>
      </div>

      {/* Navigation — RTL: "next" is on the left side visually */}
      <button
        className="absolute start-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
        onClick={e => { e.stopPropagation(); goNext() }}
        aria-label="הבא"
      >
        <ChevronRight size={28} />
      </button>
      <button
        className="absolute end-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
        onClick={e => { e.stopPropagation(); goPrev() }}
        aria-label="הקודם"
      >
        <ChevronLeft size={28} />
      </button>
    </div>
  )
}
