'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  location: string
  message: string
}

const initialState: FormData = {
  name: '',
  phone: '',
  email: '',
  date: '',
  location: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'שדה חובה'
    if (!form.phone.trim()) newErrors.phone = 'שדה חובה'
    if (!form.email.trim()) newErrors.email = 'שדה חובה'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'כתובת מייל לא תקינה'
    if (!form.date.trim()) newErrors.date = 'שדה חובה'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // In production: POST to Formspree / email service
    setSubmitted(true)
  }

  const inputClass = (field: keyof FormData) =>
    cn(
      'w-full bg-transparent border-b py-3 font-sans text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors duration-200 focus:border-button-soft',
      errors[field] ? 'border-red-400' : 'border-border-soft'
    )

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-3xl mb-4">🤍</div>
        <h3 className="font-display text-2xl text-text-primary font-light mb-3">תודה!</h3>
        <p className="font-sans text-text-secondary font-light text-sm leading-relaxed max-w-xs mx-auto">
          קיבלתי את הפנייה שלכם ואחזור אליכם תוך 24 שעות.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">שם מלא *</label>
          <input
            type="text"
            value={form.name}
            onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
            placeholder="ישראל ישראלי"
            className={inputClass('name')}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">טלפון *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })) }}
            placeholder="050-0000000"
            dir="ltr"
            className={cn(inputClass('phone'), 'text-end')}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1 font-sans">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">כתובת מייל *</label>
          <input
            type="email"
            value={form.email}
            onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
            placeholder="email@example.com"
            dir="ltr"
            className={cn(inputClass('email'), 'text-end')}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1 font-sans">{errors.email}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">תאריך החתונה *</label>
          <input
            type="date"
            value={form.date}
            onChange={e => { setForm(f => ({ ...f, date: e.target.value })); setErrors(er => ({ ...er, date: '' })) }}
            className={cn(inputClass('date'), 'cursor-pointer')}
          />
          {errors.date && <p className="text-red-400 text-xs mt-1 font-sans">{errors.date}</p>}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">מיקום האירוע</label>
        <input
          type="text"
          value={form.location}
          onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
          placeholder="תל אביב, יפו..."
          className={inputClass('location')}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs text-text-secondary font-sans mb-2 tracking-wider">ספרו לי על החתונה שלכם</label>
        <textarea
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="חלמנו על חתונה של..."
          rows={4}
          className={cn(
            inputClass('message'),
            'resize-none border border-border-soft bg-transparent p-3 focus:border-button-soft border-b-0'
          )}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full md:w-auto md:self-start bg-button-soft text-white font-sans font-medium text-sm tracking-wider px-10 py-4 hover:bg-[#967d6d] transition-colors duration-300"
      >
        שלחו הודעה
      </button>
    </form>
  )
}
