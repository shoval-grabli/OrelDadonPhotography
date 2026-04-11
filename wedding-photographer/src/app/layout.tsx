import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'אוראל דדון | צלמת חתונות',
    template: '%s | אוראל דדון',
  },
  description: 'צלמת חתונות פרימיום בתל אביב והסביבה. צילום דוקומנטרי, אמנותי ורגיש של הרגעים הכי חשובים בחיים.',
  keywords: ['צלמת חתונות', 'צלם חתונות תל אביב', 'צילום חתונה', 'צלמת פרימיום'],
  openGraph: {
    locale: 'he_IL',
    type: 'website',
    siteName: 'אוראל דדון | צלמת חתונות',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'אוראל דדון צלמת חתונות',
              description: 'צלמת חתונות פרימיום בתל אביב והסביבה',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'תל אביב',
                addressCountry: 'IL',
              },
              priceRange: '₪₪₪',
              telephone: '+972-50-123-4567',
              sameAs: ['https://www.instagram.com/shira.levy.photography'],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
