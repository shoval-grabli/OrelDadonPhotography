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
      className="relative pt-16 pb-20 md:pt-32 md:pb-40 bg-bg-section overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="mb-10 md:mb-16 text-center">
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
                  className={[
                    'relative bg-bg-main flex flex-col gap-5 overflow-hidden',
                    'transition-all duration-300 ease-in-out',
                    isCenter
                      ? [
                          'opacity-100 p-8',
                          'border border-accent/30',
                          'shadow-[0_6px_28px_rgba(78,67,61,0.10)]',
                          'hover:scale-[1.015]',
                          'hover:shadow-[0_10px_36px_rgba(78,67,61,0.15)]',
                        ].join(' ')
                      : 'opacity-40 hidden md:flex p-8 border border-border-soft shadow-[0_2px_10px_rgba(78,67,61,0.05)]',
                  ].join(' ')}
                >
                  {/* Background decorative quote mark */}
                  <span className="absolute -top-3 right-4 font-display text-[6.5rem] leading-none text-accent/[0.09] select-none pointer-events-none">
                    &ldquo;
                  </span>

                  {/* Quote text */}
                  <p className="relative font-sans text-text-secondary font-light leading-relaxed text-sm flex-1 pt-3 whitespace-pre-line">
                    {t.quote}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-border-soft pt-4 flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-bg-section border border-border-soft flex items-center justify-center shrink-0">
                      <span className="font-sans text-[10px] font-semibold text-text-secondary tracking-wide">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm leading-tight">
                        {t.names}
                      </p>
                      <p className="font-sans text-text-secondary text-xs mt-0.5">
                        {t.date}{t.venue ? ` · ${t.venue}` : ''}
                      </p>
                    </div>
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
