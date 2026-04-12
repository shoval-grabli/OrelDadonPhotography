import Link from 'next/link'
import { Instagram, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/journal', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-section border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl text-text-primary">OREL DADON PHOTOGRAPHY</span>
            <p className="text-text-secondary font-sans font-light text-sm leading-relaxed">
              צלם חתונות פרימיום בתל אביב והסביבה.
              <br />
              רגעים שנשארים לנצח.
            </p>
            <Link
              href="/contact"
              className="text-sm text-button-soft underline underline-offset-4 hover:text-text-primary transition-colors w-fit"
            >
              לבדיקת זמינות
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-widest uppercase text-text-secondary mb-1">ניווט</span>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-widest uppercase text-text-secondary mb-1">יצירת קשר</span>
            <a
              href="tel:+972501234567"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Phone size={14} />
              050-123-4567
            </a>
            <a
              href="mailto:shira@example.com"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail size={14} />
              shira@example.com
            </a>
            <a
              href="https://www.instagram.com/shira.levy.photography"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-button-soft transition-colors"
            >
              <Instagram size={14} />
              @shira.levy.photography
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-soft flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary font-light">
            © 2025 אוראל דדון. כל הזכויות שמורות.
          </p>
          <p className="text-xs text-text-secondary font-light">
            צלם חתונות | תל אביב והסביבה
          </p>
        </div>
      </div>
    </footer>
  )
}
