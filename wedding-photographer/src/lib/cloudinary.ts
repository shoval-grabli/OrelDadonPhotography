import { v2 as cloudinary } from 'cloudinary'

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

export async function listFolders(parent: string): Promise<string[]> {
  try {
    const res = await cloudinary.api.sub_folders(parent)
    const paths = (res.folders as { name: string; path: string }[]).map(f => f.path)
    return paths
  } catch (e) {
    console.error('[cloudinary] listFolders error for', parent, e)
    return []
  }
}

export interface CloudinaryResource {
  publicId: string
  url: string
}

// Dynamic Folder mode: search by asset_folder
export async function listResourcesByFolder(folder: string): Promise<CloudinaryResource[]> {
  try {
    const res = await cloudinary.search
      .expression(`asset_folder="${folder}"`)
      .max_results(500)
      .execute()

    const resources = (res.resources as { public_id: string; format: string }[])
      .map(r => ({
        publicId: r.public_id,
        url: cldImage(`${r.public_id}.${r.format.toLowerCase()}`),
      }))

    return resources
  } catch (e) {
    console.error('[cloudinary] search error for', folder, e)
    return []
  }
}

export async function listImages(folder: string): Promise<string[]> {
  const resources = await listResourcesByFolder(folder)
  return resources.map(r => r.url)
}

export async function getVideoUrl(folder: string): Promise<string> {
  try {
    const res = await cloudinary.search
      .expression(`asset_folder="${folder}" AND resource_type:video`)
      .max_results(1)
      .execute()

    const item = (res.resources as { public_id: string; format: string }[])[0]
    if (!item) return ''
    return cldVideo(`${item.public_id}.${item.format.toLowerCase()}`)
  } catch (e) {
    console.error('[cloudinary] getVideoUrl error for', folder, e)
    return ''
  }
}
