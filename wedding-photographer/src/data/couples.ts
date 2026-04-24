export interface Couple {
  slug: string
  folderName: string
  names: string
  year: string
  venue: string
  coverExt: string
}

export const couples: Couple[] = [
  {
    slug: 'ilana-yehonatan',
    folderName: 'אילנה ויהונתן-  2025-  קאי',
    names: 'אילנה ויהונתן',
    year: '2025',
    venue: 'קאי',
    coverExt: 'jpg',
  },
  {
    slug: 'bar-nataly',
    folderName: 'בר ונטלי - 2025 - טראסק',
    names: 'בר ונטלי',
    year: '2025',
    venue: 'טראסק',
    coverExt: 'JPG',
  },
  {
    slug: 'victoria-tamir',
    folderName: 'ויקטוריה ותמיר- 2026 - ערוגות הבושם',
    names: 'ויקטוריה ותמיר',
    year: '2026',
    venue: 'ערוגות הבושם',
    coverExt: 'JPG',
  },
  {
    slug: 'lior-shnir',
    folderName: 'ליאור ושניר - 2024 -  קאי',
    names: 'ליאור ושניר',
    year: '2024',
    venue: 'קאי',
    coverExt: 'jpg',
  },
  {
    slug: 'lian-shlomi',
    folderName: 'ליאן ושלומי -2024-  קאי',
    names: 'ליאן ושלומי',
    year: '2024',
    venue: 'קאי',
    coverExt: 'jpg',
  },
  {
    slug: 'nicole-bar',
    folderName: 'ניקול ובר -2025',
    names: 'ניקול ובר',
    year: '2025',
    venue: '',
    coverExt: 'JPG',
  },
  {
    slug: 'nely-nisan',
    folderName: 'נלי וניסן - 2024 - קאלה',
    names: 'נלי וניסן',
    year: '2024',
    venue: 'קאלה',
    coverExt: 'jpg',
  },
  {
    slug: 'shiraz-moshe',
    folderName: 'שירז ומשה - 2025 -ערוגות הבושם',
    names: 'שירז ומשה',
    year: '2025',
    venue: 'ערוגות הבושם',
    coverExt: 'jpg',
  },
  {
    slug: 'sheli-shon',
    folderName: 'שלי ושון -2025 - ויה',
    names: 'שלי ושון',
    year: '2025',
    venue: 'ויה',
    coverExt: 'jpg',
  },
]

export function coupleToGalleryImage(c: Couple, index: number) {
  return {
    id: String(index + 1),
    src: `/Couples Carousel/${c.folderName}/cover.${c.coverExt}`,
    width: 800,
    height: 1200,
    alt: c.names,
    category: 'moments' as const,
    coupleNames: c.names,
    location: c.venue,
    year: parseInt(c.year),
  }
}
