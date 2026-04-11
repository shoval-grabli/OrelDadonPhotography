export interface GalleryImage {
  id: string
  src: string
  width: number
  height: number
  alt: string
  category: 'all' | 'ceremony' | 'moments' | 'portraits' | 'reception' | 'details'
  coupleNames: string
  location: string
  year: number
}

export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: 'חתונות אמיתיות' | 'טיפים' | 'השראה' | 'מאחורי הקלעים'
  date: string
  readTime: number
  coupleNames?: string
  location?: string
  tags: string[]
}

export interface Testimonial {
  id: string
  quote: string
  names: string
  year: number
  location?: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface BrandValue {
  icon: string
  title: string
  description: string
}
