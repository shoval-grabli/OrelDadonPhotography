import { v2 as cloudinary } from 'cloudinary'
import { unstable_cache } from 'next/cache'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const CLD_BASE = 'wedding-photographer/public'

export function cldImage(publicId: string): string {
  const encoded = publicId
    .split('/')
    .map(seg => encodeURIComponent(seg))
    .join('/')
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${encoded}`
}

export function cldVideo(publicId: string): string {
  const encoded = publicId
    .split('/')
    .map(seg => encodeURIComponent(seg))
    .join('/')
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${encoded}`
}

function cldErrMsg(e: unknown): string {
  return (e as { error?: { message?: string } })?.error?.message
    ?? (e as { message?: string })?.message
    ?? JSON.stringify(e)
}

// ── Raw Cloudinary calls (not exported — go through cached wrappers below) ──

async function _listFolders(parent: string): Promise<string[]> {
  try {
    const res = await cloudinary.api.sub_folders(parent)
    return (res.folders as { name: string; path: string }[]).map(f => f.path)
  } catch (e: unknown) {
    console.error('[cloudinary] listFolders error for', parent, '→', cldErrMsg(e))
    return []
  }
}

export interface CloudinaryResource {
  publicId: string
  url: string
}

async function _listResourcesByFolder(folder: string): Promise<CloudinaryResource[]> {
  try {
    const res = await cloudinary.search
      .expression(`asset_folder="${folder}"`)
      .max_results(500)
      .execute()

    return (res.resources as { public_id: string; format: string }[])
      .map(r => ({
        publicId: r.public_id,
        url: cldImage(`${r.public_id}.${r.format.toLowerCase()}`),
      }))
  } catch (e: unknown) {
    console.error('[cloudinary] search error for', folder, '→', cldErrMsg(e))
    return []
  }
}

// ── Cached wrappers — 1 hour TTL, survives hot-reload in dev ──────────────

export const listFolders = unstable_cache(
  _listFolders,
  ['cld-folders'],
  { revalidate: 86400 } // 24h — wedding content rarely changes
)

export const listResourcesByFolder = unstable_cache(
  _listResourcesByFolder,
  ['cld-resources'],
  { revalidate: 86400 }
)

export async function listImages(folder: string): Promise<string[]> {
  const resources = await listResourcesByFolder(folder)
  return resources.map(r => r.url)
}
