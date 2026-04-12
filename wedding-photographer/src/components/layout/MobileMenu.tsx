'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Instagram } from 'lucide-react'
import Button from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/journal', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-text-primary/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer from right (RTL) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-bg-main z-50 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border-soft">
          <span className="font-display text-lg text-text-primary">OREL DADON PHOTOGRAPHY</span>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6 flex-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-sans text-text-primary text-base py-3 px-2 border-b border-border-soft/50 hover:text-button-soft transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 flex flex-col gap-4">
          <Button href="/contact" variant="primary" className="w-full justify-center">
            בדיקת זמינות
          </Button>
          <a
            href="https://www.instagram.com/orel.dadon.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-button-soft transition-colors text-sm"
          >
            <Instagram size={16} />
            @shira.levy.photography
          </a>
        </div>
      </div>
    </>
  )
}
