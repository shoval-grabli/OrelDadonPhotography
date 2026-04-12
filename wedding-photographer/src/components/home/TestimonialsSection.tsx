'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

const SLIDE_INTERVAL = 7000

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const isPausedRef = useRef(false)
  const total = testimonials.length

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + total) % total)
  }, [total])

  // Auto-advance via interval — reliable, independent of current state
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrent(c => (c + 1) % total)
      }
    }, SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [total])

  const getIndex = (offset: number) => (current + offset + total) % total

  return (
    <section
      className="relative pt-24 pb-36 md:pt-32 md:pb-48 bg-bg-section overflow-hidden"
      onMouseEnter={() => { isPausedRef.current = true }}
      onMouseLeave={() => { isPausedRef.current = false }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light">
            זוגות ממליצים
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-stretch gap-6 justify-center">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="hidden md:flex self-center shrink-0 w-10 h-10 rounded-full bg-bg-main border border-border-soft items-center justify-center text-text-secondary hover:text-button-soft hover:border-button-soft transition-all duration-200 shadow-sm z-10"
            aria-label="הקודם"
          >
            <ChevronRight size={18} />
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map(offset => {
              const t = testimonials[getIndex(offset)]
              const isCenter = offset === 1
              return (
                <div
                  key={getIndex(offset)}
                  className={`bg-bg-main border border-border-soft p-8 flex flex-col gap-6 transition-opacity duration-500 ${
                    isCenter ? 'opacity-100' : 'opacity-50 hidden md:flex'
                  }`}
                >
                  <span className="font-display text-5xl text-accent leading-none select-none">&ldquo;</span>
                  <p className="font-sans text-text-primary font-light leading-relaxed text-sm flex-1">
                    {t.quote}
                  </p>
                  <div className="border-t border-border-soft pt-5">
                    <p className="font-sans font-medium text-text-primary text-sm">{t.names}</p>
                    <p className="font-sans text-text-secondary text-xs mt-0.5">
                      {t.year}{t.location ? ` · ${t.location}` : ''}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="hidden md:flex self-center shrink-0 w-10 h-10 rounded-full bg-bg-main border border-border-soft items-center justify-center text-text-secondary hover:text-button-soft hover:border-button-soft transition-all duration-200 shadow-sm z-10"
            aria-label="הבא"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-bg-main border border-border-soft flex items-center justify-center text-text-secondary hover:text-button-soft transition-colors"
            aria-label="הקודם"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-bg-main border border-border-soft flex items-center justify-center text-text-secondary hover:text-button-soft transition-colors"
            aria-label="הבא"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-button-soft w-4' : 'bg-border-soft w-1.5'
              }`}
              aria-label={`המלצה ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
