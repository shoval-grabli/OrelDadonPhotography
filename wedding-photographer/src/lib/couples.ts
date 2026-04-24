import { CLD_BASE, listFolders, listResourcesByFolder } from '@/lib/cloudinary'
import type { CloudinaryResource } from '@/lib/cloudinary'
import type { GalleryImage } from '@/types'

const CAROUSEL_PREFIX = `${CLD_BASE}/Couples Carousel`

export interface CoupleData {
  folderName: string
  slug: string
  names: string
  year: string
  venue: string
  coverSrc: string
}

function parseFolderName(name: string): { names: string; year: string; venue: string } {
  const yearMatch = name.match(/(\d{4})/)
  if (!yearMatch) return { names: name.trim(), year: '', venue: '' }
  const year = yearMatch[1]
  const yearIdx = name.indexOf(year)
  const names = name.slice(0, yearIdx).replace(/[-\s]+$/, '').trim()
  const venue = name.slice(yearIdx + 4).replace(/^[-\s]+/, '').trim()
  return { names, year, venue }
}

function folderBaseName(fullPath: string): string {
  return fullPath.split('/').pop() ?? fullPath
}

export async function getCouples(): Promise<CoupleData[]> {
  const folderPaths = await listFolders(CAROUSEL_PREFIX)

  const couples = await Promise.all(
    folderPaths.sort().map(async folderPath => {
      const folderName = folderBaseName(folderPath)
      const { names, year, venue } = parseFolderName(folderName)

      const folderResources = await listResourcesByFolder(folderPath)

      const cover =
        folderResources.find((r: CloudinaryResource) =>
          folderBaseName(r.publicId).toLowerCase().startsWith('cover')
        ) ?? folderResources[0]

      return {
        folderName,
        slug: encodeURIComponent(folderName),
        names,
        year,
        venue,
        coverSrc: cover?.url ?? '',
      }
    })
  )

  return couples
}

export async function getCoupleImages(folderName: string): Promise<string[]> {
  const resources = await listResourcesByFolder(`${CAROUSEL_PREFIX}/${folderName}`)
  return resources
    .filter(r => !folderBaseName(r.publicId).toLowerCase().startsWith('cover'))
    .map(r => r.url)
}

export function coupleToGalleryImage(c: CoupleData, index: number): GalleryImage {
  return {
    id: String(index + 1),
    src: c.coverSrc,
    width: 800,
    height: 1200,
    alt: c.names,
    category: 'moments',
    coupleNames: c.names,
    location: c.venue,
    year: parseInt(c.year) || 0,
  }
}
